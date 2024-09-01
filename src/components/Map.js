import React from 'react';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Define custom icon
const customIcon = new L.Icon({
  iconUrl: "/images/location-pin.png",
  iconSize: [32, 32], // Size of the icon
  iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
  popupAnchor: [0, -32], // Point from which the popup should open relative to the iconAnchor

});
const Map = ({ cafes, mapCenter, mapZoom, onMarkerClick }) => {
  return (
    <MapContainer center={mapCenter} zoom={mapZoom} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {cafes.map(cafe => (
        <Marker
          key={cafe.id}
          position={[cafe.lat, cafe.lng]}
          icon={customIcon}
          eventHandlers={{
            click: () => onMarkerClick(cafe),
          }}
        >
          <Popup>{cafe.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;