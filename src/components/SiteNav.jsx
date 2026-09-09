import { Link, NavLink } from 'react-router-dom'

const NAV_ITEMS = [
  { label: 'Services', to: '/services' },
  { label: 'Concepts', to: '/concepts' },
  { label: 'Contact', to: '/contact' },
]

export default function SiteNav() {
  return (
    <header className="jt-header">
      <div className="jt-wrap jt-header__inner">
        <Link to="/" className="jt-brand">
          <img src="/logo.png" alt="Jëftech" className="jt-brand__logo" />
          <span className="jt-brand__name">Jëftech</span>
        </Link>
        <nav className="jt-nav" aria-label="Navigation principale">
          {NAV_ITEMS.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) => `jt-nav__link${isActive ? ' is-active' : ''}`}
            >
              {n.label}
            </NavLink>
          ))}
          <Link to="/contact" className="jt-nav__cta">Réserver un appel</Link>
        </nav>
      </div>
    </header>
  )
}
