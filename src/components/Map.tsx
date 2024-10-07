"use client";

import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent: React.FC = () => {
  const [position, setPosition] = useState<[number, number] | null>([
    51.505, -0.09,
  ]);

  return (
    <MapContainer
      center={position || [51.505, -0.09]}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {position && (
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup.
            <br /> Easily customizable.
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default MapComponent;
