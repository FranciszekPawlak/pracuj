import { createSlice, PayloadAction } from '@reduxjs/toolkit'
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

export default factorialSlice.reducer
