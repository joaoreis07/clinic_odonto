export const siteConfig = {
  name: 'Clinic+',
  tagline: 'Odonto',
  fullName: 'Clinic+ Odonto',
  description:
    'Seu sorriso merece mais. Odontologia de precisão com cuidado em cada detalhe.',
  locale: 'pt_BR',
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER ?? '5543996263909',
  whatsappDisplay: import.meta.env.VITE_WHATSAPP_DISPLAY ?? '(43) 99626-3909',
  instagram: import.meta.env.VITE_INSTAGRAM_URL ?? '',
  address: {
    line1: import.meta.env.VITE_ADDRESS_LINE1 ?? 'R. Dr. Marins de Camargo',
    line2: import.meta.env.VITE_ADDRESS_LINE2 ?? 'Conselheiro Mairinck — PR, 86480-000',
    mapsUrl:
      import.meta.env.VITE_MAPS_URL ?? 'https://maps.app.goo.gl/B536Kx6HmQdqoDWg8',
  },
  hours: {
    weekdays: import.meta.env.VITE_HOURS_WEEKDAYS ?? 'Segunda a sexta, 9h às 18h',
    saturday: import.meta.env.VITE_HOURS_SATURDAY ?? '',
  },
  doctor: {
    name: import.meta.env.VITE_DOCTOR_NAME ?? 'Dr. Everson Júnior',
    role: import.meta.env.VITE_DOCTOR_ROLE ?? 'Cirurgião-dentista',
    cro: import.meta.env.VITE_DOCTOR_CRO ?? 'CRO 31097/PR',
    bio:
      'Profissional responsável pela Clinic+ Odonto. Cuidado clínico com atenção em cada etapa.',
    photo: '/images/doctor/dr-about.jpeg',
    specialties: [] as string[],
  },
  logos: {
    full: '/images/logo-full.png',
    mark: '/images/logo-mark.png',
  },
} as const;
