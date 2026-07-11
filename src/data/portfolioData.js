// All portfolio content sourced from the resume at
// C:\Users\sanja\Downloads\Sanjai_A_Resume(cisco).docx

export const profile = {
  name: 'Sanjai A',
  role: 'Software Engineer',
  tagline:
    'Building reliable software at the intersection of machine learning, cloud, and clean engineering.',
  location: 'Tamilnadu, India',
  email: 'sanjaiahsok05@gmail.com',
  phone: '+91-8072940552',
  summary:
    'Software Engineer with a strong foundation in computer science fundamentals and object-oriented design, and an aptitude for learning new technologies. Experienced in Python programming and scripting, machine learning model development, and data analytics, with working knowledge of TCP/IP networking, routing, and switching concepts. Comfortable designing applications for cloud scale, debugging with standard development tools, and writing thorough tests to ensure programs are well covered across use cases. Interested in user experience and interface design, with exposure to open-source and mobile application development.',
  socials: [
    { label: 'GitHub', href: 'https://github.com/', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:sanjaiahsok05@gmail.com', icon: 'email' },
  ],
  resumeUrl: 'https://drive.google.com/file/d/your-resume-id/view',
};

export const education = [
  {
    school: 'Vellore Institute of Technology, Vellore',
    location: 'Tamilnadu, India',
    degree: 'Integrated M.Tech Software Engineering',
    detail: 'CGPA: 8.67',
    period: 'Aug 2023 – July 2028',
  },
];

export const skillGroups = [
  {
    title: 'Programming & Scripting',
    items: ['Python'],
  },
  {
    title: 'Web / Blockchain',
    items: ['Vue 3', 'React.js', 'Solidity', 'Ethers.js', 'Tailwind CSS'],
  },
  {
    title: 'Machine Learning',
    items: ['K-Nearest Neighbor (KNN)', 'Reinforcement Learning (UCB)', 'NLP'],
  },
  {
    title: 'Core CS',
    items: ['Object-Oriented Design', 'Data Structures & Algorithms', 'CS Fundamentals'],
  },
  {
    title: 'Networking',
    items: ['TCP/IP Fundamentals', 'Routing', 'Switching'],
  },
  {
    title: 'Cloud & Scale',
    items: ['Designing Applications for the Cloud', 'Scalable Systems'],
  },
  {
    title: 'Testing & Debugging',
    items: ['Unit Testing', 'Integration Testing', 'Application Debugging'],
  },
  {
    title: 'Design',
    items: ['User Experience (UX)', 'User Interface (UI) Design & Development'],
  },
  {
    title: 'Other',
    items: ['Open Source Contribution', 'Mobile Application Development', 'Data Analytics'],
  },
];

export const projects = [
  {
    title: 'EtherArt — NFTorium',
    period: '',
    description:
      'A decentralized NFT marketplace on the Sepolia Ethereum Testnet that lets users mint, list, buy, and trade NFTs with adjustable pricing.',
    bullets: [
      'Developed the frontend with React.js, Tailwind CSS, and Ethers.js.',
      'Wrote Solidity smart contracts following OpenZeppelin ERC-721 standards for on-chain minting and trading.',
      'Used IPFS for decentralized file storage and deployed the application on AWS Amplify.',
    ],
    stack: ['React.js', 'Tailwind CSS', 'Solidity', 'Ethers.js', 'IPFS', 'AWS Amplify'],
    featured: true,
  },
  {
    title: 'Slingfile',
    period: '',
    description:
      'A high-performance, asynchronous FTP server library in Python, providing a portable interface for writing scalable, RFC-959-compliant FTP servers.',
    bullets: [
      'Implemented support for FTPS, IPv6, and Unicode file names.',
      'Used epoll/kqueue/select for concurrency and a flexible authorizer system for virtual and real users on UNIX and Windows.',
    ],
    stack: ['Python', 'asyncio', 'FTPS', 'IPv6'],
    featured: true,
  },
  {
    title: 'DoStack',
    period: '',
    description:
      'A task tracking application using Vue 3, with date/time scheduling and automatic reminders to help users stay on top of tasks.',
    bullets: [
      'Built the backend with a JSON-Server API and connected it to a Vue-based frontend.',
      'Structured the app for both local development and production builds.',
    ],
    stack: ['Vue 3', 'JSON-Server', 'JavaScript'],
    featured: true,
  },
];

export const experience = [
  {
    role: 'ML Engineer',
    company: 'Novitech.Pvt.Ltd.',
    location: 'Tamilnadu, India',
    period: 'June 2026 – July 2026',
    bullets: [
      'Built an Advertisement Sales Prediction system in Python, applying core computer science fundamentals and data modeling to forecast ad performance.',
      'Developed a Salary Estimation model using the K-Nearest Neighbor (KNN) algorithm, following object-oriented design principles to structure the feature pipeline and model code.',
      'Implemented a Web Ad Optimization system using Reinforcement Learning (Upper Confidence Bound), testing the algorithm’s decision-making across multiple simulated ad-selection scenarios.',
      'Practiced strong testing discipline across model iterations, validating outputs and debugging with standard development tools to ensure reliable results.',
    ],
  },
  {
    role: 'Data Analyst',
    company: 'Novitech.Pvt.Ltd.',
    location: 'Tamilnadu, India',
    period: 'March 2026 – April 2026',
    bullets: [
      'Built a Tag Identification system using NLP to automatically classify and label text data, applying Python for text preprocessing and model development.',
      'Conducted Retail Supply Chain Optimization analysis, using data-driven techniques to identify inefficiencies and support cloud-scale data pipeline decisions.',
      'Collaborated with the team on creative problem-solving for data-quality issues, keeping analysis code clean and maintainable.',
    ],
  },
];

export const certifications = [
  { name: 'Programming Essentials in Python', issuer: 'Cisco', date: 'July 2026' },
  { name: 'Networking Essentials', issuer: 'Cisco', date: 'July 2026' },
  { name: 'Cloud Computing', issuer: 'Swayam', date: 'Nov 2024' },
  { name: 'Introduction to Machine Learning', issuer: 'Kaggle', date: 'Apr 2026' },
];

export const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];
