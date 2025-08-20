export const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.14, delayChildren: 0.08 } },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] } },
};

export const hoverLift = { whileHover: { y: -4, scale: 1.02 }, transition: { type: 'spring', stiffness: 250, damping: 18 } };
