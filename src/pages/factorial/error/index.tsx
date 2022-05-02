import { Button } from 'components/button'
import { Dispatch, SetStateAction } from 'react'
import './style.css'

type Props = { setError: Dispatch<SetStateAction<boolean>> }

export const Error = ({ setError }: Props) => {
  return (
    <div className='error'>
      <img
        src='https://i.gifer.com/origin/a0/a07ad08920f303f655251b1a0b353b86_w200.gif'
        alt={content.imgAlt}
        loading='lazy'
      />
      <h2 className='error__description'>{content.errorContent}</h2>
      <Button title={content.buttonTitle} onClick={() => setError(false)} />
    </div>
  )
}

const content = {
  imgAlt: 'explosion animation',
  errorContent: 'You almost destroyed the earth. Try to use a smaller number :)',
  buttonTitle: 'Try again',
}