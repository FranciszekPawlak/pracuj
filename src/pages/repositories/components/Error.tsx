import './error.scss'

export const Error = ({ message }: Props) => {
  return (
    <div className='repo-error'>
      <h1 className='repo-error__icon'>&#128148;</h1>
      <span className='repo-error__message'>{message}</span>
    </div>
  )
}

type Props = {
  message: string
}
