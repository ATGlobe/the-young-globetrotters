import React from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '../hooks/useProgress';
import { VOLUMES } from '../data/volumes';
import { BOOKS } from '../data/books';
import { MapPin, Trophy, Lock, Award } from 'lucide-react';
import Hero from '../components/Hero';
import { PASSPORT_CITIES } from '../data/passportCities';

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
        <div className="mt-8 flex flex-wrap justify-center gap-8 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
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

        {/* Your Digital Passport Section */}
        <section className="mt-24 pb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Your Digital Passport</h2>
            <p className="text-lg text-slate-600 font-medium">Track your global achievements and collected badges.</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {BOOKS.map((book) => {
              const vol = VOLUMES.find(v => v.slug === book.slug);
              const isCompleted = vol ? isCityCompleted(vol.id) : isCityCompleted(book.id);
              const isUnlocked = true; // All books are unlocked
              
              return (
                <div 
                  key={book.id}
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
                  
                  <h3 className="text-2xl font-black text-slate-900 mb-1">{book.city}</h3>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">{book.country}</p>
                  
                  <div className="mt-auto">
                    <button 
                      onClick={() => navigate(`/books/${book.slug}`)}
                      className="w-full py-4 font-black rounded-2xl transition-all flex items-center justify-center gap-2 group-hover:shadow-lg bg-slate-50 text-slate-900 hover:bg-blue-600 hover:text-white"
                    >
                      Explore this City
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
