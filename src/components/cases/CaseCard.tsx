import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { ClinicalCase } from '../../lib/data/cases';
import { clinicalFocus } from '../../lib/data/images';
import { ROUTES } from '../../lib/constants';
import { MediaFrame } from '../ui/MediaFrame';

interface CaseCardProps {
  clinicalCase: ClinicalCase;
  tall?: boolean;
}

export function CaseCard({ clinicalCase, tall = false }: CaseCardProps) {
  const [hov, setHov] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => navigate(ROUTES.case(clinicalCase.slug))}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          navigate(ROUTES.case(clinicalCase.slug));
        }
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="case-card"
      aria-label={`Ver caso: ${clinicalCase.title}`}
    >
      <div className={`case-card-media${tall ? ' case-card-media-tall' : ''}`}>
        <MediaFrame
          src={clinicalCase.heroImage}
          alt={clinicalCase.title}
          aspectRatio={tall ? '3 / 4' : '16 / 10'}
          objectPosition={clinicalCase.imageFocus ?? clinicalFocus}
          filter="brightness(0.72)"
          className={hov ? 'case-card-image-hover' : ''}
        />
      </div>
      <div className="case-card-body">
        <h3 className="case-card-title">{clinicalCase.title}</h3>
        <span className={`case-card-link${hov ? ' case-card-link-active' : ''}`}>
          Ver caso →
        </span>
      </div>
    </div>
  );
}
