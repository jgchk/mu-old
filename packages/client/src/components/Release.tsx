import * as React from 'react'
import { FC } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import CommaList from '../kit/CommaList'
import Link from '../kit/Link'
import { RootState } from '../modules'
import GridCard from './GridCard'

const Release: FC<{ id: string }> = ({ id }) => {
  const release = useSelector((state: RootState) => state.library.releases[id])
  const artists = useSelector((state: RootState) =>
    release.artists.map((id) => state.library.artists[id], shallowEqual)
  )

  return (
    <GridCard
      href={`/release/${id}`}
      width={200}
      imgSrc={release.remoteCovers[0]}
      title={release.title}
      subtitle={() => (
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
      )}
    />
  )
}

export default Release
