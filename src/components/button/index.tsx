import './style.css'

type Props = { title: string; onClick?: () => void; active?: boolean; loading?: boolean }

export const Button = ({ title, onClick, active, loading }: Props) => {
  return (
    <button
      disabled={loading}
      className={`btn ${active && 'btn--active'} ${loading && 'btn--disabled'}`}
      onClick={onClick}
    >
      {title}
      {loading ? '...' : ''}
    </button>
  )
}
