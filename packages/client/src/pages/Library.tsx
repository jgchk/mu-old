import * as React from 'react'
import { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Switch, useRouteMatch, Route, Redirect } from 'react-router-dom'
import Artists from '../components/Artists'
import ListGridSelector from '../components/ListGridSelector'
import Releases from '../components/Releases'
import Tracks from '../components/Tracks'
import NavLink from '../kit/NavLink'
import TabBar from '../kit/TabBar'
import { RootState } from '../modules'
import { fetchLibrary } from '../modules/library/actions'

export type LibraryRoute = 'artists' | 'releases' | 'tracks'

const Library: FC = () => {
  const didInvalidate = useSelector(
    (state: RootState) => state.library.didInvalidate
  )

  const dispatch = useDispatch()
  useEffect(() => {
    if (didInvalidate) dispatch(fetchLibrary())
  }, [dispatch, didInvalidate])

  const { path, url } = useRouteMatch()
  const makeUrl = (endpoint: string) => `${url}/${endpoint}`
  const makePath = (endpoint: string) => `${path}/${endpoint}`

  return (
    <div>
      <TabBar>
        <NavLink to={makeUrl('artists')} label='artists' fontSize={2} />
        <NavLink to={makeUrl('releases')} label='releases' fontSize={2} />
        <NavLink to={makeUrl('tracks')} label='tracks' fontSize={2} />

        <div css={{ marginLeft: 'auto' }}>
          <ListGridSelector />
        </div>
      </TabBar>
      <Switch>
        <Route exact path={path}>
          <Redirect to={makePath('artists')} />
        </Route>
        <Route path={makePath('artists')} component={Artists} />
        <Route path={makePath('releases')} component={Releases} />
        <Route path={makePath('tracks')} component={Tracks} />
      </Switch>
    </div>
  )
}

export default Library
