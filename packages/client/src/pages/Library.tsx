import * as React from 'react'
import { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
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

  return <div>Library</div>
}

export default Library
