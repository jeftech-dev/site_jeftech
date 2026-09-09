import { SITE_FAQ } from '../data/site-content.js'

// Accordion FAQ + FAQPage structured data. `kicker`/`title` vary per screen.
export default function Faq({ kicker = 'Ce qu\'on nous demande', title = 'Ce qu\'on nous demande le plus souvent.', surface = false }) {
  return (
    <section className={`jt-section${surface ? ' jt-section--surface' : ''}`} aria-labelledby="faq-title">
      <div className="jt-section__wrap jt-split">
        <div className="jt-split__aside">
          <span className="jt-eyebrow">{kicker}</span>
          <h2 id="faq-title" className="jt-h2" style={{ marginBottom: 0, marginTop: 14 }}>{title}</h2>
        </div>
        <div className="jt-split__body jt-faq">
          {SITE_FAQ.map((q) => (
            <details key={q.q} className="jt-faq__item">
              <summary className="jt-faq__summary">
                {q.q}
                <span className="jt-plus" aria-hidden="true">+</span>
              </summary>
              <p className="jt-faq__answer">{q.a}</p>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: SITE_FAQ.map((q) => ({
              '@type': 'Question',
              name: q.q,
              acceptedAnswer: { '@type': 'Answer', text: q.a },
            })),
          }),
        }}
      />
    </section>
  )
}
