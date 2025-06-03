import { useContext } from 'react';
import searchImg from '../../assets/img/search.svg';
import { LocationContext } from '../../context';
import { getLocationByName } from '../../data/locationData';
import { useDebounce } from '../../hooks';

export default function Search() {
    const { setSelectedLocation } = useContext(LocationContext);

    const doSearch = useDebounce((term) => {
        console.log(`Searching for location: ${term}`);
        const fetchedLocation = getLocationByName(term);
        console.log(fetchedLocation);
        setSelectedLocation({...fetchedLocation });
    }, 1000);

    function handleChange (e) {
        const value = e.target.value;
        doSearch(value);
    }

    return (
        <form action="#">
            <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-gray-700 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
                <input
                    className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
                    type="search"
                    onChange={handleChange}
                    placeholder="Search Location" required
                />
                <button type="submit" className="cursor-pointer">
                    <img src={searchImg} alt="search" />
                </button>
            </div>
        </form>
    );
}