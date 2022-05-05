import { RepositoriesWithCommits } from 'types'
import { toDateTimeString } from 'utils'
import { Commit } from './Commit'
import './repo.scss'

export const Repo = ({ repository }: Props) => {
  return (
    <div className='repository' key={repository.repo.node_id}>
      <div className='repository__header'>
        <a
          target='_blank'
          rel='noreferrer'
          href={repository.repo.html_url}
          className='repository__title'
        >
          {repository.repo.name}
        </a>
        <span className='repository__date'>{toDateTimeString(repository.repo.updated_at)}</span>
      </div>
      {repository.commits.map((commit) => (
        <Commit
          key={commit.node_id}
          committer={commit.commit.committer}
          sha={commit.sha}
          html_url={commit.html_url}
          message={commit.commit.message}
        />
      ))}
    </div>
  )
}

type Props = {
  repository: RepositoriesWithCommits
}
