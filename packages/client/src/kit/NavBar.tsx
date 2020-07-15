import * as React from 'react'
import { FC } from 'react'
import { Theme } from './theme'

const NavBar: FC = ({ children }) => (
  <div
    css={(theme: Theme) => ({
      display: 'flex',
      flexDirection: 'column',
      background: theme.colors.gray[0],
      borderRight: `${theme.borderWidths[0]}px solid ${theme.colors.gray[1]}`,
      height: '100%',
      padding: `${theme.space[3]}px ${theme.space[4]}px`,
    })}
  >
    {children}
  </div>
)

export default NavBar
