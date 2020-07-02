import * as React from 'react'
import { FC, useState } from 'react'
import { Search } from 'react-feather'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
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
import { RootState } from '../modules'
import { fetchSearch } from '../modules/search/actions'
import { useAppDispatch } from '../store'
import Loader from './Loader'

const Navigation: FC = () => {
  const [isOpen, setOpen] = useState(false)
  const toggle = () => setOpen(!isOpen)

  const dispatch = useAppDispatch()
  const [searchQuery, setSearchQuery] = useState('')
  const history = useHistory()
  const onSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    await dispatch(fetchSearch({ query: searchQuery }))
    history.push('/search')
  }

  const isSearchLoading = useSelector<RootState, boolean>(
    (state) => state.search.isFetching
  )

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
          <NavItem>
            <NavLink tag={Link} to='/upload'>
              upload
            </NavLink>
          </NavItem>
        </Nav>
        <Form onSubmit={(e) => onSearch(e)}>
          <InputGroup>
            <Input
              type='search'
              name='search'
              id='search'
              placeholder='search'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <InputGroupAddon addonType='append'>
              <Button
                type='submit'
                disabled={isSearchLoading || searchQuery.length === 0}
              >
                {isSearchLoading ? <Loader /> : <Search />}
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Form>
      </Collapse>
    </Navbar>
  )
}

export default Navigation
