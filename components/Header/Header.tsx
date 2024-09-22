import { Logo } from '@/components/Logo';
import styles from './Header.module.scss';

export const Header = () => {
  return <header className={styles.header}>
     <div className={styles.wrapper}>
       <Logo/>
     </div>
  </header>
}
