import { configureStore } from '@reduxjs/toolkit'
import authSlice, { authMiddleware } from 'store/authSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { apiSlice } from 'services/apiSlice'
// import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware).concat(authMiddleware)
  // devTools: true
})

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// export const useAppDispatch: () => AppDispatch = useDispatch
