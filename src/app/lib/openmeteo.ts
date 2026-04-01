async function getClima(latitude: number, longitude: number) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,precipitation,relative_humidity_2m,weather_code&timezone=Europe/Lisbon`
  

  const resposta = await fetch(url)
  const dados = await resposta.json()


return {
  temperatura: dados.current.temperature_2m,
  vento: dados.current.wind_speed_10m,
  precipitacao: dados.current.precipitation,
  humidade: dados.current.relative_humidity_2m,
  weatherCode: dados.current.weather_code,
}
}

export default getClima