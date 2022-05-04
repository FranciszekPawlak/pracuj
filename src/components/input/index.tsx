import './style.css'

type Props = {
  type: string
  placeholder: string
  onChange: React.Dispatch<React.SetStateAction<string>>
  value: string
}

export const Input = ({ type, placeholder, onChange, value }: Props) => (
  <input
    className='input'
    type={type}
    placeholder={placeholder}
    onChange={(e) => onChange(e.target.value)}
    value={value}
  />
)
