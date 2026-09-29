export const ROUTES = {
  home: '/',
  treatments: '/tratamentos',
  results: '/resultados',
  case: (slug: string) => `/resultados/${slug}`,
  clinic: '/#clinica',
  contact: '/#contato',
} as const;

export const CASE_CATEGORIES = [
  'Todos',
  'Estética',
  'Reabilitação',
  'Ortodontia',
  'Implantes',
  'Outros',
] as const;

export type CaseCategory = (typeof CASE_CATEGORIES)[number];
