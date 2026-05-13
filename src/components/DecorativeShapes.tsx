import { motion } from 'motion/react';

/**
 * Soft, organic background blob — kept very subtle so it reads as paint, not a div.
 */
export function Blob({ className = '' }: { className?: string }) {
  return (
    <motion.div
      aria-hidden
      animate={{
        scale: [1, 1.04, 1],
        rotate: [0, 3, -3, 0],
        borderRadius: [
          '60% 40% 55% 45% / 50% 60% 40% 50%',
          '50% 50% 40% 60% / 60% 40% 60% 40%',
          '60% 40% 55% 45% / 50% 60% 40% 50%',
        ],
      }}
      transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      className={`absolute mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none ${className}`}
    />
  );
}

/**
 * Hand-drawn wavy line.
 */
export function Scribble({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden className={`absolute pointer-events-none ${className}`} viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: 'easeInOut' }}
        d="M5,30 Q25,5 50,30 T100,30 T150,30 T195,30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/**
 * Small hand-drawn sparkle / star — more "dessiné", with little outlined diamond + dots.
 */
export function Sparkle({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden className={`absolute pointer-events-none ${className}`} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        initial={{ scale: 0, rotate: -20 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: 'spring' }}
        d="M30 6 C 32 22, 38 28, 54 30 C 38 32, 32 38, 30 54 C 28 38, 22 32, 6 30 C 22 28, 28 22, 30 6 Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

/* Keep export for backwards compatibility (Star -> Sparkle look) */
export function Star({ className = '' }: { className?: string }) {
  return <Sparkle className={className} />;
}

/**
 * Mini sparkle cluster: 3 small sparkles like in the original portfolio.
 */
export function SparkleCluster({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden className={`absolute pointer-events-none ${className}`} viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.g
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <path d="M30 10 C 31 22, 35 26, 47 27 C 35 28, 31 32, 30 44 C 29 32, 25 28, 13 27 C 25 26, 29 22, 30 10 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M75 25 C 76 33, 79 36, 87 37 C 79 38, 76 41, 75 49 C 74 41, 71 38, 63 37 C 71 36, 74 33, 75 25 Z" stroke="currentColor" strokeWidth="1.4" fill="none" />
        <path d="M100 55 C 101 60, 103 62, 108 63 C 103 64, 101 66, 100 71 C 99 66, 97 64, 92 63 C 97 62, 99 60, 100 55 Z" stroke="currentColor" strokeWidth="1.3" fill="none" />
      </motion.g>
    </svg>
  );
}

/**
 * Hand-drawn arrow with curl.
 */
export function HandDrawnArrow({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden className={`absolute pointer-events-none ${className}`} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: 'easeInOut' }}
        d="M10 100 C 30 80, 35 60, 30 45 C 27 30, 40 25, 55 35 C 65 42, 70 55, 80 50 C 95 42, 105 25, 100 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <motion.path
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.4 }}
        d="M100 12 L 90 22 M100 12 L 108 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Heart sketch (used on About / Pourquoi moi).
 */
export function HeartSketch({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden className={`absolute pointer-events-none ${className}`} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        d="M40 68 C 28 56, 10 44, 14 28 C 17 16, 30 14, 38 24 C 40 27, 40 27, 42 24 C 50 14, 63 16, 66 28 C 70 44, 52 56, 40 68 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/**
 * Drawing of a steaming coffee cup — referenced from the original portfolio.
 */
export function CoffeeCup({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden className={`absolute pointer-events-none ${className}`} viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.g
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.4, ease: 'easeInOut' }}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      >
        {/* Steam swirl */}
        <motion.path d="M90 30 C 80 50, 110 60, 95 90 C 80 115, 115 125, 100 150" />
        {/* Cup body */}
        <path d="M40 110 L 50 195 C 52 208, 138 208, 140 195 L 150 110 Z" />
        {/* Cup ellipse rim */}
        <path d="M40 110 C 40 122, 150 122, 150 110" />
        {/* Handle */}
        <path d="M148 130 C 178 132, 178 175, 144 178" />
      </motion.g>
    </svg>
  );
}

/**
 * Paper plane — Contact page.
 */
export function PaperPlane({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden className={`absolute pointer-events-none ${className}`} viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.g
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      >
        <path d="M20 100 L 205 25 L 130 195 L 100 130 Z" />
        <path d="M20 100 L 130 130" />
        <path d="M100 130 L 130 130 L 130 175" />
      </motion.g>
    </svg>
  );
}

/**
 * Light tone-on-tone grid background.
 */
export function GridPattern({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`absolute inset-0 pointer-events-none opacity-[0.035] ${className}`}
      style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
        backgroundSize: '36px 36px',
      }}
    />
  );
}

/**
 * Subtle paper-grain overlay.
 */
export function GrainOverlay() {
  return <div aria-hidden className="pointer-events-none fixed inset-0 z-[100] h-full w-full opacity-[0.035] mix-blend-overlay bg-grain"></div>;
}

/**
 * Wavy ink-brush highlight strip for title text underlines.
 * Place inside a `relative inline-block` span. Animates in with whileInView.
 * Base classes already include `absolute -z-10 pointer-events-none text-stone-200`.
 */
export function TitleUnderline({ className = '', delay = 0.3 }: { className?: string; delay?: number }) {
  // NOTE: we use z-0 (not -z-10) on purpose: motion's scaleX transform creates a
  // transient stacking context during the animation. When the transform settles,
  // a negative z-index can pop the SVG behind the page background and make it
  // vanish. Keeping z-0 inside the parent's stacking context with the text at
  // z-10 reliably puts the highlight just behind the text and nothing else.
  return (
    <motion.svg
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{ duration: 0.9, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      style={{ transformOrigin: 'left center' }}
      className={`absolute z-0 pointer-events-none text-stone-200 ${className}`}
      viewBox="0 0 200 22"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M2,14 C35,7 72,20 112,13 C142,8 176,18 198,12 L198,21 C176,21 142,21 112,21 C72,21 35,21 2,21 Z"
        fill="currentColor"
      />
    </motion.svg>
  );
}

/**
 * Marker / highlight strip used behind words to mimic the original Canva painted-stripe look.
 * Renders an irregular hand-drawn stripe instead of a flat rectangle.
 */
export function InkHighlight({ className = '' }: { className?: string }) {
  return (
    <motion.svg
      aria-hidden
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
      style={{ transformOrigin: 'left center' }}
      className={`absolute -z-10 pointer-events-none ${className}`}
      viewBox="0 0 400 80"
      preserveAspectRatio="none"
    >
      <path
        d="M4 50 C 80 38, 160 62, 240 46 C 310 32, 360 58, 396 44 L 396 70 C 320 80, 240 60, 160 72 C 90 82, 40 62, 4 76 Z"
        fill="currentColor"
      />
    </motion.svg>
  );
}
