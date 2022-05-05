import axios from 'axios'
import { RepositoriesWithCommits, ResponseRepository, URLRequestParams } from 'types'
import { createGithubRepositoryRequestURL, createRepositoryCommitsRequestURL } from 'utils'

const getRepositoryCommits = async (url: string) => {
  const res = await axios.get(createRepositoryCommitsRequestURL(url))
  return res.data
}

export const getGithubRepositoriesWithCommitsByLogin = async ({
  login,
  page,
}: URLRequestParams) => {
  const repositoriesWithCommits: RepositoriesWithCommits[] = []

  const { status, data } = await axios.get(createGithubRepositoryRequestURL({ login, page }))

  if (status === 200 && data.items) {
    await Promise.all(
      data.items.map(async (repo: ResponseRepository) => {
        const commits = await getRepositoryCommits(repo.commits_url)
        repositoriesWithCommits.push({ commits: commits === null ? [] : commits, repo: repo })
      }),
    )
  }

  return repositoriesWithCommits
}
