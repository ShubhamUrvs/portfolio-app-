import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      projectId: "careassist-ai",
      title: "CareAssist AI",
      date: "September 2024",
      description: "AI-powered healthcare chatbot providing real-time first-aid and medication guidance. Reduces emergency response time and dependency on immediate human intervention through NLP.",
      tech: ["Python", "AI/NLP", "Healthcare"],
      links: {
        github: "https://github.com/ShubhamUrvs" // General github link if specific not provided
      }
    },
    {
      projectId: "shopkeeper-insight",
      title: "ShopKeeper Insight",
      date: "April 2024",
      description: "Cloud-based retail analytics system for sales tracking, inventory management, and P&L analysis. Optimizes stock levels and reduces operational errors for small businesses.",
      tech: ["AWS", "Python", "Node.js", "HTML/CSS"],
      links: {
        github: "https://github.com/ShubhamUrvs"
      }
    },
    {
      projectId: "spotfinder-pro",
      title: "SpotFinder Pro",
      date: "March 2025",
      description: "Automated parking slot allocation system utilizing DSA (Hash Maps, Trees, Graphs) for high-performance real-time slot allocation and scalability.",
      tech: ["Java", "MySQL", "DSA", "Algorithms"],
      links: {
        github: "https://github.com/ShubhamUrvs"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium tracking-wide text-sm">PORTFOLIO</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-surface border border-white/10 rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-mono text-primary mb-1 block">{project.date}</span>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                  </div>
                  <div className="flex gap-2">
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-2 py-1 text-xs font-medium rounded-md bg-white/5 text-gray-300 border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <Link to={`/projects/${project.projectId}`} className="inline-flex items-center text-sm font-semibold text-primary hover:text-blue-400 transition-colors">
                    View Case Study <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
