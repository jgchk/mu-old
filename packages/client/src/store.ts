import { combineReducers, configureStore } from '@reduxjs/toolkit'
import libraryReducer from './modules/library'

const rootReducer = combineReducers({
  library: libraryReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
