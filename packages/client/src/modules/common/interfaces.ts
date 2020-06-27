export type Id = string

export type Identifiable = {
  readonly id: Id
}

export type NoId<T extends Identifiable> = Omit<T, 'id'>

export type Table<T extends Identifiable> = {
  readonly byId: Record<Id, T>
  readonly allIds: readonly Id[]
}

export type Action<T, P> = {
  readonly type: T
  readonly payload: P
}

export const initialTable = <T extends Identifiable>(): Table<T> => ({
  byId: {},
  allIds: [],
})
