import { SearchResult, SearchRequest, SearchResponse } from '@mu/api'
import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import ky from 'ky'
import { RootState } from '..'
import { AppDispatch } from '../../store'
import { getErrorMessage } from '../../utils/error'
import { withPayloadType } from '../../utils/redux'
import {
  REQUEST_SEARCH,
  RECEIVE_SEARCH,
  FETCH_SEARCH,
  FAILED_SEARCH,
} from './types'

export const requestSearch = createAction(
  REQUEST_SEARCH,
  withPayloadType<SearchRequest>()
)

export const receiveSearch = createAction(
  RECEIVE_SEARCH,
  withPayloadType<SearchResponse>()
)

export const failedSearch = createAction(
  FAILED_SEARCH,
  withPayloadType<string>()
)

export const fetchSearch = createAsyncThunk<
  void,
  SearchRequest,
  { dispatch: AppDispatch; state: RootState }
>(FETCH_SEARCH, async (request: SearchRequest, { dispatch, getState }) => {
  if (getState().search.isFetching) return

  dispatch(requestSearch(request))

  try {
    const results = await ky
      .get('/search', { searchParams: request })
      .json<SearchResult[]>()
    dispatch(receiveSearch(results))
  } catch (error) {
    dispatch(failedSearch(getErrorMessage(error)))
  }
})
