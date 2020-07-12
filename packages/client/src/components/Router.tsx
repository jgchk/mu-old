import * as React from 'react'
import { FC } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Library from '../pages/Library'
import Search from '../pages/Search'
import Navigation from './Navigation'

const Router: FC = () => (
  <HashRouter>
    <div css={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
      <Navigation />
      <div css={{ flex: 1 }}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/search' component={Search} />
          <Route path='/library' component={Library} />
        </Switch>
      </div>
    </div>
  </HashRouter>
)

export default Router
