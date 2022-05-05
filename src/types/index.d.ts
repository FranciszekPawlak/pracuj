export interface FactorialState {
  value: FactorialResult[]
}

export interface RepositoriesState {
  entities: RepositoriesWithCommits[]
  loading: boolean
  error: string | null
}

export type FactorialResult = {
  n: number
  result: number
}

export type ResponseRepository = {
  commits_url: string
  updated_at: string
  name: string
  node_id: string
  html_url: string
  updated_at: string
}

export type Committer = {
  name: string
  date: string
}

export type Commit = {
  message: string
  committer: Committer
}

export type ResponseRepositoryCommit = {
  node_id: string
  html_url: string
  sha: string
  commit: Commit
}

export type RepositoriesWithCommits = {
  repo: ResponseRepository
  commits: ResponseRepositoryCommit[]
}

export type URLRequestParams = { login: string; page: number }
