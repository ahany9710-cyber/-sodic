import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const LOGO = '/sections/hero/logo.svg';

const HeaderShortAr = () => {
  const { pathname } = useLocation();
  const englishHref = pathname.startsWith('/ar/ogami') ? '/ogami' : '/';

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
        lightMode ? 'border-b border-gray-100 bg-white/95 backdrop-blur-md' : 'bg-transparent'
      }`}
      dir="rtl"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-8 lg:px-10">
        <div className="grid h-16 grid-cols-[1fr_auto_1fr] items-center gap-2 md:h-20">
          <div className="flex justify-start">
            <Link
              to={englishHref}
              className={`text-xs font-semibold transition-colors ${
                lightMode ? 'text-zinc-600 hover:text-black' : 'text-white/90 hover:text-white'
              }`}
            >
              English
            </Link>
          </div>

          <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="inline-flex items-center justify-self-center">
            <img
              src={LOGO}
              alt="سوديك"
              className={`h-5 w-auto transition-[filter] duration-300 ${lightMode ? 'brightness-0' : 'brightness-0 invert'}`}
            />
          </a>

          <div className="flex items-center justify-end gap-2">
            <nav className="hidden lg:flex" aria-label="التنقل">
              <a
                href="#lead-form"
                onClick={(e) => scrollToSection(e, '#lead-form')}
                className={`rounded-none border px-4 py-2 text-xs font-semibold transition-colors ${
                  lightMode
                    ? 'border-zinc-300 bg-white text-black hover:bg-zinc-100'
                    : 'border-white/80 bg-white text-black hover:bg-zinc-100'
                }`}
              >
                سجّل اهتمامك
              </a>
            </nav>
            <button
              type="button"
              className={`grid h-10 w-10 place-items-center rounded-none border lg:hidden ${
                lightMode ? 'border-zinc-300 text-black' : 'border-white/60 text-white'
              }`}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-ar"
              aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen ? (
        <div id="mobile-nav-ar" className="border-t border-gray-100 bg-white lg:hidden" dir="rtl">
          <nav className="flex flex-col gap-1 px-6 py-4" aria-label="التنقل للموبايل">
            <a
              href="#lead-form"
              onClick={(e) => scrollToSection(e, '#lead-form')}
              className="border-b border-gray-100 py-3 text-center text-sm font-semibold text-black"
            >
              سجّل اهتمامك
            </a>
            <Link
              to={englishHref}
              className="py-3 text-center text-sm font-semibold text-zinc-700"
              onClick={() => setMenuOpen(false)}
            >
              English site
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
};

export default HeaderShortAr;
