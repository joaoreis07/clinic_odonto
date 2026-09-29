export interface FAQItem {
  question: string;
  answer: string;
}

export const homeFAQ: FAQItem[] = [
  {
    question: 'Como funciona a avaliação?',
    answer:
      'A avaliação inicial é um momento de escuta e diagnóstico. Realizamos anamnese, exame clínico e, quando necessário, exames complementares. Ao final, apresentamos um plano de tratamento com etapas e investimento.',
  },
  {
    question: 'Como agendar?',
    answer:
      'O agendamento pode ser feito pelo WhatsApp. Nossa equipe responde e encontra o melhor horário para você.',
  },
  {
    question: 'Quais tratamentos são realizados?',
    answer:
      'Implantes, estética dental, ortodontia, reabilitação oral e prevenção. Cada caso é avaliado individualmente para definir o protocolo adequado.',
  },
  {
    question: 'Posso tirar dúvidas pelo WhatsApp?',
    answer:
      'Sim. Nossa equipe está disponível para orientar sobre tratamentos e ajudar você a entender qual o próximo passo mais adequado.',
  },
];

export const treatmentsFAQ: FAQItem[] = [
  {
    question: 'Todos os tratamentos exigem avaliação prévia?',
    answer:
      'Sim. Toda jornada começa com avaliação completa — anamnese, exame clínico e exames complementares quando necessário.',
  },
  {
    question: 'Qual a diferença entre facetas e lentes de contato?',
    answer:
      'Lentes de contato são extremamente finas e podem exigir preparo mínimo. Facetas permitem maior personalização de forma. A escolha depende do diagnóstico.',
  },
  {
    question: 'O clareamento dental é seguro?',
    answer:
      'Quando realizado com supervisão profissional e produtos adequados, o clareamento é seguro. Monitoramos sensibilidade durante o processo.',
  },
  {
    question: 'Quanto tempo dura um implante?',
    answer:
      'Implantes bem instalados e mantidos podem durar décadas. A longevidade depende de higiene, hábitos e consultas de manutenção.',
  },
];
