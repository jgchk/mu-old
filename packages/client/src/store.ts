import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './modules'

const persistedReducer = persistReducer({ key: 'root', storage }, rootReducer)
const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store)
export default store

export type AppDispatch = typeof store.dispatch
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useAppDispatch = () => useDispatch<AppDispatch>()
