import { useContext, useEffect, useState } from 'react';
import Header from "./components/sections/header";
import WeatherBoard from "./components/sections/WeatherBoard";
import { WeatherContext } from "./context";
import Provider from "./provider/Provider";

// Background images
import clearSky from './assets/img/backgrounds/clear-sky.jpg';
import fewClouds from './assets/img/backgrounds/few-clouds.jpg';
import mist from './assets/img/backgrounds/mist.jpeg';
import rainyDay from './assets/img/backgrounds/rainy-day.jpg';
import scatteredClouds from './assets/img/backgrounds/scattered-clouds.jpg';
import snow from './assets/img/backgrounds/snow.jpg';
import sunny from './assets/img/backgrounds/sunny.jpg';
import thunderstorm from './assets/img/backgrounds/thunderstorm.jpg';
import winter from './assets/img/backgrounds/winter.jpg';

function AppContent() {
  const { weatherData, loading } = useContext(WeatherContext);
  const [climateImage, setClimateImage] = useState('');

  function getBackgroundImage(climate) {
    switch (climate) {
      case 'Clouds':
        return scatteredClouds;
      case 'Few Clouds':
        return fewClouds;
      case 'Haze':
      case 'Mist':
      case 'Smoke':
      case 'Dust':
      case 'Fog':
      case 'Sand':
      case 'Ash':
        return mist;
      case 'Snow':
        return snow;
      case 'Clear':
        return sunny;
      case 'Rain':
      case 'Drizzle':
        return rainyDay;
      case 'Thunderstorm':
        return thunderstorm;
      case 'Tornado':
      case 'Squall':
        return winter;
      default:
        return clearSky;
    }
  }

  useEffect(() => {
    if (weatherData?.climate) {
      const backgroundImage = getBackgroundImage(weatherData.climate);
      setClimateImage(backgroundImage);
    }
  }, [weatherData?.climate]);

  if (loading.state) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-white text-lg">{loading.message}</p>
      </div>
    );
  }

  return (
    <div
      style={{ backgroundImage: `url(${climateImage})` }}
      className="bg-cover bg-no-repeat bg-center min-h-screen w-full text-white flex flex-col"
    >
      <Header />

      <main className="flex-grow px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <section className="w-full max-w-4xl">
          <WeatherBoard />
        </section>
      </main>
    </div>
  );
}

function App() {
  return (
    <Provider>
      <AppContent />
    </Provider>
  );
}

export default App;
