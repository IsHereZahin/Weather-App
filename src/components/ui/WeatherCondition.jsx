// images
import tempMaxImg from "../../assets/img/icons/temp-max.svg";
import tempMinImg from "../../assets/img/icons/temp-min.svg";
import tempHumidityImg from "../../assets/img/icons/humidity.svg";
import tempCloudyImg from "../../assets/img/icons/cloud.svg";
import tempWindImg from "../../assets/img/icons/wind.svg";

export default function WeatherCondition() {
    return (
        <div>
            <p className="text-sm lg:text-lg font-bold uppercase mb-8">thunderstorm with light drizzle</p>
            <ul className="space-y-6 lg:space-y-6">
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Temp max</span>
                    <div className="inline-flex space-x-4">
                        <p>19°</p>
                        <img src={tempMaxImg} alt="temp-max" />
                    </div>
                </li>
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Temp min</span>
                    <div className="inline-flex space-x-4">
                        <p>19°</p>
                        <img src={tempMinImg} alt="temp-min" />
                    </div>
                </li>
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Humanity</span>
                    <div className="inline-flex space-x-4">
                        <p>58%</p>
                        <img src={tempHumidityImg} alt="humidity" />
                    </div>
                </li>
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Cloudy</span>
                    <div className="inline-flex space-x-4">
                        <p>86%</p>
                        <img src={tempCloudyImg} alt="cloudy" />
                    </div>
                </li>
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Wind</span>
                    <div className="inline-flex space-x-4">
                        <p>5km/h</p>
                        <img src={tempWindImg} alt="wind" />
                    </div>
                </li>
            </ul>
        </div>
    );
}