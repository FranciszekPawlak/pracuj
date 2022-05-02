import { Link } from 'react-router-dom'
import 'styles/layout.css'

type Props = { children: React.ReactNode }
type NavigationLink = { to: string; title: string }

export const Layout = ({ children }: Props) => {
  const activeLink = window.location.pathname
  const navElements: NavigationLink[] = [
    { to: '/', title: 'Find Github project' },
    { to: '/factorial', title: 'Factorial' },
  ]

  return (
    <div className='container'>
      <header>
        <nav className='navigation'>
          <ul className='navigation__list'>
            {navElements.map((item) => (
              <li key={item.to}>
                <Link
                  className={`navigation__link  ${
                    activeLink === item.to && 'navigation__link--active'
                  }`}
                  to={item.to}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className='content'>{children}</main>
    </div>
  )
}
