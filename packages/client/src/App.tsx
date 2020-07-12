import * as React from 'react'
import { FC } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Router from './components/Router'
import { ThemeWrapper } from './kit/ThemeWrapper'
import store, { persistor } from './store'

const App: FC = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ThemeWrapper>
        <Router />
      </ThemeWrapper>
    </PersistGate>
  </Provider>
)

export default App
