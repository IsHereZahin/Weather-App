import { useContext } from 'react';
import { FavoriteContext, LocationContext } from '../../context';

export default function FavoriteListModal({ offModal }) {
    const { favorites } = useContext(FavoriteContext);
    const { setSelectedLocation } = useContext(LocationContext);

    return (
        <div className="max-w-xs py-4 bg-gray-900 rounded-md border border-gray-700 absolute right-0 top-16 text-white shadow-lg">
            <h3 className="text-lg font-bold px-4 text-white">Favorite Locations <span className="text-gray-400">({favorites.length})</span></h3>
            <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
                {
                    favorites.length === 0 ? (
                        <li className="text-gray-500 text-center">No favorite locations added!</li>
                    ) : (
                        favorites.map(fav => (
                            <li
                                key={fav.location}
                                className="px-4 py-2">
                                <button
                                    className="w-full text-left hover:bg-gray-800 rounded-md px-4 py-2 cursor-pointer transition-colors"
                                    onClick={() => {
                                        setSelectedLocation({ ...fav });
                                        offModal();
                                    }}
                                >
                                    {fav.location}
                                </button>
                            </li>
                        ))
                    )
                }
            </ul>
        </div>
    );
}
