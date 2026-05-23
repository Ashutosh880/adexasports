import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Offerings', href: '#offerings' },
  { label: 'Leadership', href: '#leadership' },
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
        className={`fixed top-0 left-0 right-0 z-50 h-32 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100'
            : 'bg-white/60 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-32 lg:h-32">
            {/* Logo */}
            <button onClick={() => handleNav('#home')} className="flex items-center">
              <img
                src="/background-removed-Adexa_Logo.png"
                alt="Adexa Sports"
                className="h-28 w-auto object-contain"
              />
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="px-4 py-3 text-sm font-semibold text-dark-700 hover:text-primary-500 hover:bg-primary-50 rounded-lg transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center">
              <button
                onClick={() => handleNav('#contact')}
                className="btn-primary text-sm px-5 py-3"
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
              <img src="/background-removed-Adexa_Logo.png" alt="Adexa Sports" className="h-14 w-auto object-contain" />
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
