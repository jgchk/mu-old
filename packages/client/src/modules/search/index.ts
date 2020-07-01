import * as searchActions from './actions'
import reducer from './reducers'
import * as searchTypes from './types'

export { searchActions, searchTypes }

export type SearchState = ReturnType<typeof reducer>

export default reducer
