interface Project {
  audience: string;
  industry: string;
  title: string;
  description: string;
  companyLink?: string | null;
  projectLink?: string | null;
  toolsAndSkills: string[];
}

const projectList: Project[] = [
  {
    audience: 'client',
    industry: 'Finance',
    title: 'American Deposits Management - Client Portal',
    description:
      'A custom client portal for American Deposits Management built on top of Microsoft Power Platform. The portal allows clients to view their deposits, manage their accounts, and make transactions. The project includes custom authentication handling complex role-based access.',
    companyLink: 'https://americandeposits.com/',
    toolsAndSkills: [
      'Microsoft Power Platform',
      'Power Pages',
      'Power BI',
      'JavaScript',
      'TypeScript',
      'React',
      'Custom Authentication',
      'HTML/CSS',
    ],
  },
  {
    audience: 'public',
    industry: 'Legal',
    title: 'Block & Leviton - Marketing and SEO Website',
    description:
      'A responsive marketing site for Block & Leviton, built in Webflow with a strong emphasis on lead generation, SEO, and dynamic content. The site showcases the firm’s legal expertise across various case categories and uses Webflow CMS Collections to automatically generate backlinks, related case references, and topical content to enhance search visibility. The design and structure were optimized to support brand storytelling and client acquisition, with custom JavaScript and CSS enhancements layered on top of Webflow’s native tools.',
    projectLink: 'https://www.blockleviton.com/',
    toolsAndSkills: [
      'Webflow',
      'Webflow CMS',
      'JavaScript',
      'HTML/CSS',
      'SEO',
      'Lead Generation',
      'UX/UI Design',
      'Content Strategy',
    ],
  },
  {
    audience: 'internal',
    industry: 'Legal / Healthcare',
    title: 'Charles J. Hilton & Associates - Internal Case Time Tracking Tool',
    description:
      'Designed and developed an internal application for Charles J. Hilton & Associates to track and associate staff activity with specific case workflows. Built on Microsoft Power Platform, the tool allowed employees to log time, attach relevant case documentation, and ensure accurate internal reporting. Custom PCF timer components were developed using TypeScript and React, and integrated directly into the Power Apps interface. Additionally, data from external healthcare sources was pulled in and linked to active case records. The solution streamlined staff reporting and ensured all billable actions were properly documented within the firm’s operational systems.',
    companyLink: 'https://cjhiltonlaw.com/',
    toolsAndSkills: [
      'Microsoft Power Platform',
      'Power Apps',
      'Dataverse',
      'React',
      'TypeScript',
      'Custom Components',
      'PowerApps Component Framework (PCF)',
    ],
  },
  {
    audience: 'public',
    industry: 'Technology',
    title: 'The Cobol Group - Marketing Website',
    description:
      'A lightweight marketing site for The Cobol Group, designed and built in Webflow to communicate the group’s mission, highlight recent news about the COBOL programming language, and capture new leads. The site uses Webflow CMS to make content updates simple and scalable, and is structured for clarity, speed, and focused messaging. Custom design work ensured alignment with the group’s brand tone and target audience.',
    projectLink: 'https://www.cobolgroup.io/',
    toolsAndSkills: [
      'Webflow',
      'Webflow CMS',
      'JavaScript',
      'HTML/CSS',
      'SEO',
      'Lead Generation',
      'UX/UI Design',
      'Content Strategy',
    ],
  },
  {
    audience: 'client',
    industry: 'Education',
    title: 'The Craig School - Student Management Portal',
    description:
      'A secure student management portal for The Craig School, built on Microsoft Power Platform. The portal supports teachers, administrators, parents, and medical professionals with role-based access to academic records, attendance, grades, medications, and sensitive student information. It streamlines reporting workflows, including grade submissions and automated report card distribution.',
    companyLink: 'https://thecraigschool.org/',
    toolsAndSkills: [
      'Microsoft Power Platform',
      'Power Apps',
      'Power BI',
      'JavaScript',
      'TypeScript',
      'React',
      'HTML/CSS',
    ],
  },
  {
    audience: 'public',
    industry: 'Real Estate',
    title: 'Door Real Estate - Marketing & Search Platform',
    description:
      'Led frontend development for Door Real Estate’s public-facing platform, which served as a marketing site, lead generator, and Zillow-style property search experience for both buyers and sellers. Users could browse listings, save favorite properties, and use interactive tools to estimate savings with Door’s commission-free model. The original Ruby on Rails site was fully migrated to a modern React and Next.js architecture, achieving perfect Lighthouse scores for performance, accessibility, and SEO. The platform was optimized for speed, responsiveness, and high user engagement.',
    companyLink: null,
    toolsAndSkills: [
      'React',
      'Next.js',
      'Node.js',
      'JavaScript',
      'PostgreSQL',
      'Vercel',
      'SEO',
      'Custom Authentication',
      'Performance Optimization',
      'Ruby on Rails (Legacy)',
    ],
  },
  {
    audience: 'client',
    industry: 'Real Estate',
    title: 'Door Real Estate - Client Portal',
    description:
      'Built a client-facing portal for Door Real Estate to guide homeowners through the selling process—from listing prep to closing. Developed in React and Next.js, the platform streamlined tasks for clients and agents, clearly outlining each step of the transaction. The frontend consumed a Microsoft Dynamics backend and emphasized usability, responsiveness, and visual clarity. Designed to reduce friction in the home-selling journey and increase user engagement.',
    toolsAndSkills: [
      'React',
      'Next.js',
      'JavaScript',
      'Microsoft Dynamics (Backend)',
      'Node.js',
      'UX/UI Design',
      'Process Automation',
      'Custom Authentication',
    ],
  },
  {
    audience: 'client',
    industry: 'Transportation',
    title: 'ParkHub - Analytics Portal',
    description:
      'Developed the frontend of a robust analytics platform for ParkHub using Figma designs. The portal provided detailed reporting on event-based parking operations and was built with React and Highcharts on top of a custom Golang backend. It enabled users to view granular data for individual events, combine data across multiple events, and analyze historical parking trends. The system supported drilldowns, custom reports, and rich visualizations to aid in operational decision-making.',
    companyLink: 'https://parkhub.com/',
    toolsAndSkills: [
      'React',
      'JavaScript',
      'Highcharts',
      'Custom Charting',
      'HTML/CSS',
      'Golang (Backend)',
      'Data Visualization',
      'Reporting Tools',
    ],
  },
  {
    audience: 'client',
    industry: 'Transportation',
    title: 'ParkHub - Live Portal',
    description:
      'Implemented the frontend of a real-time event operations dashboard for ParkHub based on provided Figma designs. Built with React and powered by a custom Golang backend, the portal displayed live data on parking lot occupancy, transaction volume, and attendant performance. It included tools to process payments, track cash handling, and analyze parking flow. Real-time visualizations allowed event managers to make data-driven decisions on the ground during high-volume events.',
    companyLink: 'https://justpark.com/',
    toolsAndSkills: [
      'React',
      'JavaScript',
      'Highcharts',
      'Custom Charting',
      'HTML/CSS',
      'Golang (Backend)',
      'Real-Time Data',
      'Event Management',
    ],
  },

  {
    audience: 'public',
    industry: 'Finance',
    title: 'True Link Financial - Marketing Website',
    description:
      'A scalable marketing site for True Link Financial, built in Webflow from high-fidelity Figma designs. The site supports lead generation, product storytelling, and client education through a mix of dynamic CMS-powered content and carefully structured layouts. Emphasis was placed on design fidelity, responsiveness, and content scalability, with custom components and CMS Collections powering blog posts, case studies, and resource hubs.',
    projectLink: 'https://www.truelinkfinancial.com/',
    toolsAndSkills: [
      'Webflow',
      'Webflow CMS',
      'JavaScript',
      'HTML/CSS',
      'SEO',
      'Lead Generation',
      'Responsive Design',
      'Design Implementation',
    ],
  },
];

export default projectList;
