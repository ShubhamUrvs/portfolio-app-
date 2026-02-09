import React from 'react';

const Certifications = () => {
  const certifications = [
    { name: 'C Basic to Beyond Certificate', filePath: '/pdf/c basic to beyond certificate.pdf' },
    { name: 'Computer Networking', filePath: '/pdf/Coursera GUI0R65OQLUU.pdf' },
    { name: 'Hardware and Operating System', filePath: '/pdf/Coursera K49MJPP5PO3Z.pdf' },
    { name: 'Generative AI Certificate', filePath: '/pdf/lpu infosys.pdf' },
  ];

  return (
    <section id="certifications" className="min-h-screen flex items-center justify-center bg-[#020617] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">My Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.filePath}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 border border-white/10 rounded-lg p-6 flex flex-col items-center text-center hover:bg-white/10 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text mb-4 text-primary"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
              <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
              <p className="text-gray-400 text-sm">View Certificate (PDF)</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
