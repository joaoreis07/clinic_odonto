import { Link } from 'react-router-dom';
import { ROUTES } from '../lib/constants';
import { getWhatsAppUrl } from '../lib/whatsapp';
import { usePageMeta } from '../hooks/usePageMeta';

export function NotFound() {
  usePageMeta({
    title: 'Página não encontrada | Clinic+ Odonto',
    description: 'A página que você procura não existe.',
  });

  return (
    <section
      style={{
        minHeight: '100vh',
        background: '#080808',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 40px 80px',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '520px' }}>
        <span
          style={{
            fontSize: '11px',
            letterSpacing: '0.25em',
            color: 'rgba(255,255,255,0.3)',
            textTransform: 'uppercase',
          }}
        >
          404
        </span>
        <h1
          style={{
            fontFamily: 'Fraunces, serif',
            fontSize: 'clamp(40px, 6vw, 64px)',
            fontWeight: 400,
            color: '#ffffff',
            margin: '24px 0 16px',
            lineHeight: 1.05,
          }}
        >
          Página não encontrada.
        </h1>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.45)',
            margin: '0 0 40px',
            fontWeight: 300,
          }}
        >
          O endereço pode ter sido alterado ou não existe mais.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            to={ROUTES.home}
            style={{
              textDecoration: 'none',
              background: '#ffffff',
              color: '#080808',
              padding: '14px 28px',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Voltar ao início
          </Link>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.25)',
              color: 'rgba(255,255,255,0.7)',
              padding: '14px 28px',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
