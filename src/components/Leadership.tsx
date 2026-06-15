import { Quote, Trophy, Award, Star, Briefcase, GraduationCap } from 'lucide-react';

const achievements = [
  { icon: Trophy, label: 'Former International Women Cricketer of India' },
  { icon: Award, label: 'Vikram Awardee — Government of Madhya Pradesh' },
  { icon: Star, label: 'MPCA Roll of Honour Inductee' },
];

const advisors = [
  {
    name: 'Mr. Deepak Yadav',
    title: 'Founder & Head of Operations',
    icon: Briefcase,
    color: 'bg-primary-500',
    bio: 'Deepak leads Adexa Sports’ operational framework and strategic partnerships with educational institutions across Madhya Pradesh. An engineer by profession with strong exposure to Kho-Kho and multiple sports disciplines, he brings a structured and practical understanding of school-level sports ecosystems and athlete development pathways. His experience helps shape the execution of programs that bridge school sports with structured training systems.',
    tags: ['Operations', 'Strategy', 'Partnerships'],
    image: '/deepak.jpeg',
  },
  {
    name: 'Mr. Jayesh Acharya',
    title: 'Chief Sports Advisor',
    subtitle: 'Senior Vice President, Madhya Pradesh Table Tennis Association (MPTTA)',
    icon: GraduationCap,
    color: 'bg-neutral-700',
    bio: 'Mr. Jayesh Acharya brings strong leadership in competitive sports administration and grassroots development. His experience in shaping structured sporting pathways and institutional sports systems plays a key role in guiding Adexa Sports’ program design and implementation. He supports the development of structured school-based sports frameworks that bridge the gap between recreational play and professional training.',
    tags: ['Sports Administration', 'Grassroots Development'],
    image: '/Jayesh.jpeg',
  },
  {
    name: 'Dr. Sunil Dudhale',
    title: 'Chief Physical Education Advisor',
    subtitle: 'Retired Director of Physical Education, Devi Ahilya Vishwavidyalaya (DAVV)',
    icon: GraduationCap,
    color: 'bg-neutral-700',
    bio: 'Dr. Sunil Dudhale brings decades of experience in physical education and university-level sports development. His expertise reinforces Adexa Sports’ belief that strong athletic foundations are built during school years. He guides the creation of structured, research-backed physical education programs that promote lifelong fitness, teamwork, and holistic child development through disciplined and engaging training systems.',
    tags: ['Physical Education', 'Program Design'],
    image: '/dudhale.jpeg',
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-neutral-50 to-white pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14 animate-on-scroll">
          <div className="section-tag">
            <span className="w-2 h-2 bg-primary-500 rounded-full" />
            Our Leadership
          </div>
          <h2 className="section-title mb-4">
            The Team Behind{' '}
            <span className="text-gradient">Adexa Sports</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Driven by passion for youth development and structured sports education.
          </p>
        </div>

        {/* Rekha Punekar — featured */}
        <div className="animate-on-scroll mb-16">
          <div className="bg-gradient-to-br from-neutral-50 to-orange-50/50 rounded-3xl overflow-hidden border border-neutral-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[480px]">
                <img
                  src="/rekha.jpeg"
                  alt="Rekha Punekar - Director of Sports"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 lg:bg-gradient-to-r lg:from-transparent lg:to-orange-50/80" />
                {/* Corner accent */}
                <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-primary-500 rounded-tl-xl" />
                <div className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 border-primary-500 rounded-br-xl" />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary-600 text-xs font-bold rounded-full border border-primary-100 mb-4 w-fit">
                  Director of Sports
                </div>
                <h3 className="text-2xl lg:text-3xl font-extrabold text-dark-900 mb-1">Rekha Punekar</h3>
                <p className="text-primary-500 font-semibold text-sm mb-5">Director of Sports — Adexa Sports</p>

                <div className="flex flex-col gap-2.5 mb-6">
                  {achievements.map((a) => {
                    const Icon = a.icon;
                    return (
                      <div key={a.label} className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-primary-500 flex items-center justify-center flex-shrink-0">
                          <Icon size={13} className="text-white" />
                        </div>
                        <span className="text-dark-700 font-medium text-sm">{a.label}</span>
                      </div>
                    );
                  })}
                </div>

                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  Rekha Punekar’s journey from Madhya Pradesh to representing India reflects determination, discipline, resilience, and the spirit of sportsmanship. She began her career in Vidisha and later moved to Indore in pursuit of better sporting opportunities. Her story stands as a strong example of how structured guidance and access to quality sports development can transform lives. With years of experience in competitive sports, athlete development, and sports leadership, she continues to strengthen Adexa Sports’ vision of creating meaningful sporting opportunities for students across schools.
                </p>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  Inspired by her journey and guided by her experience, Adexa Sports is committed to building an inclusive sports ecosystem where every child has access to quality physical education, professional coaching, and structured development pathways that empower them to grow physically, mentally, socially, and emotionally.
                </p>

                {/* Quote */}
                <div className="relative bg-white rounded-2xl p-5 border-l-4 border-primary-500 border border-neutral-100 shadow-sm">
                  <Quote size={22} className="text-primary-200 absolute top-3 right-3" />
                  <p className="text-dark-700 text-sm leading-relaxed italic pr-6">
                    "Sports are not only about winning medals — they help shape character, discipline, confidence, and the ability to face life's challenges. Every child deserves the opportunity to play, grow, and discover their potential."
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="w-6 h-0.5 bg-primary-500" />
                    <span className="text-primary-500 font-bold text-xs">Rekha Punekar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other team members */}
        <div className="stagger-parent grid grid-cols-1 md:grid-cols-3 gap-6">
          {advisors.map((member) => {
            const Icon = member.icon;
            return (
              <div key={member.name} className="stagger-child group">
                <div className="bg-white rounded-3xl overflow-hidden border border-neutral-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 ${member.color} rounded-full mb-1`}>
                        <Icon size={11} className="text-white" />
                        <span className="text-white text-[10px] font-bold">{member.title}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h4 className="font-extrabold text-dark-900 text-lg mb-0.5">{member.name}</h4>
                    <p className="text-primary-500 font-semibold text-xs mb-3">{member.subtitle ? member.subtitle : member.title}</p>
                    <p className="text-neutral-500 text-xs leading-relaxed mb-4">{member.bio}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {member.tags.map((t) => (
                        <span key={t} className="px-2.5 py-0.5 bg-neutral-100 text-neutral-600 text-xs font-semibold rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
