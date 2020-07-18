import * as React from 'react'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import useArtist from '../hooks/useArtist'
import { RootState } from '../modules'
import { SwitchCard } from './Cards'

const Artist: FC<{ id: string }> = ({ id }) => {
  const { name, image } = useArtist(id)

  const viewType = useSelector(
    (state: RootState) => state.library.viewTypes.artists
  )

  return (
    <SwitchCard
      viewType={viewType}
      href={`/artist/${id}`}
      width={200}
      imgSrc={image}
      title={<div css={{ textAlign: 'center' }}>{name}</div>}
    />
  )
}

export default Artist
