import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const navLinks = [
  { name: 'À PROPOS', path: '/about' },
  { name: 'MES EXPÉRIENCES', path: '/experience' },
  { name: 'MES FORMATIONS', path: '/education' },
  { name: 'MES COMPÉTENCES', path: '/skills' },
  { name: 'MES CRÉATIONS', path: '/creations' },
  { name: 'CONTACT', path: '/contact' },
];

export function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Smooth hide-on-scroll: only animate translateY, keep colour / padding stable.
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastY.current;

        if (y < 20) {
          setHidden(false);
        } else if (delta > 6 && y > 80) {
          setHidden(true);   // scrolling down past threshold → glide up
        } else if (delta < -6) {
          setHidden(false);  // scrolling up → reveal
        }

        lastY.current = y;
        ticking.current = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 w-full z-50 bg-stone-900 border-b border-stone-800/60 shadow-sm transition-transform duration-[350ms] ease-out will-change-transform"
      style={{ transform: hidden ? 'translateY(-100%)' : 'translateY(0)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center gap-4">

          <Link to="/" className="flex items-center space-x-3 group shrink-0 cursor-pointer" aria-label="Accueil">
            <motion.span
              whileHover={{ scale: 1.06, rotate: 4 }}
              transition={{ type: 'spring', stiffness: 320, damping: 22 }}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-stone-50 overflow-hidden border-2 border-stone-700 group-hover:border-stone-400 transition-colors block"
            >
              <img src="/assets/photos/profile.jpg" alt="Sixtine Rocha" className="w-full h-full object-cover" />
            </motion.span>
            <span className="font-serif font-bold tracking-[0.18em] sm:tracking-[0.2em] text-[13px] sm:text-base text-stone-50 group-hover:text-white transition-colors truncate">
              SIXTINE ROCHA
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1 bg-stone-800/60 px-1.5 py-1.5 rounded-full border border-stone-700/40">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-[11px] font-bold tracking-[0.18em] uppercase rounded-full cursor-pointer transition-colors ${
                    isActive ? 'text-white' : 'text-stone-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      aria-hidden
                      className="absolute inset-0 bg-stone-700/70 rounded-full pointer-events-none"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 pointer-events-none">{link.name}</span>
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isOpen}
            className="lg:hidden w-11 h-11 rounded-full bg-stone-800/80 border border-stone-700/50 text-stone-50 flex items-center justify-center cursor-pointer hover:bg-stone-700 transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-stone-900 border-b border-stone-800 overflow-hidden absolute w-full"
          >
            <div className="px-4 pt-3 pb-6 space-y-2 flex flex-col">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-5 py-3.5 rounded-2xl text-sm font-bold tracking-[0.18em] uppercase transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-stone-50 text-stone-900'
                          : 'bg-stone-800/60 text-stone-200 hover:bg-stone-700 hover:text-white border border-stone-700/40'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
