import { motion } from 'motion/react';
import { AnimatedSection } from '../components/AnimatedSection';
import {
  Blob,
  GridPattern,
  GrainOverlay,
  Sparkle,
  SparkleCluster,
  HandDrawnArrow,
  TitleUnderline,
} from '../components/DecorativeShapes';

const education = [
  {
    id: 1,
    stamp: 'SEPTEMBRE 2024 – SEPTEMBRE 2026',
    school: 'SUP DE PUB',
    degree: 'MASTER COMMUNICATION',
    specialization: 'Spécialisation Communication et Stratégie Média',
    details:
      "Stratégie et activation de marque, stratégie d'influence, construction media, budgétaire…",
    logo: '/assets/logos-schools/supdepub.jpg',
    rotation: -1.5,
  },
  {
    id: 2,
    stamp: 'SEPTEMBRE 2021 – SEPTEMBRE 2024',
    school: 'KEDGE BUSINESS SCHOOL',
    degree: 'BACHELOR ÉCOLE DE COMMERCE',
    specialization: 'Spécialisation marketing communication',
    details:
      "Management de marque, communication stratégique, webmarketing, diagnostic et stratégie d'entreprise, marketing…",
    logo: '/assets/logos-schools/kedge.jpg',
    rotation: 2.5,
  },
  {
    id: 3,
    stamp: 'SEPTEMBRE 2020 – JUIN 2021',
    school: 'Lycée Bonaparte',
    degree: 'BACCALAURÉAT GÉNÉRAL',
    specialization: 'Mention Bien',
    details: 'Spécialisations sciences économiques et sociales et géopolitique.',
    logo: '/assets/logos-schools/bonaparte.jpeg',
    rotation: -2,
  },
];

export function Education() {
  return (
    <div className="relative w-full overflow-hidden bg-stone-50 text-stone-900 min-h-screen pb-32">
      <GrainOverlay />
      <GridPattern className="text-stone-900" />

      <Blob className="top-0 left-0 w-[48vw] h-[500px] bg-stone-200 rounded-br-[300px]" />
      <Blob className="bottom-20 right-0 w-[42vw] h-[600px] bg-stone-300 rounded-l-[400px] animation-delay-2000" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32">
        <AnimatedSection delay={0.1} direction="up" className="mb-24 sm:mb-32 relative">
          <h1 className="relative z-10 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium leading-[0.95] tracking-tight">
            MON PARCOURS<br />
            <span className="relative inline-block">
              <span className="relative z-10 pr-3">UNIVERSITAIRE</span>
              <TitleUnderline className="bottom-0 sm:bottom-1 left-0 w-full h-5 sm:h-6" delay={0.4} />
            </span>
          </h1>

          {/* Handwritten callout — the arrow visually originates from "UNIVERSITAIRE" and points to the note */}
          <div className="absolute top-[58%] right-0 lg:right-4 hidden lg:block pointer-events-none w-[14rem]">
            <p className="font-handwriting text-3xl lg:text-4xl text-stone-600 rotate-[5deg] opacity-90 text-right relative z-10">
              Toujours en train<br />d'apprendre&nbsp;!
            </p>
            <HandDrawnArrow className="-top-6 -left-16 w-20 h-20 text-stone-500 rotate-[75deg]" />
          </div>

          {/* Three little stars tucked into the empty space at the right of the first title line.
              No negative z-index so they always stay visible. */}
          <SparkleCluster className="top-1 right-0 lg:right-2 w-24 h-16 text-stone-400 hidden md:block" />
        </AnimatedSection>

        <div className="space-y-16 md:space-y-24 relative z-10">
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-stone-300/50 to-transparent hidden md:block -z-10" />

          {education.map((edu, index) => (
            <AnimatedSection
              key={edu.id}
              delay={0.1}
              direction={index % 2 === 0 ? 'left' : 'right'}
              className={`relative max-w-2xl ${index % 2 === 0 ? 'mr-auto md:pr-12' : 'ml-auto md:pl-12'}`}
            >
              <motion.div
                whileHover={{ scale: 1.015, y: -4 }}
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                style={{ rotate: edu.rotation }}
                className="relative p-7 md:p-9 rounded-[2.2rem] bg-white/90 backdrop-blur-sm border border-stone-200/60 shadow-lg group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-stone-100 rounded-bl-full -z-10" />

                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-stone-700 shadow-md border-2 border-stone-100 group-hover:bg-stone-500 transition-colors duration-200 z-10" />

                <div className="flex flex-col sm:flex-row sm:items-start gap-5 mb-4">
                  <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden border border-stone-200/60 shadow-sm bg-white p-2 group-hover:shadow-md transition-shadow">
                    <img src={edu.logo} alt={`Logo ${edu.school}`} className="w-full h-full object-contain" loading="lazy" />
                  </div>
                  <div className="flex flex-col">
                    <span className="inline-block text-[10px] font-bold tracking-[0.25em] text-stone-500 uppercase mb-3 bg-stone-100 rounded-full px-3 py-1 w-fit">
                      {edu.stamp}
                    </span>
                    <h3 className="font-serif font-bold text-2xl md:text-3xl text-stone-900 leading-tight mb-1.5">
                      {edu.degree}
                    </h3>
                    <h4 className="text-stone-500 font-sans font-semibold text-sm uppercase tracking-wider">
                      {edu.school}
                    </h4>
                  </div>
                </div>
                <p className="font-serif italic text-stone-700 mb-1.5 text-base">{edu.specialization}</p>
                <p className="text-stone-600 text-sm md:text-[15px] leading-relaxed">{edu.details}</p>

                <Sparkle className="bottom-4 right-6 w-6 h-6 text-stone-300 opacity-70" />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
