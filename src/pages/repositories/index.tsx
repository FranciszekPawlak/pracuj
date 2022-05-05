import { InputForm } from 'components/inputForm'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { getRepositoriesWithCommits } from 'redux/repositories/repositoriesSlice'
import { Repo } from './components/Repo'
import './style.scss'

export const Repositories = () => {
  const { entities, loading, error } = useAppSelector((state) => state.repositories)
  const dispatch = useAppDispatch()
  const submit = (value: string) => dispatch(getRepositoriesWithCommits({ login: value, page: 1 }))
  const validations = ['required', 'minString:3', 'maxString:5']

  return (
    <div className='repositories'>
      <h1 className='repositories__title'>{content.pageTitle}</h1>
      <InputForm
        submit={submit}
        placeholder={content.inputPlaceholder}
        buttonTitle={content.buttonTitle}
        type='text'
        loading={loading}
        validations={validations}
      />

      {entities.length > 0 && (
        <div>
          {entities.map((item) => (
            <Repo key={item.repo.node_id} repository={item} />
          ))}
        </div>
      )}

      {error && <span className='repositories__error'>{error}</span>}
    </div>
  )
}

const content = {
  pageTitle: 'Find Github repositories by login',
  inputPlaceholder: 'Enter a login',
  buttonTitle: 'Search',
}
