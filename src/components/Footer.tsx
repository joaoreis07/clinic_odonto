import { Link } from 'react-router-dom';
import { Logo } from './layout/Logo';
import { ROUTES } from '../lib/constants';
import { siteConfig } from '../lib/data/site';
import { getWhatsAppUrl } from '../lib/whatsapp';

export function Footer() {
  const waUrl = getWhatsAppUrl({ intent: 'evaluation' });
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="site-footer">
      <div className="container-editorial">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <Logo size="md" />
            </div>
            <p className="footer-desc">{siteConfig.description}</p>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="footer-wa-link">
              WhatsApp
            </a>
          </div>

          <div>
            <div className="footer-col-label">Navegação</div>
            <div className="footer-links">
              {[
                { label: 'Início', to: ROUTES.home },
                { label: 'Resultados', to: ROUTES.results },
                { label: 'Profissional', to: '/#profissional' },
                { label: 'A Clínica', to: ROUTES.clinic },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="footer-col-label">Contato</div>
            <div className="footer-contact">
              <div>
                <div className="footer-contact-label">WhatsApp</div>
                <a href={waUrl} className="footer-contact-value">
                  {siteConfig.whatsappDisplay}
                </a>
              </div>
              <div>
                <div className="footer-contact-label">Endereço</div>
                <a
                  href={siteConfig.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-value"
                >
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                </a>
              </div>
              <div>
                <div className="footer-contact-label">Horários</div>
                <p className="footer-contact-value">
                  {siteConfig.hours.weekdays}
                  {siteConfig.hours.saturday ? (
                    <>
                      <br />
                      {siteConfig.hours.saturday}
                    </>
                  ) : null}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} {siteConfig.fullName}. Todos os direitos reservados.</p>
          {siteConfig.instagram ? (
            <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="footer-instagram">
              Instagram
            </a>
          ) : (
            <span className="footer-instagram-muted">Instagram</span>
          )}
        </div>
      </div>
    </footer>
  );
}
