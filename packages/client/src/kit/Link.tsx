import * as React from 'react'
import { FC } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Theme } from './theme'

const Link: FC<{ to: string }> = ({ to, children }) => (
  <RouterLink
    to={to}
    css={(theme: Theme) => ({
      color: theme.colors.gray[9],
      textDecoration: 'none',
    })}
  >
    {children}
  </RouterLink>
)

export default Link
