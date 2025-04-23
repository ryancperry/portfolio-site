import Image from 'next/image';
import bgImage from '../../../public/hexigonal-background-min.png';
import { Heading } from '@/components/Headings';

export default function AboutBanner() {
  return (
    <section className="banner" id="about">
      {/* <Image
        className="banner__background"
        fill
        src={bgImage}
        alt=""
        priority={true}
      /> */}
      <div className="banner__background bg--hex" />
      <div className="banner__container container--inner">
        <header>
          <Heading as="h2" level={2}>
            About me
          </Heading>
        </header>
        <div className="banner__text-container">
          <p>
            I’m a developer who loves turning ideas and designs into delightful
            user interfaces.
          </p>
          <p>
            I’m the Head of Web Development at{' '}
            <a
              href="https://www.adeptdynamics.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              Adept Dynamics
            </a>
            , where I build software solutions for clients.
          </p>
          <p>
            With more than eight years in web development, I’ve built and
            optimized web experiences for a range of clients, from startups to
            enterprise-level businesses. I take pride in building fast,
            accessible, and visually polished applications. My code is clean,
            maintainable, and built to scale.
          </p>
        </div>
        {/* <div className="banner__cta-container">
          <a className="text-link link__arrow--internal" href="#experience">
            Experience
          </a>
          <a className="text-link link__arrow--internal" href="#projects">
            Projects
          </a>
        </div> */}
      </div>
    </section>
  );
}
