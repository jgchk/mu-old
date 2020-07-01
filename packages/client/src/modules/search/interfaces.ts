import { SearchResult } from '@mu/api'

export interface SearchState {
  isFetching: boolean
  lastUpdated: number
  results: SearchResult[]
}
