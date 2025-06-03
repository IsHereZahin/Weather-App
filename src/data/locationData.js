const data = [
    {
        name: "New York",
        latitude: 40.73061,
        longitude: -73.935242,
    },
    {
        name: "London",
        latitude: 51.509865,
        longitude: -0.118092,
    },
    {
        name: "Tokyo",
        latitude: 35.6895,
        longitude: 139.69171,
    },
    {
        name: "Dubai",
        latitude: 25.276987,
        longitude: 55.296249,
    },
    {
        name: "Dhaka",
        latitude: 23.710 ,
        longitude: 90.407,
    },
    {
        name: "Chattogram",
        latitude: 22.3419,
        longitude: 91.815536,
    },
    {
        name: "Singapore",
        latitude: 1.29027,
        longitude: 103.851959,
    },
    {
        name: "Kolkata",
        latitude: 22.5726,
        longitude: 88.3639,
    }
];

// Get all locations
export const getLocations = () => data;

// Get location by name
export const getLocationByName = (locationName) => {
    if (!locationName) return null;

    const found = data.find(
        (loc) => loc.name.toLowerCase() === locationName.toLowerCase()
    );

    if (found) {
        return found;
    } else {
        const defaultLocation = data[5]; // Default to Chittagong
        console.warn(
            `Location with name "${locationName}" not found. Returning default location: ${defaultLocation.name}`
        );
        return defaultLocation;
    }
};
