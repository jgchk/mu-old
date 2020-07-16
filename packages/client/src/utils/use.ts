import { isFunction } from 'lodash'

const use = <T>(t: T | (() => T)): T => (isFunction(t) ? t() : t)

export default use
