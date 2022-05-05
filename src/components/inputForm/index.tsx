import { Button } from 'components/button'
import { Input } from 'components/input'
import { useValidation } from 'hooks/useValidation'
import { SyntheticEvent, useEffect } from 'react'
import './style.scss'

type Props = {
  submit: (value: string) => void
  placeholder: string
  buttonTitle: string
  type: string
  loading?: boolean
  validations: string[]
}

export const InputForm = ({
  submit,
  placeholder,
  buttonTitle,
  type,
  loading,
  validations,
}: Props) => {
  const { errors, changeHandler, value } = useValidation(validations, '')

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    if (errors.length === 0) {
      submit(value)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='form'>
      <div className='form__group'>
        <Input placeholder={placeholder} onChange={changeHandler} value={value} type={type} />
        <Button title={buttonTitle} loading={loading} disabled={errors.length > 0} />
      </div>
      {errors.length > 0 && <span className='form__error'>{errors[0]}</span>}
    </form>
  )
}
