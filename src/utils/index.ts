import { URLRequestParams } from 'types'

const PER_PAGE = 5

export const calculateFactorial = (n: number) => {
  let value = 1
  for (let i = 2; i <= n; i++) {
    value = value * i
  }
  return value
}

export const createGithubRepositoryRequestURL = ({ login, page }: URLRequestParams) => {
  const queryParams = 'q=' + encodeURIComponent(`user:${login}`)
  return `https://api.github.com/search/repositories?${queryParams}&sort:updated&order=desc&page=${page}&per_page=${PER_PAGE}`
}

export const createRepositoryCommitsRequestURL = (url: string) => {
  return `${url.split('{')[0]}?sort:updated&order=desc&page=1&per_page=${PER_PAGE}`
}

export const toDateTimeString = (value: string) => new Date(value).toLocaleString()
