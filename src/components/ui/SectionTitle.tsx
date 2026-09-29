interface SectionTitleProps {
  label: string;
  title: React.ReactNode;
  subtitle?: string;
  dark?: boolean;
  align?: 'left' | 'center';
}

export function SectionTitle({
  label,
  title,
  subtitle,
  dark = false,
  align = 'left',
}: SectionTitleProps) {
  const textColor = dark ? '#ffffff' : '#111111';
  const muted = dark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.35)';
  const subMuted = dark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.55)';

  return (
    <div style={{ textAlign: align, maxWidth: align === 'center' ? '700px' : undefined, margin: align === 'center' ? '0 auto' : undefined }}>
      <span
        style={{
          display: 'block',
          fontSize: '11px',
          letterSpacing: '0.22em',
          color: muted,
          textTransform: 'uppercase',
          marginBottom: '16px',
        }}
      >
        {label}
      </span>
      <h2
        style={{
          fontFamily: 'Fraunces, serif',
          fontSize: 'clamp(32px, 4vw, 56px)',
          fontWeight: 400,
          color: textColor,
          lineHeight: 1.1,
          margin: subtitle ? '0 0 20px' : 0,
          letterSpacing: '-0.015em',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.75,
            color: subMuted,
            margin: 0,
            fontWeight: 300,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
