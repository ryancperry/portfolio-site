import TestForm from './TestForm';
import TestList from './APITest';
import { List, ListHeading, ListItem, ListText } from '@/components/Lists';
import { Heading, Subheading } from '@/components/Headings';

export default function DevTest() {
  const experience = [
    {
      title: 'Software Engineer',
      company: 'Company A',
      dates: '2019 - Present',
      description: 'I do stuff.',
      tech: ['JavaScript', 'React', 'Node.js'],
    },
    {
      title: 'Software Engineer',
      company: 'Company B',
      dates: '2017 - 2019',
      description: 'I did stuff. <a href="https://example.com">Link</a>',
      tech: ['JavaScript', 'React', 'Node.js'],
    },
  ];
  return (
    <div className="container--inner">
      <h1>Dev Test</h1>
      <p>Test page for development</p>
      <div className="container--inner">
        <ListHeading as="h3" level={2}>
          Skills
        </ListHeading>
        {experience.map((job) => (
          <List key={job.company}>
            <ListItem>
              <ListHeading as="h4" level={3}>
                {job.title}
              </ListHeading>
              <ListHeading as="h5" level={4}>
                {job.company} ({job.dates})
              </ListHeading>
              <ListText>{job.description}</ListText>
              <ListHeading as="h6" level={4}>
                Technologies
              </ListHeading>
              <List style="inline">
                {job.tech.map((tech) => (
                  <ListItem key={tech}>{tech}</ListItem>
                ))}
              </List>
            </ListItem>
          </List>
        ))}
      </div>
      <div className="container--inner">
        <Heading>Heading 1</Heading>
        <Heading as="p">Heading 1</Heading>
        <Heading level={2}>Heading 2</Heading>
        <Heading level={3}>Heading 3</Heading>
        <Heading level={4}>Heading 4</Heading>
        <Heading level={5}>Heading 5</Heading>
        <Heading level={6}>Heading 6</Heading>
        <Subheading>Subheading 1</Subheading>
        <Subheading as="p" level={2}>
          Subheading 2
        </Subheading>
        <Subheading as="p" level={3}>
          Subheading 3
        </Subheading>
      </div>
      <TestForm />
      <TestList />
    </div>
  );
}
