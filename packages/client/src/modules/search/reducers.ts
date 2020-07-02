import { SearchResult } from '@mu/api'
import { createReducer } from '@reduxjs/toolkit'
import { requestSearch, receiveSearch, failedSearch } from './actions'

interface State {
  isFetching: boolean
  results: SearchResult[]
}

const initialState: State = {
  isFetching: false,
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