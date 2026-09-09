import { Link } from 'react-router-dom'
import { CONTACT_EMAIL, SOCIALS } from '../config.js'

const WA_LINK = `${SOCIALS.whatsapp}?text=${encodeURIComponent("Bonjour Jëftech, je veux parler d'un projet.")}`

export default function SiteFooter() {
  return (
    <footer className="jt-footer">
      <div className="jt-footer__grid">
        <div style={{ minWidth: 0 }}>
          <div className="jt-footer__brand-row">
            <img src="/logo.png" alt="" className="jt-footer__logo" />
            <span className="jt-footer__name">Jëftech</span>
          </div>
          <p className="jt-footer__desc">
            Studio de développement à Dakar. Sites, applications et logiciels métier, construits et maintenus par la même équipe.
          </p>
        </div>

        <nav className="jt-footer__col" aria-label="Pages">
          <span className="jt-footer__coltitle">Pages</span>
          <Link to="/" className="jt-footer__link">Accueil</Link>
          <Link to="/services" className="jt-footer__link">Services</Link>
          <Link to="/concepts" className="jt-footer__link">Concepts</Link>
          <Link to="/contact" className="jt-footer__link">Contact</Link>
        </nav>

        <div className="jt-footer__col">
          <span className="jt-footer__coltitle">Direct</span>
          <a href={`mailto:${CONTACT_EMAIL}`} className="jt-footer__link">{CONTACT_EMAIL}</a>
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="jt-footer__link">WhatsApp</a>
          <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="jt-footer__link">LinkedIn</a>
        </div>
      </div>

      <div className="jt-footer__bottom">
        <span className="jt-footer__meta">© 2026 Jëftech · Dakar, Sénégal</span>
        <span className="jt-footer__meta">Innover. Créer. Connecter.</span>
      </div>
    </footer>
  )
}
