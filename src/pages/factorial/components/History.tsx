import './history.scss'
import { useAppSelector, useAppDispatch } from 'redux/hooks'
import { Button } from 'components/button'
import { clearHistory } from 'redux/factorial/factorialSlice'

const NUMBER_OF_ROWS = 10

export const History = () => {
  const factorial = useAppSelector((state) => state.factorial.value)
  const dispatch = useAppDispatch()
  const clearFactorialHistory = () => {
    localStorage.removeItem('factorialHistory')
    dispatch(clearHistory())
  }

  return (
    <div className='history'>
      <Button title={content.buttonTitle} onClick={clearFactorialHistory} />
      <ul className='history__list'>
        {factorial.slice(0, NUMBER_OF_ROWS).map((item, index) => (
          <li className='history__item' key={index}>
            {item.n}! = {item.result}
          </li>
        ))}
      </ul>
    </div>
  )
}

const content = {
  buttonTitle: 'Clear history',
}
