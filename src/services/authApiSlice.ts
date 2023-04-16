import { apiSlice } from 'services/apiSlice'
import type {
  AuthResult,
  AuthJWTCreateResult,
  AuthJWTVerifyUserQueryArgs,
  AuthJWTCreateQueryArgs,
  AuthGetUserQueryArgs,
  AuthGetUserResult,
  AuthUsersCreateQueryArgs
} from './types'

const AUTH_ENDPOINT = 'auth'

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    verifyUser: builder.mutation<AuthResult, AuthJWTVerifyUserQueryArgs>({
      // query: () => `verify`
      query: (body) => ({
        url: `${AUTH_ENDPOINT}/jwt/verify`,
        method: 'POST',
        // body: body,
        body: body
      })
    }),

    login: builder.mutation<AuthJWTCreateResult, AuthJWTCreateQueryArgs>({
      query: (body) => ({
        url: `${AUTH_ENDPOINT}/jwt/create`,
        method: 'POST',
        // body: body
        body: body
      })
    }),
    // refreshUser: builder.mutation<AuthResult, AuthJWTGetUserQueryArgs>({
    //   query: (body) => ({
    //     url: `jwt/refresh`,
    //     method: 'POST',
    //     // body: body
    //     body: body
    //   })
    // }),
    getUser: builder.query<AuthGetUserResult, AuthGetUserQueryArgs>({
      query: () => `${AUTH_ENDPOINT}/users/me`
    }),
    createUser: builder.mutation<AuthResult, AuthUsersCreateQueryArgs>({
      query: (body) => ({
        url: `${AUTH_ENDPOINT}/users/`,
        method: 'POST',
        body: body
      })
    })
  })
})

export const {
  useVerifyUserMutation,
  useLoginMutation,
  useGetUserQuery,
  useCreateUserMutation
} = authApiSlice

// const args = JSON.stringify({ token: '' })
// const [verifyUser] = useVerifyUserMutation()
// const [authenticateUser] = useAuthenticateUserMutation()
// const { data } = useGetUserQuery({})
// console.log('data: ', data)
// const [createUser] = useCreateUserMutation()
// const [createUser] = useGetUserMutation()
// selectAccessToken()
// const token = (store.getState() as RootState).auth.access
// console.log(token)
// useEffect(() => {
//   // TODO create util function
//   const token = (store.getState() as RootState).auth.access
//   console.log('token: ', token)
//   if (!token) return
//   verifyUser({ token })
// }, [verifyUser])

// useEffect(() => {
//   authenticateUser({
//     email: '',
//     password: ''
//   })
// }, [authenticateUser])

// useEffect(() => {
//   createUser({
//     email: '',
//     password: ''
//   })
// }, [createUser])
