import type { Key, ReactNode } from 'react';
import { motion } from 'motion/react';
import { AnimatedSection } from '../components/AnimatedSection';
import {
  Blob,
  GridPattern,
  GrainOverlay,
  Sparkle,
  SparkleCluster,
  Scribble,
  TitleUnderline,
} from '../components/DecorativeShapes';

type ChipStyle = 'dark' | 'taupe' | 'cream' | 'paper';

interface Chip {
  label: string;
  style: ChipStyle;
  rotate: number;
  size: 'sm' | 'md' | 'lg' | 'xl';
  marginX?: string; // optional negative margin tweaks for overlap density
  marginY?: string;
}

/** Dense word-cloud composition. Order = visual order, line by line. */
const expertise: Chip[] = [
  { label: 'Identité de marque',  style: 'cream', rotate: -8, size: 'md' },
  { label: 'Création de contenu', style: 'paper', rotate: 2,  size: 'xl', marginX: '-ml-3' },
  { label: 'Stratégie de marque', style: 'taupe', rotate: 6,  size: 'md', marginX: '-ml-4' },

  { label: 'Social media',        style: 'dark',  rotate: -6, size: 'xl', marginY: '-mt-4' },
  { label: 'Webmarketing',        style: 'taupe', rotate: 4,  size: 'md', marginX: '-ml-3' },
  { label: 'Social Media Ads',    style: 'cream', rotate: -4, size: 'lg', marginX: '-ml-2', marginY: '-mt-3' },

  { label: 'SEO',                 style: 'paper', rotate: 2,  size: 'md', marginY: '-mt-2' },
  { label: 'Gestion de projet',   style: 'cream', rotate: -3, size: 'md', marginX: '-ml-3' },
];

const chipClass: Record<ChipStyle, string> = {
  dark:  'bg-stone-900 text-stone-50',
  taupe: 'bg-stone-400 text-white',
  cream: 'bg-stone-200 text-stone-900',
  paper: 'bg-stone-50 text-stone-900 border border-stone-300',
};

const chipSize: Record<NonNullable<Chip['size']>, string> = {
  sm: 'px-5 py-2.5 text-base sm:text-lg',
  md: 'px-6 py-3 text-lg sm:text-xl md:text-2xl',
  lg: 'px-7 py-3.5 text-xl sm:text-2xl md:text-3xl',
  xl: 'px-8 py-4 text-2xl sm:text-3xl md:text-4xl',
};

const softSkills = [
  'Écoute active',
  'Sens du collectif',
  'Organisation',
  'Patience',
  'Empathie',
  'Rigueur',
  'Discrétion',
  'Persévérance',
  'Sens du service',
  'Conscience professionnelle',
  'Esprit d’équipe',
];

const socialIcons = [
  { src: '/assets/social/instagram.svg', label: 'Instagram' },
  { src: '/assets/social/tiktok.svg',    label: 'TikTok' },
  { src: '/assets/social/linkedin.svg',  label: 'LinkedIn' },
  { src: '/assets/social/facebook.svg',  label: 'Facebook' },
  { src: '/assets/social/youtube.svg',   label: 'YouTube' },
  { src: '/assets/social/bereal.png',    label: 'BeReal' },
];

const kpiAndEmailingTools = [
  { src: '/assets/software/buffer.png',    label: 'Buffer' },
  { src: '/assets/software/hootsuite.png', label: 'Hootsuite' },
  { src: '/assets/software/facelift.png',  label: 'Facelift' },
  { src: '/assets/software/meta-bs.png',   label: 'Meta Business Suite' },
  { src: '/assets/software/tiktok-cc.png', label: 'TikTok Creative Center' },
  { src: '/assets/software/mailjet.png',   label: 'Mailjet' },
];

const designTools = [
  { src: '/assets/software/canva.png',       label: 'Canva' },
  { src: '/assets/software/figma.png',       label: 'Figma' },
  { src: '/assets/software/illustrator.png', label: 'Adobe Illustrator' },
  { src: '/assets/software/photoshop.png',   label: 'Adobe Photoshop' },
  { src: '/assets/software/lightroom.png',   label: 'Adobe Lightroom' },
  { src: '/assets/software/capcut.svg',      label: 'CapCut' },
  { src: '/assets/software/omi.svg',         label: 'OMI' },
];

const officeTools = [
  { src: '/assets/certifications/powerpoint.jpeg', label: 'PowerPoint' },
  { src: '/assets/certifications/word.png',        label: 'Word' },
  { src: '/assets/certifications/excel.png',       label: 'Excel' },
];

