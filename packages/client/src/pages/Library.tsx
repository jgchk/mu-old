import * as React from 'react'
import { FC } from 'react'
import { Card, CardImg, CardFooter, Container } from 'reactstrap'

const Library: FC = () => (
  <Container className='py-3'>
    <Card style={{ width: 250 }}>
      <CardImg
        top
        src='https://e.snmc.io/i/300/w/ccb93bf75a326418648e8be3720af220/7899558'
      />
      <CardFooter>Pink Siifu - Bag Talk</CardFooter>
    </Card>
  </Container>
)

export default Library
