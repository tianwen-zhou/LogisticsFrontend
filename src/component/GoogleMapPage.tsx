import React, { useState } from 'react';
import { GoogleMap, Marker, DirectionsService, DirectionsRenderer, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '500px',
};

// Define the starting and destination points
const origin = { lat: -36.8180233, lng: 174.7976063 }; // Starting point
const destination = { lat: -36.910755, lng: 174.691707 }; // Destination point

const GoogleMapPage: React.FC = () => {
    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!, // Replace with your API key
    });

    const [directionsResponse, setDirectionsResponse] = useState<google.maps.DirectionsResult | null>(null);

    const handleDirectionsCallback = (result: google.maps.DirectionsResult, status: google.maps.DirectionsStatus) => {
        if (status === 'OK') {
            setDirectionsResponse(result);
        } else {
            console.error(`Error fetching directions: ${status}`);
        }
    };

    if (!isLoaded) return <div>Loading...</div>;
    if (loadError) return <div>Error loading Google Maps API</div>;

    return (
        <div style={{ padding: '16px' }}>
            <h2>Google Map with Route</h2>
            <GoogleMap mapContainerStyle={containerStyle} center={origin} zoom={12}>
                {/* Markers */}
                <Marker position={origin} label="A" />
                <Marker position={destination} label="B" />

                {/* Directions Service */}
                <DirectionsService
                    options={{
                        origin: origin,
                        destination: destination,
                        travelMode: google.maps.TravelMode.DRIVING, // Set the travel mode
                    }}
                    callback={handleDirectionsCallback}
                />

                {/* Directions Renderer */}
                {directionsResponse && (
                    <DirectionsRenderer
                        options={{
                            directions: directionsResponse,
                            suppressMarkers: true, // Suppress default markers to use custom markers
                        }}
                    />
                )}
            </GoogleMap>
        </div>
    );
};

export default GoogleMapPage;
