import * as React from 'react'
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  Collapse,
} from 'reactstrap'

const Navigation: FC = () => {
  const [isOpen, setOpen] = useState(false)

  const toggle = () => setOpen(!isOpen)

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand>mu</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink tag={Link} to="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/library">
              Library
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Navigation
