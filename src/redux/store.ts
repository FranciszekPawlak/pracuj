import { configureStore } from '@reduxjs/toolkit'
import factorialReducer from 'redux/factorial/factorialSlice'
import repositoriesReducer from 'redux/repositories/repositoriesSlice'
import { localStorageMiddleware } from './factorial/localstorageMiddleware'

export const store = configureStore({
  reducer: {
    factorial: factorialReducer,
    repositories: repositoriesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
