// import { useState } from 'react';
// import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle2, Instagram, Linkedin, Facebook } from 'lucide-react';

// const WHATSAPP_NUMBER = '919826611105';
// const WHATSAPP_MSG = encodeURIComponent('Hi Adexa Sports, I would like to know more about your sports programs.');

// export default function Contact() {
//   const [form, setForm] = useState({ name: '', email: '', phone: '', school: '', city: '', message: '' });
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   return (
//     <section id="contact" className="py-20 lg:py-28 bg-white relative overflow-hidden">
//       <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-neutral-50 to-white pointer-events-none" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <div className="text-center mb-14 animate-on-scroll">
//           <div className="section-tag">
//             <span className="w-2 h-2 bg-primary-500 rounded-full" />
//             Get In Touch
//           </div>
//           <h2 className="section-title mb-4">
//             Let's Build a Stronger{' '}
//             <span className="text-gradient">Sports Culture Together</span>
//           </h2>
//           <p className="section-subtitle mx-auto text-center">
//             Connect with schools, educators, coaches, and institutions looking to create structured and impactful sports programs.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
//           {/* Info */}
//           <div className="lg:col-span-2 animate-on-scroll-left flex flex-col gap-4">
//             <div className="card">
//               <div className="flex items-start gap-4">
//                 <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
//                   <MapPin size={17} className="text-primary-500" />
//                 </div>
//                 <div>
//                   <div className="font-bold text-dark-900 mb-0.5 text-sm">Our Address</div>
//                   <div className="text-neutral-500 text-sm leading-relaxed">
//                     Adexa Sports Private Limited<br />Indore, Madhya Pradesh, India
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="card">
//               <div className="flex items-start gap-4">
//                 <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
//                   <Phone size={17} className="text-primary-500" />
//                 </div>
//                 <div>
//                   <div className="font-bold text-dark-900 mb-1 text-sm">Call Us</div>
//                   <a href="tel:+919826611105" title="Call +91 9826611105" className="text-primary-500 font-semibold text-sm hover:underline">
//                     +91 9826611105
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div className="card">
//               <div className="flex items-start gap-4">
//                 <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
//                   <Mail size={17} className="text-primary-500" />
//                 </div>
//                 <div>
//                   <div className="font-bold text-dark-900 mb-1 text-sm">Email Us</div>
//                   <a href="mailto:info@adexasports.com" title="Email info@adexasports.com" className="text-primary-500 font-semibold text-sm hover:underline block mb-1">
//                     info@adexasports.com
//                   </a>
//                   <a href="mailto:careers@adexasports.com" title="Email careers@adexasports.com" className="text-neutral-500 text-xs hover:text-primary-500 transition-colors">
//                     careers@adexasports.com
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <a
//               href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-4 p-5 bg-[#25D366] rounded-2xl text-white hover:bg-[#1ebe5d] transition-all duration-300 group"
//             >
//               <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
//                 <MessageCircle size={18} className="text-white" />
//               </div>
//               <div>
//                 <div className="font-bold text-sm">WhatsApp Us</div>
//                 <div className="text-white/80 text-xs">+91 98266-11105</div>
//               </div>
//               <Send size={15} className="ml-auto opacity-60 group-hover:translate-x-1 transition-transform" />
//             </a>

//             {/* Social links */}
//             <div className="card">
//               <div className="text-xs font-semibold text-neutral-400 mb-3 uppercase tracking-wider">Follow Us</div>
//               <div className="flex items-center gap-3">
//                 <a
//                   href="https://www.instagram.com/adexasports?utm_source=qr&igsh=MXIxcXV6am9zanV1"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center hover:scale-110 transition-transform"
//                   aria-label="Instagram"
//                 >
//                   <Instagram size={15} className="text-white" />
//                 </a>
//                 <a
//                   href="https://www.linkedin.com/company/adexa-sports-pvt-ltd/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-9 h-9 rounded-xl bg-[#0077B5] flex items-center justify-center hover:scale-110 transition-transform"
//                   aria-label="LinkedIn"
//                 >
//                   <Linkedin size={15} className="text-white" />
//                 </a>
//                 <a
//                   href="https://www.facebook.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-9 h-9 rounded-xl bg-[#1877F2] flex items-center justify-center hover:scale-110 transition-transform"
//                   aria-label="Facebook"
//                 >
//                   <Facebook size={15} className="text-white" />
//                 </a>
//                 <a
//                   href="mailto:info@adexasports.com"
//                   className="w-9 h-9 rounded-xl bg-primary-500 flex items-center justify-center hover:scale-110 transition-transform"
//                   aria-label="Email"
//                 >
//                   <Mail size={15} className="text-white" />
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Form */}
//           <div className="lg:col-span-3 animate-on-scroll-right">
//             <div className="bg-white rounded-3xl p-8 shadow-card border border-neutral-100">
//               <h3 className="font-extrabold text-dark-900 text-xl mb-6">Send an Inquiry</h3>

