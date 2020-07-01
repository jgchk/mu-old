import { SearchResult } from '@mu/api'
import { createReducer } from '@reduxjs/toolkit'
import { requestSearch, receiveSearch, failedSearch } from './actions'

interface SearchState {
  isFetching: boolean
  lastUpdated: number
  results: SearchResult[]
}

const initialState: SearchState = {
  isFetching: false,
  lastUpdated: 0,
  results: [],
}

const reducer = createReducer(initialState, (builder) =>
  builder
    .addCase(requestSearch, (state) => {
      state.isFetching = true
    })
    .addCase(receiveSearch, (state, action) => {
      state.isFetching = false
      state.results = action.payload
    })
    .addCase(failedSearch, (state) => {
      state.isFetching = false
    })
)

export default reducer
