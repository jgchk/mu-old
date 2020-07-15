import * as React from 'react'
import { FC } from 'react'
import CommaListItem from './CommaListItem'

interface CommaList {
  Item: FC
}

const CommaList: FC & CommaList = ({ children }) => (
  <ul css={{ display: 'inline', listStyle: 'none', padding: 0 }}>{children}</ul>
)

CommaList.Item = CommaListItem

export default CommaList
