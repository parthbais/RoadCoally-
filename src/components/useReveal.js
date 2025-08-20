// useReveal.js — add 'in' class when element enters viewport
import { useEffect, useRef } from "react";
import { motion } from 'framer-motion';
import { fadeUp } from '../motionVariants';

export default function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("in");
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return ref;
}


