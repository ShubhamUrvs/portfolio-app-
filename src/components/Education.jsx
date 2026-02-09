import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      school: "Lovely Professional University",
      location: "Phagwara, Punjab",
      degree: "B.Tech – Computer Science & Engineering",
      year: "Aug 2025 – Present",
      grade: "CGPA: 6.62", // Honest but not highlighted
      icon: <GraduationCap className="w-6 h-6 text-white" />
    },
    {
      school: "JP Academy",
      location: "Meerut",
      degree: "Intermediate (PCM)",
      year: "2021 – 2022",
      grade: "86.66%",
      icon: <Award className="w-6 h-6 text-white" />
    },
    {
      school: "JP Academy",
      location: "Meerut",
      degree: "Matriculation",
      year: "2019 – 2020",
      grade: "80%",
      icon: <Award className="w-6 h-6 text-white" />
    }
  ];

  const certifications = [
    "Build-a-Thon Hackathon 2024 (2nd Round)",
    "Mastering in C – Basic to Beyond (25h Course)",
    "Java Programming – I Am Neo",
    "Bits & Bytes of Computer Networking – Coursera",
    "SQL – HackerRank"
  ];

  return (
    <section id="education" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-primary" /> Education
            </h2>
            <div className="space-y-8 relative border-l border-white/10 ml-3 pl-8">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  <span className="absolute -left-[41px] top-1 bg-surface border border-white/20 p-2 rounded-full text-primary">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </span>
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-primary font-medium">{edu.school}</p>
                  <div className="flex justify-between items-center mt-2 text-sm text-gray-400">
                    <span>{edu.year}</span>
                    <span>{edu.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Award className="text-accent" /> Achievements
            </h2>
            <div className="bg-background rounded-2xl p-8 border border-white/5">
              <ul className="space-y-6">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1.5 min-w-[6px] h-1.5 bg-accent rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                    <span className="text-gray-300 font-medium hover:text-white transition-colors cursor-default">
                      {cert}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
