type ResultadoGeocode = {
  nome: string
  latitude: number
  longitude: number
  pais: string
}

async function getCoordenadas(cidade: string): Promise<ResultadoGeocode | null> {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cidade)}&count=1&language=pt`

  try {
    const resposta = await fetch(url)

    if (!resposta.ok) {
      throw new Error(`Erro na API de geocoding: ${resposta.status}`)
    }

    const dados = await resposta.json()

    if (!dados.results || dados.results.length === 0) {
      return null
    }

    const resultado = dados.results[0]

    return {
      nome: resultado.name,
      latitude: resultado.latitude,
      longitude: resultado.longitude,
      pais: resultado.country,
    }
  } catch (erro) {
    console.error('Erro ao obter coordenadas:', erro)
    return null
  }
}

export default getCoordenadas