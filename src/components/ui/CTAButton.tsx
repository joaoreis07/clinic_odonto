import { useState } from 'react';
import { Link } from 'react-router-dom';
import { trackEvent } from '../../lib/tracking';

interface CTAButtonProps {
  href: string;
  label: string;
  variant?: 'primary' | 'outline' | 'dark';
  small?: boolean;
  external?: boolean;
  trackingLabel?: string;
}

export function CTAButton({
  href,
  label,
  variant = 'primary',
  small = false,
  external,
  trackingLabel,
}: CTAButtonProps) {
  const [hov, setHov] = useState(false);
  const isWA = href.includes('wa.me');
  const isExternal = external ?? isWA;

  const handleClick = () => {
    trackEvent(isWA ? 'whatsapp_click' : 'cta_click', {
      label: trackingLabel ?? label,
      location: 'cta-button',
    });
  };

  const styles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    textDecoration: 'none',
    padding: small ? '10px 20px' : '14px 28px',
    fontSize: small ? '12px' : '13px',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    transition: 'all 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
    cursor: 'pointer',
    border: 'none',
        ...(variant === 'primary'
      ? {
          background: hov ? '#f0f0ee' : '#ffffff',
          color: '#080808',
          transform: hov ? 'translateY(-3px) scale(1.01)' : 'translateY(0) scale(1)',
          boxShadow: hov ? '0 12px 32px rgba(255,255,255,0.14)' : 'none',
        }
      : variant === 'dark'
        ? {
            background: hov ? '#222222' : '#111111',
            color: '#ffffff',
            transform: hov ? 'translateY(-3px)' : 'translateY(0)',
            boxShadow: hov ? '0 12px 28px rgba(0,0,0,0.25)' : 'none',
          }
        : {
            background: hov ? 'rgba(255,255,255,0.04)' : 'transparent',
            color: hov ? '#ffffff' : 'rgba(255,255,255,0.6)',
            border: `1px solid ${hov ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.2)'}`,
            transform: hov ? 'translateY(-2px)' : 'translateY(0)',
          }),
  };

  const content = (
    <>
      {label}
      {(variant === 'primary' || variant === 'dark') && (
        <span
          style={{
            fontSize: '16px',
            lineHeight: 1,
            transition: 'transform 0.2s ease',
            transform: hov ? 'translateX(2px)' : 'translateX(0)',
          }}
        >
          →
        </span>
      )}
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={styles}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      to={href}
      onClick={handleClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={styles}
    >
      {content}
    </Link>
  );
}
