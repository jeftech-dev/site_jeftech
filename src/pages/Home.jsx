import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { DOORS, METHOD, GUARANTEES, SECTORS, ORG_COUNT } from '../data/site-content.js'
import ContactBand from '../components/ContactBand.jsx'
import Signature from '../components/Signature.jsx'
import Faq from '../components/Faq.jsx'

// Counts the sector rows up on mount (skipped when reduced motion is set).
function useOrgCounter() {
  const [shown, setShown] = useState(ORG_COUNT)
  useEffect(() => {
    const reduce = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    setShown(0)
    let n = 0
    const id = setInterval(() => {
      n += 1
      setShown(n)
      if (n >= ORG_COUNT) clearInterval(id)
    }, 130)
    return () => clearInterval(id)
  }, [])
  return shown
}

export default function Home() {
  const orgShown = useOrgCounter()

  return (
    <>
      {/* Hero */}
      <section className="jt-hero">
        <div className="jt-hero__wrap">
          <span className="jt-eyebrow jt-eyebrow--wide jt-hero__kicker">Développement produit · Dakar</span>
          <h1 className="jt-h1">
            <span>Votre idée a besoin</span>
            <span>d'<span className="accent">un produit</span> — pas</span>
            <span>juste d'un site.</span>
          </h1>
          <div className="jt-hero__grid">
            <p className="jt-hero__lede">
              On conçoit des applications et sites web pensés pour convertir, retenir et scaler. De l'idée au déploiement, avec une seule équipe.
            </p>
            <div className="jt-hero__cta">
              <Link to="/contact" className="jt-btn jt-btn--ink">
                Réserver un appel<span aria-hidden="true" style={{ fontSize: 15 }}>→</span>
              </Link>
              <span className="jt-note">30 min · gratuit</span>
            </div>
          </div>
        </div>
      </section>

      {/* Doors */}
      <section className="jt-section">
        <div className="jt-doors__wrap">
          <span className="jt-eyebrow jt-eyebrow--ink40">Par où commencer</span>
          {DOORS.map((d) => (
            <Link key={d.n} to={d.to} className="jt-door">
              <span className="jt-door__idx">{d.n}</span>
              <span className="jt-door__body">
                <span className="jt-door__title">{d.title}</span>
                <span className="jt-door__desc">{d.desc}</span>
              </span>
              <span className="jt-door__arrow" aria-hidden="true">→</span>
            </Link>
          ))}
          <div className="jt-doors__spacer" />
        </div>
      </section>

      {/* Method */}
      <section className="jt-section jt-section--surface">
        <div className="jt-section__wrap jt-split">
          <div className="jt-split__aside">
            <span className="jt-eyebrow">Comment on travaille</span>
            <h2 className="jt-h2" style={{ marginTop: 14 }}>Trois semaines pour savoir exactement ce que vous achetez.</h2>
            <p className="jt-lede">
              Le devis n'est pas une estimation au doigt mouillé. C'est le résultat d'un cadrage écrit que vous validez ligne par ligne.
            </p>
          </div>
          <div className="jt-split__body" style={{ display: 'flex', flexDirection: 'column' }}>
            {METHOD.map((m) => (
              <div key={m.tag} className="jt-method__item">
                <span className="jt-method__tag">{m.tag}</span>
                <div style={{ minWidth: 0 }}>
                  <h3 className="jt-method__title">{m.title}</h3>
                  <p className="jt-method__desc">{m.desc}</p>
                  <span className="jt-method__out">{m.out}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="jt-section">
        <div className="jt-section__wrap jt-split">
          <div className="jt-split__aside">
            <span className="jt-eyebrow">Là où on a déjà livré</span>
            <h2 className="jt-h2" style={{ marginTop: 14 }}>Nos compétences ne sortent pas de nulle part.</h2>
            <p className="jt-lede" style={{ marginBottom: 22 }}>
              Avant Jëftech, l'équipe a écrit du logiciel pour l'État, pour l'armée de l'air et pour des startups. Voici où.
            </p>
            <div className="jt-stat">
              <span className="jt-stat__num">{orgShown}</span>
              <span className="jt-stat__label">organisations, du ministère à la startup</span>
            </div>
          </div>
          <div className="jt-split__body jt-sectors">
            {SECTORS.map((x) => (
              <div key={x.org} className="jt-sector">
                <span className="jt-sector__org">{x.org}</span>
                <span className="jt-sector__tag">{x.sector}</span>
              </div>
            ))}
            <p className="jt-note-2">
              Missions et stages réalisés par les membres de l'équipe. Aucun de ces organismes n'est client de Jëftech — on préfère le dire.
            </p>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="jt-section--ink">
        <div className="jt-section__wrap">
          <span className="jt-eyebrow jt-eyebrow--brandl" style={{ marginBottom: 'clamp(24px,3vw,36px)' }}>Ce qu'on garantit</span>
          <div className="jt-guarantees">
            {GUARANTEES.map((g) => (
              <div key={g.title} className="jt-guarantee">
                <h3 className="jt-guarantee__title">{g.title}</h3>
                <p className="jt-guarantee__desc">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq />
      <Signature />
      <ContactBand />
    </>
  )
}
