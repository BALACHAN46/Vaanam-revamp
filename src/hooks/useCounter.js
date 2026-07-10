import { useState, useEffect } from 'react';

export default function useCounter(end, duration = 2000, start = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    let animationFrame;

    const updateCounter = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      // Easing function (easeOutExpo)
      const ease = progress === duration ? 1 : 1 - Math.pow(2, -10 * progress / duration);
      const current = Math.min(Math.floor(end * ease), end);
      
      setCount(current);

      if (progress < duration) {
        animationFrame = requestAnimationFrame(updateCounter);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count;
}
