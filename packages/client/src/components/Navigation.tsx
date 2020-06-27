import * as React from 'react'
import { FC, useState } from 'react'
import { Search } from 'react-feather'
import { Link } from 'react-router-dom'
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
} from 'reactstrap'

const Navigation: FC = () => {
  const [isOpen, setOpen] = useState(false)

  const toggle = () => setOpen(!isOpen)

  return (
    <Navbar color='light' light expand='md'>
      <NavbarBrand>mu</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar className='mr-auto'>
          <NavItem>
            <NavLink tag={Link} to='/'>
              home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to='/library'>
              library
            </NavLink>
          </NavItem>
        </Nav>
        <Form>
          <InputGroup>
            <Input
              type='search'
              name='search'
              id='search'
              placeholder='search'
            />
            <InputGroupAddon addonType='append'>
              <Button type='submit'>
                <Search />
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Form>
      </Collapse>
    </Navbar>
  )
}

export default Navigation
