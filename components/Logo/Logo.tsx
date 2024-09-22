import styles from './logo.module.scss'

export const Logo = () => {
  return <div className={styles.logo}>
    <div className={styles.side}>
      <div className={styles.caption}>
        <div className={styles.item}>A</div>
        <div className={styles.item}>我</div>
      </div>
    </div>
    <div className={styles.side}>
      <div className={styles.title}>JSON Localizer Pro</div>
    </div>
  </div>
}
