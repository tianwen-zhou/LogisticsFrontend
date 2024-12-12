import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-routing-machine';

// 自定义地图标记
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// 预设的地址点
const locations = [
  { id: 1, name: 'Location 1', lat: -36.8485, lng: 174.7633 },
  { id: 2, name: 'Location 2', lat: -36.8509, lng: 174.7645 },
  { id: 3, name: 'Location 3', lat: -36.8525, lng: 174.7639 },
];

// 路径绘制组件
const RoutingControl = ({ waypoints }: { waypoints: L.LatLng[] }) => {
  const map = useMap();

  React.useEffect(() => {
    const routingControl = L.Routing.control({
      waypoints,
      routeWhileDragging: true,
      show: false, // 不显示路由面板
    }).addTo(map);

    return () => {
      map.removeControl(routingControl);
    };
  }, [map, waypoints]);

  return null;
};

const OpenStreetMapPage: React.FC = () => {
  const waypoints = locations.map(location => L.latLng(location.lat, location.lng));

  return (
    <div style={{ height: '100%', padding: '16px' }}>
      <h2>OpenStreetMap with Route</h2>
      <MapContainer
        style={{ height: '500px', width: '100%' }}
        center={locations[0]}
        zoom={14}
        scrollWheelZoom={true}
      >
        {/* 加载地图瓦片 */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* 添加地址标记 */}
        {locations.map(location => (
          <Marker key={location.id} position={[location.lat, location.lng]}>
            <Popup>{location.name}</Popup>
          </Marker>
        ))}

        {/* 添加路径 */}
        <RoutingControl waypoints={waypoints} />
      </MapContainer>
    </div>
  );
};

export default OpenStreetMapPage;
