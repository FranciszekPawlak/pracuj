import { Button } from 'components/button'
import { Dispatch, SetStateAction } from 'react'
import './error.scss'

type Props = { setError: Dispatch<SetStateAction<boolean>> }

export const Error = ({ setError }: Props) => {
  return (
    <div className='error'>
      <img
        className='error__img'
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
  errorContent: 'You almost destroyed the earth. Try to use a number smaller than 5000',
  buttonTitle: 'Try again',
}
