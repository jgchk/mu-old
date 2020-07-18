import * as React from 'react'
import { FC } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { Theme } from '../kit/theme'
import { RootState } from '../modules'
import Artist from './Artist'

const Artists: FC = () => {
  const artistIds = useSelector(
    (state: RootState) => Object.keys(state.library.artists),
    shallowEqual
  )

  return (
    <div
      css={(theme: Theme) => ({
        display: 'flex',
        flexWrap: 'wrap',
        padding: theme.space[2],
      })}
    >
      {artistIds.map((id) => (
        <Artist id={id} key={id} />
      ))}
    </div>
  )
}

export default Artists
