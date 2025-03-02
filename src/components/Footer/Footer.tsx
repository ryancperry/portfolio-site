import FooterSocialLinks from './FooterSocialLinks';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <FooterSocialLinks />
        <p>&copy;{currentYear} Ryan C. Perry. All rights reserved.</p>
        <p>Made with React and Next.js</p>
      </div>
    </footer>
  );
}
