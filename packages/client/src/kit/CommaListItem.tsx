import * as React from 'react'
import { FC } from 'react'

const CommaListItem: FC = ({ children }) => (
  <li
    css={{
      display: 'inline',
      '&:after': { content: '", "' },
      '&:last-child:after': { content: '""' },
    }}
  >
    {children}
  </li>
)

export default CommaListItem
