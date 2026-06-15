// import { useState, useRef } from 'react';
// import { Upload, CheckCircle2, ArrowRight, Mail } from 'lucide-react';

// const specializations = [
//   'Sports Coach',
//   'PE Trainer',
//   'School Sports Coordinator',
//   'Other',
// ];

// export default function Careers() {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     specialization: '',
//     otherSpec: '',
//     file: null as File | null,
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const fileRef = useRef<HTMLInputElement>(null);

//   const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file && file.type === 'application/pdf' && file.size <= 2 * 1024 * 1024) {
//       setForm((f) => ({ ...f, file }));
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!form.name || !form.email || !form.phone || !form.specialization) return;
//     setSubmitted(true);
//   };

//   return (
//     <section id="careers" className="py-20 lg:py-28 bg-neutral-50 relative overflow-hidden">
//       <div className="absolute top-0 right-0 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-14 animate-on-scroll">
//           <div className="section-tag">
//             <span className="w-2 h-2 bg-primary-500 rounded-full" />
//             Join Our Team
//           </div>
//           <h2 className="section-title mb-4">
//             Build the Future of{' '}
//             <span className="text-gradient">School Sports</span>
//           </h2>
//           <p className="section-subtitle mx-auto text-center">
//             We're building structured school sports programs for the next generation. Join us if you're passionate about making a difference.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
//           {/* Left: Why Join */}
//           <div className="lg:col-span-2 animate-on-scroll-left flex flex-col gap-5">
//             <div className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-card">
//               <h3 className="font-extrabold text-dark-900 text-lg mb-4">Why Join Adexa Sports?</h3>
//               <div className="flex flex-col gap-3">
//                 {[
//                   'Work with passionate sports professionals',
//                   'Impact thousands of students across schools',
//                   'Grow in a structured sports organization',
//                   'Contribute to India\'s school sports ecosystem',
//                   'Flexible roles across different functions',
//                 ].map((item) => (
//                   <div key={item} className="flex items-start gap-2.5">
//                     <CheckCircle2 size={15} className="text-primary-500 flex-shrink-0 mt-0.5" />
//                     <span className="text-sm text-dark-700">{item}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-6 text-white">
//               <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
//                 <Mail size={18} className="text-white" />
//               </div>
//               <h4 className="font-extrabold text-lg mb-2">Direct Applications</h4>
//               <p className="text-white/80 text-sm mb-4">You can also send your resume directly to our careers team.</p>
//               <a
//                 href="mailto:careers@adexasports.com"
//                 className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-primary-600 font-bold text-sm rounded-xl hover:bg-primary-50 transition-colors"
//               >
//                 <Mail size={14} />
//                 careers@adexasports.com
//               </a>
//             </div>

//             <div className="bg-white rounded-2xl p-5 border border-neutral-100 shadow-card">
//               <div className="text-xs font-semibold text-neutral-400 mb-2 uppercase tracking-wider">We're Hiring For</div>
//               <div className="flex flex-wrap gap-2">
//                 {['Sports Coach', 'PE Trainer', 'School Sports Coordinator', 'Other Roles'].map((r) => (
//                   <span key={r} className="px-3 py-1.5 bg-primary-50 text-primary-600 text-xs font-bold rounded-full border border-primary-100">
//                     {r}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right: Application Form */}
//           <div className="lg:col-span-3 animate-on-scroll-right">
//             <div className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-card">
//               <h3 className="font-extrabold text-dark-900 text-xl mb-6">Career Application</h3>

