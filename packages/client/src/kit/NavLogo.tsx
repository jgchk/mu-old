import * as React from 'react'
import { FC } from 'react'
import { Theme } from './theme'

const NavLogo: FC = ({ children }) => (
  <div
    css={(theme: Theme) => ({
      fontFamily: theme.fonts.body,
      fontSize: theme.fontSizes[5],
      marginBottom: theme.space[3],
      textAlign: 'center',
    })}
  >
    {children}
  </div>
)

export default NavLogo
