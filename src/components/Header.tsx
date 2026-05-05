import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, Search, X } from 'lucide-react';

const LOGO = './sections/hero/logo.svg';

const NAV_LINKS = [
  { href: '#community-section', label: 'About Sodic' },
  { href: '#interactive-filter', label: 'Developments' },
  { href: '#property-finder', label: 'Life at Sodic' },
];

const Header = () => {
  const { pathname } = useLocation();
  const arabicHref =
    pathname === '/ogami' ? '/ar/ogami' : pathname === '/east' ? '/ar/east' : '/ar';

  const leadFormHash = pathname === '/east' ? '#east-lead-form' : '#lead-form';

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 24);
    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onDoc = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [menuOpen]);

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return;
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  }, []);

  const lightMode = scrolled || menuOpen;

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        lightMode ? 'bg-white/95 backdrop-blur-md border-b border-gray-100' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-8 lg:px-10">
        <div className="flex h-16 items-center justify-between gap-6 md:h-20">
          <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="inline-flex items-center">
            <img
              src={LOGO}
              alt="SODIC"
              className={`h-5 w-auto transition-[filter] duration-300 ${lightMode ? 'brightness-0' : 'brightness-0 invert'}`}
            />
          </a>

          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors ${
                  lightMode ? 'text-zinc-700 hover:text-black' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
                <ChevronDown size={13} />
              </a>
            ))}
            <a
              href={leadFormHash}
              onClick={(e) => scrollToSection(e, leadFormHash)}
              className={`px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] rounded-none border transition-colors ${
                lightMode
                  ? 'border-zinc-300 bg-white text-black hover:bg-zinc-100'
                  : 'border-white/80 bg-white text-black hover:bg-zinc-100'
              }`}
            >
              Register Your Interest
            </a>
            <Link
              to={arabicHref}
              className={`text-[11px] font-semibold transition-colors ${
                lightMode ? 'text-zinc-700 hover:text-black' : 'text-white/90 hover:text-white'
              }`}
            >
              العربية
            </Link>
            <button
              type="button"
              className={`grid h-8 w-8 place-items-center border rounded-none transition-colors ${
                lightMode ? 'border-zinc-300 text-black' : 'border-white/70 text-white'
              }`}
              aria-label="Search"
            >
              <Search size={14} />
            </button>
          </nav>

          <button
            type="button"
            className={`lg:hidden grid h-10 w-10 place-items-center border rounded-none ${
              lightMode ? 'border-zinc-300 text-black' : 'border-white/60 text-white'
            }`}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="lg:hidden border-t border-gray-100 bg-white"
          >
            <nav className="px-6 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="py-3 text-sm font-semibold uppercase tracking-[0.1em] text-black border-b border-gray-100"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={leadFormHash}
                onClick={(e) => scrollToSection(e, leadFormHash)}
                className="mt-3 inline-flex justify-center border border-black bg-black px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white"
              >
                Register Your Interest
              </a>
              <Link
                to={arabicHref}
                className="mt-2 inline-flex justify-center py-3 text-xs font-semibold text-black"
              >
                العربية
              </Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default Header;
