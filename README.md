# ShouldIGo

**Should you go outside today?**

Real-time air quality and weather app for cities worldwide.
Homepage focusing Portugal. 

## Features

- Search any city in the world
- Real-time weather data (temperature, wind, humidity, precipitation)
- European air quality index (AQI, PM2.5, PM10)
- Clear recommendation
- Animated weather icons
- Responsive for mobile and desktop

## Tech Stack

- **Next.js 15** with App Router and Server Components
- **TypeScript**
- **CSS Modules**
- **Lottie** for animated icons

## APIs

- [Open-Meteo](https://open-meteo.com) — weather and air quality, free, no auth required
- [Open-Meteo Geocoding](https://open-meteo.com/en/docs/geocoding-api) — city search
- [Basmilius Weather Icons](https://basmilius.github.io/weather-icons) — open-source animated icons

## Run locally
```bash
git clone https://github.com/carvedjo/shouldigo.git
cd shouldigo
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.