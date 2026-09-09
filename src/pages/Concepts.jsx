import { CONCEPTS } from '../data/site-content.js'
import ContactBand from '../components/ContactBand.jsx'
import Signature from '../components/Signature.jsx'

export default function Concepts() {
  return (
    <>
      <section className="jt-section">
        <div className="jt-page__wrap">
          <span className="jt-eyebrow jt-eyebrow--wide jt-page__kicker">Concepts &amp; expérimentations</span>
          <h1 className="jt-page-title" style={{ maxWidth: '24ch' }}>Ce ne sont pas des projets clients. On vous le dit tout de suite.</h1>
          <p className="jt-page__lede" style={{ marginBottom: 24, maxWidth: '60ch' }}>
            Ce sont des produits qu'on a construits pour nous — pour tester une architecture, un moyen de paiement, une contrainte. Ils tournent en ligne, vous pouvez les ouvrir et cliquer partout. Aucun chiffre de résultat n'est affiché, parce qu'il n'y aurait personne pour le confirmer.
          </p>
          <span className="jt-callout">
            <span>
              <strong>Pourquoi cette page existe :</strong> vous jugez notre code, pas notre marketing. Quand nos premiers clients accepteront d'être cités, cette page deviendra un vrai portfolio — pas avant.
            </span>
          </span>
        </div>
      </section>

      {CONCEPTS.map((c) => (
        <section
          key={c.title}
          className={`jt-section${c.variant === 'surface' ? ' jt-section--surface' : ''}`}
        >
          <div className="jt-concept__wrap">
            <div style={{ minWidth: 0 }}>
              <div className="jt-concept__head">
                <span className="jt-badge">Concept</span>
                <span className="jt-concept__kind">{c.kind}</span>
              </div>
              <h2 className="jt-concept__title">{c.title}</h2>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="jt-concept__row">
                  <span className="jt-concept__k">L'idée</span>
                  <p className="jt-concept__p">{c.idea}</p>
                </div>
                <div className="jt-concept__row">
                  <span className="jt-concept__k">Ce qu'on a construit</span>
                  <p className="jt-concept__p">{c.built}</p>
                </div>
                <div className="jt-concept__row jt-concept__row--last">
                  <span className="jt-concept__k">Ce qu'on a appris</span>
                  <p className="jt-concept__p">{c.learned}</p>
                </div>
              </div>
            </div>
            <div style={{ minWidth: 0 }}>
              <div className="jt-concept__media">
                <img src={c.img} alt={c.title} loading="lazy" />
              </div>
              <span className="jt-concept__stack">{c.stack}</span>
            </div>
          </div>
        </section>
      ))}

      <Signature />
      <ContactBand />
    </>
  )
}
