import { useState, useEffect } from "react";

const useWeather = () => {
    const [weatherData, setWeatherData] = useState({
        location: "",
        temperature: "",
        maxTemperature: "",
        minTemperature: "",
        climate: "",
        climateDescription: "",
        humidity: "",
        wind: "",
        cloudPercentage: "",
        time: "",
        longitude: "",
        latitude: "",
    });

    const [loading, setLoading] = useState({
        state: false,
        message: "",
    });

    const [error, setError] = useState(null);

    const fetchWeatherData = async (latitude, longitude) => {
        try {
            setLoading({
                state: true,
                message: "Fetching weather data...",
            });

            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
            );

            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();

            const updatedWeather = {
                location: data.name || "Unknown",
                temperature: Math.round(data.main.temp - 273.15),
                maxTemperature: Math.round(data.main.temp_max - 273.15),
                minTemperature: Math.round(data.main.temp_min - 273.15),
                climate: data.weather?.[0]?.main || "",
                climateDescription: data.weather?.[0]?.description || "",
                humidity: data.main.humidity,
                wind: data.wind.speed,
                cloudPercentage: data.clouds.all,
                time: data.dt,
                longitude: data.coord.lon,
                latitude: data.coord.lat,
            };

            setWeatherData(updatedWeather);
            setError(null);
        } catch (err) {
            setError(err.message || "Something went wrong");
        } finally {
            setLoading({
                state: false,
                message: "",
            });
        }
    };

    useEffect(() => {
        // 🔐 Prevent memory leak
        let ignore = false; 

        setLoading({
            state: true,
            message: "Fetching your location...",
        });

        if (!navigator.geolocation) {
            setError("Geolocation is not supported by your browser");
            setLoading({ state: false, message: "" });
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                if (!ignore) {
                    const { latitude, longitude } = position.coords;
                    fetchWeatherData(latitude, longitude);
                }
            },
            () => {
                setError("Unable to fetch location");
                setLoading({ state: false, message: "" });
            }
        );

        // 🔐 Cleanup
        return () => {
            ignore = true; 
        };
    }, []);

    return {
        weatherData,
        loading,
        error,
    };
};

export default useWeather;
