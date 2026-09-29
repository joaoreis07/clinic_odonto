/** Caminhos e enquadramento das fotos reais — origem: pasta IMAGENS */

export const clinicImages = {
  hero: '/images/clinic/ambient.jpeg',
  experience: '/images/clinic/tablet-before.jpeg',
  ambient: '/images/clinic/ambient-smile.jpeg',
} as const;

export const doctorImages = {
  hero: '/images/doctor/dr-hero-crop.jpeg',
  portrait: '/images/doctor/dr-about.jpeg',
  action: '/images/doctor/dr-authority.jpeg',
  cta: '/images/doctor/dr-cta.jpeg',
} as const;

export const technologyImages = {
  tomography: '/images/technology/tomography-scan.jpeg',
  radiograph: '/images/technology/xray-tablet.jpeg',
  planning: '/images/technology/dental-model.jpeg',
  model: '/images/technology/dental-model.jpeg',
} as const;

/** Enquadramento por foto de tecnologia */
export const technologyFocus = {
  tomography: 'center center',
  radiograph: 'center 42%',
  planning: 'center 50%',
} as const;

export const resultImages = {
  stackedRehab: '/images/results/ba-stacked-rehab.jpeg',
  heroTablet: '/images/results/hero-tablet.jpeg',
} as const;

/** Fotos clínicas diretas — enquadramento centralizado nos dentes */
export const clinicalFocus = 'center 42%';

/** Fotos em tablet — enquadramento na tela */
export const tabletFocus = 'center 38%';

/** Retrato vertical — rosto / profissional */
export const portraitFocus = 'center 25%';

/** Retrato infantil — foco na boca / sorriso */
export const pediatricSmileFocus = 'center 72%';

/** Dr. em ação — foco no rosto/mãos */
export const doctorFocus = 'center 30%';

/** Imagem composta antes/depois (metade superior = antes, inferior = depois) */
export const compositeBeforeAfter = '/images/results/ba-stacked-rehab.jpeg';
