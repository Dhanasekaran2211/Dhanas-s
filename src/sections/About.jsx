import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Calendar } from '../components/Icons';
import profileImg from '../assets/Refine_and_optimize_202604271135 (1).jpeg';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);

  return (
    <section 
      id="about"
      ref={containerRef}
      className="section-padding bg-surface overflow-hidden"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            style={{ y: imageY }}
            className="relative aspect-[4/5] lg:aspect-[3/4] will-change-transform"
          >
            <div className="absolute inset-0 bg-primary/5 rounded-2xl" />
            <div className="absolute inset-4 bg-primary/10 rounded-xl overflow-hidden group">
              <img 
                src={profileImg} 
                alt="Profile" 
                className="w-full h-full object-cover transition-transform duration-slow group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-slow" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-secondary p-6 rounded-lg">
              <p className="font-display text-4xl text-primary">1+</p>
              <p className="font-mono text-tiny text-primary/70 uppercase tracking-wider">Year Experience</p>
            </div>
          </motion.div>

          <motion.div 
            style={{ y }}
            className="will-change-transform"
          >
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-secondary text-small tracking-widest uppercase mb-4"
            >
              About Me
            </motion.p>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-display-md text-primary mb-8"
            >
              Turning ideas into <span className="text-secondary">functional reality</span>.
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 text-body-lg text-text-secondary"
            >
              <p>
                I'm a Full Stack Web Developer with a strong foundation in the MERN stack, 
                dedicated to building responsive and user-friendly web applications. 
                My focus is on delivering seamless user experiences that align perfectly 
                with project goals and business needs.
              </p>
              <p>
                With a background in Computer Science Engineering, I've spent the past year 
                working as a Freelance Web Developer, where I've successfully translated complex 
                client requirements into clean, optimized code. I thrive on the challenge 
                of cross-browser compatibility and performance optimization.
              </p>
              <p>
                I recently completed an intensive MERN Stack development course at 
                Frenzo Academy, where I built and deployed scalable applications including 
                E-commerce platforms and educational websites. I am constantly exploring 
                new technologies like Next.js and AI-driven development tools.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-6 mt-10 pt-10 border-t border-primary/10"
            >
              <div className="flex items-center gap-2 text-text-secondary">
                <MapPin size={18} className="text-secondary" />
                <span className="text-small">Karur, Tamil Nadu</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary">
                <Calendar size={18} className="text-secondary" />
                <span className="text-small">Available for new opportunities</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}