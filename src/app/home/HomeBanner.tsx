import styles from './Home.module.scss';

export default function HomeBanner() {
  return (
    <header className={styles.banner}>
      <h1>Hello, I am Ryan Perry</h1>
      <h2>
        I‘m a web developer in Madison, Wisconsin who specializes in UI/UX
        engineering, JavaScript, and React.
      </h2>
      <p>
        I‘m passionate about accessibility, performance, semantic HTML, and
        bringing designer‘s ideas to life.
      </p>
    </header>
  );
}
