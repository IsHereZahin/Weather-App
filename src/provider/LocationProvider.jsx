import { useState } from 'react';
import { LocationContext } from '../context';

const LocationProvider = ({ children }) => {
    const [selectedLocation, setSelectedLocation] = useState(
        {
            id: 6,
            name: "Chittagong, Bangladesh",
            latitude: 22.3569,
            longitude: 91.7766
        }
    );

    return (
        <LocationContext.Provider value={{ selectedLocation, setSelectedLocation }} >
            {children}
        </LocationContext.Provider>
    )
}

export default LocationProvider;