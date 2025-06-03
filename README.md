# Weather App

A modern and responsive weather application built with **React 18** and **Tailwind CSS 4.1**. This project uses React hooks, Context API, and a Provider pattern to manage state and fetch live weather data from the [OpenWeatherMap API](https://openweathermap.org/api). The app is deployed on **Vercel** for seamless hosting.

---

## Demo

You can view the live demo [here](https://weather-app-sandy-seven.vercel.app/)
---

## Features

- Fetches real-time weather data using OpenWeatherMap API based on geolocation or selected locations.
- Search weather by initial preset locations stored in `data/locationData.js`.
- Users can add or remove locations from favorites for quick access.
- Uses React 18 with functional components and hooks (`useState`, `useEffect`, `useContext`).
- Implements Context and Provider pattern for clean and scalable state management.
- Styled with Tailwind CSS 4.1 for a modern and responsive UI.
- Background images dynamically change according to current weather conditions.
- Deployed on Vercel for easy access and fast performance.

---

## Technologies Used

- React 18
- Tailwind CSS v4.1
- OpenWeatherMap API
- Vercel (deployment)
- React Hooks, Context API, Provider Pattern

---

## Installation & Setup

Follow these steps to run the project locally:

1. **Clone the repository**

        git clone https://github.com/IsHereZahin/Weather-App.git
        cd Weather-App

2. **Install dependencies**

Make sure you have Node.js installed (v16+ recommended).

    npm install
    # or
    yarn install

3. **Set up environment variables**

Create a .env file in the root directory and add your OpenWeatherMap API key:

    VITE_WEATHER_API_KEY=your_openweathermap_api_key_here

4. **Run the development server**

        npm run dev
        # or
        yarn dev

The app will be running at http://localhost:5173 or the port specified in your terminal.

## Deployment

This project is deployed using Vercel. To deploy your own version:

- Push your code to a GitHub repository.
- Connect the repository to Vercel.
- Add the environment variable (`VITE_WEATHER_API_KEY`) in Vercel dashboard.
- Deploy and enjoy your live weather app!

## Credits

This project was built as part of the LWS React Accelerator Course with guidance from Tapas Adhikary and Sumit Saha.
