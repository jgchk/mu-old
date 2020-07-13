import * as React from 'react'
import { FC } from 'react'
import { Theme } from './theme'

const TabBar: FC = ({ children }) => (
  <div
    css={(theme: Theme) => ({
      display: 'flex',
      padding: `${theme.space[2]}px ${theme.space[3]}px`,
      background: theme.colors.gray[0],
      borderBottom: `1px solid ${theme.colors.gray[1]}`,
    })}
  >
    {children}
  </div>
)

export default TabBar
