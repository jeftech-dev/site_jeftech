import { useState } from 'react'
import { CONTACT_EMAIL, WEB3FORMS_KEY, SOCIALS } from '../config.js'
import Faq from '../components/Faq.jsx'

const WA_LINK = `${SOCIALS.whatsapp}?text=${encodeURIComponent("Bonjour Jëftech, je veux parler d'un projet.")}`

export default function ContactPage() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const form = e.target
    const data = new FormData(form)
    data.append('access_key', WEB3FORMS_KEY)
    data.append('subject', 'Nouvelle demande d\'appel — Jëftech')
    data.append('from_name', 'Site Jëftech · Contact')

    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
      const json = await res.json()
      if (json.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <section>
        <div className="jt-contact__wrap">
          <div style={{ minWidth: 0 }}>
            <span className="jt-eyebrow jt-eyebrow--wide" style={{ marginBottom: 20 }}>Contact</span>
            <h1 className="jt-page-title" style={{ maxWidth: '20ch' }}>Deux champs. On s'occupe du reste.</h1>
            <p className="jt-contact__lede">
              On répond sous 24 heures ouvrées, avec une vraie réponse — pas un accusé de réception automatique. Si vous préférez écrire directement, tout est ci-dessous.
            </p>
            <div className="jt-contact__list">
              <a href={`mailto:${CONTACT_EMAIL}`} className="jt-contact__row">
                <span className="jt-contact__k">Email</span>
                <span className="jt-contact__v">{CONTACT_EMAIL}</span>
              </a>
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="jt-contact__row">
                <span className="jt-contact__k">WhatsApp</span>
                <span className="jt-contact__v">+221 77 964 95 39</span>
              </a>
              <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="jt-contact__row">
                <span className="jt-contact__k">LinkedIn</span>
                <span className="jt-contact__v">Jëftech</span>
              </a>
              <div className="jt-contact__row">
                <span className="jt-contact__k">Basés à</span>
                <span className="jt-contact__v--small">Dakar — on travaille à distance<br />partout au Sénégal et à l'international</span>
              </div>
            </div>
          </div>

          <form className="jt-form-card" onSubmit={handleSubmit}>
            <h2 className="jt-form-card__title">Réserver un appel de 30 minutes</h2>
            <div className="jt-form">
              <label className="jt-field">
                <span>Votre nom <span className="req">*</span></span>
                <input type="text" name="name" required placeholder="Aminata Diop" />
              </label>
              <label className="jt-field">
                <span>Email ou WhatsApp <span className="req">*</span></span>
                <input type="text" name="contact" required placeholder="vous@entreprise.sn" />
              </label>
              <label className="jt-field jt-field--opt">
                <span>Votre projet en une phrase — optionnel</span>
                <textarea name="message" rows="3" placeholder="Une boutique en ligne pour vendre au Sénégal et en France." />
              </label>

              <input type="checkbox" name="botcheck" className="jt-honeypot" tabIndex="-1" autoComplete="off" />

              <div className="jt-form__submit-row">
                <button type="submit" className="jt-btn jt-btn--brand" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Envoi…' : 'Envoyer'}
                </button>
                <span className="jt-form__note">
                  Réponse sous 24 h ouvrées.<br />Aucune liste de diffusion, aucun rappel commercial.
                </span>
              </div>

              {status === 'success' && (
                <p className="jt-form__status jt-form__status--ok">Message envoyé — on vous répond très vite.</p>
              )}
              {status === 'error' && (
                <p className="jt-form__status jt-form__status--err">
                  Une erreur est survenue. Écrivez-nous à {CONTACT_EMAIL}.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>

      <Faq kicker="Ce qu'on nous demande" title="Avant de nous écrire." surface />
    </>
  )
}
