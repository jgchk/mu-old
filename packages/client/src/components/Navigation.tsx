import * as React from 'react'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'

const Navigation: FC = () => {
  return (
    <div css={{ display: 'flex', flexDirection: 'column' }}>
      <div>mu</div>
      <NavLink to='/'>home</NavLink>
      <NavLink to='/search'>search</NavLink>
      <NavLink to='/library'>library</NavLink>
    </div>
  )
}

export default Navigation
