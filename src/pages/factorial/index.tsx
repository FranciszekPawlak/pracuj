import { useAppDispatch } from 'redux/hooks'
import { addToHistory } from 'redux/factorial/factorialSlice'
import { History } from './history'
import { useState } from 'react'
import { Error } from './error'
import { Button } from 'components/button'
import { calculateFactorial } from 'utils'
import { FactorialResult } from 'types'
import './style.css'

export const Factorial = () => {
  const [error, setError] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')
  const [currentFactorial, setCurrentFactorial] = useState<FactorialResult | null>(null)
  const dispatch = useAppDispatch()

  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const n = parseInt(inputValue)
    if (n > 5000) {
      setError(true)
    } else {
      setError(false)
      const result = calculateFactorial(n)
      setCurrentFactorial({ n, result })
      dispatch(addToHistory({ n, result }))
    }
  }

  return (
    <div className='page'>
      <h1 className='page__title'>{content.pageTitle}</h1>
      <form className='form' onSubmit={submit}>
        <input
          className='form__input'
          type='number'
          placeholder={content.inputPlaceholder}
          value={inputValue}
          onChange={(e: React.FormEvent<HTMLInputElement>) => setInputValue(e.currentTarget.value)}
        />
        <Button title={content.buttonTitle} />
      </form>
      {currentFactorial && (
        <h2 className='page__result'>
          {currentFactorial.n}! = {currentFactorial.result}
        </h2>
      )}
      <History />
      {error && <Error setError={setError} />}
    </div>
  )
}

const content = {
  pageTitle: 'Factorial Calculator',
  inputPlaceholder: 'Enter an integer',
  buttonTitle: 'Calculate',
}
