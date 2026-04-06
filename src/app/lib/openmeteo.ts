async function getClima(latitude: number, longitude: number) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,precipitation,relative_humidity_2m,weather_code,is_day&timezone=Europe/Lisbon`
  try {
    
    const resposta = await fetch(url)

    if (!resposta.ok) {
      throw new Error(`Erro na API do clima: ${resposta.status}`)
    }

    const dados = await resposta.json()


    return {
      temperatura: dados.current.temperature_2m,
      vento: dados.current.wind_speed_10m,
      precipitacao: dados.current.precipitation,
      humidade: dados.current.relative_humidity_2m,
      weatherCode: dados.current.weather_code,
      isDay: dados.current.is_day,
    }
  } catch (erro) {
      console.error('Erro ao obter dados do clima:', erro)
      return null
    }
}

export default getClima