import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export function useParallax(value, range) {
  const { scrollYProgress } = useScroll({
    target: value,
    offset: ['start end', 'end start'],
  });
  
  return useTransform(scrollYProgress, [0, 1], range);
}

export function useScrollReveal() {
  return {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };
}

export function useStaggerContainer() {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      }
    }
  };
}