//               {submitted ? (
//                 <div className="flex flex-col items-center justify-center py-12 text-center">
//                   <div className="w-16 h-16 rounded-full bg-success-500/10 flex items-center justify-center mb-4">
//                     <CheckCircle2 size={32} className="text-success-500" />
//                   </div>
//                   <h4 className="font-extrabold text-dark-900 text-lg mb-2">Application Submitted!</h4>
//                   <p className="text-neutral-500 text-sm mb-6 max-w-xs">
//                     Thank you for your interest in joining Adexa Sports. Our team will review your application and reach out soon.
//                   </p>
//                   <button
//                     onClick={() => {
//                       setSubmitted(false);
//                       setForm({ name: '', email: '', phone: '', specialization: '', otherSpec: '', file: null });
//                     }}
//                     className="btn-secondary text-sm"
//                   >
//                     Submit Another Application
//                   </button>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-xs font-semibold text-dark-700 mb-1.5">Full Name *</label>
//                       <input
//                         type="text"
//                         required
//                         value={form.name}
//                         onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
//                         className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-dark-900 text-sm focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
//                         placeholder="Your full name"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-xs font-semibold text-dark-700 mb-1.5">Email Address *</label>
//                       <input
//                         type="email"
//                         required
//                         value={form.email}
//                         onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
//                         className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-dark-900 text-sm focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
//                         placeholder="your@email.com"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-xs font-semibold text-dark-700 mb-1.5">Mobile Number *</label>
//                       <input
//                         type="tel"
//                         required
//                         value={form.phone}
//                         onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
//                         className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-dark-900 text-sm focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
//                         placeholder="+91 XXXXX XXXXX"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-xs font-semibold text-dark-700 mb-1.5">Specialization *</label>
//                       <select
//                         required
//                         value={form.specialization}
//                         onChange={(e) => setForm((f) => ({ ...f, specialization: e.target.value, otherSpec: '' }))}
//                         className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-dark-900 text-sm focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all bg-white appearance-none"
//                       >
//                         <option value="">Select specialization</option>
//                         {specializations.map((s) => (
//                           <option key={s} value={s}>{s}</option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>

//                   {/* Dynamic Other field */}
//                   {form.specialization === 'Other' && (
//                     <div>
//                       <label className="block text-xs font-semibold text-dark-700 mb-1.5">Please specify *</label>
//                       <input
//                         type="text"
//                         required
//                         value={form.otherSpec}
//                         onChange={(e) => setForm((f) => ({ ...f, otherSpec: e.target.value }))}
//                         className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-dark-900 text-sm focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
//                         placeholder="Describe your specialization"
//                       />
//                     </div>
//                   )}

//                   {/* File upload */}
//                   <div>
//                     <label className="block text-xs font-semibold text-dark-700 mb-1.5">Upload CV (PDF only, Max 2MB)</label>
//                     <div
//                       onClick={() => fileRef.current?.click()}
//                       className={`w-full px-4 py-7 rounded-xl border-2 border-dashed cursor-pointer transition-all text-center group ${
//                         form.file
//                           ? 'border-primary-300 bg-primary-50'
//                           : 'border-neutral-200 bg-neutral-50 hover:border-primary-300 hover:bg-primary-50/30'
//                       }`}
//                     >
//                       {form.file ? (
//                         <div className="flex items-center justify-center gap-2 text-primary-600">
//                           <CheckCircle2 size={16} />
//                           <span className="text-sm font-semibold">{form.file.name}</span>
//                         </div>
//                       ) : (
//                         <div className="flex flex-col items-center gap-2 text-neutral-400 group-hover:text-primary-400 transition-colors">
//                           <Upload size={20} />
//                           <span className="text-sm font-medium">Click to upload your CV</span>
//                           <span className="text-xs">PDF only · Max 2MB</span>
//                         </div>
//                       )}
//                     </div>
//                     <input ref={fileRef} type="file" accept=".pdf" onChange={handleFile} className="hidden" />
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={!form.name || !form.email || !form.phone || !form.specialization || (form.specialization === 'Other' && !form.otherSpec)}
//                     className="btn-primary justify-center mt-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
//                   >
//                     Submit Application
//                     <ArrowRight size={18} />
//                   </button>
//                 </form>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { useState, useRef } from 'react';
import { Upload, CheckCircle2, ArrowRight, Mail } from 'lucide-react';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;

const specializations = [
  'Sports Coach',
  'PE Trainer',
  'School Sports Coordinator',
  'Other',
];

