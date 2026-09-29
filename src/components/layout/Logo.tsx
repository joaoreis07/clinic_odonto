import { Link } from 'react-router-dom';
import { siteConfig } from '../../lib/data/site';
import { ROUTES } from '../../lib/constants';

interface LogoProps {
  variant?: 'full' | 'mark' | 'text';
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: { mark: 28, textMain: 14, textSub: 8 },
  md: { mark: 36, textMain: 18, textSub: 9 },
  lg: { mark: 44, textMain: 22, textSub: 10 },
};

/** Marca CLINIC+ — dente line-art + tipografia */
export function Logo({ variant = 'text', theme = 'light', size = 'md' }: LogoProps) {
  const s = sizes[size];
  const isLight = theme === 'light';

  if (variant === 'mark') {
    return (
      <img
        src={siteConfig.logos.mark}
        alt=""
        aria-hidden
        className="brand-logo-asset"
        style={{ height: s.mark * 1.4, width: 'auto', display: 'block' }}
      />
    );
  }

  if (variant === 'full') {
    return (
      <img
        src={siteConfig.logos.full}
        alt={siteConfig.fullName}
        className="brand-logo-asset"
        style={{ height: size === 'lg' ? 72 : 56, width: 'auto', display: 'block' }}
      />
    );
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <img
        src={siteConfig.logos.mark}
        alt=""
        aria-hidden
        className="brand-logo-asset"
        style={{ height: s.mark * 1.15, width: 'auto', display: 'block' }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
        <span
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: s.textMain,
            fontWeight: 700,
            letterSpacing: '0.14em',
            color: isLight ? '#ffffff' : '#111111',
            lineHeight: 1,
          }}
        >
          CLINIC+
        </span>
        <span
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: s.textSub,
            fontWeight: 300,
            letterSpacing: '0.38em',
            color: isLight ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.45)',
            lineHeight: 1,
          }}
        >
          O D O N T O
        </span>
      </div>
    </div>
  );
}

export function LogoLink({ variant = 'text', theme = 'light', size = 'md' }: LogoProps) {
  return (
    <Link to={ROUTES.home} aria-label={`${siteConfig.fullName} — início`} style={{ textDecoration: 'none' }}>
      <Logo variant={variant} theme={theme} size={size} />
    </Link>
  );
}

/** Dente line-art da marca (SVG inline) */
export function BrandToothMark({ size = 40, color = '#ffffff', className = '' }: { size?: number; color?: string; className?: string }) {
  return (
    <svg
      className={className}
      width={size}
      height={size * 1.15}
      viewBox="0 0 48 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M24 4 C16 2 8 8 7 18 C6 24 8 28 9 32 C10 38 9 44 11 48 C13 52 18 54 24 54 C30 54 35 52 37 48 C39 44 38 38 39 32 C40 28 42 24 41 18 C40 8 32 2 24 4 Z"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 14 C4 22 4 32 8 40 C12 48 18 52 24 52"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />
    </svg>
  );
}
