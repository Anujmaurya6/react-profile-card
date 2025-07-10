// src/hooks/useScrollAnimation.js
import { useEffect, useState } from 'react';

const useScrollAnimation = (ref, threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: Unobserve after first trigger if you only want animation once
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: threshold, // Percentage of element visible before triggering
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, threshold]);

  return isVisible;
};

export default useScrollAnimation;