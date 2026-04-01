import Link from "next/link"
import styles from "../styles/Sobre.module.css"

function SobrePage() {
  return (
    <main className={styles.main}>
      <Link href="/" className={styles.voltar}>← Voltar</Link>
      <h1 className={styles.titulo}>Sobre o Should I Go</h1>

      <div className={styles.box}>
        <h2 className={styles.boxTitulo}>A ideia</h2>
        <p className={styles.texto}>
          O ShouldIGo nasceu de uma pergunta simples: será que hoje é um bom dia para sair de casa?
          Em vez de interpretar dados meteorológicos complexos, esta app faz isso por ti.
        </p>
      </div>

      <div className={styles.box}>
        <h2 className={styles.boxTitulo}>Como funciona</h2>
        <p className={styles.texto}>
          Combinamos dados de qualidade do ar e clima em tempo real para dar uma resposta
          clara e imediata.
        </p>
      </div>

      <div className={styles.box}>
        <h2 className={styles.boxTitulo}>Fontes</h2>
        <p className={styles.texto}>
          Dados fornecidos pelo Open-Meteo. Ícones animados por Basmilius.
        </p>
      </div>
    </main>
  )
}

export default SobrePage