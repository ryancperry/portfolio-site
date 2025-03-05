'use client';

import styles from './Navbar.module.scss';
import Link from 'next/link';
import NavbarLink from './NavbarLink';
import Logo from '@/components/svgs/Logo';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <Link aria-label="Link to home" href="/" className="navbar__logo-link">
          <Logo />
        </Link>
      </div>
      <ul className={styles.navbar__list}>
        <li>
          <NavbarLink href="/about">About</NavbarLink>
        </li>
      </ul>
    </nav>
  );
}
