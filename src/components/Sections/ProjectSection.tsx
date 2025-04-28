'use client';

import Link from 'next/link';
import { useToggleList } from '@/hooks/useToggleList';
import { List, ListItem } from '@/components/Lists';
import CardLink from '@/components/Card/CardLink';
import { Heading } from '@/components/Headings';
import projectList from '@/content/projects';
import { slugifyString } from '@/utils/stringFunctions';

export default function ProjectSection() {
  const { visibleItems, expanded, toggle } = useToggleList(projectList, 3);
  const showMoreText = expanded ? 'Show Less' : 'Show More';

  return (
    <section className="cards-section__section" id="projects">
      <header className="cards-section__header">
        <Heading as="h2" level={4}>
          Selected Projects
        </Heading>
        <p className="cards-section__text">
          Here are a variety of projects I have worked on with a list of some of
          the features and technologies.{' '}
          <Link href="/#contact">Contact me</Link> if you have any questions or
          if you would like to know about other types of projects I have done.
        </p>
      </header>
      <div className="cards-section__list-wrapper">
        <List>
          {visibleItems.map((project) => {
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
        <div className="cards-section__buttons">
          <button
            className="button button--neumorphic"
            type="button"
            onClick={toggle}
            aria-expanded={expanded}
          >
            {showMoreText}
          </button>
        </div>
      </div>
    </section>
  );
}
