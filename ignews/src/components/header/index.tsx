import SignInButton from '../SignInButton';
import styles from './styles.module.scss';

export default function Header() {
   return (
      <header className={styles.headerContainer}>
         <div className={styles.headerContent}>
            <h1>
               ig.news
            </h1>
            <nav>
               <a className={styles.active} href="">Home</a>
               <a href="">Posts</a>
            </nav>

            <SignInButton />
         </div>
      </header>
   )
}