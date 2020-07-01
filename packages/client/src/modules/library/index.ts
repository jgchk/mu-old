import * as libraryActions from './actions'
import reducer from './reducers'
import * as libraryTypes from './types'

export { libraryActions, libraryTypes }

export type LibraryState = ReturnType<typeof reducer>

export default reducer
