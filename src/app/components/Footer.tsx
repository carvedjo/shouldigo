import styles from "../styles/Footer.module.css"

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.texto}>
        Dados por{" "}
        <a href="https://open-meteo.com" target="_blank" className={styles.link}>
          Open-Meteo
        </a>
        {" · "}
        Ícones por{" "}
        <a href="https://basmilius.github.io/weather-icons" target="_blank" className={styles.link}>
          Basmilius
        </a>
        {" · "}
        Feito com Next.js e TypeScript
      </p>
    </footer>
  )
}

export default Footer