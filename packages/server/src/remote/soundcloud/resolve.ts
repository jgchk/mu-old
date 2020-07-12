import got from 'got/dist/source'
import getClientId from './client-id'
import { Track, Playlist } from './types'

interface SoundcloudRelease {
  title: string
  artist: string
  tracks: SoundcloudTrack[]
  cover: string
}

interface SoundcloudTrack {
  title: string
  artist: string
  sources: SoundcloudTrackSource[]
}

interface SoundcloudTrackSource {
  url: string
  protocol: string
}

const getTrack = (track: Track): SoundcloudTrack => ({
  title: track.title,
  artist: track.user.username,
  sources: getSources(track),
})

const getSources = (track: Track): SoundcloudTrackSource[] =>
  track.media.transcodings.map((transcoding) => ({
    url: transcoding.url,
    protocol: transcoding.format.protocol,
  }))

export default async function resolve(url: string): Promise<SoundcloudRelease> {
  const clientId = await getClientId()

  const result = await got('https://api-v2.soundcloud.com/resolve', {
    searchParams: { url, client_id: clientId },
  }).json<Track | Playlist>()

  const partialRelease = {
    title: result.title,
    artist: result.user.username,
    cover: result.artwork_url,
  }

  switch (result.kind) {
    case 'track':
      return {
        ...partialRelease,
        tracks: [getTrack(result)],
      }
    case 'playlist': {
      const trackIds = result.tracks.map((track) => track.id)

      const trackResults = await got('https://api-v2.soundcloud.com/tracks', {
        searchParams: { ids: trackIds.join(','), client_id: clientId },
      }).json<Track[]>()

      return {
        ...partialRelease,
        tracks: trackResults.map((trackResult) => getTrack(trackResult)),
      }
    }
  }
}
