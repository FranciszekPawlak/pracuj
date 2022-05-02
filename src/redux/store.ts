import { configureStore } from '@reduxjs/toolkit'
import factorialReducer from 'redux/factorial/factorialSlice'

export const store = configureStore({
  reducer: {
    factorial: factorialReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
