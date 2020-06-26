import * as React from 'react'
import { FC } from 'react'
import { Provider } from 'react-redux'
import store from './store'

const App: FC = () => (
  <Provider store={store}>
    <div>Hello, world!</div>
  </Provider>
)

export default App
