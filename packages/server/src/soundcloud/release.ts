import { Release } from '@mu/api'
import got from 'got'
import getClientId from '../remote/soundcloud/client-id'

const baseUrl = 'https://api-v2.soundcloud.com'

export async function release(id: string): Promise<Release> {
  const clientId = await getClientId()
  const release = await got(`${baseUrl}/${id}`, {
    searchParams: { client_id: clientId },
  }).json<ReleaseResult>()
  return {
    title: release.title,
    artist: release.user.username,
    coverUrl: release.artwork_url?.replace('large', 't500x500') ?? undefined,
    source: 'soundcloud',
    id: `${release.kind}s/${release.id}`,
    tracks: [
      {
        title: release.title,
        artist: release.user.username,
        id: `${release.kind}s/${release.id}`,
      },
    ],
  }
}

export interface ReleaseResult {
  comment_count: number
  full_duration: number
  downloadable: boolean
  created_at: Date
  description: string
  media: Media
  title: string
  publisher_metadata: PublisherMetadata
  duration: number
  has_downloads_left: boolean
  artwork_url: string
  public: boolean
  streamable: boolean
  tag_list: string
  genre: string
  id: number
  reposts_count: number
  state: string
  label_name: null
  last_modified: Date
  commentable: boolean
  policy: string
  visuals: null
  kind: string
  purchase_url: null
  sharing: string
  uri: string
  secret_token: null
  download_count: number
  likes_count: number
  urn: string
  license: string
  purchase_title: null
  display_date: Date
  embeddable_by: string
  release_date: null
  user_id: number
  monetization_model: string
  waveform_url: string
  permalink: string
  permalink_url: string
  user: User
  playback_count: number
}

export interface Media {
  transcodings: Transcoding[]
}

export interface Transcoding {
  url: string
  preset: string
  duration: number
  snipped: boolean
  format: Format
  quality: string
}

export interface Format {
  protocol: string
  mime_type: string
}

export interface PublisherMetadata {
  urn: string
  contains_music: boolean
  id: number
}

export interface User {
  avatar_url: string
  first_name: string
  full_name: string
  id: number
  kind: string
  last_modified: Date
  last_name: string
  permalink: string
  permalink_url: string
  uri: string
  urn: string
  username: string
  verified: boolean
  city: null
  country_code: null
}
