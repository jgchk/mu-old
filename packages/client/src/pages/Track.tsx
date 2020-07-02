import { ReleaseTrack } from '@mu/api'
import * as React from 'react'
import { FC } from 'react'

const Track: FC<{ track: ReleaseTrack }> = ({ track }) => (
  <>
    <div>{track.title}</div>
    <div className='text-muted'>{track.artist}</div>
  </>
)

export default Track
