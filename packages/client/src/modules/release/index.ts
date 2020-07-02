import * as releaseActions from './actions'
import reducer from './reducers'
import * as releaseTypes from './types'

export { releaseActions, releaseTypes }

export type ReleaseState = ReturnType<typeof reducer>

export default reducer
