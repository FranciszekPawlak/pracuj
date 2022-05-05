import { URLRequestParams } from 'types'

const PER_PAGE = 5

export const calculateFactorial = (n: number) => {
  let value = 1
  for (let i = 2; i <= n; i++) {
    value = value * i
  }
  return value
}

export const validate = (validations: string[], value: string) => {
  const errors: string[] = []
  validations.forEach((validation) => {
    const { rule, param } = { rule: validation.split(':')[0], param: validation.split(':')[1] }
    switch (rule) {
      case 'required':
        !value && errors.push('Field is required')
        break
      case 'minString':
        parseInt(param) > value.length &&
          errors.push('Field must be at least ' + param + ' characters long')
        break
      case 'maxString':
        parseInt(param) < value.length &&
          errors.push('Field must be at most ' + param + ' characters long')
        break
      case 'minNumber':
        parseInt(param) > parseInt(value) &&
          errors.push('The number must be greather than ' + param)
        break
      case 'maxNumber':
        parseInt(param) < parseInt(value) &&
          errors.push('The number cannot be greater than' + param)
        break
      default:
        break
    }
  })
  return errors
}

export const createGithubRepositoryRequestURL = ({ login, page }: URLRequestParams) => {
  const queryParams = 'q=' + encodeURIComponent(`user:${login}`)
  return `https://api.github.com/search/repositories?${queryParams}&sort:updated&order=desc&page=${page}&per_page=${PER_PAGE}`
}

export const createRepositoryCommitsRequestURL = (url: string) => {
  return `${url.split('{')[0]}?sort:updated&order=desc&page=1&per_page=${PER_PAGE}`
}

export const toDateTimeString = (value: string) => new Date(value).toLocaleString()
