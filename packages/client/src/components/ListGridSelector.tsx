import * as React from 'react'
import { FC } from 'react'
import { FiList, FiGrid } from 'react-icons/fi'
import { useSelector, useDispatch } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import Button from '../kit/Button'
import { RootState } from '../modules'
import { setViewType } from '../modules/library/actions'
import { ViewType } from '../modules/library/reducers'
import { LibraryRoute } from '../pages/Library'

const ListGridSelector: FC = () => {
  const match = useRouteMatch<{ route: LibraryRoute }>('/library/:route')
  if (!match)
    throw new Error('component must be used inside the Library component')
  const {
    params: { route },
  } = match

  const viewType = useSelector(
    (state: RootState) => state.library.viewTypes[route]
  )

  const dispatch = useDispatch()
  const onClick = (viewType: ViewType) =>
    dispatch(setViewType({ route, viewType }))

  return (
    <div>
      <Button
        shade={viewType === 'list' ? 9 : 7}
        onClick={() => onClick('list')}
      >
        <FiList display='block' />
      </Button>
      <Button
        shade={viewType === 'grid' ? 9 : 7}
        onClick={() => onClick('grid')}
      >
        <FiGrid display='block' />
      </Button>
    </div>
  )
}

export default ListGridSelector