//               {submitted ? (
//                 <div className="flex flex-col items-center justify-center py-12 text-center">
//                   <div className="w-16 h-16 rounded-full bg-success-500/10 flex items-center justify-center mb-4">
//                     <CheckCircle2 size={32} className="text-success-500" />
//                   </div>
//                   <h4 className="font-extrabold text-dark-900 text-lg mb-2">Inquiry Sent!</h4>
//                   <p className="text-neutral-500 text-sm mb-6 max-w-xs">
//                     Thank you for reaching out. Our team will get back to you within 24 hours.
//                   </p>
//                   <button
//                     onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', school: '', city: '', message: '' }); }}
//                     className="btn-secondary text-sm"
//                   >
//                     Send Another Inquiry
//                   </button>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-xs font-semibold text-dark-700 mb-1.5">Full Name *</label>
//                       <input type="text" required value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
//                         className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-dark-900 text-sm focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
//                         placeholder="Your name" />
//                     </div>
//                     <div>
//                       <label className="block text-xs font-semibold text-dark-700 mb-1.5">Email Address *</label>
//                       <input type="email" required value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
//                         className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-dark-900 text-sm focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
//                         placeholder="your@email.com" />
//                     </div>
//                     <div>
//                       <label className="block text-xs font-semibold text-dark-700 mb-1.5">Mobile Number *</label>
//                       <input type="tel" required value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
//                         className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-dark-900 text-sm focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
//                         placeholder="+91 XXXXX XXXXX" />
//                     </div>
//                     <div>
//                       <label className="block text-xs font-semibold text-dark-700 mb-1.5">School / Organization</label>
//                       <input type="text" value={form.school} onChange={(e) => setForm((f) => ({ ...f, school: e.target.value }))}
//                         className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-dark-900 text-sm focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
//                         placeholder="School name" />
//                     </div>
//                     <div className="sm:col-span-2">
//                       <label className="block text-xs font-semibold text-dark-700 mb-1.5">City *</label>
//                       <input type="text" required value={form.city} onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))}
//                         className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-dark-900 text-sm focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
//                         placeholder="Your city" />
//                     </div>
//                     <div className="sm:col-span-2">
//                       <label className="block text-xs font-semibold text-dark-700 mb-1.5">Your Message</label>
//                       <textarea value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
//                         rows={4}
//                         className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-dark-900 text-sm focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all resize-none"
//                         placeholder="Tell us about your school's sports requirements..." />
//                     </div>
//                   </div>
//                   <div className="flex flex-col sm:flex-row gap-3 mt-2">
//                     <button type="submit" className="btn-primary flex-1 justify-center">
//                       Send Inquiry
//                       <Send size={16} />
//                     </button>
//                     <a
//                       href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-xl hover:bg-[#1ebe5d] transition-all duration-300 flex-1"
//                     >
//                       <MessageCircle size={18} />
//                       WhatsApp Now
//                     </a>
//                   </div>
//                 </form>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle2, Instagram, Linkedin, Facebook } from 'lucide-react';

