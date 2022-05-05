import { ChangeEvent, useState } from 'react'
import { validate } from 'utils'

export const useValidation = (validations: string[], initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue)
  const [errors, setErrors] = useState<string[]>([])

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    const errors = validate(validations, newValue)
    setErrors(errors)
    setValue(newValue)
  }

  return { errors, changeHandler, value }
}
