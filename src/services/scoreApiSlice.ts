// Need to use the React-specific entry point to import createApi
import { apiSlice } from 'services/apiSlice'

import type { ScoreCreateResult, ScoreQueryArgs } from './types'

const SCORE_ENDPOINT = 'score'

// Define a service using a base URL and expected endpoints
export const scoreApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createScore: builder.mutation<ScoreCreateResult, ScoreQueryArgs>({
      query: (body) => ({
        url: `/${SCORE_ENDPOINT}/`,
        method: 'POST',
        body: body
      })
    }),
    updateScore: builder.mutation<ScoreCreateResult, ScoreQueryArgs>({
      query: (id, ...rest) => ({
        url: `${SCORE_ENDPOINT}/${id}`,
        method: 'PUT',
        body: rest
      })
    }),
    getScore: builder.query<ScoreCreateResult, ScoreQueryArgs>({
      query: (id) => `/${id}`
    })
    // getScores: builder.mutation<ScoreCreateResult, number>({
    //   query: () => `score`
    // })
  })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useCreateScoreMutation,
  useUpdateScoreMutation,
  useGetScoreQuery
} = scoreApiSlice
