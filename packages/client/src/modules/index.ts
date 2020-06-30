import { combineReducers } from '@reduxjs/toolkit'
import libraryReducer from './library'
import searchReducer from './search'

const rootReducer = combineReducers({
  library: libraryReducer,
  search: searchReducer,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
