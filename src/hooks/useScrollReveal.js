import { useEffect, useRef } from 'react';

export default function useScrollReveal(threshold = 0.12) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); } }),
      { threshold }
    );
    if (targets.length) {
      targets.forEach((t) => obs.observe(t));
    } else {
      el.classList.contains('reveal') || el.classList.contains('reveal-left') || el.classList.contains('reveal-right')
        ? obs.observe(el) : null;
    }
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}
