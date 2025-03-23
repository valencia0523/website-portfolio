import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useGsapFadeInLeft = (duration = 2, xOffSet = -50) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(
        ref.current,
        { opacity: 0, x: xOffSet, scale: 1 },
        { opacity: 1, x: 0, scale: 1, duration, ease: 'power3.out' }
      );
    }
  }, [duration, xOffSet]);

  return ref;
};
