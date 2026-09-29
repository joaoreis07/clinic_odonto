export const ROUTES = {
  home: '/',
  treatments: '/tratamentos',
  results: '/resultados',
  case: (slug: string) => `/resultados/${slug}`,
  clinic: '/#clinica',
  contact: '/#contato',
} as const;

export function toRouterTarget(to: string) {
  const hashAt = to.indexOf('#');
  if (hashAt === -1) return to;
  return {
    pathname: to.slice(0, hashAt) || '/',
    hash: to.slice(hashAt),
  };
}

export const CASE_CATEGORIES = [
  'Todos',
  'Estética',
  'Reabilitação',
  'Ortodontia',
  'Implantes',
  'Outros',
] as const;

export type CaseCategory = (typeof CASE_CATEGORIES)[number];
