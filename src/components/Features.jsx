import React from "react";
import useReveal from "./useReveal";
import "../App.css";
import { fadeUp } from '../motionVariants';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Smart Matching",
    text: "We pair requests with nearby drivers for instant, low-cost delivery.",
    img: "/src/assets/images/feature-1.png",
  },
  {
    title: "Trusted & Secure",
    text: "Ratings, identity checks, and in-app chat keep things safe and friendly.",
    img: "/src/assets/images/feature-2.png",
  },
  {
    title: "Earn On Your Route",
    text: "Drivers earn extra by delivering along their usual paths—win-win.",
    img: "/src/assets/images/feature-3.png",
  },
];

const steps = [
  { step: 1, title: "Post a Request", text: "Add pickup, drop, and tip." },
  { step: 2, title: "Get Matched", text: "Nearby driver accepts instantly." },
  { step: 3, title: "Track Live", text: "Follow the driver’s live ETA." },
  { step: 4, title: "Delivered", text: "Rate, tip, and you’re done." },
];

export default function Features(){
  const r1 = useReveal();
  const r2 = useReveal();

  return (
    <section id="features" className="section">
      <div className="container">
        <div className="reveal" ref={r1}>
          <h2 style={{fontSize:"32px", marginBottom: 10}}>Features & How It Works</h2>
          <p style={{color:"var(--muted)", marginBottom: 18}}>
            A simple, sleek flow with delightful micro-interactions.
          </p>
        </div>

        <div className="grid-3 reveal" ref={r2}>
          {features.map((f) => (
            <article key={f.title} className="card gradient-card">
              <img src={f.img} alt="" style={{width:"100%", borderRadius:12, marginBottom:12, opacity:.95}} />
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>

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


        {/* How it works mini-row */}
        <div className="card" style={{marginTop: 18}}>
          <div className="grid-3" style={{gridTemplateColumns:"repeat(4,1fr)"}}>
            {steps.map(s => (
              <div key={s.step} className="reveal" style={{padding:"6px"}}>
                <div className="card gradient-card" style={{height:"100%"}}>
                  <div style={{fontSize:14, color:"var(--muted)"}}>Step {s.step}</div>
                  <h4 style={{marginTop:6}}>{s.title}</h4>
                  <p style={{color:"var(--muted)", marginTop:6}}>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
