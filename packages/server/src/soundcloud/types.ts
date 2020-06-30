/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Format {
  protocol: string
  mime_type: string
}

export interface Transcoding {
  url: string
  preset: string
  duration: number
  snipped: boolean
  format: Format
  quality: string
}

export interface Media {
  transcodings: Transcoding[]
}

export interface PublisherMetadata {
  urn: string
  p_line_for_display: string
  artist: string
  writer_composer: string
  iswc: string
  publisher: string
  isrc: string
  id: number
  album_title: string
  upc_or_ean: string
  p_line: string
  release_title: string
  c_line: string
  explicit?: boolean
  c_line_for_display: string
  contains_music?: boolean
}

export interface User {
  avatar_url: string
  first_name: string
  full_name: string
  id: number
  kind: 'user'
  last_modified: Date
  last_name: string
  permalink: string
  permalink_url: string
  uri: string
  urn: string
  username: string
  verified: boolean
  city: string
  country_code: string
}

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
  label_name: string
  last_modified: Date
  commentable: boolean
  policy: string
  visuals?: any
  kind: 'track'
  purchase_url: string
  sharing: string
  uri: string
  secret_token?: any
  download_count: number
  likes_count: number
  urn: string
  license: string
  purchase_title: string
  display_date: Date
  embeddable_by: string
  release_date?: Date
  user_id: number
  monetization_model: string
  waveform_url: string
  permalink: string
  permalink_url: string
  user: User
  playback_count: number
}

export interface Product {
  id: string
}

export interface CreatorSubscription {
  product: Product
}

export interface PlaylistItem extends CollectionItem {
  kind: 'playlist'
}

export interface UserItem extends CollectionItem {
  kind: 'user'
}

export interface TrackItem extends CollectionItem {
  kind: 'track'
}

export interface CollectionItem {
  duration: number
  permalink_url: string
  reposts_count: number
  genre: string
  permalink: string
  purchase_url: string
  description: string
  uri: string
  label_name: string
  tag_list: string
  set_type: string
  public: boolean
  track_count: number
  user_id: number
  last_modified: Date
  license: string
  tracks: Track[]
  id: number
  release_date?: any
  display_date: Date
  sharing: string
  secret_token?: any
  created_at: Date
  likes_count: number
  kind: string
  title: string
  purchase_title?: any
  managed_by_feeds: boolean
  artwork_url: string | null
  is_album: boolean
  user: User
  published_at?: Date
  embeddable_by: string
  comment_count?: number
  full_duration?: number
  downloadable?: boolean
  media: Media
  publisher_metadata?: any
  has_downloads_left?: boolean
  streamable?: boolean
  state: string
  commentable?: boolean
  policy: string
  visuals?: any
  download_count?: number
  urn: string
  monetization_model: string
  waveform_url: string
  playback_count?: number
}

export interface SearchPager {
  collection: CollectionItem[]
  total_results: number
  next_href: string
  query_urn: string
}
/* eslint-enable @typescript-eslint/no-explicit-any */
