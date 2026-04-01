function getIconClima(weatherCode: number): string {
  if (weatherCode === 0) return '/icons/clima/clear-day.json'
  if (weatherCode <= 3) return '/icons/clima/partly-cloudy-day.json'
  if (weatherCode <= 48) return '/icons/clima/overcast.json'
  if (weatherCode <= 67) return '/icons/clima/rain.json'
  if (weatherCode <= 77) return '/icons/clima/snow.json'
  if (weatherCode <= 82) return '/icons/clima/rain.json'
  if (weatherCode >= 95) return '/icons/clima/thunderstorms.json'
  return '/icons/clima/partly-cloudy-day.json'
}
export default getIconClima