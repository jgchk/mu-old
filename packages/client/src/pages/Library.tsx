import * as React from 'react'
import { FC, useEffect, ReactNode } from 'react'
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

const LibraryPage: FC<{
  page: ReactNode
  makeUrl: (endpoint: string) => string
}> = ({ page, makeUrl }) => {
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
      {page}
    </div>
  )
}

const Library: FC = () => {
  const didInvalidate = useSelector(
    (state: RootState) => state.library.didInvalidate
  )

  const dispatch = useDispatch()
  useEffect(() => {
    if (didInvalidate) dispatch(fetchLibrary())
  }, [dispatch, didInvalidate])

  const { path, url } = useRouteMatch()
  const makePath = (endpoint: string) => `${path}/${endpoint}`
  const makeUrl = (endpoint: string) => `${url}/${endpoint}`

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <Redirect to={makePath('artists')} />
        </Route>
        <Route path={makePath('artists')}>
          <LibraryPage page={<Artists />} makeUrl={makeUrl} />
        </Route>
        <Route path={makePath('releases')}>
          <LibraryPage page={<Releases />} makeUrl={makeUrl} />
        </Route>
        <Route path={makePath('tracks')}>
          <LibraryPage page={<Tracks />} makeUrl={makeUrl} />
        </Route>
      </Switch>
    </div>
  )
}

export default Library
