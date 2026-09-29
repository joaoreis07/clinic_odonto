import { clinicalFocus, portraitFocus } from './images';

export interface Treatment {
  id: string;
  slug: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  image: string;
  imageFocus?: string;
  featured: boolean;
}

export const treatments: Treatment[] = [
  {
    id: 'implantes',
    slug: 'implantes',
    number: '01',
    title: 'Implantes',
    tagline: 'Reposição com planejamento preciso.',
    description:
      'Reposição de dentes ausentes com implantes osseointegrados. Cada caso é avaliado individualmente para definir o protocolo mais adequado.',
    benefits: [
      'Avaliação e planejamento digital',
      'Integração óssea monitorada',
      'Prótese fixa ou removível',
      'Acompanhamento pós-operatório',
    ],
    image: '/images/cases/case-12.jpeg',
    imageFocus: portraitFocus,
    featured: true,
  },
  {
    id: 'estetica',
    slug: 'estetica-dental',
    number: '02',
    title: 'Estética Dental',
    tagline: 'Harmonia entre forma e cor.',
    description:
      'Facetas, lentes de contato, clareamento e restaurações estéticas. Planejamento individualizado respeitando características naturais do sorriso.',
    benefits: [
      'Mockup e planejamento digital',
      'Facetas e lentes de contato',
      'Clareamento supervisionado',
      'Restaurações diretas',
    ],
    image: '/images/cases/case-07.jpeg',
    imageFocus: clinicalFocus,
    featured: true,
  },
  {
    id: 'ortodontia',
    slug: 'ortodontia',
    number: '03',
    title: 'Ortodontia',
    tagline: 'Alinhamento com previsibilidade.',
    description:
      'Correção de apinhamento, espaçamentos e oclusão com aparelhos fixos, estéticos ou alinhadores. Planejamento digital do movimento dentário.',
    benefits: [
      'Alinhadores disponíveis',
      'Aparelhos estéticos',
      'Planejamento 3D',
      'Acompanhamento periódico',
    ],
    image: '/images/cases/case-10.jpeg',
    imageFocus: portraitFocus,
    featured: true,
  },
  {
    id: 'reabilitacao',
    slug: 'reabilitacao-oral',
    number: '04',
    title: 'Reabilitação Oral',
    tagline: 'Reconstrução integrada.',
    description:
      'Protocolos para casos com comprometimento extenso, integrando implantes, próteses e tratamentos complementares com planejamento multidisciplinar.',
    benefits: [
      'Diagnóstico completo',
      'Planejamento por etapas',
      'Recuperação de função',
      'Estética integrada',
    ],
    image: '/images/cases/case-11.jpeg',
    imageFocus: clinicalFocus,
    featured: true,
  },
  {
    id: 'prevencao',
    slug: 'prevencao',
    number: '05',
    title: 'Prevenção',
    tagline: 'Cuidado contínuo.',
    description:
      'Protocolos de prevenção e manutenção para preservar a saúde bucal e os resultados dos tratamentos realizados.',
    benefits: [
      'Profilaxia profissional',
      'Orientação de higiene',
      'Consultas de manutenção',
      'Monitoramento periódico',
    ],
    image: '/images/cases/case-04.jpeg',
    imageFocus: portraitFocus,
    featured: true,
  },
];

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return treatments.find((t) => t.slug === slug);
}
