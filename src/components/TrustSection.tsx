import { BookOpen, Users, BarChart3, Award } from 'lucide-react';

const trustCards = [
  {
    icon: BookOpen,
    title: 'Structured Sports Education',
    desc: 'Scientifically designed, age-appropriate curriculum from Nursery to Grade 12.',
  },
  {
    icon: Users,
    title: 'Professional Coaches',
    desc: 'Trained sports professionals who bring expertise, discipline, and mentorship.',
  },
  {
    icon: BarChart3,
    title: 'Student Development',
    desc: 'Track fitness, skills, and progress with parent-friendly reporting systems.',
  },
  {
    icon: Award,
    title: 'School Sports Programs',
    desc: 'End-to-end management of school sports ecosystems tailored to each institution.',
  },
];

export default function TrustSection() {
  return (
    <section id="trust" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 animate-on-scroll">
          <div className="section-tag">
            <span className="w-2 h-2 bg-primary-500 rounded-full" />
            Our Promise
          </div>
          <h2 className="section-title mb-4">
            Grassroots to{' '}
            <span className="text-gradient">Greatness</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Adexa Sports bridges the gap between schools that recognize the importance of sports and their ability to execute structured, professional programs.
          </p>
        </div>

        <div className="stagger-parent grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustCards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="stagger-child card group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-primary-500 transition-colors duration-300">
                  <Icon size={22} className="text-primary-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-dark-900 mb-2 text-base">{card.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{card.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Trust bar */}
        <div className="mt-14 py-6 px-6 bg-neutral-50 rounded-2xl border border-neutral-100 animate-on-scroll">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12">
            {[
              'Structured Programs',
              'Trained Coaches',
              'Fitness Tracking',
              'Age-Appropriate Curriculum',
              'Parent Reports',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-neutral-600 font-semibold text-sm">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
