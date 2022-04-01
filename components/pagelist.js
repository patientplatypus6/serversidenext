import Link from 'next/link';
import About from '../pages/about.js'
import Links from '../pages/links.js'
import Errata from '../pages/errata.js'

import styles from '../css/Main.module.css'

export default function PageList(){
  return(
    <div className={styles.pagelist}>
      <ul className={styles.ulnostyle}>
        <li className={styles.linostyle}>
          <Link href="/about">
            <div className={styles.pageitem}>
              About
            </div>
          </Link>
        </li>
        <li className={styles.linostyle}>
          <Link href="/links">
            <div className={styles.pageitem}>
              Links
            </div>            
          </Link>
        </li>
        <li className={styles.linostyle}>
          <Link href="/errata">
            <div className={styles.pageitem}>
              Errata
            </div>
          </Link>
        </li>
      </ul>
    </div>
  )
}