import * as React from 'react'
import { FC } from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Library from './pages/Library'
import Upload from './pages/Upload'
import store from './store'

const App: FC = () => (
  <Provider store={store}>
    <Router>
      <Navigation />
      <Switch>
        <Route path='/upload'>
          <Upload />
        </Route>
        <Route path='/library'>
          <Library />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  </Provider>
)

export default App
