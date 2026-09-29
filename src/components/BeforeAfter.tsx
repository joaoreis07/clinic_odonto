import { useCallback, useEffect, useRef, useState } from 'react';
import { clinicalFocus } from '../lib/data/images';
import { trackEvent } from '../lib/tracking';

interface BeforeAfterProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  height?: number | string;
  aspectRatio?: string;
  objectPosition?: string;
  beforeObjectPosition?: string;
  afterObjectPosition?: string;
  objectFit?: 'cover' | 'contain';
  className?: string;
  caseSlug?: string;
  /** Imagem única com metade superior = antes, inferior = depois */
  stacked?: boolean;
}

export function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeAlt = 'Antes',
  afterAlt = 'Depois',
  height,
  aspectRatio = '16 / 10',
  objectPosition = clinicalFocus,
  beforeObjectPosition,
  afterObjectPosition,
  objectFit = 'cover',
  className = '',
  caseSlug,
  stacked = false,
}: BeforeAfterProps) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [hasTracked, setHasTracked] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const beforePos = beforeObjectPosition ?? objectPosition;
  const afterPos = afterObjectPosition ?? objectPosition;

  useEffect(() => {
    const timer = setTimeout(() => {
      let frame = 0;
      const hint = () => {
        if (frame < 30) setPosition(50 - frame * 0.6);
        else if (frame < 90) setPosition(50 - 18 + (frame - 30) * 0.6);
        else if (frame < 120) setPosition(50 + 18 - (frame - 90) * 0.6);
        else {
          setPosition(50);
          return;
        }
        frame++;
        requestAnimationFrame(hint);
      };
      requestAnimationFrame(hint);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const updatePosition = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width) * 100;
      setPosition(Math.min(Math.max(x, 3), 97));
      if (!hasTracked) {
        setHasTracked(true);
        trackEvent('before_after_interaction', { slug: caseSlug, location: 'before-after' });
      }
    },
    [caseSlug, hasTracked],
  );

  const onPointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
  };

  const imgBase = stacked
    ? {
        width: '100%',
        height: '200%',
        objectFit,
        objectPosition: 'center center',
        display: 'block',
        pointerEvents: 'none' as const,
        position: 'absolute' as const,
        left: 0,
      }
    : {
        width: '100%',
        height: '100%',
        objectFit,
        display: 'block',
        pointerEvents: 'none' as const,
      };

  return (
    <div
      ref={containerRef}
      className={`ba-container ${className}`}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      style={{
        height: height ?? 'auto',
        aspectRatio: height ? undefined : aspectRatio,
      }}
      role="slider"
      aria-label="Comparar antes e depois"
      aria-valuemin={3}
      aria-valuemax={97}
      aria-valuenow={Math.round(position)}
    >
      {/* Esquerda = Antes | Direita = Depois */}
      <div
        className="ba-layer ba-before"
        style={{
          clipPath: `inset(0 ${100 - position}% 0 0)`,
          transition: isDragging ? 'none' : 'clip-path 0.08s ease-out',
        }}
      >
        <img
          src={beforeSrc}
          alt={beforeAlt}
          draggable={false}
          style={
            stacked
              ? { ...imgBase, top: 0, objectPosition: 'center top' }
              : { ...imgBase, objectPosition: beforePos }
          }
        />
        <span className="ba-label ba-label-left">Antes</span>
      </div>

      <div
        className="ba-layer ba-after"
        style={{
          clipPath: `inset(0 0 0 ${position}%)`,
          transition: isDragging ? 'none' : 'clip-path 0.08s ease-out',
        }}
      >
        <img
          src={afterSrc}
          alt={afterAlt}
          draggable={false}
          style={
            stacked
              ? { ...imgBase, top: '-100%', objectPosition: 'center bottom' }
              : { ...imgBase, objectPosition: afterPos }
          }
        />
        <span className="ba-label ba-label-right">Depois</span>
      </div>

      <div
        className={`ba-divider${isDragging ? ' ba-divider-active' : ''}`}
        style={{ left: `${position}%` }}
        onPointerDown={onPointerDown}
      >
        <div className="ba-handle">
          <svg width="20" height="12" viewBox="0 0 20 12" fill="none" aria-hidden>
            <path d="M5 6H1M1 6L4 3M1 6L4 9" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 6H19M19 6L16 3M19 6L16 9" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
