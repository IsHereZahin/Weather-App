import { useContext } from "react";
import pinImg from '../../assets/img/pin.svg';
import { WeatherContext } from "../../context";
import { getFormattedDate } from "../../utils/data-util";

import CloudyIcon from '../../assets/img/icons/cloud.svg';
import HazeIcon from '../../assets/img/icons/haze.svg';
import RainIcon from '../../assets/img/icons/rainy.svg';
import SnowIcon from '../../assets/img/icons/snow.svg';
import SunnyIcon from '../../assets/img/icons/sunny.svg';
import ThunderIcon from '../../assets/img/icons/thunder.svg';

export default function WeatherHeadline() {
    const { weatherData } = useContext(WeatherContext);
    const { climate, location, temperature, time } = weatherData;

    function getWeatherIcon(climate) {
        switch (climate) {
            case "Clouds":
                return CloudyIcon;
            case "Haze":
            case "Mist":
            case "Smoke":
            case "Dust":
            case "Fog":
            case "Sand":
            case "Ash":
                return HazeIcon;
            case "Snow":
                return SnowIcon;
            case "Clear":
                return SunnyIcon;
            case "Rain":
            case "Drizzle":
                return RainIcon;
            case "Thunderstorm":
                return ThunderIcon;
            case "Tornado":
            case "Squall":
                return ThunderIcon;
            default:
                return CloudyIcon;
        }
    }

    return (
        <div>
            <div className="max-md:flex items-center justify-between md:-mt-10">
                <img src={getWeatherIcon(climate)} alt={climate} title={climate} />
                <div className="max-md:flex items-center max-md:space-x-4">
                    <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">{temperature}°</h1>
                    <div className="flex items-center space-x-4 md:mb-4">
                        <img src={pinImg} alt="pin" />
                        <h2 className="text-2xl lg:text-[50px]">{location}</h2>
                    </div>
                </div>
            </div>
            <p className="text-sm lg:text-lg">{getFormattedDate(time, "time", false)} - {getFormattedDate(time, "date", false)}</p>
        </div>
    );
}