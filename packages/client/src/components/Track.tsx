import * as React from 'react'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import useRelease from '../hooks/useRelease'
import useTrack from '../hooks/useTrack'
import { RootState } from '../modules'
import ArtistList from './ArtistList'
import { SwitchCard } from './Cards'

const Track: FC<{ id: string }> = ({ id }) => {
  const { title, artists, release } = useTrack(id)
  const { cover } = useRelease(release)

  const viewType = useSelector(
    (state: RootState) => state.library.viewTypes.tracks
  )

  return (
    <SwitchCard
      viewType={viewType}
      href={`/track/${id}`}
      width={200}
      imgSrc={cover}
      title={title}
      subtitle={<ArtistList ids={artists} />}
    />
  )
}

export default Track
