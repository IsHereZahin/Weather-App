import { useState, useContext } from 'react';
import searchImg from '../../assets/img/search.svg';
import { LocationContext } from '../../context';
import { getLocationByName } from '../../data/locationData';

export default function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const { setSelectedLocation } = useContext(LocationContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Searching for location: ${searchTerm}`);
        const fetchedLocation = getLocationByName(searchTerm);
        console.log(fetchedLocation);
        setSelectedLocation({...fetchedLocation });
    };

    return (
        <form action="#" onSubmit={handleSubmit}>
            <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-gray-700 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
                <input
                    className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
                    type="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search Location" required
                />
                <button type="submit" className="cursor-pointer">
                    <img src={searchImg} alt="search" />
                </button>
            </div>
        </form>
    );
}