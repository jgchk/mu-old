import * as React from 'react'
import { FC } from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Library from './pages/Library'
import Release from './pages/Release'
import SearchResults from './pages/SearchResults'
import Upload from './pages/Upload'
import store, { persistor } from './store'
import GlobalStyle from './styles/global-styles'

const App: FC = () => (
  <>
    <GlobalStyle />
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <div
            style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
          >
            <Navigation />
            <div style={{ flex: 1, overflowY: 'auto' }}>
              <Switch>
                <Route path='/release' component={Release} />
                <Route path='/search' component={SearchResults} />
                <Route path='/upload' component={Upload} />
                <Route path='/library' component={Library} />
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
