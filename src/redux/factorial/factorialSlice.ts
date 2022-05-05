import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FactorialState, FactorialResult } from 'types'

const initialState: FactorialState = {
  value: [],
}

export const factorialSlice = createSlice({
  name: 'factorial',
  initialState,
  reducers: {
    addToHistory: (state, action: PayloadAction<FactorialResult>) => {
      state.value = [action.payload, ...state.value]
    },
    loadExsistingHistory: (state, action: PayloadAction<FactorialResult[]>) => {
      state.value = action.payload
    },
    clearHistory: (state) => {
      state.value = []
    },
  },
})

export const { addToHistory, loadExsistingHistory, clearHistory } = factorialSlice.actions

export default factorialSlice.reducer
