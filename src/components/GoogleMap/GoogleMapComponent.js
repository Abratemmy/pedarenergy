import React from 'react';
import './GoogleMap.scss';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "400px",
    borderRadius: "12px",
};

const center = {
    lat: 6.428055,  // Latitude for Victoria Island Lagos
    lng: 3.421944,  // Longitude for Victoria Island Lagos
};

function GoogleMapComponent() {
    return (
        <div>
            <div className="w-full flex flex-col items-center gap-3">
                <LoadScript googleMapsApiKey="AIzaSyCNiM6hNQQRHhEna1bCQ9c71h6smfanDBU">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={15}
                    >
                        <Marker position={center} />
                    </GoogleMap>
                </LoadScript>

                {/* View Larger Map Button */}
                <a
                    href="https://www.google.com/maps?q=9+Anifowoshe+Street,+Victoria+Island,+Lagos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                    View Larger Map
                </a>


            </div>
        </div>
    )
}

export default GoogleMapComponent