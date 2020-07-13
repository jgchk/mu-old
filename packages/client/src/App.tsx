import { ApolloProvider } from '@apollo/react-hooks'
import * as React from 'react'
import { FC } from 'react'
import { Provider } from 'react-redux'
import apollo from './apollo'
import Router from './components/Router'
import { ThemeWrapper } from './kit/ThemeWrapper'
import store from './store'

const App: FC = () => (
  <ApolloProvider client={apollo}>
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
      <ThemeWrapper>
        <Router />
      </ThemeWrapper>
      {/* </PersistGate> */}
    </Provider>
  </ApolloProvider>
)

export default App
