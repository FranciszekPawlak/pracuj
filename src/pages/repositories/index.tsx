import { InputForm } from 'components/inputForm'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { getRepositoriesWithCommits } from 'redux/repositories/repositoriesSlice'
import { RepositoryList } from './respositoryList'
import './style.css'

export const Repositories = () => {
  const { entities, loading, error } = useAppSelector((state) => state.repositories)
  const dispatch = useAppDispatch()

  const submit = (value: string) => dispatch(getRepositoriesWithCommits({ login: value, page: 1 }))
  const validate = (value: string) => {
    if (!value) {
      return content.validateRequired
    } else if (value.length > 100) {
      return content.validateTooLong
    } else {
      return null
    }
  }

  return (
    <div className='repositories'>
      <h1 className='repositories__title'>{content.pageTitle}</h1>
      <InputForm
        submit={submit}
        placeholder={content.inputPlaceholder}
        buttonTitle={content.buttonTitle}
        type='text'
        loading={loading}
        validate={validate}
      />
      <RepositoryList list={entities} />
      {error && <span className='repositories__error'>{error}</span>}
    </div>
  )
}

const content = {
  pageTitle: 'Find Github repositories by login',
  inputPlaceholder: 'Enter a login',
  buttonTitle: 'Search',
  validateRequired: 'Login is required',
  validateTooLong: 'Login is too long',
}
