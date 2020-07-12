import * as React from 'react'
import { FC } from 'react'
import { FiHome, FiSearch, FiDisc } from 'react-icons/fi'
import { NavBar } from '../kit/NavBar'
import { NavLink } from '../kit/NavLink'
import { NavLogo } from '../kit/NavLogo'

const Navigation: FC = () => {
  return (
    <NavBar>
      <NavLogo>mu</NavLogo>
      <NavLink to='/' label='home' icon={<FiHome />} />
      <NavLink to='/search' label='search' icon={<FiSearch />} />
      <NavLink to='/library' label='library' icon={<FiDisc />} />
    </NavBar>
  )
}

export default Navigation
