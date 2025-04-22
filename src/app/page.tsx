import HomeBanner from './home/HomeBanner';
import AboutBanner from './about/AboutBanner';
import ExperienceSection from '@/components/Sections/ExperienceSection';
import ProjectSection from '@/components/Sections/ProjectSection';

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <AboutBanner />
      <div className="container--inner">
        <ExperienceSection />
        <div className="divider--horizontal" />
        <ProjectSection />
      </div>
    </main>
  );
}
