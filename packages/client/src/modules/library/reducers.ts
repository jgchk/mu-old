import { combineReducers } from '@reduxjs/toolkit'
import { initialTable, Table } from '../common/interfaces'
import { LibraryActionTypes } from './actions'
import { Artist, Album, Track } from './interfaces'

const artistsReducer = (
  state = initialTable<Artist>(),
  action: LibraryActionTypes
): Table<Artist> => {
  switch (action.type) {
    default:
      return state
  }
}

const albumsReducer = (
  state = initialTable<Album>(),
  action: LibraryActionTypes
): Table<Album> => {
  switch (action.type) {
    default:
      return state
  }
}

const tracksReducer = (
  state = initialTable<Track>(),
  action: LibraryActionTypes
): Table<Track> => {
  switch (action.type) {
    default:
      return state
  }
}

const reducer = combineReducers({
  artists: artistsReducer,
  albums: albumsReducer,
  tracks: tracksReducer,
})

export default reducer
