import { Search, Lightbulb, Rocket, BarChart3 } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'School Understanding & Requirement Analysis',
    desc: 'We study the school\'s current sports structure, infrastructure, student count, available facilities, and specific requirements to understand the starting point.',
    color: 'bg-primary-500',
    delay: '0s',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Program Planning & Customization',
    desc: 'Programs are designed according to student age groups, available facilities, school goals, and timetable. Every program is uniquely crafted.',
    color: 'bg-accent-500',
    delay: '0.1s',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Implementation & Execution',
    desc: 'Professional coaches, structured curriculum, and planned activities are implemented within the school system with minimal disruption.',
    color: 'bg-success-500',
    delay: '0.2s',
  },
  {
    number: '04',
    icon: BarChart3,
    title: 'Monitoring & Performance Tracking',
    desc: 'Regular reporting, student assessment, and program monitoring ensure smooth execution, measurable progress, and continuous improvement.',
    color: 'bg-blue-500',
    delay: '0.3s',
  },
];

export default function Process() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="process" className="py-20 lg:py-28 bg-neutral-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-sports-pattern pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14 animate-on-scroll">
          <div className="section-tag">
            <span className="w-2 h-2 bg-primary-500 rounded-full" />
            Our Approach
          </div>
          <h2 className="section-title mb-4">
            How We{' '}
            <span className="text-gradient">Work</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            A structured, transparent process that ensures seamless delivery from the first conversation to ongoing performance monitoring.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary-200 via-accent-200 to-blue-200" />

          <div className="stagger-parent grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="stagger-child relative" style={{ transitionDelay: step.delay }}>
                  <div className="flex flex-col items-center text-center">
                    {/* Step circle */}
                    <div className={`relative z-10 w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-5 shadow-lg`}>
                      <Icon size={26} className="text-white" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full border-2 border-neutral-100 flex items-center justify-center">
                        <span className="text-dark-900 font-extrabold text-xs">{step.number.slice(1)}</span>
                      </div>
                    </div>

                    <div className="text-xs font-bold text-neutral-400 mb-1">{step.number}</div>
                    <h3 className="font-extrabold text-dark-900 mb-3 text-base leading-snug">{step.title}</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14 animate-on-scroll">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-2xl p-6 shadow-card border border-neutral-100">
            <div className="text-center sm:text-left">
              <div className="font-extrabold text-dark-900">Ready to get started?</div>
              <div className="text-neutral-500 text-sm">Let's build a stronger sports culture at your school.</div>
            </div>
            <button
              onClick={() => handleNav('#contact')}
              className="btn-primary flex-shrink-0"
            >
              Book a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
