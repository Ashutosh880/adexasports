import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import About from './components/About';
import Offerings from './components/Offerings';
import WhyAdexa from './components/WhyAdexa';
import Benefits from './components/Benefits';
import Process from './components/Process';
import Leadership from './components/Leadership';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const observe = () => {
      document.querySelectorAll(
        '.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .stagger-parent'
      ).forEach((el) => observer.observe(el));
    };

    observe();

    const mutationObs = new MutationObserver(observe);
    mutationObs.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObs.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustSection />
      <About />
      <Leadership />
      <Offerings />
      <WhyAdexa />
      <Benefits />
      <Process />
      <Careers />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
