import { useState } from 'react';
import { Phone, CheckCircle2, ArrowRight, Clock, Shield } from 'lucide-react';

type Step = 'details' | 'otp' | 'confirm' | 'done';

const timeSlots = [
  '9:00 AM - 10:00 AM',
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '2:00 PM - 3:00 PM',
  '3:00 PM - 4:00 PM',
  '4:00 PM - 5:00 PM',
];

export default function ScheduleCall() {
  const [step, setStep] = useState<Step>('details');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    school: '',
    city: '',
    slot: '',
  });
  const [otp, setOtp] = useState(['', '', '', '']);
  const [otpError, setOtpError] = useState(false);

  const handleOtp = (val: string, idx: number) => {
    const next = [...otp];
    next[idx] = val.slice(-1);
    setOtp(next);
    if (val && idx < 3) {
      const inputs = document.querySelectorAll<HTMLInputElement>('.otp-input');
      inputs[idx + 1]?.focus();
    }
  };

  const verifyOtp = () => {
    const code = otp.join('');
    if (code === '1234' || code.length === 4) {
      setOtpError(false);
      setStep('confirm');
    } else {
      setOtpError(true);
    }
  };

  return (
    <section id="schedule" className="py-20 lg:py-28 bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-sports-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-500/20 border border-primary-500/30 text-primary-300 text-sm font-semibold rounded-full mb-4">
            <Clock size={14} />
            Schedule a Call
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Let's Build Your School's{' '}
            <span className="text-gradient bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Sports Ecosystem
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Book a free consultation call with our sports program specialists.
          </p>
        </div>

        <div className="animate-on-scroll">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
            {/* Progress bar */}
            <div className="flex border-b border-neutral-100">
              {['Details', 'Verify', 'Confirm'].map((label, i) => {
                const steps: Step[] = ['details', 'otp', 'confirm'];
                const active = steps.indexOf(step) >= i;
                return (
                  <div key={label} className={`flex-1 py-3 text-center text-xs font-bold transition-all duration-300 ${active ? 'bg-primary-500 text-white' : 'text-neutral-400'}`}>
                    {i + 1}. {label}
                  </div>
                );
              })}
            </div>

            <div className="p-8">
              {step === 'details' && (
                <div>
                  <h3 className="font-extrabold text-dark-900 text-xl mb-6">Your Details</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-semibold text-dark-700 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-dark-900 text-sm focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                        placeholder="Your name"
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
                      <label className="block text-xs font-semibold text-dark-700 mb-1.5">School Name *</label>
                      <input
                        type="text"
                        required
                        value={form.school}
                        onChange={(e) => setForm((f) => ({ ...f, school: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-dark-900 text-sm focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                        placeholder="School / Organization"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-dark-700 mb-1.5">City *</label>
                      <input
                        type="text"
                        required
                        value={form.city}
                        onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-dark-900 text-sm focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                        placeholder="Your city"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-xs font-semibold text-dark-700 mb-3">Preferred Time Slot *</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setForm((f) => ({ ...f, slot }))}
                          className={`px-3 py-2.5 rounded-xl text-xs font-semibold border-2 transition-all duration-200 ${
                            form.slot === slot
                              ? 'border-primary-500 bg-primary-50 text-primary-600'
                              : 'border-neutral-200 text-neutral-600 hover:border-primary-200'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      if (form.name && form.phone && form.school && form.city && form.slot) {
                        setStep('otp');
                      }
                    }}
                    className="btn-primary w-full justify-center"
                    disabled={!form.name || !form.phone || !form.school || !form.city || !form.slot}
                  >
                    Send OTP to Verify
                    <ArrowRight size={18} />
                  </button>
                </div>
              )}

              {step === 'otp' && (
                <div className="max-w-sm mx-auto text-center">
                  <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-4">
                    <Phone size={28} className="text-primary-500" />
                  </div>
                  <h3 className="font-extrabold text-dark-900 text-xl mb-2">Verify Your Number</h3>
                  <p className="text-neutral-500 text-sm mb-8">
                    We've sent a 4-digit OTP to <strong className="text-dark-900">{form.phone}</strong>
                  </p>

                  <div className="flex items-center justify-center gap-3 mb-4">
                    {otp.map((digit, i) => (
                      <input
                        key={i}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtp(e.target.value, i)}
                        className={`otp-input w-14 h-14 text-center text-xl font-bold rounded-xl border-2 transition-all ${
                          otpError ? 'border-error-500 bg-red-50' : 'border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100'
                        }`}
                      />
                    ))}
                  </div>

                  {otpError && (
                    <p className="text-error-500 text-xs mb-4">Invalid OTP. Please try again.</p>
                  )}

                  <div className="flex flex-col gap-3">
                    <button onClick={verifyOtp} className="btn-primary justify-center">
                      Verify OTP
                    </button>
                    <button
                      onClick={() => setStep('details')}
                      className="text-sm text-neutral-500 hover:text-primary-500 transition-colors"
                    >
                      Change number
                    </button>
                    <div className="flex items-center justify-center gap-1.5 text-xs text-neutral-400">
                      <Shield size={12} />
                      OTP is demo only — enter any 4 digits
                    </div>
                  </div>
                </div>
              )}

              {step === 'confirm' && (
                <div className="max-w-sm mx-auto text-center">
                  <div className="w-16 h-16 rounded-full bg-success-500/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} className="text-success-500" />
                  </div>
                  <h3 className="font-extrabold text-dark-900 text-xl mb-2">Booking Confirmed!</h3>
                  <p className="text-neutral-500 text-sm mb-6">
                    Your call has been scheduled. Our team will call you at your preferred time.
                  </p>

                  <div className="bg-neutral-50 rounded-2xl p-5 text-left mb-6 border border-neutral-100">
                    <div className="flex flex-col gap-2.5">
                      {[
                        { label: 'Name', value: form.name },
                        { label: 'Phone', value: form.phone },
                        { label: 'School', value: form.school },
                        { label: 'City', value: form.city },
                        { label: 'Time Slot', value: form.slot },
                      ].map((row) => (
                        <div key={row.label} className="flex items-center justify-between">
                          <span className="text-xs text-neutral-400 font-semibold">{row.label}</span>
                          <span className="text-sm text-dark-900 font-semibold">{row.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => { setStep('details'); setForm({ name: '', phone: '', school: '', city: '', slot: '' }); setOtp(['', '', '', '']); }}
                    className="btn-secondary justify-center w-full"
                  >
                    Schedule Another Call
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
