import * as React from 'react'
import { FC } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import Card from '../kit/Card'
import CommaList from '../kit/CommaList'
import Link from '../kit/Link'
import { RootState } from '../modules'

const width = 200

const Release: FC<{ id: string }> = ({ id }) => {
  const release = useSelector((state: RootState) => state.library.releases[id])
  const artists = useSelector((state: RootState) =>
    release.artists.map((id) => state.library.artists[id], shallowEqual)
  )

  return (
    <Link to={`/release/${id}`}>
      <Card>
        <img src={release.remoteCovers[0]} width={width} />
        <Card.Title>{release.title}</Card.Title>
        <Card.Subtitle>
          <CommaList>
            {artists.map((artist) => (
              <CommaList.Item key={artist.id}>
                <Link to={`/artist/${artist.id}`}>
                  <div css={{ '&:hover': { textDecoration: 'underline' } }}>
                    {artist.name}
                  </div>
                </Link>
              </CommaList.Item>
            ))}
          </CommaList>
        </Card.Subtitle>
      </Card>
    </Link>
  )
}

export default Release
