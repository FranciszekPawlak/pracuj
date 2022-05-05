import { InputForm } from 'components/inputForm'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { getRepositoriesWithCommits } from 'redux/repositories/repositoriesSlice'
import { Repo } from './components/Repo'
import { Error } from './components/Error'
import { compareRepoDate } from 'utils'
import './style.scss'

const PAGE = 1

export const Repositories = () => {
  const { entities, loading, error } = useAppSelector((state) => state.repositories)
  const dispatch = useAppDispatch()
  const submit = (value: string) =>
    dispatch(getRepositoriesWithCommits({ login: value, page: PAGE }))
  const validations = ['required', 'maxString:100']
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
          {entities
            .slice()
            .sort(compareRepoDate)
            .map((item) => (
              <Repo key={item.repo.node_id} repository={item} />
            ))}
        </div>
      )}

      {error && <Error message={error} />}
    </div>
  )
}

const content = {
  pageTitle: 'Find User Github repositories',
  inputPlaceholder: 'Enter a login',
  buttonTitle: 'Search',
}
