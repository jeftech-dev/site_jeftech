import { useState } from 'react'
import { WEB3FORMS_KEY } from '../config.js'

// Shared call-to-action band closing the Home, Services and Concepts screens.
// Mirrors the `JeftechContactBand` design import: a short lead form wired to
// Web3Forms (same no-backend approach as the full contact form).
export default function ContactBand() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const form = e.target
    const data = new FormData(form)
    data.append('access_key', WEB3FORMS_KEY)
    data.append('subject', 'Demande de rappel — Jëftech')
    data.append('from_name', 'Site Jëftech · Bandeau contact')

    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
      const json = await res.json()
      setStatus(json.success ? 'success' : 'error')
      if (json.success) form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="jt-band" aria-labelledby="band-title">
      <div className="jt-band__wrap">
        <div style={{ minWidth: 0 }}>
          <span className="jt-eyebrow" style={{ marginBottom: 14 }}>Prochaine étape</span>
          <h2 id="band-title" className="jt-band__title">Un appel de trente minutes, et vous saurez à quoi vous en tenir.</h2>
          <p className="jt-band__text">
            Gratuit, sans engagement, et mené par la personne qui construirait votre projet. Si ce n'est pas pour nous, on vous le dira pendant l'appel.
          </p>
        </div>

        <form className="jt-band__card" onSubmit={handleSubmit}>
          <div className="jt-form">
            <label className="jt-field">
              <span>Votre nom</span>
              <input type="text" name="name" required placeholder="Aminata Diop" />
            </label>
            <label className="jt-field">
              <span>Email ou WhatsApp</span>
              <input type="text" name="contact" required placeholder="vous@entreprise.sn" />
            </label>

            <input type="checkbox" name="botcheck" className="jt-honeypot" tabIndex="-1" autoComplete="off" />

            <div className="jt-form__submit-row">
              <button type="submit" className="jt-btn jt-btn--brand" disabled={status === 'sending'}>
                {status === 'sending' ? 'Envoi…' : 'Réserver un appel'}
              </button>
              <span className="jt-form__note">
                Réponse sous 24 h ouvrées.<br />Aucune liste de diffusion.
              </span>
            </div>

            {status === 'success' && (
              <p className="jt-form__status jt-form__status--ok">Envoyé — on vous rappelle très vite.</p>
            )}
            {status === 'error' && (
              <p className="jt-form__status jt-form__status--err">Une erreur est survenue. Réessayez ou écrivez-nous directement.</p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
