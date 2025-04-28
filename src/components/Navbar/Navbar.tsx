import Link from 'next/link';
import Logo from '@/components/svgs/Logo';

export default function Navbar() {
  return (
    <div className="navbar__container">
      <nav className="navbar__nav container--inner">
        <div className="navbar__logo">
          <Link
            aria-label="Link to home"
            href="/"
            className="navbar__logo-link"
          >
            <Logo />
          </Link>
        </div>
        <ul className="navbar__list">
          {/* <li>
            <NavbarLink href="/">Home</NavbarLink>
          </li> */}
          <li>
            <Link href="/#about">About</Link>
          </li>
          <li>
            <Link href="/#experience">Experience</Link>
          </li>
          <li>
            <Link href="/#projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
