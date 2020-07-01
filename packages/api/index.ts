export interface SearchResult {
  title: string
  artist: string
  coverUrl?: string
  source: string
  id: string
  kind: 'track' | 'album'
}
