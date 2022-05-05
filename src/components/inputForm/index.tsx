import { Button } from 'components/button'
import { Input } from 'components/input'
import { SyntheticEvent, useState } from 'react'
import './style.scss'
type Props = {
  submit: (value: string) => void
  placeholder: string
  buttonTitle: string
  type: string
  loading?: boolean
  validate?: (value: string) => string | null
}
export const InputForm = ({ submit, placeholder, buttonTitle, type, loading, validate }: Props) => {
  const [value, setValue] = useState<string>('')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    setError(null)
    validate && validate(value) !== null ? setError(validate(value)) : submit(value)
  }

  return (
    <form onSubmit={handleSubmit} className='form'>
      <div className='form__group'>
        <Input placeholder={placeholder} onChange={setValue} value={value} type={type} />
        <Button title={buttonTitle} loading={loading} />
      </div>
      {error !== null && <span className='form__error'>{error}</span>}
    </form>
  )
}
