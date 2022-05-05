import { RepositoriesWithCommits } from 'types'
import { Commit } from './Commit'
import './repo.scss'
type Props = {
  repository: RepositoriesWithCommits
}
export const Repo = ({ repository }: Props) => {
  return (
    <div className='repository' key={repository.repo.node_id}>
      <h2 className='repository__title'>{repository.repo.name}</h2>
      {repository.commits.length === 0 ? (
        <p>No commits</p>
      ) : (
        repository.commits.map((commit) => (
          <Commit
            key={commit.node_id}
            committer={commit.commit.committer}
            sha={commit.sha}
            html_url={commit.html_url}
            message={commit.commit.message}
          />
        ))
      )}
    </div>
  )
}
