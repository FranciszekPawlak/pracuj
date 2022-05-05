import './style.scss'

export const Button = ({ title, onClick, active, loading, disabled }: Props) => {
  return (
    <button
      disabled={loading || disabled}
      className={`btn ${active && 'btn--active'} ${(loading || disabled) && 'btn--disabled'}`}
      onClick={onClick}
    >
      {title}
      {loading ? '...' : ''}
    </button>
  )
}

type Props = {
  title: string
  onClick?: () => void
  active?: boolean
  loading?: boolean
  disabled?: boolean
}
