import { RepositoriesWithCommits } from 'types'
import { Commit } from './commit'
import './style.css'
type Props = {
  list: RepositoriesWithCommits[]
}
export const RepositoryList = ({ list }: Props) => {
  return (
    <>
      {list.length > 0 && (
        <div className='repositories'>
          {list.map((item) => (
            <div className='repositories__item' key={item.repo.node_id}>
              <h2 className='repositories__title'>{item.repo.name}</h2>
              {item.commits.length === 0 ? (
                <p>No commits</p>
              ) : (
                item.commits.map((commit) => (
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
          ))}
        </div>
      )}
    </>
  )
}
