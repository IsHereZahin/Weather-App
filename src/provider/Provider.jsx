import FavoriteProvider from './FavoriteProvider';
import LocationProvider from './LocationProvider';
import WeatherProvider from './WeatherProvider';

export default function Provider({ children }) {
    return (
        <LocationProvider>
            <FavoriteProvider>
                <WeatherProvider>
                    {children}
                </WeatherProvider>
            </FavoriteProvider>
        </LocationProvider>
    );
}