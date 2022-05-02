import './style.css'
import { useAppSelector } from 'redux/hooks'

const NUMBER_OF_ROWS = 10

export const History = () => {
  const factorial = useAppSelector((state) => state.factorial.value)

  return (
    <ul className='history'>
      {factorial.slice(1, NUMBER_OF_ROWS + 1).map((item, index) => (
        <li className='history__item' key={index}>
          {item.n}! = {item.result}
        </li>
      ))}
    </ul>
  )
}
