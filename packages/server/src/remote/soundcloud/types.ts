export interface Track {
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
  kind: 'track'
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

export interface Playlist {
  duration: number
  permalink_url: string
  reposts_count: number
  genre: null
  permalink: string
  purchase_url: null
  description: null
  uri: string
  label_name: null
  tag_list: string
  set_type: string
  public: boolean
  track_count: number
  user_id: number
  last_modified: Date
  license: string
  tracks: PlaylistTrack[]
  id: number
  release_date: null
  display_date: Date
  sharing: string
  secret_token: null
  created_at: Date
  likes_count: number
  kind: 'playlist'
  title: string
  purchase_title: null
  managed_by_feeds: boolean
  artwork_url: null
  is_album: boolean
  user: User
  published_at: Date
  embeddable_by: string
}

export interface PlaylistTrack {
  comment_count?: number
  full_duration?: number
  downloadable?: boolean
  created_at?: Date
  description?: null | string
  media?: Media
  title?: string
  publisher_metadata?: PublisherMetadata
  duration?: number
  has_downloads_left?: boolean
  artwork_url?: string
  public?: boolean
  streamable?: boolean
  tag_list?: string
  genre?: string
  id: number
  reposts_count?: number
  state?: string
  label_name?: null
  last_modified?: Date
  commentable?: boolean
  visuals?: null
  kind: 'track'
  purchase_url?: null
  sharing?: string
  uri?: string
  secret_token?: null
  download_count?: number
  likes_count?: number
  urn?: string
  license?: string
  purchase_title?: null
  display_date?: Date
  embeddable_by?: string
  release_date?: null
  user_id?: number
  waveform_url?: string
  permalink?: string
  permalink_url?: string
  user?: User
  playback_count?: number
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
  explicit: boolean
  contains_music: boolean
  artist: string
  writer_composer: string
  publisher: string
  isrc: string
  id: number
}

export interface User {
  avatar_url: string
  city: string
  comments_count: number
  country_code: string
  created_at: Date
  creator_subscriptions: CreatorSubscription[]
  creator_subscription: CreatorSubscription
  description: string
  followers_count: number
  followings_count: number
  first_name: string
  full_name: string
  groups_count: number
  id: number
  kind: string
  last_modified: Date
  last_name: string
  likes_count: number
  playlist_likes_count: number
  permalink: string
  permalink_url: string
  playlist_count: number
  reposts_count: null
  track_count: number
  uri: string
  urn: string
  username: string
  verified: boolean
  visuals: null
}

export interface CreatorSubscription {
  product: Product
}

export interface Product {
  id: string
}
