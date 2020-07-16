import * as React from 'react'
import { FC } from 'react'
import { Theme } from './theme'

const CardSubtitle: FC = ({ children }) => (
  <div
    css={(theme: Theme) => ({
      marginTop: theme.space[0],
    })}
  >
    {children}
  </div>
)

export default CardSubtitle
