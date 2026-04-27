import { motion } from 'framer-motion';
import { Briefcase } from '../components/Icons';

const experiences = [
  {
    id: 1,
    company: 'Freelance Web Developer',
    role: 'Full Stack Developer',
    period: '2025 — Present',
    achievements: [
      'Developed and maintained responsive web applications using the MERN stack',
      'Translated client requirements into functional, clean code specifically tailored for business needs',
      'Ensured cross-browser compatibility and optimized application performance',
    ],
  },
  {
    id: 2,
    company: 'Frenzo Academy, Coimbatore',
    role: 'MERN Stack Development Intern',
    period: '2024 — 2025',
    achievements: [
      'Completed intensive hands-on training in Full Stack Web Development using MongoDB, Express.js, React, and Node.js',
      'Built and deployed scalable web applications, including an E-commerce platform and an Educational website',
      'Collaborated with peers to implement RESTful APIs and integrate frontend interfaces with backend databases',
    ],
  },
  {
    id: 3,
    company: 'PGP College of Engineering & Technology',
    role: 'BE Computer Science',
    period: '2020 — 2024',
    achievements: [
      'Studied core computer science principles including algorithms, data structures, and database management',
      'Developed several academic projects focused on web technologies and software engineering',
      'Actively participated in technical workshops and coding competitions',
    ],
  },
];

export default function Experience() {
  return (
    <section className="section-padding bg-primary overflow-hidden">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="font-mono text-secondary text-small tracking-widest uppercase mb-4">
            Career Journey
          </p>
          <h2 className="font-display text-display-md text-accent">
            Where I've <span className="text-secondary">contributed</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-accent/10 -translate-x-1/2" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 md:text-right">
                  <div className={`flex ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <div className="bg-primary-light/50 border border-accent/10 rounded-xl p-6 max-w-lg 
                                    transition-all duration-normal hover:border-secondary/30">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-secondary/10 rounded-lg">
                          <Briefcase size={18} className="text-secondary" />
                        </div>
                        <div>
                          <h3 className="font-display text-heading text-accent">{exp.company}</h3>
                          <p className="font-mono text-tiny text-secondary">{exp.period}</p>
                        </div>
                      </div>
                      <p className="text-body text-accent/80 mb-4">{exp.role}</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-small text-accent/60">
                            <span className="text-secondary">•</span> {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-secondary rounded-full -translate-x-1/2 mt-6
                                ring-4 ring-primary shadow-lg" />
                
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}