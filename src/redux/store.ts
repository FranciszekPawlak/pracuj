import { configureStore } from '@reduxjs/toolkit'
import factorialReducer from 'redux/factorial/factorialSlice'
import repositoriesReducer from 'redux/repositories/repositoriesSlice'

export const store = configureStore({
  reducer: {
    factorial: factorialReducer,
    repositories: repositoriesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