export default function Careers() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    specialization: '',
    otherSpec: '',
    file: null as File | null,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf' && file.size <= 2 * 1024 * 1024) {
      setForm((f) => ({ ...f, file }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.specialization) return;
    setLoading(true);
    setError('');
    try {
      const spec = form.specialization === 'Other' ? form.otherSpec || 'Other' : form.specialization;
      const res = await fetch(`${SUPABASE_URL}/functions/v1/send-career-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          specialization: spec,
          hasCV: !!form.file,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? 'Failed to submit. Please try again.');
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="careers" className="py-20 lg:py-28 bg-neutral-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 animate-on-scroll">
          <div className="section-tag">
            <span className="w-2 h-2 bg-primary-500 rounded-full" />
            Join Our Team
          </div>
          <h2 className="section-title mb-4">
            Build the Future of{' '}
            <span className="text-gradient">School Sports</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            We're building structured school sports programs for the next generation. Join us if you're passionate about making a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Why Join */}
          <div className="lg:col-span-2 animate-on-scroll-left flex flex-col gap-5">
            <div className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-card">
              <h3 className="font-extrabold text-dark-900 text-lg mb-4">Why Join Adexa Sports?</h3>
              <div className="flex flex-col gap-3">
                {[
                  'Work with passionate sports professionals',
                  'Impact thousands of students across schools',
                  'Grow in a structured sports organization',
                  'Contribute to India\'s school sports ecosystem',
                  'Flexible roles across different functions',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-dark-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-6 text-white">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                <Mail size={18} className="text-white" />
              </div>
              <h4 className="font-extrabold text-lg mb-2">Direct Applications</h4>
              <p className="text-white/80 text-sm mb-4">You can also send your resume directly to our careers team.</p>
              <a
                href="mailto:careers@adexasports.com"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-primary-600 font-bold text-sm rounded-xl hover:bg-primary-50 transition-colors"
              >
                <Mail size={14} />
                careers@adexasports.com
              </a>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-neutral-100 shadow-card">
              <div className="text-xs font-semibold text-neutral-400 mb-2 uppercase tracking-wider">We're Hiring For</div>
              <div className="flex flex-wrap gap-2">
                {['Sports Coach', 'PE Trainer', 'School Sports Coordinator', 'Other Roles'].map((r) => (
                  <span key={r} className="px-3 py-1.5 bg-primary-50 text-primary-600 text-xs font-bold rounded-full border border-primary-100">
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Application Form */}
          <div className="lg:col-span-3 animate-on-scroll-right">
            <div className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-card">
              <h3 className="font-extrabold text-dark-900 text-xl mb-6">Career Application</h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-success-500/10 flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} className="text-success-500" />
                  </div>
                  <h4 className="font-extrabold text-dark-900 text-lg mb-2">Application Submitted!</h4>
                  <p className="text-neutral-500 text-sm mb-6 max-w-xs">
                    Thank you for your interest in joining Adexa Sports. Our team will review your application and reach out soon.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setError('');
                      setForm({ name: '', email: '', phone: '', specialization: '', otherSpec: '', file: null });
                    }}
                    className="btn-secondary text-sm"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-dark-700 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-dark-900 text-sm focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-dark-700 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-dark-900 text-sm focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-dark-700 mb-1.5">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-dark-900 text-sm focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-dark-700 mb-1.5">Specialization *</label>
                      <select
                        required
                        value={form.specialization}
                        onChange={(e) => setForm((f) => ({ ...f, specialization: e.target.value, otherSpec: '' }))}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-dark-900 text-sm focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all bg-white appearance-none"
                      >
                        <option value="">Select specialization</option>
                        {specializations.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Dynamic Other field */}
                  {form.specialization === 'Other' && (
                    <div>
                      <label className="block text-xs font-semibold text-dark-700 mb-1.5">Please specify *</label>
                      <input
                        type="text"
                        required
                        value={form.otherSpec}
                        onChange={(e) => setForm((f) => ({ ...f, otherSpec: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-dark-900 text-sm focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                        placeholder="Describe your specialization"
                      />
                    </div>
                  )}

                  {/* File upload */}
                  <div>
                    <label className="block text-xs font-semibold text-dark-700 mb-1.5">Upload CV (PDF only, Max 2MB)</label>
                    <div
                      onClick={() => fileRef.current?.click()}
                      className={`w-full px-4 py-7 rounded-xl border-2 border-dashed cursor-pointer transition-all text-center group ${
                        form.file
                          ? 'border-primary-300 bg-primary-50'
                          : 'border-neutral-200 bg-neutral-50 hover:border-primary-300 hover:bg-primary-50/30'
                      }`}
                    >
                      {form.file ? (
                        <div className="flex items-center justify-center gap-2 text-primary-600">
                          <CheckCircle2 size={16} />
                          <span className="text-sm font-semibold">{form.file.name}</span>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-2 text-neutral-400 group-hover:text-primary-400 transition-colors">
                          <Upload size={20} />
                          <span className="text-sm font-medium">Click to upload your CV</span>
                          <span className="text-xs">PDF only · Max 2MB</span>
                        </div>
                      )}
                    </div>
                    <input ref={fileRef} type="file" accept=".pdf" onChange={handleFile} className="hidden" />
                  </div>

                  {error && (
                    <p className="text-sm text-red-500 font-medium">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={loading || !form.name || !form.email || !form.phone || !form.specialization || (form.specialization === 'Other' && !form.otherSpec)}
                    className="btn-primary justify-center mt-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {loading ? 'Submitting…' : 'Submit Application'}
                    {!loading && <ArrowRight size={18} />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
