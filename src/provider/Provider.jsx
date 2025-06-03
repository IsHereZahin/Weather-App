import FavoriteProvider from './FavoriteProvider';
import WeatherProvider from './WeatherProvider';

export default function Provider({ children }) {
    return (
        <WeatherProvider>
            <FavoriteProvider>
                {children}
            </FavoriteProvider>
        </WeatherProvider>
    );
}