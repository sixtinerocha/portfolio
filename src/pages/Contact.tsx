import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import {
  Blob,
  GridPattern,
  GrainOverlay,
  Sparkle,
  SparkleCluster,
  PaperPlane,
  TitleUnderline,
} from '../components/DecorativeShapes';

const EMAIL = 'sixtine.rocha@supdepub.com';
const PHONE = '07.82.76.63.68';
const LINKEDIN_URL = 'https://www.linkedin.com/in/sixtine-rocha-8920a6229';

export function Contact() {
  return (
    <div className="relative w-full overflow-hidden bg-stone-50 text-stone-900 min-h-[calc(100vh-80px)] flex items-center justify-center pt-28 sm:pt-32 pb-20 sm:pb-24">
      <GrainOverlay />
      <GridPattern className="text-stone-900" />

      <Blob className="top-0 left-0 w-[40vw] h-[600px] bg-stone-200 rounded-br-[300px]" />
      <Blob className="bottom-0 right-0 w-[48vw] h-[500px] bg-stone-300 rounded-tl-[400px] animation-delay-2000" />

      <PaperPlane className="top-12 right-4 sm:right-12 w-32 h-28 sm:w-44 sm:h-40 text-stone-700 opacity-60" />
      <SparkleCluster className="bottom-24 left-8 w-32 h-24 text-stone-300 hidden md:block" />

      <div className="max-w-5xl w-full px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">

        <div className="flex-1 text-center lg:text-left w-full">
          <AnimatedSection delay={0.1} direction="up" className="mb-8 sm:mb-10">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium leading-[0.95] tracking-tight">
              ME{' '}
              <span className="relative inline-block">
                <span className="relative z-10 pr-3">CONTACTER</span>
                <TitleUnderline className="bottom-0 sm:bottom-1 left-0 w-full h-5 sm:h-6" delay={0.4} />
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2} direction="up" className="relative inline-block mb-10 sm:mb-12">
            <p className="font-handwriting text-3xl md:text-4xl text-stone-600 rotate-[-3deg] opacity-95">
              Hâte de pouvoir davantage<br />en discuter avec vous&nbsp;:)
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3} direction="up" className="space-y-4 flex flex-col items-center lg:items-start">
            <ContactRow href={`mailto:${EMAIL}`} icon={<Mail size={26} />} label={EMAIL} />
            <ContactRow href={`tel:${PHONE.replace(/\./g, '')}`} icon={<Phone size={26} />} label={PHONE} />
            <ContactRow
              href={LINKEDIN_URL}
              external
              icon={
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden>
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                </svg>
              }
              label="Sixtine ROCHA"
            />
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.4} direction="left" className="relative w-64 sm:w-72 h-80 sm:h-96 shrink-0 hidden md:block">
          <motion.div
            whileHover={{ rotate: 0, scale: 1.04 }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            className="absolute inset-0 bg-white p-4 pb-10 shadow-2xl border border-stone-200 rotate-3 rounded-sm z-10"
          >
            <img src="/assets/photos/profile.jpg" alt="Sixtine Rocha" className="w-full h-full object-cover rounded-sm" loading="lazy" />
          </motion.div>
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-28 h-8 bg-stone-200/90 backdrop-blur-sm rotate-[-8deg] shadow-md z-20 border border-white/20 rounded-sm" />
          <div className="absolute -inset-3 border-2 border-stone-300/50 rounded-md rotate-[-5deg] -z-10" />
          <Sparkle className="-top-8 -right-6 w-10 h-10 text-stone-400" />
        </AnimatedSection>
      </div>
    </div>
  );
}

function ContactRow({
  href,
  icon,
  label,
  external = false,
}: {
  href: string;
  icon: ReactNode;
  label: string;
  external?: boolean;
}) {
  return (
    <motion.a
      whileHover={{ x: 6 }}
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="flex items-center gap-4 sm:gap-5 text-stone-800 transition-colors group bg-white/85 backdrop-blur-md px-4 py-3 rounded-2xl border border-stone-200/60 shadow-sm hover:shadow-md w-full sm:w-fit cursor-pointer"
    >
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-700 group-hover:bg-stone-900 group-hover:text-white transition-colors shrink-0">
        {icon}
      </div>
      <span className="font-sans font-bold text-sm sm:text-lg md:text-xl tracking-wide break-all sm:break-normal">
        {label}
      </span>
    </motion.a>
  );
}
