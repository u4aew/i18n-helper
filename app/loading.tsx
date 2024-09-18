import styles from './loading.module.scss';

export default function Loading() {
  return (
    <div className={styles.page}>
      <div className="spinner"></div>
      <p>Loading dashboard...</p>
    </div>
  );
}
