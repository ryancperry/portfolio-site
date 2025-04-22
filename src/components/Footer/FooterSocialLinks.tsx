import contactLinks from '@/content/contactLinks';

export default function SocialLinks() {
  const links = contactLinks;

  const linkItems = links.map((item) => {
    const { icon, link, name, type } = item;
    const target = type === 'mail' ? '_self' : '_blank';
    const rel = type === 'mail' ? '' : 'noopener noreferrer';
    const srText = type === 'mail' ? 'Send me an email' : `Link to my ${name}`;

    return (
      <li className="social-links__item" key={name}>
        <a
          aria-label={srText}
          className="social-links__link"
          href={link}
          rel={rel}
          title={srText}
          target={target}
        >
          {icon}
        </a>
      </li>
    );
  });

  return <ul className="social-links__list">{linkItems}</ul>;
}
