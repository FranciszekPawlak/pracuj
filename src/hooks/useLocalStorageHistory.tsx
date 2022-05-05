import { useEffect } from 'react'
import { useAppDispatch } from 'redux/hooks'
import { loadExsistingHistory } from 'redux/factorial/factorialSlice'

export const useLocalStorageHistory = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const localStorageHistory = localStorage.getItem('factorialHistory')
    if (localStorageHistory) {
      const historyArray = JSON.parse(localStorageHistory)
      dispatch(loadExsistingHistory(historyArray))
    }
  }, [])
}
