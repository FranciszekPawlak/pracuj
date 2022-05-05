import { Button } from 'components/button'
import { Link } from 'react-router-dom'
import './style.scss'

export const Layout = ({ children }: Props) => {
  const activeLink = window.location.pathname
  const navElements: NavigationLink[] = [
    { to: '/', title: 'Repo searcher' },
    { to: '/factorial', title: 'Factorial' },
    { to: '/requirements', title: 'Requirements' },
  ]

  return (
    <div className='container'>
      <header>
        <nav className='navigation'>
          <ul className='navigation__list'>
            {navElements.map((item) => (
              <li className='navigation__item' key={item.to}>
                <Link to={item.to}>
                  <Button active={activeLink === item.to} title={item.title} />
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

type Props = { children: React.ReactNode }
type NavigationLink = { to: string; title: string }
