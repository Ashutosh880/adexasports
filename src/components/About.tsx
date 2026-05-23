import { CheckCircle2, ArrowRight } from 'lucide-react';

const highlights = [
  'Complete sports ecosystem for schools',
  'Structured, age-appropriate curriculum',
  'Trained sports professionals',
  'Performance tracking & parent reports',
  'Affordable, scalable programs',
  'Seamless integration with school timetables',
];

export default function About() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image collage */}
          <div className="animate-on-scroll-left relative">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                <img
                  src="https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
                  alt="Students doing sports"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-3 mt-8">
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <img
                    src="https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                    alt="Coaching students"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <img
                    src="https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                    alt="School sports"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Mission badge */}
            <div className="absolute -bottom-4 left-4 bg-white rounded-2xl p-4 shadow-card border border-neutral-100">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-primary-500 flex items-center justify-center flex-shrink-0">
                  <img src="/background-removed-Adexa_Logo.png" alt="" className="w-8 h-8 object-contain brightness-0 invert" />
                </div>
                <div>
                  <div className="font-bold text-dark-900 text-sm">Our Mission</div>
                  <div className="text-xs text-neutral-500">Grassroots to Greatness</div>
                </div>
              </div>
            </div>

            {/* Accent shape */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-primary-500/10 -z-10" />
          </div>

          {/* Right: Content */}
          <div className="animate-on-scroll-right">
            <div className="section-tag">
              <span className="w-2 h-2 bg-primary-500 rounded-full" />
              Who We Are
            </div>
            <h2 className="section-title mb-6">
              Transforming School Sports Into a{' '}
              <span className="text-gradient">Structured Ecosystem</span>
            </h2>
            <p className="text-neutral-600 mb-4 leading-relaxed">
              At Adexa Sports, we believe that sports are not just extracurricular activities — they are an essential part of a student's overall growth and development. Children need physical activity, discipline, confidence, teamwork, leadership, and the ability to face challenges both on and off the field.
            </p>
            <p className="text-neutral-600 mb-8 leading-relaxed">
              Founded with a vision to build structured and professionally managed sports programs for schools, we help educational institutions create a strong sporting culture through organized PE, trained coaches, modern curriculum, equipment support, and performance tracking. Many schools recognize the importance of sports, yet face challenges in execution, structure, and professional management. Adexa bridges this gap.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 size={15} className="text-primary-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-dark-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button onClick={() => handleNav('#offerings')} className="btn-primary">
              Explore Our Offerings
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
