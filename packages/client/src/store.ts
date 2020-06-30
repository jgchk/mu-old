import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import rootReducer from './modules'

const store = configureStore({
  reducer: rootReducer,
})

export default store

export type AppDispatch = typeof store.dispatch
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useAppDispatch = () => useDispatch<AppDispatch>()
