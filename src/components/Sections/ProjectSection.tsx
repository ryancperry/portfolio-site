import { List, ListItem } from '@/components/Lists';
import { Heading } from '@/components/Headings';
import projectList from '@/content/projects';
import { slugifyString } from '@/utils/stringFunctions';

interface CardLinkProps {
  link: string;
  children: React.ReactNode;
}

const CardLink = (props: CardLinkProps) => {
  const { link, children } = props;

  return (
    <a
      className="card__link link__arrow--external"
      href={link}
      target="_blank"
      rel="noreferrer noopener"
    >
      {children}
    </a>
  );
};

export default function ProjectSection() {
  return (
    <section className="cards-section__section" id="projects">
      <header className="cards-section__header">
        <Heading as="h2" level={4}>
          Selected Projects
        </Heading>
        <p className="cards-section__text">
          Here are a variety of projects I have worked on with a list of some of
          the features and technologies.{' '}
          <a href="mailto:perry.ryan.c@gmail.com">Email me</a> if you have any
          questions or if you would like to know about other types of projects I
          have done.
        </p>
      </header>
      <List>
        {projectList.map((project) => {
          const {
            audience = '',
            description,
            title,
            industry,
            projectLink,
            toolsAndSkills = [],
          } = project;
          const projectKey = slugifyString(title);
          const audienceLabels = {
            public: 'Public',
            client: 'Client-Facing',
            internal: 'Internal Tool',
            private: 'Private',
            prototype: 'Prototype',
            default: '',
          };
          const audienceText =
            audienceLabels[audience as keyof typeof audienceLabels] ||
            audienceLabels.default;

          return (
            <ListItem key={projectKey} style="card">
              <h3 className="card__headline">{title}</h3>
              <h4 className="card__subheadline">
                {industry} · {audienceText}
              </h4>
              <p className="card__text">
                {description}
                {projectLink ? (
                  <CardLink link={projectLink}>View Project</CardLink>
                ) : null}
              </p>
              <List style="inline">
                {toolsAndSkills.map((item) => (
                  <ListItem key={slugifyString(item)}>{item}</ListItem>
                ))}
              </List>
            </ListItem>
          );
        })}
      </List>
    </section>
  );
}
