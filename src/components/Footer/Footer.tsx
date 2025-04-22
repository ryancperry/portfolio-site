import FooterSocialLinks from './FooterSocialLinks';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="divider--horizontal"></div>
        <FooterSocialLinks />
        <p>&copy;{currentYear} Ryan C. Perry. All rights reserved.</p>
        <p>
          Made with{' '}
          <a
            href="https://react.dev/"
            rel="noopener noreferrer"
            target="_blank"
          >
            React
          </a>
          ,{' '}
          <a
            href="https://nextjs.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Next.js
          </a>{' '}
          and deployed to{' '}
          <a
            href="https://vercel.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Vercel
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
