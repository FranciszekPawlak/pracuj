import { ChangeEvent } from 'react'
import './style.scss'

type Props = {
  type: string
  placeholder: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  value: string
}

export const Input = ({ type, placeholder, onChange, value }: Props) => (
  <input
    className='input'
    type={type}
    placeholder={placeholder}
    onChange={(e) => onChange(e)}
    value={value}
  />
)
