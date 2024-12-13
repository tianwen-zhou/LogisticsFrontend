import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-routing-machine';
import { fetchTaskData } from './api'; // 模拟后端请求

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// 路由控制组件
const RoutingControl = ({ waypoints }: { waypoints: L.LatLng[] }) => {
  const map = useMap();

  useEffect(() => {
    if (waypoints.length > 1) {
      // 创建并添加路线控制
      const routingControl = L.Routing.control({
        waypoints,
        routeWhileDragging: true, // 拖动时实时更新路线
        show: false, // 隐藏路线详情面板
        lineOptions: {
          styles: [{ color: 'red', weight: 4 }] // 设置路径为红色
        },
      }).addTo(map);

      return () => {
        map.removeControl(routingControl); // 清理控制器
      };
    }
  }, [map, waypoints]);

  return null;
};

const TaskMapPage: React.FC<{ taskId: string }> = ({ taskId }) => {
  const [locations, setLocations] = useState<
    { id: number; name: string; lat: number; lng: number }[]
  >([]);
  const [mapCenter, setMapCenter] = useState<
    [number, number] | null
  >(null);

  useEffect(() => {
    const loadTaskData = async () => {
      try {
        const data = await fetchTaskData(taskId); // 模拟后端请求
        setLocations(data.locations);
      } catch (error) {
        console.error('Failed to fetch task data:', error);
      }
    };
    loadTaskData();
  }, [taskId]);

  useEffect(() => {
    if (locations.length > 0) {
      setMapCenter([locations[0].lat, locations[0].lng]);
    }
  }, [locations]);

  const waypoints = locations.map(loc => L.latLng(loc.lat, loc.lng));

  if (!mapCenter) {
    return <div>Loading map...</div>;
  }

  return (
    <div style={{ padding: '16px' }}>
      <h2>Task Map - {taskId}</h2>
      <MapContainer
        style={{ height: '500px', width: '100%' }}
        center={mapCenter}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map(location => (
          <Marker key={location.id} position={[location.lat, location.lng]}>
            <Popup>{location.name}</Popup>
          </Marker>
        ))}
        <RoutingControl waypoints={waypoints} />
      </MapContainer>
    </div>
  );
};

export default TaskMapPage;