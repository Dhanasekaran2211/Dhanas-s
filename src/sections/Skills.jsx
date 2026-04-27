import { motion } from 'framer-motion';
import { 
  Code2, Database, Cloud, Wrench, PenTool, Workflow 
} from '../components/Icons';

const skillCategories = [
  {
    title: 'Front End',
    icon: Code2,
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React (Redux, Router)', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Back End',
    icon: Database,
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Error Handling', 'PHP', 'Next.js basics'],
  },
  {
    title: 'Database & AI',
    icon: Cloud,
    skills: ['MongoDB (CRUD)', 'ChatGPT', 'Claude AI', 'Gemini', 'Perplexity'],
  },
  {
    title: 'Tools & Design',
    icon: Wrench,
    skills: ['Git', 'VS Code', 'Cursor', 'Antigravity', 'OpenCode', 'Photoshop'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Skills() {
  return (
    <section className="section-padding bg-primary">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="font-mono text-secondary text-small tracking-widest uppercase mb-4">
            Technical Expertise
          </p>
          <h2 className="font-display text-display-md text-accent max-w-2xl mx-auto">
            A toolkit focused on <span className="text-secondary">modern web standards</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-primary-light/50 border border-accent/10 rounded-xl p-6 h-full transition-all duration-normal hover:border-secondary/30 hover:bg-primary-light/70">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <category.icon size={20} className="text-secondary" />
                  </div>
                  <h3 className="font-display text-heading text-accent">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 bg-surface/5 text-accent/70 text-small rounded-full 
                               transition-colors duration-fast group-hover:bg-secondary/10 group-hover:text-secondary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-center"
        >
          {[
            { number: '10+', label: 'Projects Completed' },
            { number: '1+', label: 'Year Experience' },
            { number: 'MERN', label: 'Stack Mastery' },
            { number: '100%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="px-8">
              <p className="font-display text-display-lg text-secondary">{stat.number}</p>
              <p className="font-mono text-tiny text-accent/50 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}