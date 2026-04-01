"use client"

import { useState } from "react"
import styles from "../styles/DetalhesAr.module.css"

type Props = {
  aqi: number
  pm25: number
  pm10: number
  qualidadeAr: string
}

function DetalhesAr({ aqi, pm25, pm10, qualidadeAr }: Props) {
  const [aberto, setAberto] = useState(false)

  return (
    <div
      className={`${styles.card} ${aberto ? styles.aberto : ''}`}
      onClick={() => setAberto(!aberto)}
    >
      <div className={styles.header}>
        <span className={styles.label}>Qualidade do ar</span>
        <span className={styles.valor}>{qualidadeAr}</span>
        <span className={styles.seta}>{aberto ? '▲' : '▼'}</span>
      </div>

      {aberto && (
        <div className={styles.detalhes}>
          <div className={styles.detalheItem}>
            <span className={styles.detalheLabel}>AQI Europeu</span>
            <span className={styles.detalheValor}>{aqi}</span>
          </div>
          <div className={styles.detalheItem}>
            <span className={styles.detalheLabel}>PM2.5</span>
            <span className={styles.detalheValor}>{pm25} µg/m³</span>
          </div>
          <div className={styles.detalheItem}>
            <span className={styles.detalheLabel}>PM10</span>
            <span className={styles.detalheValor}>{pm10} µg/m³</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default DetalhesAr