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
  HeartSketch,
  CoffeeCup,
  Scribble,
  TitleUnderline,
  HandDrawnArrow,
} from '../components/DecorativeShapes';

export function About() {
  return (
    <div className="relative w-full overflow-hidden bg-stone-50 text-stone-900 min-h-screen pb-32">
      <GrainOverlay />
      <GridPattern className="text-stone-900" />

      <Blob className="top-0 left-0 w-[40vw] h-[700px] bg-stone-200 rounded-br-[200px]" />
      <Blob className="bottom-0 right-0 w-[48vw] h-[600px] bg-stone-300 rounded-tl-[300px] animation-delay-2000" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 relative">

        {/* ============================ À PROPOS DE MOI ============================ */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-32 sm:mb-40">

          <div className="lg:col-span-7 relative z-10 space-y-8">
            <AnimatedSection delay={0.1} direction="left" className="relative inline-block">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-[0.95] tracking-tight">
                À PROPOS<br />
                DE MOI
              </h1>
              <SparkleCluster className="-top-6 -right-12 sm:-top-8 sm:-right-20 w-28 h-20 text-stone-400 opacity-60" />
            </AnimatedSection>

            <AnimatedSection
              delay={0.25}
              direction="up"
              className="relative bg-white/85 backdrop-blur-md p-7 sm:p-9 rounded-[2rem] shadow-sm border border-stone-200/60 space-y-5 text-stone-800 leading-relaxed text-base sm:text-lg"
            >
              <p>
                Moi c'est <span className="font-serif italic text-stone-900">Sixtine</span>. Attirée par la communication et le marketing depuis le lycée, la distance ne m'a jamais fait peur pour faire ce que j'aime. Montréal, Bayonne, Lyon&nbsp;: j'ai choisi d'étudier là où je pouvais vraiment m'épanouir dans ce domaine&nbsp;!
              </p>
              <p>
                Après de riches années d'apprentissage à travers des stages et alternances en communication, vient le moment de terminer mes études et d'enfin m'insérer sur le marché du travail&nbsp;!
              </p>
            </AnimatedSection>
          </div>

          {/* Right column: portrait + accent quote, STACKED so the quote is never on top of the photo */}
          <div className="lg:col-span-5 relative">
            <AnimatedSection delay={0.3} direction="up" className="relative w-full max-w-xs sm:max-w-sm mx-auto lg:mx-0 lg:ml-auto">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-7 bg-stone-200/80 rotate-[-3deg] z-20 shadow-sm rounded-sm" />
              <div className="absolute top-3 -left-3 w-full h-full border border-stone-300 bg-stone-100/40 rounded-sm -z-0" />
              <motion.div
                whileHover={{ scale: 1.04, rotate: 1 }}
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                className="relative border-[10px] border-white bg-white overflow-hidden aspect-[4/5] shadow-xl rounded-sm z-10"
              >
                <img
                  src="/assets/photos/profile.jpg"
                  alt="Portrait de Sixtine Rocha"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.45} direction="up" className="mt-10 lg:mt-12 max-w-sm mx-auto lg:mx-0 lg:ml-auto">
              <div className="relative bg-stone-100/80 backdrop-blur-sm border border-stone-200/70 rounded-[1.75rem] p-6 sm:p-7 shadow-sm">
                <p className="font-serif italic text-xl sm:text-2xl leading-snug text-stone-900 text-center">
                  Je suis donc à la recherche d'une entreprise ayant besoin de mes skills en com' &amp; création de contenu&nbsp;!
                </p>
                <Sparkle className="-top-5 -right-4 w-9 h-9 text-stone-400/70" />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ============================ PROFIL DE COLLABORATION ============================ */}
        <section className="mb-32 sm:mb-40 relative">
          <AnimatedSection delay={0.1} direction="up" className="mb-12 relative inline-block z-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-[0.95] tracking-tight uppercase">
              Mon profil de <br/>
              <span className="relative inline-block">
                <span className="relative z-10 pr-3">collaboratrice</span>
                <TitleUnderline className="bottom-0 sm:bottom-1 left-0 w-full h-5 sm:h-6" delay={0.3} />
              </span><br/>
              <span className="text-3xl sm:text-4xl md:text-5xl text-stone-500 mt-2 block">en entreprise</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
            <div className="lg:col-span-7 space-y-8 relative z-10">
              <AnimatedSection
                delay={0.2}
                direction="up"
                className="bg-white/85 backdrop-blur-md p-7 sm:p-9 rounded-[2rem] shadow-sm border border-stone-200/60 space-y-6 text-stone-800 leading-relaxed text-base sm:text-lg"
              >
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-stone-900">
                    Savoir être : Profil Supporteur / Coordinateur
                  </h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] bg-emerald-100 text-emerald-800 border border-emerald-200 shadow-sm">
                    Personnalité verte
                  </span>
                </div>

                <p>
                  Le compte rendu indique une personnalité Supporteur / Coordinateur, avec une énergie verte dominante : une approche orientée vers l’écoute, la stabilité, la collaboration et l’organisation.
                </p>

                <div>
                  <p className="mb-3 font-medium">Selon le compte rendu Insights Discovery®, en contexte professionnel mon profil se distingue par :</p>
                  <ul className="space-y-2.5 pl-2 list-none">
                    {[
                      "Capacité à créer un climat de confiance dans une équipe",
                      "Respect des procédures, des délais et des engagements",
                      "Attention portée aux détails et à la qualité d’exécution",
                      "Compréhension des besoins des autres avant d’agir",
                      "Posture calme dans les échanges et les situations de tension",
                      "Travail structuré, régulier et orienté vers le collectif"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-emerald-500 mt-1.5 text-xs">●</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p>
                  Le profil met aussi en avant une façon de travailler méthodique, attentive aux détails et tournée vers le collectif. Une posture qui favorise la cohésion d’équipe, la qualité d’exécution et une collaboration durable.
                </p>

                <div className="pt-4">
                  <a
                    href="/assets/documents/insight-sixtine-rocha.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-3 bg-stone-900 text-white px-7 py-3.5 rounded-full font-bold uppercase tracking-[0.18em] text-xs hover:bg-stone-700 transition-colors duration-300 shadow-lg cursor-pointer"
                  >
                    Voir le compte rendu complet
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-5 relative mt-4 lg:mt-0 flex flex-col items-center">
              <AnimatedSection delay={0.4} direction="up" className="relative w-full max-w-[240px] sm:max-w-[260px] mx-auto lg:mx-0">
                {/* Bridge arrow pointing FROM graph top TO text block */}
                <svg 
                  aria-hidden 
                  className="hidden lg:block absolute -left-28 -top-12 w-32 h-24 text-stone-400 z-20" 
                  viewBox="0 0 100 80" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, ease: 'easeInOut' }}
                    d="M 85 55 Q 80 10, 45 15 T 5 35"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <motion.path
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.4 }}
                    d="M 5 35 L 8 21 M 5 35 L 20 33"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                
                <div className="relative bg-white p-4 sm:p-5 rounded-[2rem] shadow-xl border border-stone-200/60 z-10 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                  <p className="mb-4 text-center font-serif italic text-sm text-stone-600 font-medium">
                    Extrait du test Insights Discovery®
                  </p>
                  <img
                    src="/assets/documents/insights-graph.png"
                    alt="Graphique Insights Discovery"
                    loading="lazy"
                    className="w-full h-auto rounded-xl object-contain mix-blend-multiply"
                  />
                </div>
                <Scribble className="-bottom-8 -right-4 w-20 h-6 text-stone-400/60 -rotate-[15deg] hidden sm:block z-0" />
              </AnimatedSection>

              <AnimatedSection delay={0.5} direction="up" className="mt-14 lg:mt-20 w-full max-w-[500px] mx-auto lg:mx-0">
                <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-3 sm:gap-y-6 sm:gap-x-4 py-4">
                  {[
                    { label: "Écoute active", style: "dark", rotate: -6, size: "lg", marginY: "mt-2" },
                    { label: "Sens du collectif", style: "taupe", rotate: 4, size: "xl", marginX: "ml-2" },
                    { label: "Organisation", style: "paper", rotate: -3, size: "lg", marginY: "-mt-4" },
                    { label: "Patience", style: "paper", rotate: 6, size: "md", marginX: "ml-3" },
                    { label: "Empathie", style: "dark", rotate: -7, size: "lg", marginY: "mt-3" },
                    { label: "Rigueur", style: "taupe", rotate: 3, size: "md", marginX: "-ml-2" },
                    { label: "Discrétion", style: "paper", rotate: -5, size: "md", marginY: "mt-4" },
                    { label: "Persévérance", style: "paper", rotate: 5, size: "lg", marginX: "ml-4" },
                    { label: "Sens du service", style: "cream", rotate: -3, size: "xl", marginY: "-mt-2" },
                    { label: "Conscience pro", style: "paper", rotate: 4, size: "lg", marginX: "-ml-1" },
                    { label: "Esprit d’équipe", style: "cream", rotate: -6, size: "xl", marginY: "mt-5" }
                  ].map((skill, i) => {
                    const chipClass = {
                      dark:  'bg-stone-900 text-stone-50 border border-stone-800',
                      taupe: 'bg-stone-400 text-white border border-stone-400',
                      cream: 'bg-stone-200 text-stone-900 border border-stone-200',
                      paper: 'bg-stone-50 text-stone-900 border border-stone-300',
                    }[skill.style as 'dark'|'taupe'|'cream'|'paper'];
                    
                    const chipSize = {
                      md: 'px-5 py-2.5 text-base sm:text-lg',
                      lg: 'px-6 py-3 text-lg sm:text-xl',
                      xl: 'px-7 py-3.5 text-xl sm:text-2xl',
                    }[skill.size as 'md'|'lg'|'xl'];

                    return (
                      <motion.span
                        whileHover={{ scale: 1.05, rotate: 0, zIndex: 50, transition: { duration: 0.2 } }}
                        initial={{ opacity: 0, y: 15, rotate: skill.rotate * 0.5 }}
                        whileInView={{ opacity: 1, y: 0, rotate: skill.rotate }}
                        transition={{ duration: 0.6, delay: i * 0.05 }}
                        viewport={{ once: true }}
                        key={i}
                        className={`rounded-full shadow-sm font-serif italic cursor-default relative inline-block tracking-tight
                          ${chipClass} ${chipSize} ${skill.marginX || ''} ${skill.marginY || ''}`}
                      >
                        {skill.label}
                      </motion.span>
                    );
                  })}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ============================ POURQUOI MOI ? ============================ */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start relative">

          {/* Decorative coffee cup */}
          <CoffeeCup className="hidden lg:block -top-12 left-0 w-44 h-52 text-stone-400 opacity-50 pointer-events-none" />

          {/* Left: photo collage — each photo almost fully visible, just a slight overlap */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <AnimatedSection delay={0.2} direction="up" className="relative w-full mx-auto">
              <div className="relative w-full max-w-[420px] sm:max-w-[520px] mx-auto h-[600px] sm:h-[720px]">

                <PolaroidPhoto
                  src="/assets/photos/about-1.png"
                  alt="Sixtine en discussion"
                  className="absolute top-0 left-0 w-[52%] sm:w-[50%] z-10"
                  rotate={-6}
                />

                <PolaroidPhoto
                  src="/assets/photos/about-2.png"
                  alt="Sixtine sur un tournage"
                  className="absolute top-[22%] right-0 w-[52%] sm:w-[50%] z-20"
                  rotate={4}
                />

                <PolaroidPhoto
                  src="/assets/photos/about-3.png"
                  alt="Sixtine en interview"
                  className="absolute bottom-0 left-[24%] w-[52%] sm:w-[50%] z-30"
                  rotate={-3}
                  withTape
                />

                {/* Moody decorative accents tucked right against the collage */}
                <HeartSketch className="top-[18%] right-[6%] w-12 h-12 sm:w-14 sm:h-14 text-stone-500/90 z-40" />
                <Sparkle className="top-[56%] right-[2%] w-9 h-9 sm:w-10 sm:h-10 text-stone-400/80 z-40" />
                <SparkleCluster className="top-[4%] left-[2%] w-24 h-16 text-stone-400/70 hidden sm:block z-40" />
                <Scribble className="bottom-[6%] right-[14%] w-20 h-6 text-stone-400/60 -rotate-[8deg] hidden sm:block z-40" />
              </div>
            </AnimatedSection>
          </div>

          {/* Right: text */}
          <div className="lg:col-span-6 relative z-10 order-1 lg:order-2 space-y-8">
            <AnimatedSection delay={0.1} direction="right" className="relative inline-block">
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-[0.95] tracking-tight">
                <span className="relative inline-block">
                  <span className="relative z-10 pr-3">POURQUOI</span>
                  <TitleUnderline className="bottom-0 sm:bottom-1 left-0 w-full h-5 sm:h-6" delay={0.3} />
                </span><br />
                MOI&nbsp;?
              </h2>
              <Scribble className="-bottom-5 left-3/4 w-32 h-6 text-stone-400/70" />
            </AnimatedSection>

            <AnimatedSection
              delay={0.25}
              direction="up"
              className="relative bg-white/85 backdrop-blur-md p-7 sm:p-9 rounded-[2rem] shadow-sm border border-stone-200/60 space-y-5 text-stone-800 leading-relaxed text-base sm:text-lg"
            >
              <p>
                De nature discrète, je suis quelqu'un de très organisée, capable de jongler entre plusieurs missions et de me concentrer sur les priorités. Passionnée par le domaine de la com', j'aime beaucoup apprendre de nouvelles choses, et j'<span className="font-bold">ADORE</span> travailler en équipe pour partager les visions de chacun et avancer dans les objectifs.
              </p>
              <p>
                Pour moi, la clé pour être épanouie professionnellement, c'est avant tout aimer les différents projets que l'on mène, ainsi qu'une atmosphère de travail bienveillante&nbsp;!
              </p>
              <p>
                C'est pour cela qu'il me tient à cœur d'être dans une entreprise qui me correspond, avec une équipe dynamique et passionnée, idéalement dans le secteur de la <span className="font-serif italic text-stone-900">cosmétique</span>.
              </p>
            </AnimatedSection>

            {/* CTAs — keep the visitor moving forward on the site */}
            <AnimatedSection delay={0.4} direction="up" className="pt-2">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/experience"
                  className="group inline-flex items-center justify-center gap-3 bg-stone-900 text-white px-7 py-3.5 rounded-full font-bold uppercase tracking-[0.18em] text-xs hover:bg-stone-700 transition-colors duration-300 shadow-lg cursor-pointer"
                >
                  Voir mes expériences
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="/creations"
                  className="group inline-flex items-center justify-center gap-3 bg-white/80 backdrop-blur-sm border border-stone-300 px-7 py-3.5 rounded-full text-stone-900 font-bold uppercase tracking-[0.18em] text-xs hover:border-stone-900 hover:bg-white transition-colors duration-300 cursor-pointer"
                >
                  Voir mes créations
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </div>
  );
}

function PolaroidPhoto({
  src,
  alt,
  className = '',
  rotate = 0,
  withTape = false,
}: {
  src: string;
  alt: string;
  className?: string;
  rotate?: number;
  withTape?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: rotate * 0.4 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: '-80px' }}
      whileHover={{ scale: 1.04, rotate: rotate * 0.3, y: -6, zIndex: 50 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      className={`p-2 sm:p-3 pb-6 sm:pb-8 bg-white border border-stone-200 shadow-xl rounded-2xl aspect-[3/4] ${className}`}
    >
      {withTape && (
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-stone-200/80 rotate-[-3deg] shadow-sm rounded-sm" />
      )}
      <img src={src} alt={alt} loading="lazy" className="block w-full h-full object-cover rounded-xl" />
    </motion.div>
  );
}
