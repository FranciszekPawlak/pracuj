import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'redux/store'
import { FactorialState, FactorialResult } from 'types'

const localStorageState = localStorage.getItem('factorialState')

const initialState: FactorialState =
  localStorageState === null
    ? {
        value: [],
      }
    : { value: JSON.parse(localStorageState) }

export const factorialSlice = createSlice({
  name: 'factorial',
  initialState,
  reducers: {
    addToHistory: (state, action: PayloadAction<FactorialResult>) => {
      const newState = [action.payload, ...state.value]
      state.value = newState
      localStorage.setItem('factorialState', JSON.stringify(newState))
    },
  },
})

export const { addToHistory } = factorialSlice.actions

export const selectFactorial = (state: RootState) => state.factorial

export default factorialSlice.reducer