export function Skills() {
  return (
    <div className="relative w-full overflow-hidden bg-stone-50 text-stone-900 min-h-screen pb-32">
      <GrainOverlay />
      <GridPattern className="text-stone-900" />

      <Blob className="top-0 right-0 w-[42vw] h-[700px] bg-stone-200 rounded-bl-[200px]" />
      <Blob className="bottom-0 left-0 w-[48vw] h-[600px] bg-stone-300 rounded-tr-[300px] animation-delay-2000" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32">

        {/* ============================ MES COMPÉTENCES ============================ */}
        <section className="mb-32 sm:mb-40 relative">
          <AnimatedSection delay={0.1} direction="up" className="mb-12 sm:mb-16 relative inline-block z-20">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium leading-[0.95] tracking-tight">
              MES<br />
              <span className="relative inline-block">
                <span className="relative z-10 pr-3">COMPÉTENCES</span>
                <TitleUnderline className="bottom-0 sm:bottom-1 left-0 w-full h-5 sm:h-6" delay={0.4} />
              </span>
            </h1>
            <Sparkle className="-top-8 -right-10 sm:-top-10 sm:-right-14 w-12 h-12 sm:w-14 sm:h-14 text-stone-400 opacity-50" />
          </AnimatedSection>

          {/*
            Dense word-cloud composition. Chips wrap naturally and use small
            negative margins to slightly overlap, mimicking the original Canva
            collage look. No absolute positioning, fully responsive.
          */}
          <div className="relative">
            <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-1 sm:gap-y-3 sm:gap-x-2 max-w-3xl mx-auto py-4">
              {expertise.map((chip, i) => (
                <motion.span
                  key={chip.label}
                  initial={{ opacity: 0, y: 12, rotate: chip.rotate * 0.4 }}
                  whileInView={{ opacity: 1, y: 0, rotate: chip.rotate }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.55, delay: i * 0.06, ease: [0.21, 0.47, 0.32, 0.98] }}
                  whileHover={{
                    rotate: chip.rotate * 0.3,
                    scale: 1.05,
                    zIndex: 50,
                    transition: { duration: 0.2, ease: 'easeOut' },
                  }}
                  className={`inline-block font-serif font-medium tracking-tight whitespace-nowrap shadow-md relative
                    ${chipSize[chip.size]} ${chipClass[chip.style]}
                    ${chip.marginX ?? ''} ${chip.marginY ?? ''}`}
                >
                  {chip.label}
                </motion.span>
              ))}
            </div>
            <SparkleCluster className="-top-6 right-0 w-32 h-20 text-stone-400 opacity-60 hidden md:block" />
          </div>

          {/* Soft skills */}
          <AnimatedSection delay={0.3} direction="up" className="mt-20 md:mt-12">
            <div className="bg-white/85 backdrop-blur-md border border-stone-200/60 rounded-[2rem] p-7 md:p-10 shadow-sm">
              <h3 className="text-[10px] font-bold tracking-[0.35em] uppercase text-stone-500 mb-5">Savoir-être</h3>
              <div className="flex flex-wrap gap-2.5 md:gap-3">
                {softSkills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ y: -2 }}
                    className="px-4 py-2 rounded-full bg-stone-100 border border-stone-200 text-stone-800 font-serif italic text-base md:text-lg"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* ============================ LOGICIELS MAÎTRISÉS ============================ */}
        <section className="mb-32 relative">
          <AnimatedSection delay={0.1} direction="up" className="mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif font-medium leading-[0.95] tracking-tight">
              LOGICIELS<br />
              <span className="relative inline-block">
                <span className="relative z-10 pr-3">MAÎTRISÉS</span>
                <TitleUnderline className="bottom-0 sm:bottom-1 left-0 w-full h-5 sm:h-6" delay={0.4} />
              </span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            <SoftwareCard title="Réseaux sociaux" tone="light">
              <div className="flex flex-wrap gap-3">
                {socialIcons.map((s) => (
                  <BrandTile key={s.label} src={s.src} alt={s.label} />
                ))}
              </div>
            </SoftwareCard>

            <SoftwareCard title="Programmation, analyse KPI'S, emailing" tone="dark" className="lg:col-span-2">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                {kpiAndEmailingTools.map((s) => (
                  <BrandLogo key={s.label} src={s.src} alt={s.label} bg="dark" />
                ))}
              </div>
            </SoftwareCard>

            <SoftwareCard title="Création" tone="light" className="lg:col-span-3">
              <div className="flex flex-wrap gap-3">
                {designTools.map((s) => (
                  <BrandTile key={s.label} src={s.src} alt={s.label} />
                ))}
              </div>
            </SoftwareCard>
          </div>
        </section>

        {/* ============================ CERTIFICATIONS ============================ */}
        <section className="relative">
          <AnimatedSection delay={0.1} direction="up" className="mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif font-medium leading-[0.95] tracking-tight">
              <span className="relative inline-block">
                <span className="relative z-10 pr-3">CERTIFICATIONS</span>
                <TitleUnderline className="bottom-0 sm:bottom-1 left-0 w-full h-5 sm:h-6" delay={0.4} />
              </span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative z-10">
            <AnimatedSection delay={0.2} direction="up">
              <motion.div
                whileHover={{ y: -4 }}
                className="h-full bg-white/85 backdrop-blur-md p-8 md:p-10 rounded-[2rem] border border-stone-200/60 shadow-sm flex flex-col gap-6 group overflow-hidden relative"
              >
                <h3 className="font-sans font-bold text-xs tracking-[0.35em] uppercase text-stone-500">Suite Office</h3>
                <div className="flex flex-wrap items-center gap-4">
                  {officeTools.map((s) => (
                    <BrandTile key={s.label} src={s.src} alt={s.label} />
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} direction="up">
              <motion.div
                whileHover={{ y: -4 }}
                className="h-full bg-stone-900 text-stone-50 p-8 md:p-10 rounded-[2rem] border border-stone-800 shadow-lg flex flex-col items-center justify-center gap-5 group overflow-hidden relative"
              >
                <h3 className="font-sans font-bold text-xs tracking-[0.35em] uppercase text-stone-400">Anglais</h3>
                <div className="bg-white rounded-2xl px-6 py-5 shadow-sm flex flex-col items-center gap-2 w-full max-w-[260px]">
                  <img src="/assets/certifications/toeic.png" alt="TOEIC" className="h-12 w-auto object-contain" />
                  <span className="text-xs font-bold text-stone-500 uppercase tracking-[0.25em]">Niveau B2</span>
                </div>
                <Scribble className="bottom-4 right-4 w-20 h-6 text-stone-700" />
              </motion.div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </div>
  );
}

