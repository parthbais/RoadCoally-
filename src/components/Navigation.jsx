
import "../App.css";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Navigation(){ 
  const [scrolled, setScrolled] = useState(false);
  useEffect(()=> {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return ()=> window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`fixed w-full z-50 transition-colors ${scrolled ? 'bg-[var(--bg)]/90 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container flex items-center justify-between h-16">
        <a className="brand flex items-center gap-3"> /* logo */ </a>
        <div className="hidden md:flex gap-3 items-center">
          <motion.a whileHover={{y:-2}} className="text-sm text-[var(--muted)]">Features</motion.a>
          <a className="btn btn-primary">Get Started</a>
        </div>
      </div>
    </nav>
  );
}