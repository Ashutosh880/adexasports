import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll(
      '.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .stagger-parent'
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  });
}

export function useCounter(end: number, duration: number = 2000) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLSpanElement;
            let start = 0;
            const step = end / (duration / 16);
            const timer = setInterval(() => {
              start += step;
              if (start >= end) {
                el.textContent = end.toString();
                clearInterval(timer);
              } else {
                el.textContent = Math.floor(start).toString();
              }
            }, 16);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return ref;
}
