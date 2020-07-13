import * as React from 'react'
import { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Tabs from '../kit/Tabs'
import { RootState } from '../modules'
import { fetchLibrary } from '../modules/library/actions'

const Library: FC = () => {
  const didInvalidate = useSelector(
    (state: RootState) => state.library.didInvalidate
  )

  const dispatch = useDispatch()
  useEffect(() => {
    if (didInvalidate) dispatch(fetchLibrary())
  }, [dispatch, didInvalidate])

  return (
    <Tabs defaultLabel='artists'>
      <Tabs.Tab label='artists'>Artists</Tabs.Tab>
      <Tabs.Tab label='releases'>Releases</Tabs.Tab>
      <Tabs.Tab label='tracks'>Tracks</Tabs.Tab>

      <Tabs.Panel label='artists'>Artists</Tabs.Panel>
      <Tabs.Panel label='releases'>Releases</Tabs.Panel>
      <Tabs.Panel label='tracks'>Tracks</Tabs.Panel>
    </Tabs>
  )
}

export default Library
