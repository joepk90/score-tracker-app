// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { RootState } from 'store/store'

const API_DOMAIN =
  process.env.NEXT_PUBLIC_SCORE_API_URL ||
  'django-score-tracker-staging-x3xzlkjn5q-nn.a.run.app'
const API_URL = `https://${API_DOMAIN}`

// https://www.youtube.com/watch?v=-JJFQ9bkUbo
const baseQuery = fetchBaseQuery({
  baseUrl: `${API_URL}`,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.access
    if (token) {
      headers.set('Authorization', `JWT ${token}`)
    }

    return headers
  }
})

export const apiSlice = createApi({
  baseQuery: baseQuery,
  endpoints: () => ({})
})
