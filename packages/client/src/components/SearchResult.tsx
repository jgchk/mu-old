import { SearchResult as SearchResultType } from '@mu/api'
import * as React from 'react'
import { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import { fetchRelease } from '../modules/release/actions'
import { useAppDispatch } from '../store'

const SearchResult: FC<{ result: SearchResultType }> = ({ result }) => {
  const dispatch = useAppDispatch()
  const history = useHistory()
  const openResult = () => {
    history.push('/release')
    void dispatch(fetchRelease({ source: result.source, id: result.id }))
  }

  return (
    <Card onClick={() => openResult()}>
      {result.coverUrl !== undefined && <CardImg src={result.coverUrl} />}
      <CardBody>
        <CardTitle>{result.title}</CardTitle>
        <CardSubtitle className='text-muted'>{result.artist}</CardSubtitle>
      </CardBody>
    </Card>
  )
}

export default SearchResult
