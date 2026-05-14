import type { Key, ReactNode } from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
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

type SocialIcon =
  | { kind: 'link'; type: 'instagram' | 'tiktok' | 'linkedin' | 'facebook' | 'youtube' | 'website'; href: string; label: string };

interface Experience {
  id: number;
  role: string;
  company: string;
  date: string;
  description: string[];
  icons: SocialIcon[];
  align: 'left' | 'right';
  /** Optional extra content rendered under the description — used for NAOS only. */
  extras?: ReactNode;
}

// NOTE: URLs marked "TODO verify" still need confirmation from Sixtine.
const experiences: Experience[] = [
  {
    id: 0,
    role: 'ALTERNANCE\nASSISTANTE CHEF DE\nCAMPAGNE & CONTENT',
    company: 'Groupe NAOS (Bioderma – Institut Esthederm – Etat Pur), Lyon',
    date: 'Septembre 2024 – Septembre 2026',
    description: [
      'Aide au déploiement des campagnes média',
      'Gestion des contenus UGC : brief, hook, validations',
      'Réflexion et planification des calendriers éditoriaux',
      'Création de contenus vidéos et photos (paid + organique)',
      'Élaboration de concepts créatifs et briefs agences',
      'Organisation de tournages (pharmacies, dermatologue)',
      'Benchmark mensuel et veille des trends',
      'Reporting des KPI',
    ],
    icons: [
      { kind: 'link', type: 'instagram', href: 'https://www.instagram.com/etatpur.fr', label: 'Instagram Etat Pur' },
      { kind: 'link', type: 'tiktok',    href: 'https://www.tiktok.com/@etatpur_fr',  label: 'TikTok Etat Pur' },
    ],
    align: 'left',
    extras: <NaosExtras />,
  },
  {
    id: 1,
    role: 'ALTERNANCE\nCHARGÉE MARKETING ET\nCOMMUNICATION DIGITALE',
    company: 'AGUILA TECHNOLOGIES, BIDART',
    date: 'Août 2023 – Août 2024',
    description: [
      'Création de supports de communication (goodies, brochures, flyers…)',
      'Gestion des réseaux sociaux en BtoB',
      'Lancement et optimisation de campagnes SEA',
      'Collaboration avec des agences externes : rédaction cahier des charges, maquettes',
      'Stratégie SEO : articles + optimisation des sites web',
      "Campagnes d'emailing",
      'Organisation salons professionnels',
    ],
    icons: [
      { kind: 'link', type: 'website',  href: 'https://www.breakee.fr',                                   label: 'Site Breakee (Aguila Technologies)' },
      { kind: 'link', type: 'linkedin', href: 'https://www.linkedin.com/company/aguila-technologie',    label: 'LinkedIn Aguila Technologies' },
    ],
    align: 'right',
    extras: <AguilaExtras />,
  },
  {
    id: 2,
    role: 'RESPONSABLE DE PROJET',
    company: 'LE KOI AU COUVENT, TOULON',
    date: 'Novembre 2022 – Juillet 2023',
    description: [
      "Initiative personnelle concernant la mise en place d'un restaurant dans le noir pour sensibiliser le public au handicap visuel :",
      'Établissement budget prévisionnel',
      'Démarchage entreprises partenaires',
      'Campagne de communication pré et post évènement',
      'Suivi des résultats et des performances du projet',
    ],
    icons: [
      {
        kind: 'link',
        type: 'linkedin',
        href: 'https://www.linkedin.com/feed/update/urn:li:activity:7096870352764461056/',
        label: 'Post LinkedIn — Le Koi au Couvent',
      },
    ],
    align: 'left',
    extras: <LeKoiExtras />,
  },
  {
    id: 3,
    role: 'STAGE\nCOMMUNITY MANAGER',
    company: 'NORDET&CO, MONTRÉAL',
    date: 'Janvier – Mai 2023',
    description: [
      'Développement de stratégies médias sociaux',
      'Gestion des réseaux sociaux',
      "Construction d'un calendrier éditorial régulier",
      'Gestion des médias sociaux clients',
      'Création de contenus : visuels, tournages et montage vidéo',
      'Rédaction de contenus',
    ],
    icons: [
      { kind: 'link', type: 'website',   href: 'https://nordetco.com',                            label: 'Site Nordet&Co' },
      { kind: 'link', type: 'instagram', href: 'https://www.instagram.com/nordet.co',           label: 'Instagram Nordet&Co' },
      { kind: 'link', type: 'linkedin',  href: 'https://www.linkedin.com/company/nordet-co',    label: 'LinkedIn Nordet&Co' },
    ],
    align: 'right',
  },
  {
    id: 4,
    role: 'STAGE\nCHARGÉE MARKETING\nCOMMUNICATION',
    company: 'IRIS&ARLO, MONTRÉAL',
    date: 'Janvier – Mai 2023',
    description: [
      'Lancement de la marque :',
      'Organisation et participation à des évènements',
      "Rédaction d'articles SEO",
      'Lancement du compte TikTok et création de contenu',
      'Questionnaires micro-trottoirs',
      'Rédaction de contenus : catalogues, fiches produits, discours…',
    ],
    icons: [
      { kind: 'link', type: 'website', href: 'https://irisarlo.com',               label: 'Site Iris&Arlo' },
      { kind: 'link', type: 'tiktok',  href: 'https://www.tiktok.com/@irisarlo',   label: 'TikTok Iris&Arlo' },
    ],
    align: 'left',
  },
  {
    id: 5,
    role: 'MISSION\nCONSULTING JUNIOR',
    company: 'LA FABRIQUE À DONUTS, TOULON',
    date: 'Janvier – Mai 2022',
    description: [
      'Analyse sectorielle (macro et micro environnement)',
      'Développement de la communication',
      "Propositions de solutions à la problématique de l'entreprise",
    ],
    icons: [
      { kind: 'link', type: 'instagram', href: 'https://www.instagram.com/lafabriqueadonuts_', label: 'Instagram La Fabrique à Donuts' },
    ],
    align: 'right',
  },
];

