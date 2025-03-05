'use client';
import { motion } from 'framer-motion';
import styles from './Home.module.scss';

export default function HomeBanner() {
  return (
    <header className={styles.banner}>
      <div className={styles.content}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm Ryan C. Perry
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I build fast, user-friendly web experiences that make an impact.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Want to work together?{' '}
          <a href="mailto:perry.ryan.c@gmail.com">Send me an email</a>.
        </motion.p>
      </div>
    </header>
  );
}
