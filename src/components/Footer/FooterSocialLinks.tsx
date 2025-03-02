import contactLinks from '@/content/contactLinks';

export default function SocialLinks() {
  const links = contactLinks;

  const linkItems = links.map((item) => {
    const { icon, link, name, type } = item;
    const target = type === 'mail' ? '_self' : '_blank';
    const rel = type === 'mail' ? '' : 'noopener noreferrer';

    return (
      <li className="social-links__item" key={name}>
        <a
          className="social-links__link"
          href={link}
          rel={rel}
          title={name}
          target={target}
        >
          {icon}
        </a>
      </li>
    );
  });

  return <ul className="social-links__list">{linkItems}</ul>;
}
