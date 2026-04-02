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
  { nome: "Lisboa"},
  { nome: "Porto"},
  { nome: "Braga"},
  { nome: "Coimbra"},
  { nome: "Faro"},
  { nome: "Évora"},
  { nome: "Viseu"},
  { nome: "Setúbal"},
]

async function Home() {
  const dadosCidades = await Promise.all(
    cidades.map(async (cidade) => {
      const coordenadas = await getCoordenadas(cidade.nome)
      if (!coordenadas) return null

      const clima = await getClima(coordenadas.latitude, coordenadas.longitude)
      const ar = await getAr(coordenadas.latitude, coordenadas.longitude)
      const recomendacao = getRecomendacao(clima, ar)


      return {
        nome: cidade.nome,
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
              <Link key={cidade.nome} href={`/cidade/${cidade.nome}`} className={styles.card}>
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