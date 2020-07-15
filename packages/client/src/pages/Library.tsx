import * as React from 'react'
import { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Releases from '../components/Releases'
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
      <Tabs.Bar>
        <Tabs.Tab label='artists'>artists</Tabs.Tab>
        <Tabs.Tab label='releases'>releases</Tabs.Tab>
        <Tabs.Tab label='tracks'>tracks</Tabs.Tab>
      </Tabs.Bar>

      <Tabs.Content>
        <Tabs.Panel label='artists'>artists</Tabs.Panel>
        <Tabs.Panel label='releases'>
          <Releases />
        </Tabs.Panel>
        <Tabs.Panel label='tracks'>tracks</Tabs.Panel>
      </Tabs.Content>
    </Tabs>
  )
}

export default Library
