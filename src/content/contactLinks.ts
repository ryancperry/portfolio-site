import {
  CodePenIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from '@/components/svgs/socialIcons';

interface ContactLink {
  name: string;
  icon: React.ReactNode;
  link: string;
  type: 'external' | 'mail';
}

const contactLinks: ContactLink[] = [
  {
    name: 'CodePen',
    icon: CodePenIcon(),
    link: 'https://codepen.io/ryancperry',
    type: 'external',
  },
  {
    name: 'GitHub',
    icon: GitHubIcon(),
    link: 'https://github.com/ryancperry',
    type: 'external',
  },
  {
    name: 'LinkedIn',
    icon: LinkedInIcon(),
    link: 'https://www.linkedin.com/in/ryan-perry-47b04619a',
    type: 'external',
  },
  {
    name: 'perry.ryan.c@gmail.com',
    icon: MailIcon(),
    link: 'mailto:perry.ryan.c@gmail.com',
    type: 'mail',
  },
];

export default contactLinks;
