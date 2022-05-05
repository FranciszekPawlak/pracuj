import './style.scss'

export const Error = ({ message }: Props) => {
  return (
    <div className='app-error'>
      <h1 className='app-error__icon'>&#128148;</h1>
      <span className='app-error__message'>{message}</span>
    </div>
  )
}

type Props = {
  message: string
}
