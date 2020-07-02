import { Release as ReleaseType } from '@mu/api'
import * as React from 'react'
import { FC } from 'react'
import { Play, DownloadCloud, Plus } from 'react-feather'
import { useSelector } from 'react-redux'
import {
  Button,
  ListGroup,
  ListGroupItem,
  Container,
  Row,
  Col,
} from 'reactstrap'
import styled from 'styled-components'
import Loader from '../components/Loader'
import { RootState } from '../modules'
import Track from './Track'

const Release: FC = () => {
  const isLoading = useSelector<RootState, boolean>(
    (state) => state.release.isFetching
  )
  const release = useSelector<RootState, ReleaseType>(
    (state) => state.release.release
  )

  if (isLoading)
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Loader />
      </div>
    )

  if (!release) return <div />

  return (
    <Container className='py-3'>
      <Row>
        <Col sm={4}>
          <img src={release.coverUrl} style={{ width: '100%' }} />
          <div className='my-2' style={{ display: 'flex' }}>
            <Button color='light'>
              <Play />
            </Button>
            <Button color='light' className='ml-auto'>
              <Plus />
            </Button>
            <Button color='light' className='ml-1'>
              <DownloadCloud />
            </Button>
          </div>
        </Col>
        <Col sm={8}>
          <h3>{release.title}</h3>
          <h5>{release.artist}</h5>
          <ListGroup className='mt-3'>
            {release.tracks.map((track) => (
              <ListGroupItem key={track.id}>
                <Track track={track} />
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Release
