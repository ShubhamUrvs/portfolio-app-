import React from 'react';
import { motion } from 'framer-motion';
import { Tag, Zap, Target, Layers, Cpu, Terminal, Shield, Star, Lightbulb, ChevronsUp, ChevronsDown } from 'lucide-react';

const Section = ({ title, icon, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-12"
  >
    <div className="flex items-center mb-6">
      {React.createElement(icon, { className: "w-8 h-8 text-primary mr-4" })}
      <h2 className="text-3xl font-bold text-white">{title}</h2>
    </div>
    <div className="prose prose-invert prose-lg max-w-none text-gray-300">
      {children}
    </div>
  </motion.div>
);

const ProjectDetail = ({ project }) => {
  if (!project) {
    return <div>Project not found.</div>;
  }

  const {
    title, subtitle, duration, domain, technologies, introduction,
    problemStatement, objectives, systemOverview, systemArchitecture,
    technologiesUsed, functionalModules, keyFeatures, limitations,
    futureEnhancements, conclusion, algorithmsAndDataStructures
  } = project;

  return (
    <div className="bg-background text-white pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">{title}</h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-6">{subtitle}</p>
          <div className="flex justify-center gap-4 mb-4">
            {technologies.map(tech => (
              <span key={tech} className="py-1 px-3 rounded-full bg-white/10 text-accent text-sm font-medium">{tech}</span>
            ))}
          </div>
          <p className="text-sm text-gray-500">{domain} | {duration}</p>
        </motion.div>

        <Section title="Introduction" icon={Zap}>
          <p>{introduction}</p>
        </Section>
        
        <Section title="Problem Statement" icon={Target}>
          <ul className="list-disc pl-5">
            {problemStatement.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </Section>

        <Section title="Objectives" icon={Cpu}>
          <ul className="list-disc pl-5">
            {objectives.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </Section>

        <Section title="System Overview" icon={Layers}>
          <p>{systemOverview}</p>
        </Section>
        
        <Section title="System Architecture" icon={Terminal}>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-white mb-2">Components:</h3>
              <ul className="list-disc pl-5">
                {systemArchitecture.components.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
            {systemArchitecture.workflow && (
              <div>
                <h3 className="font-semibold text-white mb-2">Workflow:</h3>
                <ol className="list-decimal pl-5">
                  {systemArchitecture.workflow.map((item, i) => <li key={i}>{item}</li>)}
                </ol>
              </div>
            )}
          </div>
        </Section>
        
        {technologiesUsed && (
          <Section title="Technologies Used" icon={Tag}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-2 pr-4">Technology</th>
                    <th className="text-left py-2">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {technologiesUsed.map((tech, i) => (
                    <tr key={i} className="border-b border-white/10">
                      <td className="py-2 pr-4 font-semibold">{tech.name}</td>
                      <td className="py-2">{tech.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>
        )}
        
        {algorithmsAndDataStructures && (
          <Section title="Algorithms & Data Structures" icon={Zap}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-2 pr-4">Structure/Algorithm</th>
                    <th className="text-left py-2">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {algorithmsAndDataStructures.map((item, i) => (
                    <tr key={i} className="border-b border-white/10">
                      <td className="py-2 pr-4 font-semibold">{item.name}</td>
                      <td className="py-2">{item.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>
        )}
        
        <Section title="Functional Modules" icon={Shield}>
          {functionalModules.map((module, i) => (
            <div key={i} className="mb-4">
              <h4 className="font-semibold text-white">{module.name}</h4>
              <p>{module.description}</p>
            </div>
          ))}
        </Section>

        <Section title="Key Features" icon={Star}>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
            {keyFeatures.map((feature, i) => (
              <div key={i} className="flex items-center">
                <Star className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </Section>
        
        <Section title="Limitations" icon={ChevronsDown}>
          <ul className="list-disc pl-5">
            {limitations.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </Section>
        
        <Section title="Future Enhancements" icon={ChevronsUp}>
          <ul className="list-disc pl-5">
            {futureEnhancements.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </Section>
        
        <Section title="Conclusion" icon={Lightbulb}>
          <p>{conclusion}</p>
        </Section>
      </div>
    </div>
  );
};

export default ProjectDetail;
