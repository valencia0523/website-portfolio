import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useGsapFadeInUp = (duration = 2, yOffset = 50) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: yOffset },
        { opacity: 1, y: 0, duration, stagger: 0.2, ease: 'power3.out' }
      );
    }
  }, [duration, yOffset]);

  return ref;
};
