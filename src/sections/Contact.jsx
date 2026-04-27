import { useState } from 'react';
import { motion } from 'framer-motion';
import { GitHub, Linkedin, Mail, Send, Download } from '../components/Icons';
import resumePdf from '../assets/resume.pdf';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="section-padding bg-primary">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <p className="font-mono text-secondary text-small tracking-widest uppercase mb-4">
              Get in Touch
            </p>
            <h2 className="font-display text-display-md text-accent mb-6">
              Let's build something <span className="text-secondary">together</span>
            </h2>
            <p className="text-body-lg text-accent/60 max-w-xl mx-auto">
              I'm always interested in hearing about new projects, opportunities, 
              and conversations about the future of frontend development.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid lg:grid-cols-5 gap-12 lg:gap-16"
          >
            <div className="lg:col-span-3">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-secondary/10 border border-secondary/20 rounded-2xl p-8 text-center"
                >
                  <p className="font-display text-heading-lg text-accent mb-2">Message Sent</p>
                  <p className="text-body text-accent/60">
                    Thanks for reaching out. I'll get back to you within 24-48 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label 
                        htmlFor="name" 
                        className="block font-mono text-tiny text-accent/60 uppercase tracking-wider mb-3"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-primary-light/50 border border-accent/10 rounded-xl 
                                 text-accent placeholder:text-accent/30 focus:outline-none focus:border-secondary/50
                                 transition-colors duration-fast"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label 
                        htmlFor="email" 
                        className="block font-mono text-tiny text-accent/60 uppercase tracking-wider mb-3"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-primary-light/50 border border-accent/10 rounded-xl 
                                 text-accent placeholder:text-accent/30 focus:outline-none focus:border-secondary/50
                                 transition-colors duration-fast"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="message" 
                      className="block font-mono text-tiny text-accent/60 uppercase tracking-wider mb-3"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-5 py-4 bg-primary-light/50 border border-accent/10 rounded-xl 
                               text-accent placeholder:text-accent/30 focus:outline-none focus:border-secondary/50
                               transition-colors duration-fast resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message
                        <Send size={18} />
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-2 flex flex-col justify-center">
              <div className="space-y-8">
                <div>
                  <p className="font-mono text-tiny text-accent/40 uppercase tracking-widest mb-4">
                    Or reach out directly
                  </p>
                  <a 
                    href="mailto:dhanasekaranp2211@gmail.com"
                    className="inline-flex items-center gap-3 text-body-lg text-accent hover:text-secondary 
                             transition-colors duration-fast"
                  >
                    <Mail size={20} />
                    dhanasekaranp2211@gmail.com
                  </a>
                </div>

                <div>
                  <p className="font-mono text-tiny text-accent/40 uppercase tracking-widest mb-4">
                    Call me
                  </p>
                  <a 
                    href="tel:+918220857924"
                    className="inline-flex items-center gap-3 text-body-lg text-accent hover:text-secondary 
                             transition-colors duration-fast"
                  >
                    <span className="text-secondary font-mono">📱</span>
                    +91 8220857924
                  </a>
                </div>

                <div>
                  <p className="font-mono text-tiny text-accent/40 uppercase tracking-widest mb-4">
                    Follow along
                  </p>
                  <div className="flex gap-4">
                    <a 
                      href="https://github.com/Dhanasekaran2211"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-primary-light/50 border border-accent/10 rounded-xl text-accent/60 
                               hover:text-secondary hover:border-secondary/30 transition-all duration-fast"
                      aria-label="GitHub"
                    >
                      <GitHub size={22} />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/dhana-sekaran-267077313"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-primary-light/50 border border-accent/10 rounded-xl text-accent/60 
                               hover:text-secondary hover:border-secondary/30 transition-all duration-fast"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={22} />
                    </a>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-accent/5">
                  <a 
                    href={resumePdf}
                    download="Dhanasekaran_Resume.pdf"
                    className="inline-flex items-center gap-3 px-6 py-4 bg-secondary text-primary font-mono text-small 
                             uppercase tracking-widest rounded-xl hover:bg-secondary-light transition-all 
                             duration-fast group/resume"
                  >
                    <Download size={20} className="group-hover/resume:translate-y-0.5 transition-transform" />
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}