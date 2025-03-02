import { CodePen, GitHub, LinkedIn, Mail } from '@/components/svgs/socialIcons';

const contactLinks = [
  {
    name: 'CodePen',
    icon: CodePen(),
    link: 'https://codepen.io/ryancperry',
    type: 'external',
  },
  {
    name: 'GitHub',
    icon: GitHub(),
    link: 'https://github.com/ryancperry',
    type: 'external',
  },
  {
    name: 'LinkedIn',
    icon: LinkedIn(),
    link: 'https://www.linkedin.com/in/ryan-perry-47b04619a',
    type: 'external',
  },
  {
    name: 'perry.ryan.c@gmail.com',
    icon: Mail(),
    link: 'mailto:perry.ryan.c@gmail.com',
    type: 'mail',
  },
];

export default contactLinks;
