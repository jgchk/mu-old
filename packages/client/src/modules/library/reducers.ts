import { combineReducers, createReducer } from '@reduxjs/toolkit'
import { LibraryRoute } from '../../pages/Library'
import {
  requestLibrary,
  receiveLibrary,
  failureLibrary,
  invalidateLibrary,
  setViewType,
} from './actions'

interface Identifiable {
  id: string
}

const ids = (elements: Identifiable[]) => elements.map((element) => element.id)

const emptyTable = {}
type Table<T extends Identifiable> = { [id: string]: T }

interface Artist extends Identifiable {
  name: string
  releases: string[]
  tracks: string[]
}

interface Release extends Identifiable {
  title: string
  tracks: string[]
  artists: string[]
  remoteCovers: RemoteCover[]
  localCovers: LocalCover[]
}

type RemoteCover = string

type LocalCover = string

interface Track extends Identifiable {
  release: string
  artists: string[]
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

const lastUpdatedReducer = createReducer<number>(Date.now(), (builder) =>
  builder.addCase(receiveLibrary, () => Date.now())
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

export type ViewType = 'list' | 'grid'

const viewTypesReducer = createReducer<Record<LibraryRoute, ViewType>>(
  {
    artists: 'grid',
    releases: 'grid',
    tracks: 'list',
  },
  (builder) =>
    builder.addCase(setViewType, (state, { payload: { route, viewType } }) => {
      state[route] = viewType
    })
)

const reducer = combineReducers({
  isFetching: isFetchingReducer,
  lastUpdated: lastUpdatedReducer,
  didInvalidate: didInvalidateReducer,
  artists: artistsReducer,
  releases: releasesReducer,
  tracks: tracksReducer,
  viewTypes: viewTypesReducer,
})

export default reducer
