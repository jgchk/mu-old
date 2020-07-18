import * as React from 'react'
import { FC } from 'react'
import { Theme } from './theme'
import truncate from './truncate'

export interface CardTitleProps {
  center?: boolean
}

const CardTitle: FC<CardTitleProps> = ({ children, center }) => (
  <div
    css={(theme: Theme) => [
      truncate,
      { fontWeight: theme.fontWeights[2] },
      center && { textAlign: 'center' },
    ]}
  >
    {children}
  </div>
)

export default CardTitle
