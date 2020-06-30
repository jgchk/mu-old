import * as React from 'react'
import { FC } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import { SearchResult as SearchResultType } from '../modules/search/interfaces'

const SearchResult: FC<{ result: SearchResultType }> = ({ result }) => (
  <Card>
    {result.coverUrl !== undefined && <CardImg src={result.coverUrl} />}
    <CardBody>
      <CardTitle>{result.title}</CardTitle>
      <CardSubtitle className='text-muted'>{result.artist}</CardSubtitle>
    </CardBody>
  </Card>
)

export default SearchResult
