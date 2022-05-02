import './style.css'

type Props = { title: string; onClick?: () => void; active?: boolean }

export const Button = ({ title, onClick, active }: Props) => {
  return (
    <button className={`btn ${active && 'btn--active'}`} onClick={onClick}>
      {title}
    </button>
  )
}
