import { BookOpen, Users, BarChart3, Package, PlayCircle, ArrowRight } from 'lucide-react';

const offerings = [
  {
    icon: BookOpen,
    title: 'Structured Sports & Physical Education Curriculum',
    subtitle: 'Nursery–12th Sports Programs',
    desc: 'Scientifically planned and age-appropriate sports curriculum designed for Nursery to Grade 12. Focused on physical literacy, movement development, fitness, sports skills, and life skills.',
    tags: ['Physical Literacy', 'Multi-sport Exposure', 'Life Skills', 'Fitness'],
    image: 'https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg?auto=compress&cs=tinysrgb&w=700&h=450&fit=crop',
  },
  {
    icon: Users,
    title: 'Professional Coaches & Sports Staff',
    subtitle: 'Trained Specialists',
    desc: 'Trained and professional sports coaches for smooth execution of sports and PE programs. Sports-specific guidance, structured session planning, and performance-oriented training.',
    tags: ['Sports Coaching', 'Session Planning', 'Performance Training'],
    image: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    accent: 'bg-accent-500',
  },
  {
    icon: BarChart3,
    title: 'Student Fitness & Performance Tracking',
    subtitle: 'Data-driven Progress',
    desc: 'Structured assessments and reporting systems to track student participation, fitness growth, and skill development with parent-friendly report formats.',
    tags: ['Fitness Reports', 'Progress Tracking', 'Parent Reports'],
    image: 'https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    accent: 'bg-success-500',
  },
  {
    icon: Package,
    title: 'Sports Equipment Support',
    subtitle: 'Infrastructure Guidance',
    desc: 'Assistance in identifying and providing quality sports equipment based on school requirements, student strength, and available infrastructure.',
    tags: ['Equipment Planning', 'Sports Setup', 'Inventory'],
    image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    accent: 'bg-blue-500',
  },
  {
    icon: PlayCircle,
    title: 'School Sports Program Execution',
    subtitle: 'End-to-End Management',
    desc: 'Day-to-day execution of sports activities within schools — from timetable coordination to event support and session monitoring.',
    tags: ['Timetable Coordination', 'Activity Planning', 'Event Support'],
    image: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    accent: 'bg-violet-500',
  },
];

export default function Offerings() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="offerings" className="py-20 lg:py-28 bg-neutral-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14 animate-on-scroll">
          <div className="section-tag">
            <span className="w-2 h-2 bg-primary-500 rounded-full" />
            What We Offer
          </div>
          <h2 className="section-title mb-4">
            Complete School Sports{' '}
            <span className="text-gradient">Management Program</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            End-to-end solutions designed to integrate sports and physical education into everyday school life.
          </p>
        </div>

        {/* Featured first card */}
        <div className="animate-on-scroll mb-6">
          <div className="bg-white rounded-3xl overflow-hidden border border-neutral-100 shadow-card hover:shadow-card-hover transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary-600 text-xs font-bold rounded-full border border-primary-100 mb-4 w-fit">
                  <BookOpen size={12} />
                  {offerings[0].subtitle}
                </div>
                <h3 className="text-xl lg:text-2xl font-extrabold text-dark-900 mb-3">{offerings[0].title}</h3>
                <p className="text-neutral-500 leading-relaxed mb-5 text-sm">{offerings[0].desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {offerings[0].tags.map((t) => (
                    <span key={t} className="px-3 py-1 bg-primary-50 text-primary-600 text-xs font-semibold rounded-full border border-primary-100">
                      {t}
                    </span>
                  ))}
                </div>
                <button onClick={() => handleNav('#contact')} className="btn-primary w-fit text-sm">
                  Learn More
                  <ArrowRight size={16} />
                </button>
              </div>
              <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                <img
                  src={offerings[0].image}
                  alt={offerings[0].title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/10" />
              </div>
            </div>
          </div>
        </div>

        {/* Grid of 4 */}
        <div className="stagger-parent grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {offerings.slice(1).map((offering) => {
            const Icon = offering.icon;
            return (
              <div key={offering.title} className="stagger-child bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group">
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={offering.image}
                    alt={offering.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
                  <div className={`absolute top-3 left-3 w-8 h-8 rounded-xl ${offering.accent || 'bg-primary-500'} flex items-center justify-center`}>
                    <Icon size={15} className="text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-xs text-neutral-400 font-semibold mb-1">{offering.subtitle}</div>
                  <h3 className="font-bold text-dark-900 text-sm leading-snug mb-2">{offering.title}</h3>
                  <p className="text-neutral-500 text-xs leading-relaxed mb-3">{offering.desc}</p>
                  <div className="flex flex-wrap gap-1">
                    {offering.tags.slice(0, 2).map((t) => (
                      <span key={t} className="px-2 py-0.5 bg-neutral-100 text-neutral-600 text-xs font-medium rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <button onClick={() => handleNav('#contact')} className="btn-primary">
            Get a Program Consultation
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
