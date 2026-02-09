import { motion } from 'framer-motion';
import { Code, Database, Cloud, Terminal, Brain, Users, Cpu, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-6 h-6 text-primary" />,
      skills: ["Java", "Python", "C++", "C", "JavaScript", "SQL"]
    },
    {
      title: "Backend & Cloud",
      icon: <Cloud className="w-6 h-6 text-secondary" />,
      skills: ["Node.js", "AWS", "Google Cloud", "MS SQL Server", "REST APIs"]
    },
    {
      title: "Tools & Concepts",
      icon: <Terminal className="w-6 h-6 text-accent" />,
      skills: ["Git/GitHub", "JIT", "Pylint", "DSA", "System Design", "VS Code"]
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-6 h-6 text-green-400" />,
      skills: ["Adaptability", "Teamwork", "Problem Solving", "Time Management", "Communication"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Proficiency</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolset developed through academic rigor and hands-on projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-primary/30 hover:bg-white/10 transition-all group"
            >
              <div className="mb-4 p-3 bg-background rounded-lg inline-block group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center text-gray-400">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
