import * as React from 'react'
import { FC } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import CommaList from '../kit/CommaList'
import Link from '../kit/Link'
import { Theme } from '../kit/theme'
import truncate from '../kit/truncate'
import { RootState } from '../modules'

const width = 200

const Release: FC<{ id: string }> = ({ id }) => {
  const release = useSelector((state: RootState) => state.library.releases[id])
  const artists = useSelector((state: RootState) =>
    release.artists.map((id) => state.library.artists[id], shallowEqual)
  )

  return (
    <Link to={`/release/${id}`}>
      <div
        css={(theme: Theme) => ({
          width,
          background: theme.colors.gray[0],
          border: `${theme.borderWidths[4]}px solid ${theme.colors.gray[0]}`,
          borderRadius: theme.borderWidths[3],
          margin: theme.space[2],
          boxSizing: 'content-box',
          textDecoration: 'none',
          transition: 'boxShadow 1s',
          '&:hover': {
            background: theme.colors.gray[1],
            borderColor: theme.colors.gray[1],
          },
        })}
      >
        <img src={release.remoteCovers[0]} width={width} />
        <div
          css={(theme: Theme) => [
            truncate,
            { fontWeight: 'bold', marginTop: theme.space[1] },
          ]}
        >
          {release.title}
        </div>
        <div
          css={(theme: Theme) => ({
            marginTop: theme.space[0],
          })}
        >
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
        </div>
      </div>
    </Link>
  )
}

export default Release
