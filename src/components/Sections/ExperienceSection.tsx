import { List, ListItem } from '@/components/Lists';
import { Heading } from '@/components/Headings';
import experienceList from '@/content/experience';
import { slugifyString } from '@/utils/stringFunctions';

interface CompanyLinkProps {
  companyUrl: string;
  children: React.ReactNode;
}

const CompanyLink = (props: CompanyLinkProps) => {
  const { companyUrl, children } = props;

  return (
    <a
      className="link__arrow--external"
      href={companyUrl}
      target="_blank"
      rel="noreferrer noopener"
    >
      {children}
    </a>
  );
};

export default function ExperienceSection() {
  return (
    <section className="cards-section__section" id="experience">
      <header className="cards-section__header">
        <Heading as="h2" level={4}>
          Relevant Experience
        </Heading>
        <p className="cards-section__text">
          This list is narrowed to my most relevant experience with
          commonly-used technology in modern web development.{' '}
          <a href="mailto:perry.ryan.c@gmail.com">Email me</a> if you have any
          specific questions. I might be able to help or know someone who can.
        </p>
      </header>
      <List>
        {experienceList.map((job) => {
          const jobKey = slugifyString(job.company);

          return (
            <ListItem key={jobKey} style="card">
              <h3 className="card__headline">{job.title}</h3>
              <h4 className="card__subheadline">
                <>{job.dates} · </>
                {job.companyUrl ? (
                  <CompanyLink companyUrl={job.companyUrl}>
                    {job.company}
                  </CompanyLink>
                ) : (
                  job.company
                )}
              </h4>
              <p className="card__text">{job.description}</p>
              <List style="inline">
                {job.tech.map((tech) => (
                  <ListItem key={tech}>{tech}</ListItem>
                ))}
              </List>
            </ListItem>
          );
        })}
      </List>
    </section>
  );
}
