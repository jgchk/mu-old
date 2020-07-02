import { combineReducers } from '@reduxjs/toolkit'
import libraryReducer from './library'
import releaseReducer from './release'
import searchReducer from './search'

const rootReducer = combineReducers({
  library: libraryReducer,
  search: searchReducer,
  release: releaseReducer,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
