import { Record, String, Static } from 'runtypes'

export const ReleaseRequest = Record({
  source: String,
  id: String,
})

export type ReleaseRequest = Static<typeof ReleaseRequest>

export type ReleaseResponse = Release

export interface Release {
  title: string
  artist: string
  coverUrl?: string
  source: string
  id: string
  tracks: ReleaseTrack[]
}

export interface ReleaseTrack {
  title: string
  artist: string
  id: string
}
