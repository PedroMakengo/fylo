import styles from './style.module.scss';

export function Header() {
  return(
    <header className={styles.header}>
      <div className={styles.headerContentn}>
        <img src="/images/logo.svg" alt="Fylo" />
        <nav>
          <a href="#">Fectures</a>
          <a href="#">Team</a>
          <a href="#">Sign in</a>
        </nav>
      </div>
    </header>
  )
}