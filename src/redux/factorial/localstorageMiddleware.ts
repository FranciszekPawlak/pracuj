import { Middleware } from '@reduxjs/toolkit'
import { addToHistory } from 'redux/factorial/factorialSlice'

export const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
  if (addToHistory.match(action)) {
    localStorage.setItem(
      'factorialHistory',
      JSON.stringify([action.payload, ...store.getState().factorial.value]),
    )
  }
  return next(action)
}
