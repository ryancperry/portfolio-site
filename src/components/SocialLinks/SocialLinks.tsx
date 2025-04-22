import contactLinks from '@/content/contactLinks';
import SocialItem from './SocialItem';

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
