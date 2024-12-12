import React from 'react';
import { GoogleMap, LoadScriptNext } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: -36.8180233, // 替换为需要的纬度
    lng: 174.7976063  // 替换为需要的经度
};

const GoogleMapPage: React.FC = () => {
    return (
        <div style={{ padding: '16px' }}>
            <h2>Google Map 页面</h2>
            <LoadScriptNext googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >
                    {/* 你可以在这里添加标记、覆盖物等 */}
                </GoogleMap>
            </LoadScriptNext>
        </div>
    );
};

export default GoogleMapPage;  