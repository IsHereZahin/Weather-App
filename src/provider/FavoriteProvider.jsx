import { FavoriteContext } from "../context";
import { useLocalStorage } from "../hooks";

const FavoriteProvider = ({ children }) => {
    const [favorites, setFavorites] = useLocalStorage( "favorites", []);

    // Add to favorite
    const addToFavorite = (latitude, longitude, location) => {
        const alreadyExists = favorites.some((fav) => fav.location === location);
        if (alreadyExists) return;

        setFavorites([
            ...favorites,
            { latitude, longitude, location }
        ]);
        console.log("Added to favorites:", { latitude, longitude, location });
    };

    // Remove from favorite
    const removeFavorite = (location) => {
        setFavorites(
            favorites.filter(
                (prevFavorite) => prevFavorite.location !== location
            )
        )
        console.log("Removed from favorites:", location);
    }

    return (
        <FavoriteContext.Provider value={{ favorites, addToFavorite, removeFavorite }} >
            {children}
        </FavoriteContext.Provider>
    )
}

export default FavoriteProvider;