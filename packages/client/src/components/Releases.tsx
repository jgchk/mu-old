import * as React from 'react'
import { FC } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { Theme } from '../kit/theme'
import { RootState } from '../modules'
import Release from './Release'

const Releases: FC = () => {
  const releaseIds = useSelector(
    (state: RootState) => Object.keys(state.library.releases),
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
      {releaseIds.map((id) => (
        <Release id={id} key={id} />
      ))}
    </div>
  )
}

export default Releases
