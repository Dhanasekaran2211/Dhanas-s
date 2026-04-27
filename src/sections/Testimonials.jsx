import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

function TestimonialCard({ name, title, company, quote, index }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1] 
      }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-elevated border border-primary/5 rounded-2xl p-8 transition-all duration-normal
                 hover:border-secondary/20 hover:shadow-xl"
    >
      <div className="relative">
        <span className="font-display text-6xl text-secondary/20 absolute -top-4 -left-2">"</span>
        <blockquote className="text-body-lg text-text-secondary leading-relaxed mb-8 relative z-10">
          {quote}
        </blockquote>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center">
            <span className="font-display text-xl text-primary">{name[0]}</span>
          </div>
          <div>
            <p className="font-medium text-primary">{name}</p>
            <p className="text-small text-text-muted">{title}, {company}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const testimonials = [
  {
    name: 'Sarah Chen',
    title: 'VP of Engineering',
    company: 'Stripe',
    quote: 'Working with this engineer was a revelation. They didn\'t just write code — they elevated our entire frontend practice. Their ability to balance technical excellence with product impact is rare. The design system they architected became the foundation for how we build at scale.',
  },
  {
    name: 'Marcus Williams',
    title: 'CTO',
    company: 'FinTech Startup',
    quote: 'I\'ve hired dozens of senior engineers over the years. This person stands out as one of the few who truly understands the full product lifecycle. They translated complex requirements into elegant, performant solutions that directly contributed to our Series B success.',
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="font-mono text-secondary text-small tracking-widest uppercase mb-4">
            What People Say
          </p>
          <h2 className="font-display text-display-md text-primary max-w-2xl mx-auto">
            Colleagues who've <span className="text-secondary">worked with me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}