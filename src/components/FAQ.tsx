import { useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  dark?: boolean;
}

export function FAQ({ items, dark = false }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <div style={{ width: '100%' }}>
      {items.map((item, i) => (
        <FAQRow
          key={item.question}
          item={item}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          index={i}
          isLast={i === items.length - 1}
          dark={dark}
          reduceMotion={!!reduceMotion}
        />
      ))}
    </div>
  );
}

function FAQRow({
  item,
  isOpen,
  onToggle,
  index,
  isLast,
  dark,
  reduceMotion,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
  isLast: boolean;
  dark: boolean;
  reduceMotion: boolean;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const borderColor = dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
  const textColor = dark ? '#ffffff' : '#111111';
  const muted = dark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.3)';
  const answerColor = dark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)';

  return (
    <div style={{ borderTop: `1px solid ${borderColor}`, borderBottom: isLast ? `1px solid ${borderColor}` : 'none' }}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          padding: '28px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ fontSize: '11px', letterSpacing: '0.15em', color: muted, minWidth: '24px' }}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <span style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(18px, 2.5vw, 20px)', fontWeight: 400, color: textColor }}>
            {item.question}
          </span>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 45 : 0, backgroundColor: isOpen ? (dark ? '#ffffff' : '#111111') : 'transparent' }}
          transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            border: `1px solid ${dark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path d="M7 2V12M2 7H12" stroke={isOpen ? (dark ? '#111' : '#fff') : (dark ? '#fff' : '#111')} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div ref={contentRef} style={{ paddingLeft: '44px', paddingBottom: '28px', maxWidth: '640px' }}>
              <p style={{ fontSize: '15px', lineHeight: 1.75, color: answerColor, margin: 0 }}>{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
