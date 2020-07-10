import * as React from 'react'
import { FC, useState } from 'react'
import { FiSearch as SearchIcon } from 'react-icons/fi'
import { useHistory, NavLink } from 'react-router-dom'
import { fetchSearch } from '../modules/search/actions'
import { useAppDispatch } from '../store'

const Navigation: FC = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const dispatch = useAppDispatch()
  const history = useHistory()

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault()
    void dispatch(fetchSearch({ query: searchQuery }))
    history.push('/search')
  }

  return (
    <div
      css={{
        display: 'flex',
        padding: '.2rem .4rem',
        '& > *': { padding: '.4rem' },
      }}
    >
      <div>mu</div>
      <NavLink to='/'>home</NavLink>
      <div css={{ marginLeft: 'auto' }}>
        <form onSubmit={(e) => onSearch(e)}>
          <input
            type='search'
            name='search'
            id='search'
            placeholder='search'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type='submit' disabled={searchQuery.length === 0}>
            <SearchIcon />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Navigation
