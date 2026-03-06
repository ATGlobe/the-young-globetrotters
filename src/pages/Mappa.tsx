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
              return (
                <Marker
                  key={city.id}
                  position={[city.coordinates.lat, city.coordinates.lng]}
                  icon={getIcon(status)}
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

        {/* Legend */}
        <div className="mt-8 flex flex-wrap justify-center gap-8 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-[#FFD700] border-2 border-white shadow-sm"></div>
            <span className="text-sm font-bold text-slate-700">Cities</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-white border-2 border-[#F59E0B] shadow-sm flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-[#F59E0B] rounded-full"></div>
            </div>
            <span className="text-sm font-bold text-slate-700">Completed ⭐</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-white border-2 border-[#3B82F6] shadow-sm flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full"></div>
            </div>
            <span className="text-sm font-bold text-slate-700">In Progress 🔄</span>
          </div>
        </div>

        {/* Your Digital Passport Section */}
        <section className="mt-24 pb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Your Journey</h2>
            <p className="text-lg text-slate-600 font-medium">Track your global achievements and collected badges.</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {CITIES.slice(0, 8).map((city) => {
              const isCompleted = isCityCompleted(city.id);
              
              return (
                <div 
                  key={city.id}
                  className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all group flex flex-col"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg ${
                      isCompleted ? 'bg-amber-500' : 'bg-blue-500'
                    }`}>
                      {isCompleted ? <Trophy size={24} /> : <Award size={24} />}
                    </div>
                    {isCompleted && (
                      <div className="bg-amber-100 text-amber-600 p-2 rounded-xl">
                        <Trophy size={20} />
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-black text-slate-900 mb-1">{city.name}</h3>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">{city.country}</p>
                  
                  <div className="mt-auto">
                    <button 
                      onClick={() => navigate(`/books/${city.id}`)}
                      className="w-full py-4 font-black rounded-2xl transition-all flex items-center justify-center gap-2 group-hover:shadow-lg bg-slate-50 text-slate-900 hover:bg-blue-600 hover:text-white"
                    >
                      Explore this City
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <button 
              onClick={() => navigate('/passport')}
              className="px-8 py-4 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-lg"
            >
              View Full Passport
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

