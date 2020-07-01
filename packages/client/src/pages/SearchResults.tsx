import * as React from 'react'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { CardColumns } from 'reactstrap'
import SearchResult from '../components/SearchResult'
import { RootState } from '../modules'
import { SearchState } from '../modules/search'

const SearchResults: FC = () => {
  const state = useSelector<RootState, SearchState>((state) => state.search)
  return (
    <div className='container'>
      <CardColumns>
        {state.results.map((result) => (
          <SearchResult key={result.id} result={result} />
        ))}
      </CardColumns>
    </div>
  )
}

export default SearchResults
