import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Services', to: '/services' },
  { label: 'Concepts', to: '/concepts' },
  { label: 'Contact', to: '/contact' },
]

export default function SiteNav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [location.pathname])

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

        <button
          type="button"
          className="jt-nav__toggle"
          aria-expanded={open}
          aria-controls="jt-mobile-nav"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>

        <nav
          id="jt-mobile-nav"
          className={`jt-mobilenav${open ? ' is-open' : ''}`}
          aria-label="Navigation mobile"
        >
          {NAV_ITEMS.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) => `jt-mobilenav__link${isActive ? ' is-active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {n.label}
            </NavLink>
          ))}
          <Link to="/contact" className="jt-mobilenav__cta" onClick={() => setOpen(false)}>
            Réserver un appel
          </Link>
        </nav>
      </div>
    </header>
  )
}
