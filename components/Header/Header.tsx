import { Logo } from '@/components/Logo';
import styles from './header.module.scss';

import logo from './icon/logo.png'

export const Header = () => {
  return <header className={styles.header}>
     <div className={styles.wrapper}>
       <div className={styles.side}>
         <Logo/>
       </div>
       <div className={styles.main}>
         <a className={styles.link} target='_blank' href="https://github.com/u4aew/TextSizer">
           <img className={styles.img} src={logo.src} alt="" />
         </a>
       </div>
     </div>
  </header>
}
