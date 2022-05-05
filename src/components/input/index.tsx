import { ChangeEvent } from 'react'
import './style.scss'

export const Input = ({ type, placeholder, onChange, value }: Props) => (
  <input
    className='input'
    type={type}
    placeholder={placeholder}
    onChange={(e) => onChange(e)}
    value={value}
  />
)

type Props = {
  type: string
  placeholder: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  value: string
}
