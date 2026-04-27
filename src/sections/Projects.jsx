import { motion } from 'framer-motion';
import { ExternalLink, GitHub } from '../components/Icons';
import maitreyiImg from '../assets/projects/maitreyi.png';
import thinkerhatImg from '../assets/projects/thinkerhat.png';
import clgImg from '../assets/projects/clg.png';
import pngImg from '../assets/projects/pngwebsite.png';
import annamalaiyarImg from '../assets/projects/annamalaiyar.png';
import squadraImg from '../assets/projects/squadra.png';
import ceramicsImg from '../assets/projects/ceramics.png';
import solarImg from '../assets/projects/solar.png';

const projects = [
  {
    id: 1,
    name: 'Squadra Creations',
    role: 'Design & Branding Agency',
    description: 'A creative agency website designed to showcase high-end branding work. Focuses on minimal design and bold typography.',
    tech: ['React', 'Framer Motion', 'Modern CSS', 'Vite'],
    outcome: 'Secured high-ticket clients through a premium digital portfolio.',
    liveUrl: 'https://www.squadracreations.com/',
    githubUrl: '#',
    asset: squadraImg,
    type: 'image',
  },
  {
    id: 2,
    name: 'Sabi Solar',
    role: 'Full Stack MERN Developer',
    description: 'A full admin-controlled dynamic e-commerce site for solar solutions. Features a complete dashboard for managing products, leads, and site content.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Admin Dashboard'],
    outcome: 'Enabled full site control via a custom-built admin panel.',
    liveUrl: 'https://sabisolar.vercel.app/',
    githubUrl: '#',
    asset: solarImg,
    type: 'image',
  },
  {
    id: 3,
    name: 'Maitreyi Foods',
    role: 'MERN Stack Developer',
    description: 'A dynamic e-commerce platform for food manufacturing and distribution. Built with the MERN stack to handle seamless ordering and product management.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind'],
    outcome: 'Successfully launched a scalable e-commerce solution.',
    liveUrl: 'https://maitreyifoods.com/',
    githubUrl: '#',
    asset: maitreyiImg,
    type: 'image',
  },
  {
    id: 4,
    name: 'Thinkerhat Tales',
    role: 'React & PHP Developer',
    description: 'A creative e-commerce storytelling platform. Integrated a React frontend with a PHP backend for robust performance and dynamic content.',
    tech: ['React', 'PHP', 'MySQL', 'Framer Motion', 'Tailwind'],
    outcome: 'Delivered a unique, interactive shopping experience.',
    liveUrl: 'https://thinkerhattales.com/',
    githubUrl: '#',
    asset: thinkerhatImg,
    type: 'image',
  },
  {
    id: 5,
    name: 'Sri Annamalaiyar Construction',
    role: 'React Developer',
    description: 'A visually stunning architectural showcase built with React and Framer Motion for immersive animations.',
    tech: ['React', 'Framer Motion', 'Gsap', 'Responsive Design'],
    outcome: 'Showcased construction excellence through modern web tech.',
    liveUrl: 'https://www.sriannamalaiyarconstruction.com/',
    githubUrl: '#',
    asset: annamalaiyarImg,
    type: 'image',
  },
  {
    id: 6,
    name: 'PNG India',
    role: 'MERN Stack Developer',
    description: 'A comprehensive corporate platform for industrial expertise, built using the full MERN stack for high performance and scalability.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Vite'],
    outcome: 'Established a strong digital identity for the brand.',
    liveUrl: 'https://png-india.vercel.app/',
    githubUrl: '#',
    asset: pngImg,
    type: 'image',
  },
  {
    id: 7,
    name: 'Educational Website',
    role: 'React Developer',
    description: 'A professional website for an educational institution. Focused on clean UI and smooth navigation using React.',
    tech: ['React', 'Tailwind CSS', 'React Router'],
    outcome: 'Improved online visibility for the institution.',
    liveUrl: 'https://college-4scj.vercel.app/',
    githubUrl: '#',
    asset: clgImg,
    type: 'image',
  },
  {
    id: 8,
    name: 'Modern Ceramics',
    role: 'React Developer',
    description: 'A boutique showcase website for handcrafted ceramics, focusing on elegant design and high-quality visuals using React.',
    tech: ['React', 'Tailwind CSS', 'CSS Modules'],
    outcome: 'Presented artisan work with a premium aesthetic.',
    liveUrl: 'https://ceramics.vercel.app/',
    githubUrl: '#',
    asset: ceramicsImg,
    type: 'image',
  },
  {
    id: 9,
    name: 'Enterprise Payroll System',
    role: 'MERN Stack Developer',
    description: 'A robust payroll management system built with the MERN stack. Handles complex tax calculations and employee data management.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    outcome: 'Automated payroll processes for enhanced efficiency.',
    liveUrl: '#',
    githubUrl: '#',
    asset: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
    type: 'image',
  },
  {
    id: 10,
    name: 'Visitor Management System',
    role: 'React & PHP Developer',
    description: 'A sophisticated visitor tracking application for corporate environments, combining React frontend with a PHP backend.',
    tech: ['React', 'PHP', 'MySQL', 'Security Logic'],
    outcome: 'Streamlined check-in processes for improved security.',
    liveUrl: '#',
    githubUrl: '#',
    asset: 'https://images.unsplash.com/photo-1556742049-02e1f260b3bb?auto=format&fit=crop&q=80&w=800',
    type: 'image',
  },
  {
    id: 11,
    name: 'Billing Application',
    role: 'React & Node.js Developer',
    description: 'A high-performance billing and invoicing application built with React and Node.js for real-time financial tracking.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Express'],
    outcome: 'Optimized financial workflows and reporting.',
    liveUrl: '#',
    githubUrl: '#',
    asset: 'https://images.unsplash.com/photo-1586281380349-631533a3c947?auto=format&fit=crop&q=80&w=800',
    type: 'image',
  },
];

