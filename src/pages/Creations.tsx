import { motion } from 'motion/react';
import { AnimatedSection } from '../components/AnimatedSection';
import { VideoTile } from '../components/VideoPlayer';
import { Blob, GridPattern, GrainOverlay, Sparkle, SparkleCluster, TitleUnderline } from '../components/DecorativeShapes';

const categories = [
  {
    title: 'FACE CAM / VOIX OFF',
    videos: ['/face cam 1.mp4', '/face cam 2.mp4', '/face cam 3.mp4'],
  },
  {
    title: 'CONTENUS SPONSORISÉS',
    videos: Array.from({ length: 9 }, (_, i) => `/sponso ${i + 1}.mp4`),
  },
  {
    title: 'CONTENUS TRENDY',
    videos: Array.from({ length: 8 }, (_, i) => `/trend ${i + 1}.mp4`),
  },
  {
    title: 'FOCUS PRODUIT',
    videos: Array.from({ length: 9 }, (_, i) => `/focus produit ${i + 1}.mp4`),
  },
];

/** "/face cam 1.mp4" → "/posters/face cam 1.jpg" */
function posterFromSrc(src: string): string {
  return '/posters/' + src.replace(/^\//, '').replace(/\.mp4$/i, '.jpg');
}

export function Creations() {
  return (
    <div className="relative w-full overflow-hidden bg-stone-50 text-stone-900 min-h-screen pb-24">
      <GrainOverlay />
      <GridPattern className="text-stone-900" />

      <Blob className="top-0 right-0 w-[42vw] h-[700px] bg-stone-200 rounded-bl-[300px]" />
      <Blob className="bottom-0 left-0 w-[48vw] h-[600px] bg-stone-300 rounded-tr-[400px] animation-delay-2000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 relative z-10">
        <AnimatedSection delay={0.1} direction="up" className="mb-16 sm:mb-20 relative">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium leading-[0.95] tracking-tight mb-10">
            MES<br />
            <span className="relative inline-block">
              <span className="relative z-10 pr-3">CRÉATIONS</span>
              <TitleUnderline className="bottom-1 sm:bottom-2 left-0 w-full h-5 sm:h-6" delay={0.4} />
            </span>
          </h1>

          <div className="relative max-w-3xl">
            <p className="text-stone-800 text-base md:text-lg leading-relaxed font-medium bg-white/85 backdrop-blur-md p-6 md:p-8 rounded-[1.75rem] shadow-md border border-stone-200/60">
              Toutes les vidéos présentées ci-dessous ont été réalisées par mes soins, de la recherche du concept jusqu'au tournage et au montage. Certaines vidéos sont conçues pour un usage organique, en respectant les codes des plateformes, tandis que d'autres sont pensées pour le paid, selon les logiques des algorithmes Meta et TikTok Ads&nbsp;!
            </p>
          </div>
          <SparkleCluster className="top-2 right-2 w-24 h-16 sm:w-32 sm:h-20 text-stone-400 hidden md:block" />
        </AnimatedSection>

        <div className="space-y-20 md:space-y-28 relative z-10">
          {categories.map((category, index) => (
            <section key={category.title} className="relative">
              <AnimatedSection delay={0.1} direction="left" className="mb-8 inline-block relative">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-stone-900 flex items-center gap-3 sm:gap-4">
                  <span className="font-handwriting text-3xl md:text-5xl text-stone-300">
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                  {category.title}
                </h2>
                <svg className="absolute -bottom-3 left-10 sm:left-14 w-[110%] h-4 sm:h-5 text-stone-300" viewBox="0 0 200 20" fill="none" preserveAspectRatio="none">
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                    d="M0,12 Q60,2 120,12 T200,14"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
                {index % 2 === 0 && (
                  <Sparkle className="-top-6 -right-8 w-7 h-7 text-stone-300" />
                )}
              </AnimatedSection>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5 mt-10">
                {category.videos.map((videoPath, i) => (
                  <AnimatedSection key={i} delay={Math.min(i * 0.04, 0.4)} direction="up">
                    <div className="aspect-[9/16] relative rounded-2xl overflow-hidden shadow-md border border-white/70 bg-stone-200">
                      <VideoTile
                        src={videoPath}
                        poster={posterFromSrc(videoPath)}
                        ariaLabel={`Lire la vidéo ${category.title} ${i + 1}`}
                      />
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
