import React from "react";
import useReveal from "./useReveal";
import "../App.css";
import { motion } from 'framer-motion';
import { fadeUp } from '../motionVariants';

export default function Hero(){
  const ref = useReveal();
<section className="hero relative min-h-[80vh]">
  <video className="absolute inset-0 w-full h-full object-cover" src="/src/assets/videos/hero-bg.mp4" muted loop playsInline preload="metadata" />
  <div className="absolute inset-0 gradient-hero opacity-80"></div>
  <div className="container relative z-10">
    <motion.h1 variants={fadeUp} initial="hidden" whileInView="show">RoadCoally — deliver smarter</motion.h1>
    <motion.div variants={fadeUp} className="mt-6">
      <a className="btn btn-primary">Get App</a>
      <a className="btn btn-ghost">How it works</a>
    </motion.div>
  </div>
</section>
}


