export const spotfinderPro = {
  title: 'SpotFinder Pro',
  subtitle: 'Automated Parking Slot Allocation System Using DSA',
  duration: 'March 2025',
  domain: 'Smart Systems | Algorithms | Automation',
  technologies: ['Java', 'MySQL', 'DSA'],
  introduction: 'Urban areas face severe parking management challenges due to increasing vehicle density. SpotFinder Pro is an automated parking slot allocation system designed to allocate parking slots efficiently using advanced data structures and algorithms.',
  problemStatement: [
    'Manual parking allocation inefficiency',
    'Traffic congestion due to parking search',
    'Poor scalability in traditional systems',
  ],
  objectives: [
    'Automate slot allocation',
    'Optimize time complexity',
    'Ensure high scalability',
    'Reduce congestion',
  ],
  systemOverview: 'The system uses Hash Maps, Trees, and Graphs to dynamically allocate, track, and release parking slots in real time.',
  systemArchitecture: {
    components: [
      'User Interface',
      'Allocation Engine',
      'DSA-Based Logic Layer',
      'Database (MySQL)',
    ],
    workflow: null, // No workflow provided in the source
  },
  algorithmsAndDataStructures: [
    { name: 'Hash Maps', purpose: 'Fast lookup of available slots' },
    { name: 'Trees', purpose: 'Hierarchical zone-based parking' },
    { name: 'Graphs', purpose: 'Path optimization for nearest slot' },
  ],
  functionalModules: [
    { name: 'Slot Allocation Module', description: 'Assigns nearest available slot.' },
    { name: 'Slot Release Module', description: 'Frees slot upon exit.' },
    { name: 'Database Management', description: 'Stores parking records.' },
    { name: 'Optimization Engine', description: 'Ensures minimum allocation time.' },
  ],
  keyFeatures: [
    'Real-time allocation',
    'High performance',
    'Scalable architecture',
    'Algorithm-driven optimization',
  ],
  limitations: [
    'Requires infrastructure sensors',
    'Initial setup cost',
  ],
  futureEnhancements: [
    'IoT sensor integration',
    'Mobile app support',
    'AI-based demand prediction',
  ],
  conclusion: 'SpotFinder Pro demonstrates the power of DSA in real-world systems, offering an efficient, scalable, and intelligent solution to modern parking challenges.',
};