/** Visual map of "left → leans LEFT in the column, even with a notebook colour band on top." */
const cornerShapes: Record<'left' | 'right', { container: string; band: string; tilt: string }> = {
  left: {
    container: 'rounded-tr-[4rem] rounded-bl-[2.5rem] rounded-tl-[1rem] rounded-br-[1rem]',
    band:      'rounded-tr-[3.6rem] rounded-tl-[0.7rem]',
    tilt:      'md:-rotate-[0.6deg]',
  },
  right: {
    container: 'rounded-tl-[4rem] rounded-br-[2.5rem] rounded-tr-[1rem] rounded-bl-[1rem]',
    band:      'rounded-tl-[3.6rem] rounded-tr-[0.7rem]',
    tilt:      'md:rotate-[0.6deg]',
  },
};

export function Experience() {
  return (
    <div className="relative w-full overflow-hidden bg-stone-50 text-stone-900 min-h-screen pb-32 font-sans">
      <GrainOverlay />
      <GridPattern className="text-stone-900" />

      <Blob className="top-20 left-0 w-[32vw] h-[600px] bg-stone-200 rounded-r-full" />
      <Blob className="bottom-20 right-0 w-[40vw] h-[700px] bg-stone-300 rounded-l-full animation-delay-2000" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 relative">
        <AnimatedSection delay={0.1} direction="up" className="mb-14 sm:mb-20 relative">
          <h1 className="text-[10.5vw] xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium leading-[0.95] tracking-tight">
            MES EXPÉRIENCES<br />
            <span className="relative inline-block tracking-tighter sm:tracking-tight">
              <span className="relative z-10">PROFESSIONNELLES</span>
              <TitleUnderline className="bottom-0 sm:bottom-1 left-0 w-full h-5 sm:h-6" delay={0.4} />
            </span>
          </h1>
          <p className="mt-8 text-stone-600 max-w-xl text-base md:text-lg leading-relaxed font-medium">
            Cliquez sur les icônes pour découvrir l'ensemble des sites et réseaux sociaux sur lesquels j'ai pu travailler de manière partielle ou en autonomie totale.
          </p>

          <SparkleCluster className="-top-4 right-0 w-32 h-24 text-stone-300 hidden md:block" />
        </AnimatedSection>

        <div className="relative z-10">
          <SnakeTimeline />

          <div className="space-y-20 md:space-y-28">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.id} exp={exp} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ExperienceCard({ exp }: { exp: Experience; key?: Key }) {
  const shapes = cornerShapes[exp.align];
  // Side classes — make the alignment FRANK (no half/half desktop swap).
  const sideClass =
    exp.align === 'left'
      ? 'md:mr-auto md:ml-0 md:max-w-[42rem] lg:max-w-[44rem]'
      : 'md:ml-auto md:mr-0 md:max-w-[42rem] lg:max-w-[44rem]';
  const datePillTilt = exp.align === 'left' ? '-rotate-[3deg]' : 'rotate-[3deg]';

  return (
    <AnimatedSection
      delay={0.05}
      direction={exp.align === 'left' ? 'right' : 'left'}
      className={`relative w-full ${sideClass}`}
    >
      <article
        className={`relative ${shapes.container} ${shapes.tilt} bg-stone-50 border border-stone-200 shadow-[0_10px_40px_-12px_rgba(50,40,30,0.18)] overflow-hidden group transition-transform duration-300 hover:-translate-y-1`}
      >
        {/* Colour band header */}
        <div
          className={`relative px-6 sm:px-8 md:px-10 pt-8 pb-6 bg-stone-200/80 ${shapes.band}`}
        >
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className={`flex flex-col gap-3 max-w-[80%]`}>
              <span
                className={`inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-stone-700 bg-stone-50 px-3 py-1 rounded-full shadow-sm border border-stone-300/60 ${datePillTilt} self-start`}
              >
                {exp.date}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl md:text-[1.7rem] text-stone-900 uppercase tracking-wide whitespace-pre-line leading-snug font-bold">
                {exp.role}
              </h3>
              <h4 className="font-bold text-stone-800 uppercase tracking-[0.18em] text-sm md:text-base">
                {exp.company}
              </h4>
            </div>

            <div className="flex items-center gap-2 bg-stone-50 p-1.5 rounded-full shadow-sm border border-stone-200">
              {exp.icons.map((icon, i) => (
                <SocialIconButton key={i} icon={icon} />
              ))}
            </div>
          </div>

          <Sparkle
            className={`absolute -bottom-3 w-7 h-7 text-stone-400/70 ${exp.align === 'left' ? 'right-8' : 'left-8'}`}
          />
        </div>

        {/* Body */}
        <div className="px-6 sm:px-8 md:px-10 pt-7 pb-8 md:pb-10">
          <ul className="text-stone-700 text-[15px] md:text-base leading-relaxed font-medium space-y-1.5 list-none">
            {exp.description.map((line, i) => {
              const isTitle = line.endsWith(':');
              return (
                <li key={i} className={`flex ${isTitle ? 'mb-2 mt-4 first:mt-0' : 'gap-2.5'}`}>
                  {!isTitle && <span className="mt-2 w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0" />}
                  <span className={isTitle ? 'font-serif text-lg text-stone-900 font-bold' : ''}>{line}</span>
                </li>
              );
            })}
          </ul>

          {exp.extras && <div className="mt-10">{exp.extras}</div>}
        </div>
      </article>
    </AnimatedSection>
  );
}

/* ============================== NAOS extras ============================== */

function NaosExtras() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="relative">
      <div className="flex items-center gap-3 mb-5">
        <Sparkle className="!relative w-6 h-6 text-stone-500" />
        <h5 className="font-serif text-xl md:text-2xl font-bold text-stone-900">
          Quelques chiffres clés
        </h5>
      </div>

      {/*
        One collapsible block holding: 2025 period card, T1 2026 period card,
        the 28 % KPI badge, and the Feed Evolution before/after.
        Collapsed view shows just the start of the first card with a fade.
      */}
      <div className="relative">
        <motion.div
          initial={false}
          animate={{ maxHeight: expanded ? 5200 : 360 }}
          transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="overflow-hidden"
        >
          <div className="flex flex-col gap-6 md:gap-8">
            <PeriodCard
              label="2025"
              metrics={FIGURES_2025}
            />
            <PeriodCard label="T1 2026" metrics={FIGURES_T1_2026} />
            <KpiBadge />
            <FeedEvolution />
          </div>
        </motion.div>

        <AnimatePresence>
          {!expanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-stone-50 via-stone-50/90 to-transparent"
              aria-hidden
            />
          )}
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-5">
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-900 text-stone-50 text-[11px] font-bold tracking-[0.2em] uppercase shadow-md hover:bg-stone-700 transition-colors cursor-pointer"
        >
          {expanded ? 'Voir moins' : 'Voir plus'}
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${expanded ? 'rotate-180' : 'rotate-0'}`}
          />
        </button>
      </div>
    </section>
  );
}

interface KeyMetric {
  channel: 'instagram' | 'tiktok';
  headline: string; // "+108 %", "+47 %", ...
  headlineSuffix: string; // "followers vs 2024"
  details: string[]; // secondary lines (kept stone-700)
}

const FIGURES_2025: KeyMetric[] = [
  {
    channel: 'instagram',
    headline: '+108 %',
    headlineSuffix: 'followers vs 2024',
    details: [
      '**11,1K** followers gagnés sur l\'année 2025',
      'VS 5,3K gagnés en 2024 (**26,6 %** VS 2023)',
    ],
  },
  {
    channel: 'tiktok',
    headline: '+47 %',
    headlineSuffix: 'followers vs 2024',
    details: [
      '3,7K followers gagnés sur l\'année 2025',
      "40K j'aimes sur 2025",
      '700 commentaires générés en 2025',
    ],
  },
];

const FIGURES_T1_2026: KeyMetric[] = [
  {
    channel: 'instagram',
    headline: '+23,6 %',
    headlineSuffix: 'followers vs T1 2025',
    details: [
      "Taux d'engagement : **2,14 %**",
      'Taux de complétion moyen : **25,5 %**',
    ],
  },
  {
    channel: 'tiktok',
    headline: '+295 %',
    headlineSuffix: 'followers vs T1 2025',
    details: [
      "Taux d'engagement : **3,49 %**",
      "6,6K j’aimes sur le T1 2026",
      '222 commentaires',
    ],
  },
];

function PeriodCard({ label, metrics }: { label: string; metrics: KeyMetric[] }) {
  return (
    <div className="bg-white border border-stone-200/70 rounded-2xl shadow-sm p-5 md:p-6">
      <div className="inline-block bg-sky-100 text-sky-900 font-bold tracking-[0.18em] text-[11px] uppercase px-3 py-1.5 rounded-md mb-5">
        {label}
      </div>

      <div className="space-y-5">
        {metrics.map((m, i) => (
          <MetricRow key={i} metric={m} />
        ))}
      </div>

    </div>
  );
}

function MetricRow({ metric }: { metric: KeyMetric; key?: Key }) {
  return (
    <div className="flex items-start gap-3">
      <ChannelIcon channel={metric.channel} />
      <div className="flex-1 min-w-0">
        <p className="leading-tight">
          <span className="font-bold text-emerald-600 text-xl md:text-2xl tracking-tight">{metric.headline}</span>
          <span className="ml-2 text-stone-700 text-sm md:text-base">{metric.headlineSuffix}</span>
        </p>
        <ul className="mt-1.5 space-y-0.5 text-[13px] md:text-sm text-stone-600 leading-relaxed">
          {metric.details.map((d, i) => {
            // Highlight only text wrapped in **double asterisks** — gives fine-grained
            // control over which numbers/words appear in green.
            const highlighted = d.replace(
              /\*\*([^*]+)\*\*/g,
              '<span class="font-bold text-emerald-600">$1</span>',
            );
            return <li key={i} dangerouslySetInnerHTML={{ __html: highlighted }} />;
          })}
        </ul>
      </div>
    </div>
  );
}

function ChannelIcon({ channel }: { channel: 'instagram' | 'tiktok' }) {
  return (
    <span className="w-9 h-9 rounded-full bg-stone-100 flex items-center justify-center shrink-0 shadow-sm border border-stone-200">
      <img
        src={channel === 'instagram' ? '/assets/social/instagram.svg' : '/assets/social/tiktok.svg'}
        alt={channel}
        className="w-5 h-5 object-contain"
      />
    </span>
  );
}

function KpiBadge() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative flex items-center gap-5 sm:gap-7 bg-stone-100/80 border border-stone-200 rounded-2xl shadow-sm px-6 sm:px-8 py-6 sm:py-7 -rotate-[1.5deg] origin-center"
    >
      <span className="font-serif font-bold text-emerald-600 text-5xl sm:text-6xl md:text-7xl tracking-tight leading-none shrink-0">
        28&nbsp;%
      </span>
      <p className="text-stone-800 text-base md:text-lg leading-snug font-medium">
        des <span className="font-bold">achats site web</span> générés par le<br className="hidden sm:block" />
        social <span className="italic">paid</span> et <span className="italic">organic</span>
      </p>
      <Sparkle className="!absolute -top-3 -right-2 w-7 h-7 text-stone-400" />
    </motion.section>
  );
}

function FeedEvolution() {
  return (
    <section>
      <div className="flex items-center gap-3 mb-5">
        <Sparkle className="!relative w-6 h-6 text-stone-500" />
        <h5 className="font-serif text-xl md:text-2xl font-bold text-stone-900">
          Évolution du feed Instagram
        </h5>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:gap-6 items-end relative">
        <FeedColumn src="/assets/etat-pur/feed-before.jpeg" alt="Ancien feed Instagram Etat Pur" caption="Avant" rotate={-2} />
        <FeedColumn src="/assets/etat-pur/feed-after.jpeg"  alt="Nouveau feed Instagram Etat Pur" caption="Après" rotate={2} />

        <HandDrawnArrow className="hidden sm:block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-stone-700 rotate-90 z-10" />
      </div>
    </section>
  );
}

function FeedColumn({ src, alt, caption, rotate }: { src: string; alt: string; caption: string; rotate: number }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      style={{ rotate: `${rotate}deg` }}
      className="bg-white border border-stone-200 rounded-2xl shadow-md p-3 sm:p-4"
    >
      <div className="aspect-[4/5] overflow-hidden rounded-xl">
        <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover" />
      </div>
      <figcaption className="text-center mt-2.5 text-sm font-bold tracking-[0.2em] uppercase text-stone-600">
        {caption}
      </figcaption>
    </motion.figure>
  );
}

/* ============================== AGUILA extras ============================== */

function AguilaExtras() {
  return (
    <section>
      <div className="flex items-center gap-3 mb-5">
        <Sparkle className="!relative w-6 h-6 text-stone-500" />
        <h5 className="font-serif text-xl md:text-2xl font-bold text-stone-900">
          Quelques chiffres clés
        </h5>
      </div>
      <div className="bg-white border border-stone-200/70 rounded-2xl shadow-sm p-5 md:p-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
             <div className="w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0 mt-2.5" />
             <p className="leading-tight">
               <span className="font-bold text-emerald-600 text-xl md:text-2xl tracking-tight">17,5 %</span>
               <span className="ml-2 text-stone-700 text-sm md:text-base font-medium">de taux d’engagement sur LinkedIn (vs 11 % N-1)</span>
             </p>
          </div>
          <div className="flex items-start gap-3">
             <div className="w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0 mt-2.5" />
             <p className="leading-tight">
               <span className="font-bold text-emerald-600 text-xl md:text-2xl tracking-tight">26,7 %</span>
               <span className="ml-2 text-stone-700 text-sm md:text-base font-medium">de taux d’ouverture emailing</span>
             </p>
          </div>
          <div className="flex items-start gap-3">
             <div className="w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0 mt-2.5" />
             <p className="leading-tight">
               <span className="font-bold text-emerald-600 text-xl md:text-2xl tracking-tight">54,9 %</span>
               <span className="ml-2 text-stone-700 text-sm md:text-base font-medium">de taux de clics emailing</span>
             </p>
          </div>
          <div className="flex items-start gap-3">
             <div className="w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0 mt-2.5" />
             <p className="leading-tight">
               <span className="font-bold text-emerald-600 text-xl md:text-2xl tracking-tight">9 %</span>
               <span className="ml-2 text-stone-700 text-sm md:text-base font-medium">de CTR moyen sur les campagnes SEA</span>
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================== LE KOI extras ============================== */

function LeKoiExtras() {
  return (
    <section>
      <div className="flex items-center gap-3 mb-5">
        <Sparkle className="!relative w-6 h-6 text-stone-500" />
        <h5 className="font-serif text-xl md:text-2xl font-bold text-stone-900">
          Quelques chiffres clés
        </h5>
      </div>
      <div className="bg-white border border-stone-200/70 rounded-2xl shadow-sm p-5 md:p-6 mb-8">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
             <div className="w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0 mt-2.5" />
             <p className="leading-tight">
               <span className="font-bold text-emerald-600 text-xl md:text-2xl tracking-tight">100 %</span>
               <span className="ml-2 text-stone-700 text-sm md:text-base font-medium">du restaurant rempli, soit 48 couverts</span>
             </p>
          </div>
          <div className="flex items-start gap-3">
             <div className="w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0 mt-2.5" />
             <p className="leading-tight">
               <span className="font-bold text-emerald-600 text-xl md:text-2xl tracking-tight">+500 €</span>
               <span className="ml-2 text-stone-700 text-sm md:text-base font-medium">récoltés pour les deux associations partenaires</span>
             </p>
          </div>
          <div className="flex items-start gap-3">
             <div className="w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0 mt-2.5" />
             <p className="leading-tight">
               <span className="font-bold text-emerald-600 text-xl md:text-2xl tracking-tight">6K</span>
               <span className="ml-2 text-stone-700 text-sm md:text-base font-medium">impressions sur les réseaux sociaux</span>
             </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:gap-6 items-center">
        <motion.figure
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white border border-stone-200 rounded-2xl shadow-md p-3 sm:p-4 rotate-[-2deg]"
        >
          <div className="aspect-[4/3] overflow-hidden rounded-xl">
            <img src="/assets/photos/restaurant-1.png" alt="Projet Restaurant 1" className="w-full h-full object-cover" />
          </div>
        </motion.figure>
        <motion.figure
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white border border-stone-200 rounded-2xl shadow-md p-3 sm:p-4 rotate-[2deg]"
        >
          <div className="aspect-[3/4] overflow-hidden rounded-xl">
            <img src="/assets/photos/restaurant-2.png" alt="Projet Restaurant 2" className="w-full h-full object-cover" />
          </div>
        </motion.figure>
      </div>
    </section>
  );
}

/* ============================== Timeline + icons ============================== */

function SnakeTimeline() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 600 2400"
      preserveAspectRatio="none"
      className="hidden md:block absolute top-0 left-0 w-full h-full -z-10 pointer-events-none text-stone-300/50"
    >
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 3, ease: 'easeInOut' }}
        d="
          M 300 60
          C 480 80, 480 280, 300 320
          C 120 360, 120 560, 300 600
          C 480 640, 480 840, 300 880
          C 120 920, 120 1120, 300 1160
          C 480 1200, 480 1400, 300 1440
          C 120 1480, 120 1680, 300 1720
          C 480 1760, 480 1960, 300 2000
          C 120 2040, 120 2240, 300 2280
        "
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="5 8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function SocialIconButton({ icon }: { icon: SocialIcon; key?: Key }) {
  const iconSrcMap: Record<string, string | null> = {
    instagram: '/assets/social/instagram.svg',
    tiktok:    '/assets/social/tiktok.svg',
    linkedin:  '/assets/social/linkedin.svg',
    facebook:  '/assets/social/facebook.svg',
    youtube:   '/assets/social/youtube.svg',
    website:   null,
  };

  const src = iconSrcMap[icon.type];

  return (
    <motion.a
      whileHover={{ scale: 1.12, rotate: 4 }}
      whileTap={{ scale: 0.94 }}
      href={icon.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={icon.label}
      title={icon.label}
      className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-stone-100 transition-colors cursor-pointer shadow-sm border border-stone-200"
    >
      {src ? (
        <img src={src} alt="" aria-hidden className="w-5 h-5 object-contain" />
      ) : (
        <WebsiteIcon />
      )}
    </motion.a>
  );
}

function WebsiteIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-stone-700" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.8 3.2 2.8 14.8 0 18" />
      <path d="M12 3c-2.8 3.2-2.8 14.8 0 18" />
    </svg>
  );
}
