import React, { useRef, useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet"
// import "leaflet/dist/leaflet.css"
// import "leaflet-defaulticon-compatibility"
// import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";

const icon = L.icon({ iconUrl: "/icons/marker_here.svg", iconSize: [50, 50] });

const OpenStreetMap = () => {
  const [center, setCenter] = useState({ lat: 50.1105, lng: 14.3907 });
  const ZOOM_LEVEL = 17;
  const mapRef = useRef();

  return (
    <div className="h-[40rem] w-[50%] mb-24 z-10 relative border-4 border-solid border-red-500 rounded-lg overflow-hidden">
      <MapContainer
        center={center}
        zoom={ZOOM_LEVEL}
        ref={mapRef}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap &copy; CARTO'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          maxZoom={19}
        />
        {/* {location.loaded && !location.error && ( */}
        {/* <Marker
              position={[center.lat, center.lng]}
            >
                <Popup>My Location</Popup>
                
            </Marker> */}

        {/* )} */}
        <Marker
          key="Marker key"
          position={[center.lat, center.lng]}
          icon={icon}
        >
          <Popup><b>Budo Matsuri</b><br />Sportovní areál ČVUT<br />Pod Juliskou 4, Praha 6</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default OpenStreetMap;


{/* <link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
/>

<div id="map" style="height:420px; border-radius:16px;"></div>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<script>
  // souřadnice místa (Sportovní areál ČVUT)
  const venue = [50.107224, 14.392878];

  // mapa
  const map = L.map('map', {
    zoomControl: true,
    scrollWheelZoom: false
  }).setView(venue, 15);

  // světle šedý minimalistický styl (stejný jako na tvém screenshotu)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap &copy; CARTO',
    maxZoom: 19
  }).addTo(map);

  // vlastní pin (můžeš nahradit logem)
  const icon = L.icon({
    iconUrl: '/img/pin.png', // nahraj sem ikonku
    iconSize: [42, 42],
    iconAnchor: [21, 42]
  });

  L.marker(venue, { icon: icon })
    .addTo(map)
    .bindPopup("<b>Budo Matsuri</b><br>Sportovní areál ČVUT<br>Pod Juliskou 4, Praha 6")
    .openPopup();
</script> */}