const WHATSAPP_NUMBER = '919826611105';
const WHATSAPP_MSG = encodeURIComponent('Hi Adexa Sports, I would like to know more about your sports programs.');

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', school: '', city: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/send-contact-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? 'Failed to send. Please try again.');
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-neutral-50 to-white pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14 animate-on-scroll">
          <div className="section-tag">
            <span className="w-2 h-2 bg-primary-500 rounded-full" />
            Get In Touch
          </div>
          <h2 className="section-title mb-4">
            Let's Build a Stronger{' '}
            <span className="text-gradient">Sports Culture Together</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Connect with schools, educators, coaches, and institutions looking to create structured and impactful sports programs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info */}
          <div className="lg:col-span-2 animate-on-scroll-left flex flex-col gap-4">
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                  <MapPin size={17} className="text-primary-500" />
                </div>
                <div>
                  <div className="font-bold text-dark-900 mb-0.5 text-sm">Our Address</div>
                  <div className="text-neutral-500 text-sm leading-relaxed">
                    Adexa Sports Private Limited<br />Indore, Madhya Pradesh, India
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                  <Phone size={17} className="text-primary-500" />
                </div>
                <div>
                  <div className="font-bold text-dark-900 mb-1 text-sm">Call Us</div>
                  <a href="tel:+919826611105" className="text-primary-500 font-semibold text-sm hover:underline">
                    +91 9826611105
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                  <Mail size={17} className="text-primary-500" />
                </div>
                <div>
                  <div className="font-bold text-dark-900 mb-1 text-sm">Email Us</div>
                  <a href="mailto:info@adexasports.com" className="text-primary-500 font-semibold text-sm hover:underline block mb-1">
                    info@adexasports.com
                  </a>
                  <a href="mailto:careers@adexasports.com" className="text-neutral-500 text-xs hover:text-primary-500 transition-colors">
                    careers@adexasports.com
                  </a>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-[#25D366] rounded-2xl text-white hover:bg-[#1ebe5d] transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle size={18} className="text-white" />
              </div>
              <div>
                <div className="font-bold text-sm">WhatsApp Us</div>
                <div className="text-white/80 text-xs">+91 98266-11105</div>
              </div>
              <Send size={15} className="ml-auto opacity-60 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Social links */}
            <div className="card">
              <div className="text-xs font-semibold text-neutral-400 mb-3 uppercase tracking-wider">Follow Us</div>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/adexasports?utm_source=qr&igsh=MXIxcXV6am9zanV1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="Instagram"
                >
                  <Instagram size={15} className="text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/company/adexa-sports-pvt-ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#0077B5] flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={15} className="text-white" />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#1877F2] flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="Facebook"
                >
                  <Facebook size={15} className="text-white" />
                </a>
                <a
                  href="mailto:info@adexasports.com"
                  className="w-9 h-9 rounded-xl bg-primary-500 flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="Email"
                >
                  <Mail size={15} className="text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 animate-on-scroll-right">
            <div className="bg-white rounded-3xl p-8 shadow-card border border-neutral-100">
              <h3 className="font-extrabold text-dark-900 text-xl mb-6">Send an Inquiry</h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-success-500/10 flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} className="text-success-500" />
                  </div>
                  <h4 className="font-extrabold text-dark-900 text-lg mb-2">Inquiry Sent!</h4>
                  <p className="text-neutral-500 text-sm mb-6 max-w-xs">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setError(''); setForm({ name: '', email: '', phone: '', school: '', city: '', message: '' }); }}
                    className="btn-secondary text-sm"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-dark-700 mb-1.5">Full Name *</label>
                      <input type="text" required value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-dark-900 text-sm focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                        placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-dark-700 mb-1.5">Email Address *</label>
                      <input type="email" required value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-dark-900 text-sm focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                        placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-dark-700 mb-1.5">Mobile Number *</label>
                      <input type="tel" required value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-dark-900 text-sm focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                        placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-dark-700 mb-1.5">School / Organization</label>
                      <input type="text" value={form.school} onChange={(e) => setForm((f) => ({ ...f, school: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-dark-900 text-sm focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                        placeholder="School name" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-dark-700 mb-1.5">City *</label>
                      <input type="text" required value={form.city} onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-dark-900 text-sm focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                        placeholder="Your city" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-dark-700 mb-1.5">Your Message</label>
                      <textarea value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-dark-900 text-sm focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all resize-none"
                        placeholder="Tell us about your school's sports requirements..." />
                    </div>
                  </div>
                  {error && (
                    <p className="text-sm text-red-500 font-medium">{error}</p>
                  )}
                  <div className="flex flex-col sm:flex-row gap-3 mt-2">
                    <button type="submit" disabled={loading} className="btn-primary flex-1 justify-center disabled:opacity-60 disabled:cursor-not-allowed">
                      {loading ? 'Sending…' : 'Send Inquiry'}
                      {!loading && <Send size={16} />}
                    </button>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-xl hover:bg-[#1ebe5d] transition-all duration-300 flex-1"
                    >
                      <MessageCircle size={18} />
                      WhatsApp Now
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
