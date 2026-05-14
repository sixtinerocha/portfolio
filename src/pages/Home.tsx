import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import {
  Blob,
  GridPattern,
  GrainOverlay,
  Sparkle,
  SparkleCluster,
  TitleUnderline,
} from '../components/DecorativeShapes';
import { Typewriter } from '../components/Typewriter';

/**
 * The longest typewriter phrase determines the reserved width.
 * "CRÉATION DE CONTENU" = 19 chars, "MARKETING CRÉATIF" = 17 chars.
 * We reserve a generous fixed width so the line never wraps and
 * never shifts the buttons below.
 */
const TYPEWRITER_PHRASES = [
  'CRÉATION DE CONTENU',
  'SOCIAL MEDIA',
  'BRAND CONTENT',
  'STRATÉGIE MÉDIA',
];

export function Home() {
  return (
    <div className="relative w-full overflow-hidden bg-stone-50 text-stone-900 min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-24 md:pb-32">
      <GrainOverlay />
      <GridPattern className="text-stone-900" />

      <Blob className="top-[-10%] left-[-10%] w-[55vw] h-[600px] bg-stone-200" />
      <Blob className="bottom-[-10%] right-[-10%] w-[60vw] h-[700px] bg-stone-300 animation-delay-2000" />

      <SparkleCluster className="top-32 left-4 lg:left-24 w-40 h-24 text-stone-400 opacity-60 hidden md:block" />
      <Sparkle className="bottom-40 right-4 lg:right-24 w-14 h-14 text-stone-300 opacity-50 hidden md:block" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: -5 }}
        transition={{ delay: 1, type: 'spring', stiffness: 100 }}
        className="absolute top-36 right-6 lg:right-24 bg-white/85 backdrop-blur-md border border-stone-200 shadow-xl px-5 py-2.5 rounded-2xl hidden xl:block z-20"
      >
        <span className="font-handwriting text-2xl text-stone-600">Créative &amp; Curieuse</span>
      </motion.div>

      <div className="max-w-5xl w-full mx-auto text-center relative z-10">
        <AnimatedSection delay={0.1}>
          <div className="inline-flex items-center justify-center gap-2 bg-white/70 backdrop-blur-sm border border-stone-200/50 px-5 py-2 rounded-full mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-stone-600 font-bold tracking-[0.18em] uppercase text-[10px] sm:text-[11px]">
              En recherche d'un poste en CDD / CDI
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} direction="up">
          {/* Two-line title — reserve a stable height so the buttons below never shift */}
          <h1 className="font-serif font-medium text-stone-900 text-balance mb-10">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] md:leading-[0.95]">
              COMMUNICATION &amp;
            </span>
            {/*
              Reserve a stable height for the typewriter line. min-h locks 2 lines
              of vertical space so the buttons below never move, even if a long
              phrase wraps at very narrow viewports.
            */}
            <span className="block mt-2 md:mt-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] md:leading-[0.95] min-h-[2.2em] sm:min-h-[1.1em]">
              <span className="relative inline-block align-baseline">
                <span
                  className="inline-block sm:whitespace-nowrap min-w-[12ch] sm:min-w-[18ch] md:min-w-[20ch] text-center italic text-stone-800 relative z-10 pr-2"
                >
                  <Typewriter
                    text={TYPEWRITER_PHRASES}
                    speed={80}
                    deleteSpeed={40}
                    delay={2500}
                    loop={true}
                  />
                </span>
                <TitleUnderline className="bottom-0 md:bottom-2 left-0 w-full h-3 sm:h-4 md:h-6" delay={0.8} />
              </span>
            </span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.4} direction="up">
          <div className="inline-flex flex-col items-center gap-3 mt-4">
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 320, damping: 22 }}
              className="bg-stone-900 text-stone-50 px-7 py-3.5 md:px-9 md:py-4 rounded-full text-base md:text-lg font-bold tracking-wide shadow-2xl rotate-[-2deg] border border-stone-800"
            >
              Dès septembre 2026
            </motion.div>
            <p className="font-handwriting text-lg sm:text-xl md:text-2xl text-stone-500 text-center opacity-90 rotate-[-1deg]">
              *prise de poste plus tôt envisageable&nbsp;!
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.6} direction="up">
          <div className="mt-14 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              to="/about"
              className="group flex items-center justify-center gap-3 bg-stone-900 text-white px-8 py-4 rounded-full font-bold uppercase tracking-[0.18em] text-xs md:text-sm hover:bg-stone-700 transition-colors duration-300 w-full sm:w-auto shadow-lg cursor-pointer"
            >
              Découvrir mon profil
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/creations"
              className="group flex items-center justify-center gap-3 bg-white/70 backdrop-blur-sm border border-stone-300 px-8 py-4 rounded-full text-stone-900 font-bold uppercase tracking-[0.18em] text-xs md:text-sm hover:border-stone-900 hover:bg-white transition-colors duration-300 w-full sm:w-auto cursor-pointer"
            >
              Voir mes créations
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </AnimatedSection>
      </div>

    </div>
  );
}
