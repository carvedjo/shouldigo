import Link from "next/link"
import getCoordenadas from "../../lib/geocoding"
import getClima from "../../lib/openmeteo"
import getAr from "../../lib/ar"
import getRecomendacao from "../../lib/recomended"
import DetalhesAr from "../../components/DetalhesAr"
import styles from "../../styles/Cidade.module.css"
import IconClima from "../../components/IconClima"
import getIconClima from "../../lib/IconClima"

type Props = {
  params: Promise<{
    nome: string
  }>
}

async function CidadePage({ params }: Props) {
  const { nome } = await params
  const nomeDecodificado = decodeURIComponent(nome)
  const coordenadas = await getCoordenadas(nomeDecodificado)

  if (!coordenadas) {
    return (
      <main className={styles.main}>
        <Link href="/" className={styles.voltar}>← Voltar</Link>
        <div className={styles.notfound}>
        <h1 className={styles.cidade}>Cidade não encontrada</h1>
        <p style={{ color: 'white', marginTop: '12px' , fontFamily: 'Lato' }}>
          Tenta pesquisar com o nome completo.
        </p>
        </div>
      </main>
    )
  }

  const clima = await getClima(coordenadas.latitude, coordenadas.longitude)
  const ar = await getAr(coordenadas.latitude, coordenadas.longitude)
  const recomendacao = getRecomendacao(clima, ar)
  const icon = getIconClima(clima.weatherCode, clima.isDay)

  return (
  <main className={styles.main}>
    <Link href="/" className={styles.voltar}>← Voltar</Link>
    <div className={styles.header}>
      <h1 className={styles.cidade}>{coordenadas.nome}, {coordenadas.pais}</h1>
      <p className={styles.atualizado}>Atualizado agora</p>
      
    </div>

    <div className={`${styles.semaforo} ${styles[recomendacao.semaforo]}`}>
      <IconClima src={icon} tamanho={120} />
      <div className={styles.semaforoIcone}></div>
      <div>
        <p className={styles.semaforoTitulo}>{recomendacao.titulo}</p>
        <p className={styles.semaforoDescricao}>{recomendacao.descricao}</p>
      </div>
    </div>

    <div className={styles.metricas}>
      <div className={styles.metrica}>
        <p className={styles.metricaLabel}>Temperatura</p>
        <p className={styles.metricaValor}>{clima.temperatura}°</p>
        <p className={styles.metricaUnidade}>Celsius</p>
      </div>
      <div className={styles.metrica}>
        <p className={styles.metricaLabel}>Vento</p>
        <p className={styles.metricaValor}>{clima.vento}</p>
        <p className={styles.metricaUnidade}>km/h</p>
      </div>
      <div className={styles.metrica}>
        <p className={styles.metricaLabel}>Humidade</p>
        <p className={styles.metricaValor}>{clima.humidade}</p>
        <p className={styles.metricaUnidade}>%</p>
      </div>
      <div className={styles.metrica}>
        <p className={styles.metricaLabel}>Qualidade do ar</p>
        <p className={styles.metricaValor}>{recomendacao.qualidadeAr}</p>
      </div>
    </div>
      <DetalhesAr
        aqi={ar.aqi}
        pm25={ar.pm25}
        pm10={ar.pm10}
        qualidadeAr={recomendacao.qualidadeAr}
      />
  </main>
)
  
}

export default CidadePage