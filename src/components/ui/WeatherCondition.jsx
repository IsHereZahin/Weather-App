import { useContext } from "react";
import { WeatherContext } from "../../context";

// images
import tempCloudyImg from "../../assets/img/icons/cloud.svg";
import tempHumidityImg from "../../assets/img/icons/humidity.svg";
import tempMaxImg from "../../assets/img/icons/temp-max.svg";
import tempMinImg from "../../assets/img/icons/temp-min.svg";
import tempWindImg from "../../assets/img/icons/wind.svg";

export default function WeatherCondition() {
    const { weatherData } = useContext(WeatherContext);
    const { climateDescription, maxTemperature, minTemperature, humidity, wind, cloudPercentage } = weatherData;

    return (
        <div>
            <p className="text-sm lg:text-lg font-bold uppercase mb-8">The climate is <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-200 via-cyan-100 to-blue-200 text-blue-900 font-bold rounded-full shadow-md">{climateDescription}</span></p>
            <ul className="space-y-6 lg:space-y-6">
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Temp max</span>
                    <div className="inline-flex space-x-4">
                        <p>{maxTemperature}°</p>
                        <img src={tempMaxImg} alt="temp-max" />
                    </div>
                </li>
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Temp min</span>
                    <div className="inline-flex space-x-4">
                        <p>{minTemperature}°</p>
                        <img src={tempMinImg} alt="temp-min" />
                    </div>
                </li>
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Humanity</span>
                    <div className="inline-flex space-x-4">
                        <p>{humidity}%</p>
                        <img src={tempHumidityImg} alt="humidity" />
                    </div>
                </li>
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Cloudy</span>
                    <div className="inline-flex space-x-4">
                        <p>{cloudPercentage}%</p>
                        <img src={tempCloudyImg} alt="cloudy" />
                    </div>
                </li>
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Wind</span>
                    <div className="inline-flex space-x-4">
                        <p>{wind}km/h</p>
                        <img src={tempWindImg} alt="wind" />
                    </div>
                </li>
            </ul>
        </div>
    );
}