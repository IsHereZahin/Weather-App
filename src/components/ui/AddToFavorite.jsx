import { useContext, useEffect, useState } from 'react';
import RedHeartIcon from '../../assets/img/heart-red.svg';
import HeartIcon from '../../assets/img/heart.svg';
import { FavoriteContext, WeatherContext } from '../../context';

export default function AddToFavorite() {
    const { addToFavorite, removeFavorite, favorites } = useContext(FavoriteContext);
    const { weatherData } = useContext(WeatherContext);
    const { latitude, longitude, location } = weatherData;

    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        let ignore = false;
        if (!ignore) {
            const isFav = favorites.some((item) => item.location === location);
            setIsFavorite(isFav);
        }
        return () => {
            ignore = true;
        };
    }, [favorites, location]);

    function handleFavoriteToggle() {
        if (isFavorite) {
            removeFavorite(location);
        } else {
            addToFavorite(latitude, longitude, location);
        }
        setIsFavorite(!isFavorite);
    }

    return (
        <div className="md:col-span-2">
            <div className="flex items-center justify-end">
                <button
                    className="cursor-pointer flex items-center space-x-3 px-4 py-2 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition duration-200"
                    aria-label={isFavorite ? "Remove from Favorite" : "Add to Favorite"}
                    onClick={handleFavoriteToggle}
                >
                    <span>{isFavorite ? "Remove from Favorite" : "Add to Favorite"}</span>
                    <img
                        src={isFavorite ? RedHeartIcon : HeartIcon}
                        alt="Favorite toggle"
                        className="w-5 h-5"
                    />
                </button>
            </div>
        </div>
    );
}
