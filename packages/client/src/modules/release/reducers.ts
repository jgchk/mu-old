import { Release } from '@mu/api'
import { createReducer } from '@reduxjs/toolkit'
import { failedSearch } from '../search/actions'
import { requestRelease, receiveRelease } from './actions'

interface State {
  isFetching: boolean
  release?: Release
}

const initialState: State = {
  isFetching: false,
  release: undefined,
}

const reducer = createReducer(initialState, (builder) =>
  builder
    .addCase(requestRelease, (state) => {
      state.isFetching = true
    })
    .addCase(receiveRelease, (state, action) => {
      state.isFetching = false
      state.release = action.payload
    })
    .addCase(failedSearch, (state) => {
      state.isFetching = false
    })
)

export default reducer