const ProjectAsset = ({ project }) => (
  <>
    {project.type === 'image' ? (
      <img 
        src={project.asset} 
        alt={project.name} 
        className="w-full h-full object-contain transition-transform duration-slow group-hover/image:scale-105"
      />
    ) : (
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-contain transition-transform duration-slow group-hover/image:scale-105"
      >
        <source src={project.asset} type="video/mp4" />
      </video>
    )}
    {project.liveUrl !== '#' && (
      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover/image:opacity-100 transition-opacity duration-normal flex items-center justify-center">
        <span className="px-4 py-2 bg-accent text-primary text-tiny font-mono uppercase tracking-widest rounded-full transform translate-y-4 group-hover/image:translate-y-0 transition-transform duration-normal shadow-lg">
          View Project
        </span>
      </div>
    )}
  </>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-surface">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="font-mono text-secondary text-small tracking-widest uppercase mb-4">
            Selected Work
          </p>
          <h2 className="font-display text-display-md text-primary">
            Projects that <span className="text-secondary">mattered</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              className="group relative bg-elevated border border-primary/5 rounded-2xl p-8 lg:p-12 
                         transition-all duration-slow hover:border-secondary/20 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-4">
                  {project.liveUrl !== '#' ? (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block aspect-video lg:aspect-[4/3] bg-primary/5 rounded-xl overflow-hidden mb-6 lg:mb-0 relative group/image"
                    >
                      <ProjectAsset project={project} />
                    </a>
                  ) : (
                    <div className="block aspect-video lg:aspect-[4/3] bg-primary/5 rounded-xl overflow-hidden mb-6 lg:mb-0 relative group/image">
                      <ProjectAsset project={project} />
                    </div>
                  )}
                </div>
                
                <div className="lg:col-span-8 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="font-display text-heading-lg text-primary group-hover:text-secondary transition-colors">
                        {project.name}
                      </h3>
                      <span className="px-3 py-1 bg-secondary/10 text-secondary text-tiny rounded-full">
                        {project.role}
                      </span>
                    </div>
                    
                    <p className="text-body-lg text-text-secondary mb-6">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1.5 bg-primary/5 text-text-secondary text-small rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-end justify-between gap-4 pt-6 border-t border-primary/5">
                    <div>
                      <p className="font-mono text-tiny text-text-muted uppercase tracking-wider mb-1">
                        Impact
                      </p>
                      <p className="text-body text-primary font-medium">
                        {project.outcome}
                      </p>
                    </div>
                    
                    <div className="flex gap-3">
                      {project.liveUrl !== '#' && (
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 text-small text-primary 
                                   border border-primary/10 rounded-lg hover:bg-primary hover:text-accent 
                                   transition-colors duration-fast"
                          aria-label={`View ${project.name} live`}
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl !== '#' && (
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 text-small text-primary 
                                   border border-primary/10 rounded-lg hover:bg-primary hover:text-accent 
                                   transition-colors duration-fast"
                          aria-label={`View ${project.name} code`}
                        >
                          <GitHub size={16} />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}