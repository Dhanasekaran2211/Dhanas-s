import { motion } from 'framer-motion';
import { GitHub, Linkedin, ArrowUp } from '../components/Icons';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary-dark py-12 border-t border-accent/5">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="font-display text-heading-lg text-accent">
              Dhanasekaran
            </p>
            <p className="font-mono text-tiny text-accent/40 uppercase tracking-widest">
              Full stack Developer
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-8" role="navigation" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-small text-accent/60 hover:text-secondary transition-colors duration-fast"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/Dhanasekaran2211"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-accent/40 hover:text-secondary transition-colors duration-fast"
              aria-label="GitHub"
            >
              <GitHub size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/dhana-sekaran-267077313"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-accent/40 hover:text-secondary transition-colors duration-fast"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-accent/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-tiny text-accent/30">
            © {new Date().getFullYear()} Dhanasekaran. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-primary-light border border-accent/10 rounded-full text-accent/40 
                     hover:text-secondary hover:border-secondary/30 transition-all duration-fast"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}