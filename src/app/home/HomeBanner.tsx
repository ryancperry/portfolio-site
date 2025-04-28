'use client';
import { motion } from 'framer-motion';
import styles from './Home.module.scss';
import Link from 'next/link';

export default function HomeBanner() {
  return (
    <header className={styles.banner}>
      <div className={styles.content}>
        <motion.h1
          className="heading--xxl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I‘m Ryan C. Perry
        </motion.h1>
        <motion.h2
          className="subheading--lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I build fast, user-friendly web experiences that make an impact.
        </motion.h2>
        <motion.p
          className="subheading--sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Want to work together?{' '}
          <Link href="/#contact">Send me an message</Link>.
        </motion.p>
      </div>
    </header>
  );
}
