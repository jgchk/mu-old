import { ReleaseRequest, ReleaseResponse } from '@mu/api'
import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import ky from 'ky'
import { RootState } from '..'
import { AppDispatch } from '../../store'
import { getErrorMessage } from '../../utils/error'
import { withPayloadType } from '../../utils/redux'
import {
  REQUEST_RELEASE,
  RECEIVE_RELEASE,
  FAILED_RELEASE,
  FETCH_RELEASE,
} from './types'

export const requestRelease = createAction(
  REQUEST_RELEASE,
  withPayloadType<ReleaseRequest>()
)

export const receiveRelease = createAction(
  RECEIVE_RELEASE,
  withPayloadType<ReleaseResponse>()
)

export const failedRelease = createAction(
  FAILED_RELEASE,
  withPayloadType<string>()
)

export const fetchRelease = createAsyncThunk<
  void,
  ReleaseRequest,
  { dispatch: AppDispatch; state: RootState }
>(FETCH_RELEASE, async (request: ReleaseRequest, { dispatch, getState }) => {
  if (getState().search.isFetching) return

  dispatch(requestRelease(request))

  try {
    const response = await ky
      .get('/release', { searchParams: request })
      .json<ReleaseResponse>()
    dispatch(receiveRelease(response))
  } catch (error) {
    dispatch(failedRelease(getErrorMessage(error)))
  }
})
