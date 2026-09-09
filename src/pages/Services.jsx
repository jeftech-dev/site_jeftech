import { Link } from 'react-router-dom'
import { SERVICES } from '../data/site-content.js'
import ContactBand from '../components/ContactBand.jsx'
import Signature from '../components/Signature.jsx'

export default function Services() {
  return (
    <>
      <section className="jt-section">
        <div className="jt-page__wrap">
          <span className="jt-eyebrow jt-eyebrow--wide jt-page__kicker">Services</span>
          <h1 className="jt-page-title" style={{ maxWidth: '22ch' }}>Quatre choses. Faites entièrement, pas à moitié.</h1>
          <p className="jt-page__lede">
            Chaque service liste ce que vous obtenez, le délai typique, et ce dont on a besoin de vous pour tenir ce délai. Le prix se décide au cadrage — jamais avant de vous avoir écouté.
          </p>
        </div>
      </section>

      {SERVICES.map((s) => (
        <section
          key={s.n}
          className={`jt-section${s.variant === 'surface' ? ' jt-section--surface' : ''}`}
        >
          <div className="jt-service__wrap">
            <div style={{ minWidth: 0 }}>
              <span className="jt-service__n">{s.n}</span>
              <h2 className="jt-service__title">{s.title}</h2>
              <p className="jt-service__lede">{s.lede}</p>
              <div className="jt-service__meta">
                <div>
                  <span className="jt-meta__k">Délai typique</span>
                  <span className="jt-meta__v">{s.timeline}</span>
                </div>
                <div>
                  <span className="jt-meta__k">Stack</span>
                  <span className="jt-meta__v jt-meta__v--small">{s.stack}</span>
                </div>
              </div>
            </div>

            <div className="jt-service__body">
              <div style={{ minWidth: 0 }}>
                <span className="jt-service__collabel">Ce que vous obtenez</span>
                <ul className="jt-service__list">
                  {s.gets.map((g) => <li key={g}>{g}</li>)}
                </ul>
              </div>
              <div style={{ minWidth: 0 }}>
                <span className="jt-service__collabel">Ce dont on a besoin de vous</span>
                <ul className="jt-service__list jt-service__list--needs">
                  {s.needs.map((nd) => <li key={nd}>{nd}</li>)}
                </ul>
                <div className="jt-service__actions">
                  <Link to="/contact" className="jt-inline-link jt-inline-link--brand">
                    Réserver un appel <span aria-hidden="true" style={{ fontSize: 14 }}>→</span>
                  </Link>
                  <a href={s.wa} target="_blank" rel="noreferrer" className="jt-inline-link jt-inline-link--muted">
                    WhatsApp <span aria-hidden="true" style={{ fontSize: 14 }}>↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <Signature />
      <ContactBand />
    </>
  )
}
