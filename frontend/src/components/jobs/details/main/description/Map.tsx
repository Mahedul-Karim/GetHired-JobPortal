import React from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const position: LatLngExpression = [51.505, -0.09];

  return (
    <div className="mt-4">
      <MapContainer
        center={position}
        zoom={13}
        className="h-[250px] xs:h-[350px] sm:h-[450px] z-[2]"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>Hello!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
