import * as React from 'react'
import { FC, ReactNode } from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom'
import { Theme } from './theme'

const NavLink: FC<{
  to: string
  label: string
  icon?: ReactNode
  fontSize?: number
}> = ({ to, label, icon, fontSize = 3 }) => (
  <RouterNavLink
    to={to}
    css={(theme: Theme) => ({
      padding: theme.space[1],
      fontSize: theme.fontSizes[fontSize],
      textDecoration: 'none',
      color: theme.colors.gray[9],
      '&:hover': { color: theme.colors.gray[8] },
    })}
  >
    {icon && (
      <span
        css={(theme: Theme) => ({
          marginRight: theme.space[2],
          verticalAlign: 'middle',
        })}
      >
        {icon}
      </span>
    )}
    {label}
  </RouterNavLink>
)

export default NavLink
