import { Error } from 'components/error'

export const NotFound = () => <Error message={content.message} />

const content = {
  message: 'Not found',
}
