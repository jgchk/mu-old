export interface SearchResult {
  title: string
  artist: string
  coverUrl?: string
  source: string
  id: string
  kind: 'track' | 'album'
}

export interface SearchState {
  isFetching: boolean
  lastUpdated: number
  results: SearchResult[]
}
