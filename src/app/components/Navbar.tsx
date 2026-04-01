import Link from "next/link"
import styles from "../styles/Navbar.module.css"

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>Should I Go</Link>
      <ul className={styles.links}>
        <li>
          <Link href="/sobre" className={styles.link}>Sobre</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar