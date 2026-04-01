async function getAr(latitude: number, longitude: number) {
  const url = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&current=pm2_5,pm10,european_aqi`

  const resposta = await fetch(url)
  const dados = await resposta.json()

  return {
    pm25: dados.current.pm2_5,
    pm10: dados.current.pm10,
    aqi: dados.current.european_aqi,
  }
}

export default getAr