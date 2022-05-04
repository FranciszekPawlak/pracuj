import { Committer } from 'types'
import { toDateTimeString } from 'utils'
import './style.css'

type Props = {
  committer: Committer
  message: string
  html_url: string
  sha: string
}

export const Commit = ({ committer, message, html_url, sha }: Props) => {
  return (
    <div className='commit'>
      <p className='commit__message'>{message}</p>
      <div className='commit__footer'>
        <span className='commit__footer__info'>
          <span>{toDateTimeString(committer.date)}</span>
          <span className='commit__footer__info__author'>{committer.name}</span>
        </span>
        <a target='_blank' rel='noreferrer' className='commit__button' href={html_url}>
          {sha.slice(0, 5)}...
        </a>
      </div>
    </div>
  )
}
