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
import styles from "./OpenStreetMap.module.scss";

const icon = L.icon({
  iconUrl: "/icons/marker_here.svg",
  iconSize: [50, 50],
  iconAnchor: [25, 50],
  popupAnchor: [0, -50]
});

/**
 * @param {string} iconUrl
 */
const createTransportIcon = (iconUrl) =>
  L.icon({
    iconUrl,
    iconSize: [22, 22],
    iconAnchor: [11, 11],
    popupAnchor: [0, -11],
    className: styles.transportIcon
  });

const transportStops = [
  {
    id: "metro-dejvicka",
    position: [50.1009, 14.3922],
    iconUrl: "/icons/map_icons/metro.png",
    title: "Metro A",
    subtitle: "stanice Dejvicka"
  },
  {
    id: "podbaba",
    position: [50.1117631, 14.3940572],
    iconUrl: "/icons/map_icons/tram.png",
    title: "Nadrazi Podbaba",
    subtitle: "Tramvaj 8; Autobus 340, 355"
  },
  {
    id: "bus-cinska",
    position: [50.1088792, 14.3940811],
    iconUrl: "/icons/map_icons/bus.png",
    title: "Autobus 107, 147",
    subtitle: "stanice Cinska"
  }
];

const OpenStreetMap = () => {
  const [center] = useState({ lat: 50.1105, lng: 14.3907 });
  const ZOOM_LEVEL = 17;
  const mapRef = useRef(null);

  return (
    <div className={styles.mapContainer}>
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
        <Marker
          key="Marker key"
          position={[center.lat, center.lng]}
          icon={icon}
        >
          <Popup><b>Budō Matsuri</b><br />Sportovní areál ČVUT<br />Pod Juliskou 4, Praha 6</Popup>
        </Marker>

        {transportStops.map((stop) => (
          <Marker
            key={stop.id}
            position={[stop.position[0], stop.position[1]]}
            icon={createTransportIcon(stop.iconUrl)}
          >
            <Popup>
              <b>{stop.title}</b>
              <br />
              {stop.subtitle}
            </Popup>
          </Marker>
        ))}
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
    .bindPopup("<b>Budō Matsuri</b><br>Sportovní areál ČVUT<br>Pod Juliskou 4, Praha 6")
    .openPopup();
</script> */}