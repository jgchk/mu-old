import { combineReducers, createReducer } from '@reduxjs/toolkit'
import {
  requestLibrary,
  receiveLibrary,
  failureLibrary,
  invalidateLibrary,
} from './actions'

interface Identifiable {
  id: number
}

const ids = (elements: Identifiable[]) => elements.map((element) => element.id)

const emptyTable = {}
type Table<T extends Identifiable> = { [id: number]: T }

interface Artist extends Identifiable {
  name: string
  releases: number[]
  tracks: number[]
}

interface Release extends Identifiable {
  title: string
  tracks: number[]
  artists: number[]
  remoteCovers: RemoteCover[]
  localCovers: LocalCover[]
}

type RemoteCover = string

type LocalCover = string

interface Track extends Identifiable {
  release: number
  artists: number[]
  num: number
  title: string
  remoteSources: RemoteSource[]
  localSources: LocalSource[]
}

interface RemoteSource {
  platform: string
  url: string
  protocol: string
}

type LocalSource = string

const isFetchingReducer = createReducer(false, (builder) =>
  builder
    .addCase(requestLibrary, () => true)
    .addCase(receiveLibrary, () => false)
    .addCase(failureLibrary, () => false)
)

const lastUpdatedReducer = createReducer<Date>(new Date(), (builder) =>
  builder.addCase(receiveLibrary, () => new Date())
)

const didInvalidateReducer = createReducer(true, (builder) =>
  builder
    .addCase(invalidateLibrary, () => true)
    .addCase(requestLibrary, () => false)
    .addCase(receiveLibrary, () => false)
)

const artistsReducer = createReducer<Table<Artist>>(emptyTable, (builder) =>
  builder.addCase(receiveLibrary, (state, action) => {
    const record: Table<Artist> = {}

    action.payload.artists
      .map((artist) => ({
        id: artist.id,
        name: artist.name,
        releases: ids(artist.releases),
        tracks: ids(artist.tracks),
      }))
      .forEach((artist) => (record[artist.id] = artist))

    return record
  })
)

const releasesReducer = createReducer<Table<Release>>(emptyTable, (builder) =>
  builder.addCase(receiveLibrary, (state, action) => {
    const record: Table<Release> = {}

    action.payload.releases
      .map((release) => ({
        id: release.id,
        title: release.title,
        tracks: ids(release.tracks),
        artists: ids(release.artists),
        remoteCovers: release.remoteCovers.map((cover) => cover.url),
        localCovers: release.localCovers.map((cover) => cover.path),
      }))
      .forEach((release) => (record[release.id] = release))

    return record
  })
)

const tracksReducer = createReducer<Table<Track>>(emptyTable, (builder) =>
  builder.addCase(receiveLibrary, (state, action) => {
    const record: Table<Track> = {}

    action.payload.tracks
      .map((track) => ({
        id: track.id,
        release: track.release.id,
        artists: ids(track.artists),
        num: track.num,
        title: track.title,
        remoteSources: track.remoteSources,
        localSources: track.localSources.map((source) => source.path),
      }))
      .forEach((track) => (record[track.id] = track))

    return record
  })
)

const reducer = combineReducers({
  isFetching: isFetchingReducer,
  lastUpdated: lastUpdatedReducer,
  didInvalidate: didInvalidateReducer,
  artists: artistsReducer,
  releases: releasesReducer,
  tracks: tracksReducer,
})

export default reducer
