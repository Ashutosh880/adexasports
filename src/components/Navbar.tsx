import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

function AdexaLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 183.86"
      preserveAspectRatio="xMinYMid meet"
      overflow="visible"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <style>{`.cls-1{font-size:126.09px;fill:#1b1b1b;font-family:NeutronicRounded-Semibold,'Neutronic Rounded';font-weight:600}.cls-2{font-size:64.13px;fill:#1b1b1b;font-family:NeutronicRounded-Semibold,'Neutronic Rounded';font-weight:600}.cls-3{fill:#f34b26}`}</style>
      </defs>
      <g>
        <text className="cls-1" transform="translate(177.68 109.69)"><tspan x="0" y="0">ADEXA</tspan></text>
        <rect className="cls-3" x="100.7" y="45.54" width="20.67" height="20.67" rx="10.34" ry="10.34" />
        <text className="cls-2" transform="translate(177.68 170.26)"><tspan x="0" y="0">SPORTS</tspan></text>
        <path className="cls-3" d="M91.09,42.67c-.88-.87-1.52-2.4-2.47-3.35-7.38-7.39-18.99-6.43-25.09,1.97l-41.89,87.58c-5.74,19.4,20.56,30.09,30.03,11.87,8.35-16.07,13.42-36.24,21.94-52.11,12.05-22.44,44.58-25.04,59.62-4.03,4.84,6.76,17.2,35.31,18.59,43.35,4.79,27.84-23.02,50.4-49.37,40.52-5.13-1.92-15.08-7.97-16.07-13.74-1.33-7.81,4.96-13.42,12.58-12.12,3.36.57,4.99,3.29,7.64,4.93,12.41,7.65,27.38-2.66,24.51-17.06-1.11-5.58-9.7-26.28-12.64-31.61-6.9-12.51-20.24-12.12-27,.17-8.27,15.02-13.37,34.88-21.11,50.61-15.14,30.74-60.46,26.82-69.09-6.23-2.93-11.23-.48-18.53,4.02-28.57,12.65-28.22,27.24-55.66,40.07-83.81,12.93-21.26,45.83-23.3,60.65-3.07,9.44,12.88-6.14,23.39-14.93,14.7Z" />
      </g>
    </svg>
  );
}

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Offerings', href: '#offerings' },
  { label: 'Why Choose Us', href: '#why-adexa' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100'
            : 'bg-white/60 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button onClick={() => handleNav('#home')} className="flex items-center self-center flex-shrink-0">
              <AdexaLogo className="h-10 lg:h-12 w-auto" />
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center self-center gap-0.5">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="px-4 py-2 text-sm font-semibold text-dark-700 hover:text-primary-500 hover:bg-primary-50 rounded-lg transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center">
              <button
                onClick={() => handleNav('#contact')}
                className="btn-primary text-sm px-5 py-2.5"
              >
                Get In Touch
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg text-dark-800 hover:bg-neutral-100 transition-colors"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-40 transition-all duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
        <div className={`absolute right-0 top-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <AdexaLogo className="h-9 w-auto" />
              <button onClick={() => setMenuOpen(false)} className="p-2 rounded-lg hover:bg-neutral-100 text-dark-700">
                <X size={18} />
              </button>
            </div>
            <div className="flex flex-col gap-1 mb-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left px-4 py-3 text-sm font-semibold text-dark-800 hover:text-primary-500 hover:bg-primary-50 rounded-xl transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
            <button onClick={() => handleNav('#contact')} className="btn-primary w-full justify-center text-sm">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
