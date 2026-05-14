import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, Phone } from 'lucide-react';

const LINKEDIN_URL = 'https://www.linkedin.com/in/sixtine-rocha-8920a6229';
const EMAIL = 'sixtine.rocha@supdepub.com';
const PHONE = '07.82.76.63.68';

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-14 mt-auto relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-stone-700 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-stone-800/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <Link
            to="/"
            className="flex items-center space-x-4 group"
            aria-label="Retour à l'accueil"
          >
            <motion.div
              whileHover={{ scale: 1.06, rotate: 4 }}
              className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center overflow-hidden border-2 border-transparent group-hover:border-stone-400 transition-colors"
            >
              <img src="/assets/photos/profile.jpg" alt="Sixtine Rocha" className="w-full h-full object-cover" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-stone-50 font-serif font-bold tracking-widest text-lg sm:text-xl group-hover:text-white transition-colors">
                SIXTINE ROCHA
              </span>
              <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-stone-500">Portfolio</span>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <motion.a
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil LinkedIn de Sixtine Rocha"
              title="LinkedIn"
              className="w-12 h-12 rounded-full bg-stone-800/80 hover:bg-[#0a66c2] border border-stone-700/60 flex items-center justify-center text-stone-100 transition-colors shadow-md"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
              </svg>
            </motion.a>

            <motion.a
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${EMAIL}`}
              aria-label="Envoyer un email à Sixtine"
              title="Email"
              className="w-12 h-12 rounded-full bg-stone-800/80 hover:bg-stone-100 hover:text-stone-900 border border-stone-700/60 flex items-center justify-center text-stone-100 transition-colors shadow-md"
            >
              <Mail size={20} strokeWidth={1.8} />
            </motion.a>

            <motion.a
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              href={`tel:${PHONE.replace(/\./g, '')}`}
              aria-label="Appeler Sixtine"
              title="Téléphone"
              className="w-12 h-12 rounded-full bg-stone-800/80 hover:bg-stone-100 hover:text-stone-900 border border-stone-700/60 flex items-center justify-center text-stone-100 transition-colors shadow-md"
            >
              <Phone size={20} strokeWidth={1.8} />
            </motion.a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-2 text-[11px] font-medium tracking-wider opacity-70 text-center md:text-left">
          <p>© {new Date().getFullYear()} Sixtine Rocha — Tous droits réservés.</p>
          <p className="font-handwriting text-base tracking-normal text-stone-400">Fait avec passion</p>
        </div>
      </div>
    </footer>
  );
}
