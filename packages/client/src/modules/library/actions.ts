import { nanoid } from 'nanoid'
import { Action, NoId } from '../common/interfaces'
import { Track } from './interfaces'
import { ADD_TRACK } from './types'

type AddTrackAction = Action<typeof ADD_TRACK, Track>
export const addTrack = (track: NoId<Track>): AddTrackAction => ({
  type: ADD_TRACK,
  payload: {
    ...track,
    id: nanoid(),
  },
})

export type LibraryActionTypes = AddTrackAction
