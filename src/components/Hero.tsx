import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, BookOpen, Users, BarChart3, Shield } from 'lucide-react';

const floatingCards = [
  { icon: BookOpen, label: 'Nursery–12th Sports Programs', sub: 'Structured Curriculum' },
  { icon: Users, label: 'Professional Coaches', sub: 'Trained Specialists' },
  { icon: BarChart3, label: 'Performance Tracking', sub: 'Progress Reports' },
  { icon: Shield, label: 'School Sports Ecosystem', sub: 'End-to-End Management' },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden bg-white">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-[70%] bg-gradient-to-br from-orange-50 via-white to-red-50/40" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-500/6 rounded-full blur-3xl" />
        {/* Abstract sporty shapes */}
        <svg className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04]" viewBox="0 0 600 800" fill="none">
          <circle cx="500" cy="200" r="300" stroke="#e84b1a" strokeWidth="1.5"/>
          <circle cx="500" cy="200" r="200" stroke="#e84b1a" strokeWidth="1"/>
          <circle cx="500" cy="200" r="100" stroke="#e84b1a" strokeWidth="0.5"/>
          <path d="M100 400 Q300 200 500 600" stroke="#e84b1a" strokeWidth="1.5" strokeDasharray="8 6"/>
          <path d="M0 300 L600 500" stroke="#e84b1a" strokeWidth="0.5" strokeDasharray="4 8"/>
        </svg>
        <svg className="absolute bottom-0 left-0 w-1/3 opacity-[0.04]" viewBox="0 0 400 400" fill="none">
          <path d="M0 400 L200 0 L400 400Z" stroke="#e84b1a" strokeWidth="1"/>
          <path d="M50 400 L200 100 L350 400Z" stroke="#e84b1a" strokeWidth="0.5"/>
        </svg>
      </div>

      {/* Sports image strip */}
      <div className="absolute right-0 top-20 bottom-0 w-1/2 hidden xl:block overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent z-10" />
        <img
          src="https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&fit=crop"
          alt="Students playing sports"
          className="w-full h-full object-cover object-top opacity-80"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent z-10" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-16">
        <div className="flex-1 flex flex-col justify-center max-w-2xl xl:max-w-3xl">
          {/* Tag */}
          <div className={`transition-all duration-700 mb-6 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-bold rounded-full border border-primary-100">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              Grassroots to Greatness
            </span>
          </div>

          {/* Headline */}
          <div className={`transition-all duration-700 delay-100 mb-6 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-extrabold text-dark-900 leading-[1.08] tracking-tight">
              Building Future{' '}
              <span className="relative inline-block">
                <span className="text-gradient">Champions</span>
                <svg className="absolute -bottom-1 left-0 w-full" height="4" viewBox="0 0 200 4" preserveAspectRatio="none">
                  <path d="M0 2 Q100 0 200 2" stroke="#e84b1a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
              <br />
              Through Structured{' '}
              <span className="text-gradient">Sports Education</span>
            </h1>
          </div>

          {/* Subheadline */}
          <div className={`transition-all duration-700 delay-200 mb-8 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <p className="text-lg lg:text-xl text-neutral-500 leading-relaxed max-w-xl">
              Professional school sports management programs designed to build fitness, discipline, teamwork, leadership, and holistic development.
            </p>
          </div>

          {/* CTAs */}
          <div className={`transition-all duration-700 delay-300 mb-12 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => handleNav('#offerings')}
                className="btn-primary text-base px-7 py-3.5"
              >
                Explore Programs
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => handleNav('#contact')}
                className="btn-secondary text-base px-7 py-3.5"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Trust signals */}
          <div className={`transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {[
                'Structured Programs',
                'Trained Coaches',
                'Nursery–12th Curriculum',
                'Performance Tracking',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="7" fill="#e84b1a" fillOpacity="0.12"/>
                    <path d="M4 7l2 2 4-4" stroke="#e84b1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm text-neutral-500 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating cards - bottom */}
        <div className={`mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {floatingCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.label}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-neutral-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-9 h-9 rounded-xl bg-primary-50 flex items-center justify-center mb-3">
                  <Icon size={17} className="text-primary-500" />
                </div>
                <div className="font-bold text-dark-900 text-xs leading-snug mb-0.5">{card.label}</div>
                <div className="text-neutral-400 text-xs">{card.sub}</div>
              </div>
            );
          })}
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => handleNav('#trust')}
            className="flex flex-col items-center gap-1.5 text-neutral-400 hover:text-primary-500 transition-colors group"
          >
            <span className="text-xs font-medium">Scroll to explore</span>
            <ChevronDown size={16} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
