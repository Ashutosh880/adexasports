import { Mail, Phone, MapPin, MessageCircle, Instagram, Linkedin, Facebook } from 'lucide-react';

const WHATSAPP_NUMBER = '919826611105';
const WHATSAPP_MSG = encodeURIComponent('Hi Adexa Sports, I would like to know more about your sports programs.');

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Offerings', href: '#offerings' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Building structured and professionally managed sports programs for schools across India.
            </p>
            <div className="text-xs text-primary-400 font-bold uppercase tracking-widest mb-5">
              Grassroots to Greatness
            </div>
            <div className="flex items-center gap-2.5">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366] flex items-center justify-center transition-all duration-300 group"
                aria-label="WhatsApp"
              >
                <MessageCircle size={15} className="text-[#25D366] group-hover:text-white" />
              </a>
              <a
                href="https://www.instagram.com/adexasports?utm_source=qr&igsh=MXIxcXV6am9zanV1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-400 flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={15} className="text-white/50 hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/adexa-sports-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#0077B5] flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={15} className="text-white/50" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#1877F2] flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={15} className="text-white/50" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-5 text-xs uppercase tracking-widest">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-white/50 hover:text-primary-400 text-sm font-medium transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-5 text-xs uppercase tracking-widest">Contact</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/50 text-sm leading-relaxed">
                  Indore, Madhya Pradesh, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-primary-400 flex-shrink-0" />
                <a href="tel:+919826611105" title="Call +91 9826611105" className="text-white/50 hover:text-primary-400 text-sm transition-colors">
                  +91 9826611105
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={14} className="text-primary-400 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:info@adexasports.com" title="Email info@adexasports.com" className="text-white/50 hover:text-primary-400 text-sm transition-colors block">
                    info@adexasports.com
                  </a>
                  <a href="mailto:careers@adexasports.com" title="Email careers@adexasports.com" className="text-white/30 hover:text-primary-400 text-xs transition-colors">
                    careers@adexasports.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle size={14} className="text-[#25D366] flex-shrink-0" />
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-[#25D366] text-sm transition-colors"
                >
                  +91 98266-11105
                </a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-bold text-white mb-5 text-xs uppercase tracking-widest">Get Started</h4>
            <p className="text-white/50 text-sm mb-4 leading-relaxed">
              Ready to transform your school's sports program?
            </p>
            <button
              onClick={() => handleNav('#contact')}
              className="btn-primary text-sm w-full justify-center mb-3"
            >
              Get In Touch
            </button>
            <a
              href="mailto:careers@adexasports.com"
              className="text-white/30 hover:text-primary-400 text-xs transition-colors block text-center"
            >
              careers@adexasports.com
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Adexa Sports Private Limited. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/20 text-xs">Indore, Madhya Pradesh, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
