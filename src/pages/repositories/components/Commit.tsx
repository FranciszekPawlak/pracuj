import { Committer } from 'types'
import { toDateTimeString } from 'utils'
import './commit.scss'

export const Commit = ({ committer, message, html_url, sha }: Props) => {
  return (
    <div className='commit'>
      <p className='commit__message'>{message}</p>
      <div className='commit__footer footer'>
        <span className='footer__info'>
          <span>{toDateTimeString(committer.date)}</span>
          <span className='footer__author'>{committer.name}</span>
        </span>
        <a target='_blank' rel='noreferrer' className='footer__button' href={html_url}>
          {sha.slice(0, 5)}...
        </a>
      </div>
    </div>
  )
}

type Props = {
  committer: Committer
  message: string
  html_url: string
  sha: string
}
