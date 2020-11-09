import styles from './nav.module.css'
import Link from 'next/link'

export default function Nav() {
  return (
      <>
      <div className={styles.navContainer}>
            <div>
              <Link href="/news"><a>News</a></Link>
            </div>
            <div>
              <Link href="/books"><a>Books</a></Link>
            </div>
            <div>
              <Link href="/"><a>Home</a></Link>
            </div>
        </div>
      </>


  )
}