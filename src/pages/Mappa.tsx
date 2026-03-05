import React from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '../hooks/useProgress';
import { VOLUMES } from '../data/volumes';
import Hero from '../components/Hero';

// Fix for default marker icons in Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const getIcon = (category: string, completed: boolean) => {
  let color = "#999";

  if (category === "city") color = "#FFD700"; // Yellow
  if (category === "nature") color = "#2ecc71"; // Green
  if (category === "special") color = "#3498db"; // Blue

  return L.divIcon({
    className: "custom-div-icon",
    html: `
      <div style="
        width:24px;
        height:24px;
        background:${color};
        border-radius:50%;
        border:3px solid ${completed ? "#F59E0B" : "white"};
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
      ">
        ${completed ? '<div style="width:8px; height:8px; background:white; border-radius:50%;"></div>' : ''}
      </div>
    `,
    iconSize: [24, 24],
    iconAnchor: [12, 12]
  });
};

export default function Mappa() {
  const navigate = useNavigate();
  const { isCityCompleted } = useProgress();

  return (
    <div className="min-h-screen bg-slate-50">
      <Hero 
        title="Interactive World Map"
        subtitle="Click on the cities to discover their stories and start your adventure!"
        bgColor="bg-blue-600"
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden h-[70vh] relative z-10">
          <MapContainer
            center={[20, 0]}
            zoom={2}
            scrollWheelZoom={true}
            className="h-full w-full"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {VOLUMES.map((vol) => (
              <Marker
                key={vol.id}
                position={[vol.coordinates.lat, vol.coordinates.lng]}
                icon={getIcon(vol.category, isCityCompleted(vol.id))}
                eventHandlers={{
                  click: () => navigate(`/books/${vol.slug}`)
                }}
              >
                <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent={false}>
                  <div className="text-center">
                    <p className="font-black text-slate-900">{vol.city}</p>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{vol.country}</p>
                    {isCityCompleted(vol.id) && <p className="text-[10px] text-amber-600 font-black mt-1">⭐ COMPLETED</p>}
                  </div>
                </Tooltip>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Legend */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-[#FFD700] border-2 border-white shadow-sm"></div>
            <span className="text-sm font-bold text-slate-700">Cities</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-[#2ecc71] border-2 border-white shadow-sm"></div>
            <span className="text-sm font-bold text-slate-700">Nature</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-[#3498db] border-2 border-white shadow-sm"></div>
            <span className="text-sm font-bold text-slate-700">Special</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-slate-900 border-2 border-[#F59E0B] shadow-sm flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
            <span className="text-sm font-bold text-slate-700">Completed Volume ⭐</span>
          </div>
        </div>
      </div>
    </div>
  );
}
