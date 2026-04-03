function getIconClima(weatherCode: number, isDay: number): string {
  if (weatherCode === 0) return isDay ? '/icons/clima/clear-day.json' : '/icons/clima/clear-night.json'
  if (weatherCode <= 3) return isDay ? '/icons/clima/partly-cloudy-day.json' : '/icons/clima/partly-cloudy-night.json'
  if (weatherCode <= 48) return '/icons/clima/overcast.json'
  if (weatherCode <= 67) return '/icons/clima/rain.json'
  if (weatherCode <= 77) return '/icons/clima/snow.json'
  if (weatherCode <= 82) return '/icons/clima/rain.json'
  if (weatherCode >= 95) return '/icons/clima/thunderstorms.json'
  return isDay ? '/icons/clima/partly-cloudy-day.json' : '/icons/clima/partly-cloudy-night.json'
}
export default getIconClima