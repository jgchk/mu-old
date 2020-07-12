import * as React from 'react'
import { FC, ReactNode } from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom'
import { Theme } from './theme'

export const NavLink: FC<{
  to: string
  label: string
  icon?: ReactNode
}> = ({ to, label, icon }) => (
  <RouterNavLink
    to={to}
    css={(theme: Theme) => ({
      padding: theme.space[1],
      fontSize: theme.fontSizes[3],
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
