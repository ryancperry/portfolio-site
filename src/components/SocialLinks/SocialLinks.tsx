import contactLinks from '@/content/contactLinks';

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

  return (
    <li className="social-links__item" key={`social-item-${name}`}>
      <a className="social-links__link" href={link} rel={rel} target={target}>
        {icon}
        <span className="social-links__text">{name}</span>
      </a>
    </li>
  );
};

export default function SocialLinks() {
  const links = contactLinks;

  return (
    <ul className="social-links__list">
      {links.map((item) => (
        <SocialItem key={item.name} socialItem={item} />
      ))}
    </ul>
  );
}
