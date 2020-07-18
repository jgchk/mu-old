import * as React from 'react'
import { FC } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import CommaList from '../kit/CommaList'
import Link from '../kit/Link'
import { RootState } from '../modules'

const ArtistList: FC<{ ids: string[] }> = ({ ids }) => {
  const artists = useSelector((state: RootState) =>
    ids.map((id) => state.library.artists[id], shallowEqual)
  )

  return (
    <CommaList>
      {artists.map((artist) => (
        <CommaList.Item key={artist.id}>
          <Link to={`/artist/${artist.id}`}>
            <span css={{ '&:hover': { textDecoration: 'underline' } }}>
              {artist.name}
            </span>
          </Link>
        </CommaList.Item>
      ))}
    </CommaList>
  )
}

export default ArtistList
