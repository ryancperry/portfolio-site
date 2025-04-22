interface SocialItemProps {
  socialItem: {
    icon: React.ReactNode;
    link: string;
    name: string;
    type: string;
  };
}

const SocialItem: React.FC<SocialItemProps> = ({ socialItem }) => {
  const { icon, link, name, type } = socialItem;
  const target = type === 'mail' ? '_self' : '_blank';
  const rel = type === 'mail' ? '' : 'noopener noreferrer';
  const srText = type === 'mail' ? 'Send me an email' : `Link to my ${name}`;

  return (
    <li className="social-links__item" key={`social-item-${name}`}>
      <a
        aria-label={srText}
        className="social-links__link"
        href={link}
        rel={rel}
        target={target}
        title={srText}
      >
        {icon}
        <span className="social-links__text">{name}</span>
      </a>
    </li>
  );
};

export default SocialItem;
