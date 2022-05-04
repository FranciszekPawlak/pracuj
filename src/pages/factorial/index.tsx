import { useAppDispatch } from 'redux/hooks'
import { addToHistory } from 'redux/factorial/factorialSlice'
import { History } from './history'
import { useState } from 'react'
import { Error } from './error'
import { calculateFactorial } from 'utils'
import { FactorialResult } from 'types'
import './style.css'
import { InputForm } from 'components/inputForm'

export const Factorial = () => {
  const [error, setError] = useState<boolean>(false)
  const [currentFactorial, setCurrentFactorial] = useState<FactorialResult | null>(null)
  const dispatch = useAppDispatch()

  const submit = (value: string) => {
    const n = parseInt(value)
    if (n > 5000 || String(n) == 'NaN') {
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
      <InputForm
        submit={submit}
        buttonTitle={content.buttonTitle}
        placeholder={content.inputPlaceholder}
        type='number'
      />
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
