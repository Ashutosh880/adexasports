import { Activity, Brain, Users, Trophy, Monitor, MessageSquare, Sunrise, Heart, Building2, Star, TrendingUp, Calendar, Award, CheckCircle2 } from 'lucide-react';

const studentBenefits = [
  { icon: Activity, label: 'Improved physical fitness and active lifestyle' },
  { icon: Brain, label: 'Better discipline and confidence' },
  { icon: Users, label: 'Teamwork and leadership development' },
  { icon: Brain, label: 'Improved concentration and engagement' },
  { icon: Monitor, label: 'Reduced screen dependency' },
  { icon: MessageSquare, label: 'Better social interaction and communication' },
  { icon: Sunrise, label: 'Positive sporting habits from an early age' },
  { icon: Heart, label: 'Development of resilience and competitive spirit' },
];

const schoolBenefits = [
  { icon: Building2, label: 'Structured sports ecosystem' },
  { icon: Star, label: 'Professional sports execution' },
  { icon: CheckCircle2, label: 'Affordable and manageable implementation' },
  { icon: Heart, label: 'Better parent satisfaction' },
  { icon: TrendingUp, label: 'Enhanced school culture and participation' },
  { icon: Calendar, label: 'Organized sports activities and events' },
  { icon: Users, label: 'Improved student engagement' },
  { icon: Award, label: 'Long-term sports development roadmap' },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 animate-on-scroll">
          <div className="section-tag">
            <span className="w-2 h-2 bg-primary-500 rounded-full" />
            Impact & Benefits
          </div>
          <h2 className="section-title mb-4">
            Transforming Lives &{' '}
            <span className="text-gradient">Building Institutions</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Our programs deliver measurable outcomes for both students and schools — creating a lasting sports culture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Students */}
          <div className="animate-on-scroll-left bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <Users size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-extrabold">Benefits for Students</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {studentBenefits.map((b) => {
                const Icon = b.icon;
                return (
                  <div key={b.label} className="flex items-start gap-3 p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={13} className="text-white" />
                    </div>
                    <span className="text-white/90 text-xs font-medium leading-snug">{b.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Schools */}
          <div className="animate-on-scroll-right bg-dark-900 rounded-3xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary-500/30 flex items-center justify-center">
                <Building2 size={20} className="text-primary-300" />
              </div>
              <h3 className="text-xl font-extrabold">Benefits for Schools</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {schoolBenefits.map((b) => {
                const Icon = b.icon;
                return (
                  <div key={b.label} className="flex items-start gap-3 p-3 bg-white/5 border border-white/10 rounded-xl">
                    <div className="w-7 h-7 rounded-lg bg-primary-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={13} className="text-primary-300" />
                    </div>
                    <span className="text-white/80 text-xs font-medium leading-snug">{b.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mt-10 animate-on-scroll bg-gradient-to-r from-primary-50 to-orange-50 rounded-2xl p-8 border border-primary-100">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-extrabold text-dark-900 mb-3">Our Philosophy</h3>
            <p className="text-neutral-600 leading-relaxed">
              We believe every child deserves access to quality sports education, professional guidance, and opportunities to grow beyond classrooms. At Adexa Sports, we are committed to helping schools build a generation that is <strong className="text-dark-900">academically capable, physically active, mentally strong, and ready for life.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
