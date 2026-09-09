import { Link } from 'react-router-dom'
import { Home, Search } from 'lucide-react'
import { CONTACT_EMAIL } from '../config.js'

export default function NotFound() {
  return (
    <section className="jt-section">
      <div className="jt-article__wrap" style={{ textAlign: 'center', minHeight: '52vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ fontFamily: 'var(--fd)', fontWeight: 700, fontSize: 'clamp(96px, 18vw, 180px)', lineHeight: 0.9, letterSpacing: '-0.04em', color: 'var(--brand)', marginBottom: 16 }}>
          404
        </div>
        <h1 className="jt-page-title" style={{ marginInline: 'auto' }}>Page introuvable</h1>
        <p className="jt-lede" style={{ margin: '0 auto 32px', maxWidth: '46ch' }}>
          Cette page n'existe pas ou a été déplacée. Pas de souci, ça arrive aux meilleurs.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="jt-btn jt-btn--ink">
            <Home size={18} strokeWidth={2} /> Retour à l'accueil
          </Link>
          <Link to="/blog" className="jt-inline-link jt-inline-link--brand">
            <Search size={16} strokeWidth={2} /> Voir le blog
          </Link>
        </div>
        <p className="jt-note" style={{ marginTop: 24, whiteSpace: 'normal' }}>
          Besoin d'aide ? <a href={`mailto:${CONTACT_EMAIL}`} style={{ textDecoration: 'underline' }}>Écrivez-nous</a>
        </p>
      </div>
    </section>
  )
}
