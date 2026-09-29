import type { CaseCategory } from '../constants';
import { clinicalFocus } from './images';

export interface ClinicalCase {
  id: string;
  slug: string;
  title: string;
  category: Exclude<CaseCategory, 'Todos'>;
  treatment: string;
  summary: string;
  initialDescription: string;
  treatmentDescription: string;
  resultDescription: string;
  beforeImage: string;
  afterImage: string;
  heroImage: string;
  gallery: string[];
  stackedBeforeAfter?: boolean;
  imageFocus?: string;
  beforeObjectPosition?: string;
  afterObjectPosition?: string;
  /** Proporção do comparador. Quando definida, o card e a página do caso usam o enquadramento já recortado. */
  mediaAspect?: string;
  heroObjectPosition?: string;
  heroObjectFit?: 'cover' | 'contain';
  testimonial?: string;
  featured: boolean;
  published: boolean;
  order: number;
  elements?: string;
  duration?: string;
}

export const cases: ClinicalCase[] = [
  {
    id: 'reabilitacao-total',
    slug: 'reabilitacao-total',
    title: 'Reabilitação oral completa',
    category: 'Reabilitação',
    treatment: 'Caso clínico',
    summary: 'Transformação documentada com acompanhamento clínico em cada etapa.',
    initialDescription:
      'Situação inicial com perda dentária significativa e comprometimento estético e funcional.',
    treatmentDescription:
      'Planejamento e execução por etapas, com acompanhamento clínico em cada fase.',
    resultDescription:
      'Recuperação da estética e da função, com resultado integrado ao perfil do paciente.',
    beforeImage: '/images/results/rehab-total-before.jpeg',
    afterImage: '/images/results/rehab-total-after.jpeg',
    heroImage: '/images/results/rehab-total-after.jpeg',
    gallery: [
      '/images/results/rehab-total-before.jpeg',
      '/images/results/rehab-total-after.jpeg',
    ],
    imageFocus: 'center center',
    beforeObjectPosition: 'center center',
    afterObjectPosition: 'center center',
    featured: true,
    published: true,
    order: 1,
  },
  {
    id: 'estetica-harmonizacao',
    slug: 'estetica-harmonizacao',
    title: 'Harmonização do sorriso',
    category: 'Estética',
    treatment: 'Caso clínico',
    summary: 'Correção estética anterior com foco em naturalidade e proporção.',
    initialDescription:
      'Espaçamento e desarmonia na região anterior. Paciente buscava um resultado natural.',
    treatmentDescription:
      'Planejamento estético individualizado, conduzido com atenção aos detalhes.',
    resultDescription:
      'Sorriso harmonizado, com resultado integrado ao perfil do paciente.',
    beforeImage: '/images/results/before-diastema.jpeg',
    afterImage: '/images/results/after-crowns.jpeg',
    heroImage: '/images/results/after-crowns.jpeg',
    gallery: ['/images/results/before-diastema.jpeg', '/images/results/after-crowns.jpeg'],
    imageFocus: clinicalFocus,
    beforeObjectPosition: 'center 42%',
    afterObjectPosition: 'center 42%',
    featured: true,
    published: true,
    order: 2,
  },
  {
    id: 'ortodontia-alinhamento',
    slug: 'ortodontia-alinhamento',
    title: 'Acompanhamento infantil',
    category: 'Ortodontia',
    treatment: 'Caso clínico',
    summary: 'Evolução documentada em paciente infantil.',
    initialDescription:
      'Necessidade de correção do alinhamento dentário em fase de desenvolvimento.',
    treatmentDescription:
      'Acompanhamento periódico com orientação aos responsáveis.',
    resultDescription:
      'Evolução do alinhamento com adaptação do paciente ao tratamento.',
    beforeImage: '/images/results/before-ortho.jpeg',
    afterImage: '/images/results/after-ortho.jpeg',
    heroImage: '/images/results/after-ortho.jpeg',
    gallery: ['/images/results/before-ortho.jpeg', '/images/results/after-ortho.jpeg'],
    imageFocus: 'center center',
    beforeObjectPosition: 'center center',
    afterObjectPosition: 'center center',
    mediaAspect: '3 / 4',
    heroObjectPosition: 'center center',
    heroObjectFit: 'contain',
    featured: true,
    published: true,
    order: 4,
  },
  {
    id: 'reabilitacao-coroas',
    slug: 'reabilitacao-coroas',
    title: 'Reabilitação anterior',
    category: 'Reabilitação',
    treatment: 'Caso clínico',
    summary: 'Reconstrução de elementos anteriores desgastados.',
    initialDescription:
      'Desgaste e comprometimento estético dos dentes anteriores, com necessidade de reconstrução.',
    treatmentDescription:
      'Planejamento de cor e forma, executado com precisão clínica.',
    resultDescription:
      'Recuperação da estética anterior com dentes proporcionais e integrados ao sorriso.',
    beforeImage: '/images/results/before-crowns-crop.jpeg',
    afterImage: '/images/results/after-smile-macro-crop.jpeg',
    heroImage: '/images/results/after-smile-macro-crop.jpeg',
    gallery: [
      '/images/results/before-crowns-crop.jpeg',
      '/images/results/after-smile-macro-crop.jpeg',
    ],
    imageFocus: clinicalFocus,
    beforeObjectPosition: 'center 50%',
    afterObjectPosition: 'center 52%',
    featured: false,
    published: true,
    order: 3,
  },
  {
    id: 'estetica-lentes',
    slug: 'estetica-lentes',
    title: 'Transformação estética',
    category: 'Estética',
    treatment: 'Caso clínico',
    summary: 'Resultado documentado na clínica.',
    initialDescription:
      'Dentes anteriores com coloração e forma comprometidas, buscando melhora estética.',
    treatmentDescription:
      'Planejamento digital e execução do protocolo definido na avaliação.',
    resultDescription:
      'Sorriso renovado com resultado natural e integrado.',
    beforeImage: '/images/results/woman-before.jpeg',
    afterImage: '/images/results/woman-after.jpeg',
    heroImage: '/images/results/woman-after.jpeg',
    gallery: ['/images/results/woman-before.jpeg', '/images/results/woman-after.jpeg'],
    imageFocus: 'center center',
    beforeObjectPosition: 'center center',
    afterObjectPosition: 'center center',
    mediaAspect: '3 / 4',
    heroObjectPosition: 'center center',
    heroObjectFit: 'contain',
    featured: false,
    published: true,
    order: 5,
  },
  {
    id: 'implantes-reabilitacao',
    slug: 'implantes-reabilitacao',
    title: 'Reabilitação documentada',
    category: 'Reabilitação',
    treatment: 'Caso clínico',
    summary: 'Caso com planejamento por imagem e acompanhamento clínico.',
    initialDescription:
      'Ausências dentárias e necessidade de reabilitação. Diagnóstico por imagem e avaliação clínica.',
    treatmentDescription:
      'Planejamento guiado por exames de imagem e protocolo por etapas.',
    resultDescription:
      'Reabilitação funcional e estética conforme protocolo da clínica.',
    beforeImage: '/images/results/before-tablet-severe.jpeg',
    afterImage: '/images/results/after-tablet.jpeg',
    heroImage: '/images/results/after-tablet.jpeg',
    gallery: ['/images/results/before-tablet-severe.jpeg', '/images/results/after-tablet.jpeg'],
    imageFocus: 'center center',
    beforeObjectPosition: 'center center',
    afterObjectPosition: 'center center',
    mediaAspect: '3 / 4',
    heroObjectPosition: 'center center',
    heroObjectFit: 'contain',
    featured: false,
    published: true,
    order: 6,
  },
];

export function getPublishedCases(): ClinicalCase[] {
  return cases.filter((c) => c.published).sort((a, b) => a.order - b.order);
}

export function getFeaturedCases(): ClinicalCase[] {
  return getPublishedCases().filter((c) => c.featured);
}

export function getCaseBySlug(slug: string): ClinicalCase | undefined {
  return cases.find((c) => c.slug === slug && c.published);
}

export function getCasesByCategory(category: CaseCategory): ClinicalCase[] {
  const published = getPublishedCases();
  if (category === 'Todos') return published;
  return published.filter((c) => c.category === category);
}
