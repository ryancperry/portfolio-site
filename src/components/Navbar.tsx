import Link from 'next/link';
import styles from '@/styles/Navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Ryan C. Perry</Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
