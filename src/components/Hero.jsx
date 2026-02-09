import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-[#020617] overflow-hidden pt-16">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -z-10 animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-accent text-sm font-medium mb-6">
            Available for Hire
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Shubham</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-400 mb-8">
            Software Engineer & <span className="text-white">Cloud Computing Specialist</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed mb-10">
            I specialize in Cloud Computing, crafting scalable and robust solutions using leading cloud platforms and technologies. Passionate about infrastructure, optimization, and solving complex problems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-4 justify-center mb-12"
        >
          <a
            href="https://github.com/ShubhamUrvs"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/50 transition-all group"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/shubhamUrvs"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/50 transition-all group"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
          </a>
          <a
            href="mailto:shubhamurvs11@gmail.com"
            className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/50 transition-all group"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 text-gray-400 group-hover:text-red-400 transition-colors" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            className="px-8 py-3 rounded-full bg-primary hover:bg-blue-600 text-white font-medium transition-colors cursor-pointer shadow-lg shadow-blue-500/20"
          >
            View Projects
          </Link>
          <a
            href="/pdf/generalCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/5 text-white font-medium transition-all flex items-center justify-center gap-2 hover:border-white/40"
          >
            <FileText className="w-4 h-4" />
            Resume
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <Link to="skills" smooth={true} duration={500} offset={-70} className="cursor-pointer text-gray-500 hover:text-white transition-colors">
          <ChevronDown className="w-6 h-6" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