/* ============================ helpers ============================ */

function SoftwareCard({
  title,
  tone,
  className = '',
  children,
}: {
  title: string;
  tone: 'light' | 'dark';
  className?: string;
  children: ReactNode;
}) {
  const base = tone === 'dark'
    ? 'bg-stone-900 text-stone-100 border-stone-800'
    : 'bg-white/85 backdrop-blur-md text-stone-900 border-stone-200/60';
  const labelTone = tone === 'dark' ? 'text-stone-400' : 'text-stone-500';
  return (
    <AnimatedSection delay={0.2} direction="up" className={className}>
      <motion.div
        whileHover={{ y: -4 }}
        className={`h-full p-7 md:p-9 rounded-[2rem] shadow-sm border ${base}`}
      >
        <h3 className={`font-sans font-bold text-xs tracking-[0.35em] uppercase mb-5 ${labelTone}`}>{title}</h3>
        {children}
      </motion.div>
    </AnimatedSection>
  );
}

function BrandTile({ src, alt }: { src: string; alt: string; key?: Key }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.04 }}
      transition={{ type: 'spring', stiffness: 320, damping: 22 }}
      className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white border border-stone-200 shadow-sm flex items-center justify-center p-2 cursor-default overflow-hidden"
      title={alt}
      aria-label={alt}
    >
      <img src={src} alt={alt} loading="lazy" className="w-full h-full object-contain mix-blend-multiply" />
    </motion.div>
  );
}

function BrandLogo({ src, alt, bg }: { src: string; alt: string; bg: 'light' | 'dark'; key?: Key }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.04 }}
      transition={{ type: 'spring', stiffness: 320, damping: 22 }}
      className={`h-11 md:h-12 px-3.5 md:px-4 rounded-xl flex items-center justify-center cursor-default ${
        bg === 'dark' ? 'bg-white/95 border border-white/10 shadow-sm' : 'bg-stone-100 border border-stone-200'
      }`}
      title={alt}
      aria-label={alt}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-7 md:h-8 w-auto max-w-[160px] object-contain mix-blend-multiply"
      />
    </motion.div>
  );
}
