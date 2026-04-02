import Link from "next/link"
import getCoordenadas from "./lib/geocoding"
import getClima from "./lib/openmeteo"
import getAr from "./lib/ar"
import getRecomendacao from "./lib/recomended"
import styles from "./styles/Home.module.css"
import SearchBar from "./components/SearchBar"
import IconClima from "./components/IconClima"
import getIconClima from "./lib/IconClima"

const cidades = [
  { nome: "Lisboa", latitude: 38.7223, longitude: -9.1393 },
  { nome: "Porto", latitude: 41.1579, longitude: -8.6291 },
  { nome: "Braga", latitude: 41.5454, longitude: -8.4265 },
  { nome: "Coimbra", latitude: 40.2033, longitude: -8.4103 },
  { nome: "Faro", latitude: 37.0194, longitude: -7.9304 },
  { nome: "Évora", latitude: 38.5714, longitude: -7.9135 },
  { nome: "Viseu", latitude: 40.6610, longitude: -7.9097 },
  { nome: "Setúbal", latitude: 38.5244, longitude: -8.8882 },
]

async function Home() {
  const dadosCidades = await Promise.all(
    cidades.map(async (cidade) => {
      const { latitude, longitude } = cidade

      const clima = await getClima(latitude, longitude)
      const ar = await getAr(latitude, longitude)
      const recomendacao = getRecomendacao(clima, ar)


      return {
        nome: cidade.nome,
        latitude: cidade.latitude,
        longitude: cidade.longitude,
        weatherCode: clima.weatherCode,
        temperatura: clima.temperatura,
        vento: clima.vento,
        recomendacao,
      }
    })
  )

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.titulo}>Should we go outside today?</h1>
        <p className={styles.subtitulo}>
          Qualidade do ar e clima em tempo real
        </p>
        <SearchBar />
        <h2 className={styles.painelTitulo}>Cidades em destaque</h2>

        <div className={styles.grid}>
          {dadosCidades.map((cidade) => {
            if (!cidade) return null
            return (
              <Link key={cidade.nome} href={`/cidade/${cidade.nome}?lat=${cidade.latitude}&lon=${cidade.longitude}`} className={styles.card}>
                <IconClima src={getIconClima(cidade.weatherCode)} tamanho={70} />
                <div className={styles.cardTextos}>
                  <p className={styles.cidadeNome}>{cidade.nome}</p>
                  <span className={`${styles.badge} ${styles[cidade.recomendacao.semaforo]}`}>
                    {cidade.recomendacao.titulo}
                  </span>
                  <div className={styles.meta}>
                    <p className={styles.metaTexto}>{cidade.temperatura}°C</p>
                    <p className={styles.metaTexto}>Ar: {cidade.recomendacao.qualidadeAr}</p>
                  </div>
                </div>
                
              </Link>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default Home