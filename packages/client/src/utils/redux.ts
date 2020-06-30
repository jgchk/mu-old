// eslint-disable-next-line unicorn/consistent-function-scoping, @typescript-eslint/explicit-module-boundary-types
export const withPayloadType = <T>() => (t: T) => ({ payload: t })
