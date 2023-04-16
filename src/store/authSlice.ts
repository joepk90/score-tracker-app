import { createSlice, MiddlewareAPI, Action, Dispatch } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
// import { authApi } from 'services/scoreApiSlice'
import { RootState } from 'store/store'

export interface AuthState {
  access: string | null
  refresh: string | null
  isAuthenticated: boolean
  user: string | null
}

const initialState: AuthState = {
  access: '',
  refresh: '',
  isAuthenticated: false,
  user: null
}

export const authMiddleware =
  (store: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {
    const result = next(action)
    if (action.type?.startsWith('auth/setCredentials')) {
      const authState = store.getState().auth
      localStorage.setItem('auth', JSON.stringify(authState))
    } else if (action.type?.startsWith('auth/logout')) {
      const authState = store.getState().auth
      localStorage.setItem('auth', JSON.stringify(authState))
    }

    return result
  }

const getInitialState = (): AuthState | null => {
  if (typeof window === 'undefined') {
    return null
  }

  if (localStorage.getItem('auth') === null) {
    return null
  }

  const test = JSON.parse(localStorage.getItem('auth') as string)

  return test
}

export const authSlice = createSlice({
  name: 'auth',
  // initialState: initialState
  initialState: getInitialState() || initialState,
  reducers: {
    // checkAuthenticated: () => {},
    // loadUser: () => {},
    // login: (state, action: PayloadAction<number>) => {},
    setCredentials: (state, action) => {
      state.access = action.payload.access
      state.refresh = action.payload.refresh
      // state.user = null
      state.isAuthenticated = true
    },
    logout: (state) => {
      state.access = null
      state.refresh = null
      // state.user = null
      state.isAuthenticated = false
    }
  }
  // ALTERNATIVE METHOD OF STORING STATE - MATCHING THE QUERY ENDPOINT
  // extraReducers: (builder) => {
  //   builder.addMatcher(
  //     authApi.endpoints.authenticateUser.matchFulfilled,
  //     (state, { payload }) => {
  //       state.access = payload.access
  //       state.refresh = payload.refresh
  //     }
  //   ),
  //     builder.addMatcher(
  //       authApi.endpoints.getUser.matchFulfilled,
  //       (state, { payload }) => {
  //         state.user = payload.email
  //       }
  //     )
  // }
})

// Action creators are generated for each case reducer function
export const { logout, setCredentials } = authSlice.actions

export default authSlice.reducer

export const selectAccessToken = (state: RootState) => state.auth.access
