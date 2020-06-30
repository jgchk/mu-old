import * as React from 'react'
import { FC } from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Library from './pages/Library'
import SearchResults from './pages/SearchResults'
import Upload from './pages/Upload'
import store from './store'

const App: FC = () => (
  <Provider store={store}>
    <Router>
      <Navigation />
      <Switch>
        <Route path='/search' component={SearchResults} />
        <Route path='/upload' component={Upload} />
        <Route path='/library' component={Library} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  </Provider>
)

export default App
