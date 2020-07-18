import * as React from 'react'
import { FC } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { Theme } from '../kit/theme'
import { RootState } from '../modules'
import Track from './Track'

const Tracks: FC = () => {
  const trackIds = useSelector(
    (state: RootState) => Object.keys(state.library.tracks),
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
      {trackIds.map((id) => (
        <Track id={id} key={id} />
      ))}
    </div>
  )
}

export default Tracks
