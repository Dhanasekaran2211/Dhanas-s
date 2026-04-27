import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Download } from '../components/Icons';
import video from "../assets/0427.mp4";

import resumePdf from '../assets/resume.pdf';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary"
    >
      <motion.div 
        style={{ opacity, scale }}
        className="absolute inset-0 will-change-transform"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover object-[center_15%] grayscale opacity-60 transition-opacity duration-1000"
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-primary/40 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-primary/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,162,39,0.1)_0%,_transparent_70%)]" />
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-secondary text-small tracking-widest uppercase mb-6"
          >
            Full stack Developer
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-display-xl text-accent mb-8"
          >
            I'm <span className="text-secondary">Dhanasekaran</span><br />
            Building digital<br />
            excellence.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-body-lg text-accent/70 max-w-xl mb-12"
          >
            Web Developer with expertise in building responsive, user-friendly websites 
            and web applications. Turning ideas into clean, functional code that 
            delivers seamless user experiences.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a 
              href={resumePdf} 
              download="Dhanasekaran_Resume.pdf"
              className="btn-secondary text-accent border-accent/30 hover:border-accent hover:bg-accent hover:text-primary inline-flex items-center"
            >
              <Download size={18} className="mr-2" />
              Download CV
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center gap-3 text-accent/40 hover:text-accent/70 transition-colors"
          aria-label="Scroll to see more"
        >
          <span className="font-mono text-tiny tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
}
