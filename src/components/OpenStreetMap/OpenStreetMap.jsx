import React, { useRef, useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet"
// import "leaflet/dist/leaflet.css"
// import "leaflet-defaulticon-compatibility"
// import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// import icon from "leaflet/dist/images/marker-icon.png";
import L from "leaflet";
// import iconShadow from "leaflet/dist/images/marker-shadow.png";

const icon = L.icon({ iconUrl: "/calligraphy-red-small.png", iconSize: [100, 100] });

// let DefaultIcon = L.icon({
//     iconUrl: icon,
//     shadowUrl: iconShadow,
//   });

//   L.Marker.prototype.options.icon = DefaultIcon;

const OpenStreetMap = () => {
  const [center, setCenter] = useState({ lat: 50.1105, lng: 14.3907 });
  const ZOOM_LEVEL = 17;
  const mapRef = useRef();

  return (
    <div className="mx-10 sm:mx-32 sm:h-1/3 h-1/5 mt-10 mb-24 z-10 relative">
      <MapContainer
        center={center}
        zoom={ZOOM_LEVEL}
        ref={mapRef}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
          <Popup>Sportovní areál ČVUT Pod Juliskou 4, Praha 6</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default OpenStreetMap;
