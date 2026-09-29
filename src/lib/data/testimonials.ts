export interface Testimonial {
  id: string;
  name: string;
  text: string;
  treatment?: string;
  photo?: string;
  /** Marcador para conteúdo demonstrativo — substituir antes de produção */
  isPlaceholder: boolean;
}

/** Placeholders — não apresentar como depoimentos reais em produção */
export const testimonials: Testimonial[] = [
  {
    id: 'placeholder-1',
    name: 'Depoimento a inserir',
    text: 'Espaço reservado para depoimento autorizado.',
    treatment: 'Estética dental',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-2',
    name: 'Depoimento a inserir',
    text: 'Espaço reservado para depoimento autorizado. Conteúdo demonstrativo para layout.',
    treatment: 'Ortodontia',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-3',
    name: 'Depoimento a inserir',
    text: 'Espaço reservado para depoimento autorizado. Conteúdo demonstrativo para layout.',
    treatment: 'Implantes',
    isPlaceholder: true,
  },
];
