import { siteConfig } from './data/site';

export type WhatsAppIntent =
  | 'default'
  | 'evaluation'
  | 'treatment'
  | 'case'
  | 'contact';

const MESSAGES: Record<WhatsAppIntent, string> = {
  default: 'Olá, gostaria de agendar uma avaliação.',
  evaluation: 'Olá, gostaria de agendar uma avaliação.',
  treatment: 'Olá, tenho interesse em saber mais sobre [TRATAMENTO].',
  case: 'Olá, vi um caso de [CASO] e gostaria de saber mais.',
  contact: 'Olá, gostaria de conversar com a clínica.',
};

export function getWhatsAppUrl(options?: {
  intent?: WhatsAppIntent;
  message?: string;
  treatment?: string;
  caseTitle?: string;
}): string {
  const number = siteConfig.whatsappNumber.replace(/\D/g, '');
  let message = options?.message;

  if (!message) {
    const intent = options?.intent ?? 'default';
    message = MESSAGES[intent];

    if (intent === 'treatment' && options?.treatment) {
      message = message.replace('[TRATAMENTO]', options.treatment);
    }
    if (intent === 'case' && options?.caseTitle) {
      message = message.replace('[CASO]', options.caseTitle);
    }
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
