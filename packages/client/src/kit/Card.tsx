import * as React from 'react'
import { FC } from 'react'
import { Theme } from './theme'

const Card: FC<{ width?: number }> = ({ children, width }) => (
  <div
    css={(theme: Theme) => ({
      width,
      background: theme.colors.gray[0],
      border: `${theme.borderWidths[4]}px solid ${theme.colors.gray[0]}`,
      borderRadius: theme.borderWidths[3],
      margin: theme.space[2],
      boxSizing: 'content-box',
      transition: 'boxShadow 1s',
      '&:hover': {
        background: theme.colors.gray[1],
        borderColor: theme.colors.gray[1],
      },
    })}
  >
    {children}
  </div>
)

export default Card
