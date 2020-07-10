import { Global } from '@emotion/core'
import * as React from 'react'
import { FC } from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import store, { persistor } from './store'

const App: FC = () => (
  <>
    <Global
      styles={{
        '*': { boxSizing: 'border-box' },
        html: { height: '100%' },
        body: { height: '100%', margin: 0 },
        '#app': { height: '100%' },
      }}
    />
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <div css={{ display: 'flex', flexDirection: 'column' }}>
            <Navigation />
            <div css={{ flex: 1, overflowY: 'auto' }}>
              <Switch>
                {/* <Route path='/release' component={Release} />
                <Route path='/search' component={SearchResults} />
                <Route path='/upload' component={Upload} />
                <Route path='/library' component={Library} /> */}
                <Route path='/' component={Home} />
              </Switch>
            </div>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  </>
)

export default App
