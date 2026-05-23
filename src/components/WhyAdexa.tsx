import { Zap, DollarSign, Target, GraduationCap, UserCheck, BarChart2, Settings, Shield } from 'lucide-react';

const differentiators = [
  {
    icon: Zap,
    title: 'Structured & Professional Management',
    desc: 'Systematic approach through planned curriculum, trained coaches, activity execution, and performance tracking.',
  },
  {
    icon: DollarSign,
    title: 'Affordable & Practical Solutions',
    desc: 'Cost-effective and scalable programs for schools without compromising quality, structure, or execution.',
  },
  {
    icon: Target,
    title: 'Focus Beyond Physical Activity',
    desc: 'Programs designed for fitness, discipline, teamwork, leadership, confidence, communication, and life skills.',
  },
  {
    icon: GraduationCap,
    title: 'Age-Appropriate Curriculum',
    desc: 'Structured activities and lesson plans designed according to student age groups and physical development stages.',
  },
  {
    icon: UserCheck,
    title: 'Trained & Professional Coaches',
    desc: 'Sports guided by trained professionals — not treated as an additional responsibility without expertise.',
  },
  {
    icon: BarChart2,
    title: 'Performance & Fitness Tracking',
    desc: 'Regular student assessments and reporting systems help schools and parents monitor growth.',
  },
  {
    icon: Settings,
    title: 'Customized School Solutions',
    desc: 'Every school has different infrastructure, schedules, and goals. Programs designed for each school specifically.',
  },
  {
    icon: Shield,
    title: 'Reduced Operational Burden',
    desc: 'Adexa handles the operational side so schools can focus on academics and overall student growth.',
  },
];

export default function WhyAdexa() {
  return (
    <section id="why-adexa" className="py-20 lg:py-28 bg-neutral-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-sports-pattern pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14 animate-on-scroll">
          <div className="section-tag">
            <span className="w-2 h-2 bg-primary-500 rounded-full" />
            Why Choose Us
          </div>
          <h2 className="section-title mb-4">
            What Makes{' '}
            <span className="text-gradient">Adexa Different</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Schools today need more than just a PE teacher. They need a complete sports management partner who understands education, sport, and student development.
          </p>
        </div>

        {/* Top banner */}
        <div className="animate-on-scroll mb-10 bg-white rounded-2xl border border-neutral-100 shadow-card p-6 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-primary-500 flex items-center justify-center flex-shrink-0">
            <Shield size={28} className="text-white" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="font-extrabold text-dark-900 text-xl mb-1">Complete School Sports Ecosystem</h3>
            <p className="text-neutral-500 text-sm">
              From requirement analysis to program execution and performance reporting — Adexa manages everything so your school can deliver world-class sports education.
            </p>
          </div>
          <div className="flex gap-4 flex-wrap justify-center">
            {['Trusted', 'Structured', 'Affordable'].map((tag) => (
              <span key={tag} className="px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-bold rounded-full border border-primary-100">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="stagger-parent grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="stagger-child bg-white rounded-2xl p-5 border border-neutral-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group cursor-default">
                <div className="w-10 h-10 rounded-xl bg-primary-50 group-hover:bg-primary-500 flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon size={18} className="text-primary-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-dark-900 mb-2 text-sm">{item.title}</h3>
                <p className="text-neutral-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
