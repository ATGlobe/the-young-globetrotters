import React from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '../hooks/useProgress';
import { CITIES } from '../data/cities';
import { Trophy, Award } from 'lucide-react';

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

const getIcon = (status: 'unvisited' | 'in-progress' | 'completed') => {
  let color = "#FFD700"; // Default Gold for cities

  const borderColor = status === 'completed' ? "#F59E0B" : status === 'in-progress' ? "#3B82F6" : "white";
  const glow = status === 'completed' ? "box-shadow: 0 0 15px #F59E0B;" : "";

  return L.divIcon({
    className: "custom-div-icon",
    html: `
      <div style="
        width:24px;
        height:24px;
        background:${color};
        border-radius:50%;
        border:3px solid ${borderColor};
        ${glow}
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
      ">
        ${status === 'completed' ? '<div style="width:8px; height:8px; background:white; border-radius:50%;"></div>' : status === 'in-progress' ? '<div style="width:8px; height:8px; background:#3B82F6; border-radius:50%;"></div>' : ''}
      </div>
    `,
    iconSize: [24, 24],
    iconAnchor: [12, 12]
  });
};

export default function Mappa() {
  const navigate = useNavigate();
  const { isCityCompleted, isCityInProgress } = useProgress();

  const getCityStatus = (id: string) => {
    if (isCityCompleted(id)) return 'completed';
    if (isCityInProgress(id)) return 'in-progress';
    return 'unvisited';
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Small Hero Section */}
      <section className="bg-blue-600 text-white py-8 px-4 h-[160px] flex flex-col justify-center items-center text-center shadow-md">
        <h1 className="text-3xl md:text-4xl font-black mb-2">
          Explore the World with Axel & Tino
        </h1>
        <p className="text-sm md:text-base font-medium opacity-90 max-w-2xl">
          Discover every city from the Young Globetrotters series.
          Complete activities, collect badges, and unlock your digital passport.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Interactive Map Section */}
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

            {CITIES.map((city) => {
              const status = getCityStatus(city.id);
              const markerColor = city.category === 'nature' ? '#22C55E' : city.category === 'special' ? '#3B82F6' : '#FFD700';
              
              const borderColor = status === 'completed' ? "#F59E0B" : status === 'in-progress' ? "#3B82F6" : "white";
              const glow = status === 'completed' ? "box-shadow: 0 0 15px #F59E0B;" : "";

              const customIcon = L.divIcon({
                className: "custom-div-icon",
                html: `
                  <div style="
                    width:24px;
                    height:24px;
                    background:${markerColor};
                    border-radius:50%;
                    border:3px solid ${borderColor};
                    ${glow}
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                  ">
                    ${status === 'completed' ? '<div style="width:8px; height:8px; background:white; border-radius:50%;"></div>' : status === 'in-progress' ? '<div style="width:8px; height:8px; background:#3B82F6; border-radius:50%;"></div>' : ''}
                  </div>
                `,
                iconSize: [24, 24],
                iconAnchor: [12, 12]
              });

              return (
                <Marker
                  key={city.id}
                  position={[city.coordinates.lat, city.coordinates.lng]}
                  icon={customIcon}
                  eventHandlers={{
                    click: () => navigate(`/books/${city.id}`)
                  }}
                >
                  <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent={false}>
                    <div className="text-center">
                      <p className="font-black text-slate-900">{city.name}</p>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{city.country}</p>
                      {status === 'completed' && <p className="text-[10px] text-amber-600 font-black mt-1">⭐ COMPLETED</p>}
                      {status === 'in-progress' && <p className="text-[10px] text-blue-600 font-black mt-1">🔄 IN PROGRESS</p>}
                    </div>
                  </Tooltip>
                </Marker>
              );
            })}
          </MapContainer>
        </div>

        <div className="text-center mt-12 mb-8">
          <img 
            src="https://i.ibb.co/prsV4tns/Foxy-blu-palne-removebg-preview.png"
            alt="Explorer Foxy"
            className="journey-foxy mx-auto mb-8 block max-w-[220px]"
          />
          <button 
            onClick={() => navigate('/passport')}
            className="px-8 py-4 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-lg"
          >
            View Full Passport
          </button>
        </div>

        {/* Your Digital Passport Section */}
        <section className="mt-12 pb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Your Journey</h2>
            <p className="text-lg text-slate-600 font-medium">Track your global achievements and collected badges.</p>
          </div>

          {/* Legend */}
          <div className="mb-16 flex flex-wrap justify-center gap-8 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-[#FFD700] border-2 border-white shadow-sm"></div>
              <span className="text-sm font-bold text-slate-700">City</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-[#22C55E] border-2 border-white shadow-sm"></div>
              <span className="text-sm font-bold text-slate-700">Nature</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-[#3B82F6] border-2 border-white shadow-sm"></div>
              <span className="text-sm font-bold text-slate-700">Special</span>
            </div>
            <div className="w-px h-6 bg-slate-200 hidden md:block"></div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-white border-2 border-[#F59E0B] shadow-sm flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#F59E0B] rounded-full"></div>
              </div>
              <span className="text-sm font-bold text-slate-700">Completed ⭐</span>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-slate-900 mb-8">Explore the 50 Adventures</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {CITIES.map((city) => (
                <button
                  key={city.id}
                  onClick={() => navigate(`/books/${city.id}`)}
                  className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all text-left group"
                >
                  <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">Volume {city.volume}</p>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{city.name}</p>
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

