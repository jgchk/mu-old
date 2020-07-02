import { Record, String, Static } from 'runtypes'

export const SearchRequest = Record({
  query: String,
})

export type SearchRequest = Static<typeof SearchRequest>

export type SearchResponse = SearchResult[]

export interface SearchResult {
  title: string
  artist: string
  coverUrl?: string
  source: string
  id: string
  numTracks: number
}
