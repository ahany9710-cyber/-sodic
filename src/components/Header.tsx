import { useEffect, useState, useCallback, useRef } from 'react';
import { config } from '../config';

const LOGO = './assets/hero/modon-logo.png';

const NAV_LINKS = [
  { href: '#ras-el-hekma-vision', label: 'الرؤية' },
  { href: '#wadi-yemm', label: 'وادي يم' },
  { href: '#available-units', label: 'الوحدات' },
  { href: '#payment-plan', label: 'خطة السداد' },
  { href: '#construction-updates', label: 'التنفيذ' },
  { href: '#lead-form', label: 'التسجيل' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateScrollState = () => {
      setScrolled(window.scrollY > 20);
      const hero = document.getElementById('hero');
      if (hero) {
        const { bottom } = hero.getBoundingClientRect();
        setPastHero(bottom <= 72);
      } else {
        setPastHero(window.scrollY > window.innerHeight * 0.85);
      }
    };
    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    return () => {
      window.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  }, []);

  const headerOnLightBg = scrolled || menuOpen || pastHero;
  const menuIconClass = headerOnLightBg ? 'text-modon-black' : 'text-white';
  const logoUseLightOnHero = !headerOnLightBg;

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 animate-slide-down ${
        headerOnLightBg ? 'bg-modon-bg/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between gap-4">
          <a
            href="#hero"
            className="flex items-center shrink-0 min-h-[44px] min-w-[44px]"
            onClick={(e) => scrollToSection(e, '#hero')}
          >
            <img
              src={LOGO}
              alt="Modon"
              width={326}
              height={62}
              className={`h-11 sm:h-12 md:h-[3.25rem] w-auto max-w-[200px] sm:max-w-[240px] md:max-w-[280px] object-contain object-start transition-[filter] duration-300 ${
                logoUseLightOnHero ? 'brightness-0 invert' : 'brightness-0'
              }`}
            />
          </a>

          <nav className="hidden lg:flex flex-1 items-center justify-end gap-1 xl:gap-2 flex-wrap" aria-label="القائمة الرئيسية">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`px-2 xl:px-3 py-2 text-sm font-medium transition-colors font-arabic ${
                  headerOnLightBg ? 'text-gray-800 hover:text-modon-black' : 'text-white/95 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${config.phoneNumber}`}
              className={`px-2 xl:px-3 py-2 text-sm font-medium transition-colors font-arabic ${
                headerOnLightBg ? 'text-gray-800 hover:text-modon-black' : 'text-white/95 hover:text-white'
              }`}
            >
              اتصل
            </a>
            <a
              href={`https://wa.me/${config.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-2 xl:px-3 py-2 text-sm font-medium transition-colors font-arabic ${
                headerOnLightBg ? 'text-gray-800 hover:text-modon-black' : 'text-white/95 hover:text-white'
              }`}
            >
              واتساب
            </a>
            <a
              href="#lead-form"
              onClick={(e) => scrollToSection(e, '#lead-form')}
              className="px-4 py-2 bg-modon-black text-white rounded text-sm font-semibold hover:bg-black transition-colors shadow-md font-arabic whitespace-nowrap"
            >
              سجل اهتمامك
            </a>
          </nav>

          <button
            type="button"
            className={`lg:hidden flex flex-col justify-center gap-1.5 p-3 min-w-[48px] min-h-[48px] rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 ${menuIconClass}`}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span
              className={`block h-0.5 w-6 bg-current transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span className={`block h-0.5 w-6 bg-current transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span
              className={`block h-0.5 w-6 bg-current transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`lg:hidden bg-modon-bg border-t border-gray-200 shadow-lg menu-panel ${menuOpen ? 'menu-open' : ''}`}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col" aria-label="القائمة للموبايل">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="py-4 px-2 text-lg font-medium text-gray-900 border-b border-gray-100 font-arabic active:bg-gray-50"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${config.phoneNumber}`}
            className="py-4 px-2 text-lg font-medium text-gray-900 border-b border-gray-100 font-arabic active:bg-gray-50"
          >
            اتصل بنا
          </a>
          <a
            href={`https://wa.me/${config.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="py-4 px-2 text-lg font-medium text-gray-900 border-b border-gray-100 font-arabic active:bg-gray-50"
          >
            واتساب
          </a>
          <a
            href="#lead-form"
            onClick={(e) => scrollToSection(e, '#lead-form')}
            className="mt-3 mx-2 py-4 text-center bg-modon-black text-white rounded text-lg font-bold font-arabic"
          >
            سجل اهتمامك الآن
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
