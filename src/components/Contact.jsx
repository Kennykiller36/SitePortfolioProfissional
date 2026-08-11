import { useState } from 'react';
import { profile } from '../data/content';

const icons = {
  email: (
    <svg viewBox="0 0 24 24" aria-hidden="true" width="22" height="22">
      <path
        fill="currentColor"
        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"
      />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" aria-hidden="true" width="22" height="22">
      <path
        fill="currentColor"
        d="M12.04 2C6.58 2 2.15 6.4 2.15 11.84c0 1.96.52 3.8 1.44 5.42L2 22l4.9-1.54a9.86 9.86 0 0 0 5.14 1.42h.01c5.46 0 9.89-4.4 9.89-9.84C21.94 6.4 17.5 2 12.04 2zm5.74 13.95c-.24.68-1.4 1.24-1.93 1.32-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.66-.61-2.92-1.26-4.82-4.2-4.96-4.4-.14-.2-1.16-1.54-1.16-2.94 0-1.4.74-2.08 1-2.36.26-.28.57-.35.76-.35h.55c.17 0 .4-.06.62.47.24.56.8 1.94.87 2.08.07.14.12.3.02.48-.1.18-.14.3-.28.46-.14.16-.29.36-.41.48-.14.14-.28.29-.12.56.16.28.7 1.15 1.5 1.86 1.03.92 1.9 1.2 2.17 1.34.27.14.43.12.59-.07.16-.18.68-.79.86-1.06.18-.28.36-.23.6-.14.24.1 1.52.72 1.78.85.26.13.43.2.5.3.07.12.07.68-.17 1.36z"
      />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true" width="22" height="22">
      <path
        fill="currentColor"
        d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.3 18.3H5.7V9.7h2.6v8.6zM7 8.4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM18.3 18.3h-2.6v-4.2c0-1-.4-1.7-1.4-1.7-.8 0-1.2.5-1.4 1-.1.2-.1.5-.1.8v4.1h-2.6s.1-6.7 0-7.4h2.6v1.1c.3-.6 1-1.4 2.4-1.4 1.7 0 3.1 1.1 3.1 3.6v4.1z"
      />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" aria-hidden="true" width="22" height="22">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.4-1.1-1-1.4-1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.7 9.7 0 0 1 5 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.7.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5A10 10 0 0 0 12 2z"
      />
    </svg>
  ),
};

export default function Contact({ copy, lang }) {
  const [status, setStatus] = useState('idle');

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus('sending');

    try {
      // FormSubmit: free email delivery without backend. Confirm once via inbox.
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: data,
      });

      if (!response.ok) throw new Error('send failed');
      form.reset();
      setStatus('success');
    } catch {
      // Fallback: open mail client with prefilled message
      const name = data.get('name');
      const email = data.get('email');
      const message = data.get('message');
      const subject = encodeURIComponent(
        lang === 'pt' ? `Contato do portfólio — ${name}` : `Portfolio contact — ${name}`,
      );
      const body = encodeURIComponent(`${message}\n\n— ${name} <${email}>`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus('error');
    }
  }

  return (
    <section className="section contact" id="contato" aria-labelledby="contato-title">
      <div className="section-inner" data-reveal>
        <header className="section-head">
          <h2 id="contato-title">{copy.contactTitle}</h2>
          <p className="section-lead">{copy.contactLead}</p>
        </header>

        <div className="contact-layout">
          <ul className="social-links">
            <li>
              <a href={`mailto:${profile.email}`} aria-label="Email">
                {icons.email}
                <span>{profile.email}</span>
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${profile.phoneWhatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                {icons.whatsapp}
                <span>{profile.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                {icons.linkedin}
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                {icons.github}
                <span>GitHub</span>
              </a>
            </li>
          </ul>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <input type="hidden" name="_subject" value="Novo contato pelo portfólio" />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="_honey" className="honeypot" tabIndex={-1} autoComplete="off" />

            <label>
              <span>{copy.formName}</span>
              <input name="name" type="text" required autoComplete="name" />
            </label>
            <label>
              <span>{copy.formEmail}</span>
              <input name="email" type="email" required autoComplete="email" />
            </label>
            <label>
              <span>{copy.formMessage}</span>
              <textarea name="message" rows="5" required />
            </label>

            <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? copy.formSending : copy.formSubmit}
            </button>

            <p className="form-status" role="status" aria-live="polite">
              {status === 'success' ? copy.formSuccess : null}
              {status === 'error' ? copy.formError : null}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
