import * as React from 'react'
import { FC } from 'react'
import { Theme } from './theme'
import truncate from './truncate'

const CardTitle: FC = ({ children }) => (
  <div
    css={(theme: Theme) => [
      truncate,
      { fontWeight: 'bold', marginTop: theme.space[1] },
    ]}
  >
    {children}
  </div>
)

export default CardTitle
