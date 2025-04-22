interface Job {
  title: string;
  company: string;
  companyUrl?: string;
  dates: string;
  description: string;
  tech: string[];
}

const experienceList: Job[] = [
  {
    title: 'Head of Web Development, Senior Solutions Engineer',
    company: 'Adept Dynamics',
    companyUrl: 'https://www.adeptdynamics.com',
    dates: '2021 - Present',
    description:
      'Consult with clients to develop software solutions across diverse platforms, aligning with project budgets and security needs. Led 20+ projects from requirements gathering to deployment, managing budgets from $20K to $2M. Created a custom form component library using React and Microsoft Power Platform used in production across 15+ apps.',
    tech: [
      'JavaScript',
      'React',
      'Node.js',
      'TypeScript',
      'Next.js',
      'HTML/CSS',
      'Vercel',
      'Microsoft Power Platform',
      'Webflow',
      'Figma',
    ],
  },
  {
    title: 'Senior Frontend Engineer',
    company: 'ParkHub (now JustPark)',
    companyUrl: 'https://www.justpark.com',
    dates: '2020 - 2021',
    description:
      'Developed cross-platform UI components for the suite of reporting tools and administrative apps. Collaborated with the design team and product teams to create a custom component library using React. Improved data structures to boost performance and load times while simplifying dependencies. Refactored legacy React code, reducing size by 40% and streamlining future development.',
    tech: ['JavaScript', 'React', 'Node.js', 'HTML/CSS', 'Golang', 'Figma'],
  },
  {
    title: 'Lead Frontend Engineer',
    company: 'Door Real Estate',
    dates: '2017 - 2020',
    description:
      'Built front-end architecture using React, Next.js, Node, and JavaScript, achieving 100% Lighthouse scores for performance, accessibility, and SEO. Built a custom Next.js/React front end on top of a Dynamics 365 backend for the company’s CRM and client portal. Developed a property search portal with a custom map component using Google Maps API and created lead-generation tools for the sales team.',
    tech: [
      'JavaScript',
      'React',
      'Node.js',
      'HTML/CSS',
      'Next.js',
      'Vercel',
      'PostgreSQL',
      'Ruby on Rails (Legacy)',
      'AngularJS (Legacy)',
      'Figma',
    ],
  },
  {
    title: 'Senior Marketing Communications Specialist - Web Services',
    company: 'Stephen F. Austin State University',
    companyUrl: 'https://www.sfasu.edu',
    dates: '2014 - 2017',
    description:
      'Designed and launched websites for the university magazine and institutional history projects. Contributed to the university’s website relaunch, overseeing design and content creation.',
    tech: ['JavaScript', 'Node.js', 'HTML/CSS', 'jQuery', 'Drupal', 'PHP'],
  },
];

export default experienceList;
