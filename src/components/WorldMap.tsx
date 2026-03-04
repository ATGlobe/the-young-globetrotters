import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { citiesData } from "../data/citiesData";
import { usePassport } from "../hooks/usePassport";
import { Globe, Navigation, Compass, Info } from "lucide-react";

// Coordinate mapping for cities in citiesData.ts
const CITY_COORDS: Record<string, { lat: number; lng: number }> = {
  "rome": { lat: 41.9028, lng: 12.4964 },
  "paris": { lat: 48.8566, lng: 2.3522 },
  "london": { lat: 51.5074, lng: -0.1278 },
  "barcelona": { lat: 41.3851, lng: 2.1734 },
  "amsterdam": { lat: 52.3702, lng: 4.8952 },
  "stockholm": { lat: 59.3293, lng: 18.0686 },
  "prague": { lat: 50.0755, lng: 14.4378 },
  "athens": { lat: 37.9838, lng: 23.7275 },
  "berlin": { lat: 52.5200, lng: 13.4050 },
  "vienna": { lat: 48.2082, lng: 16.3738 },
  "lisbon": { lat: 38.7223, lng: -9.1393 },
  "dublin": { lat: 53.3498, lng: -6.2603 },
  "edinburgh": { lat: 55.9533, lng: -3.1883 },
  "budapest": { lat: 47.4979, lng: 19.0402 },
  "copenhagen": { lat: 55.6761, lng: 12.5683 },
  "oslo": { lat: 59.9139, lng: 10.7522 },
  "helsinki": { lat: 60.1699, lng: 24.9384 },
  "reykjavik": { lat: 64.1466, lng: -21.9426 },
  "istanbul": { lat: 41.0082, lng: 28.9784 },
  "saint-petersburg": { lat: 59.9343, lng: 30.3351 },
  "new-york": { lat: 40.7128, lng: -74.0060 },
  "toronto": { lat: 43.6532, lng: -79.3832 },
  "chicago": { lat: 41.8781, lng: -87.6298 },
  "rio-de-janeiro": { lat: -22.9068, lng: -43.1729 },
  "mexico-city": { lat: 19.4326, lng: -99.1332 },
  "patagonia": { lat: -50.0, lng: -72.0 },
  "machu-picchu": { lat: -13.1631, lng: -72.5450 },
  "miami": { lat: 25.7617, lng: -80.1918 },
  "vancouver": { lat: 49.2827, lng: -123.1207 },
  "san-francisco": { lat: 37.7749, lng: -122.4194 },
  "tokyo": { lat: 35.6762, lng: 139.6503 },
  "kyoto": { lat: 35.0116, lng: 135.7681 },
  "bali": { lat: -8.4095, lng: 115.1889 },
  "sydney": { lat: -33.8688, lng: 151.2093 },
  "auckland": { lat: -36.8485, lng: 174.7633 },
  "singapore": { lat: 1.3521, lng: 103.8198 },
  "seoul": { lat: 37.5665, lng: 126.9780 },
  "hong-kong": { lat: 22.3193, lng: 114.1694 },
  "mumbai": { lat: 19.0760, lng: 72.8777 },
  "dubai": { lat: 25.2048, lng: 55.2708 },
  "north-pole": { lat: 85.0, lng: 0.0 },
  "antarctic": { lat: -80.0, lng: 0.0 },
  "sahara": { lat: 23.0, lng: 12.0 },
  "outback": { lat: -25.0, lng: 133.0 },
  "amazon": { lat: -3.0, lng: -60.0 },
  "hawaii": { lat: 21.3069, lng: -157.8583 },
  "madagascar": { lat: -18.7669, lng: 46.8691 },
  "galápagos": { lat: -0.6, lng: -90.5 },
  "easter-island": { lat: -27.1127, lng: -109.3497 },
  "santorini": { lat: 36.3932, lng: 25.4615 }
};

/**
 * Converts latitude and longitude to X and Y coordinates for a 1000x500 SVG.
 * Uses a simple equirectangular projection.
 */
const project = (lat: number, lng: number, width: number, height: number) => {
  const x = (lng + 180) * (width / 360);
  const y = (90 - lat) * (height / 180);
  return { x, y };
};

export default function WorldMap() {
  const navigate = useNavigate();
  const { isUnlocked } = usePassport();
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const [journeyMode, setJourneyMode] = useState(false);

  const width = 1000;
  const height = 500;

  const cities = Object.entries(citiesData).map(([slug, data]) => ({
    slug,
    ...data,
    coords: CITY_COORDS[slug] || { lat: 0, lng: 0 }
  }));

  return (
    <div className="relative w-full max-w-6xl mx-auto bg-slate-900 rounded-[3rem] p-6 md:p-10 shadow-2xl overflow-hidden border border-white/10">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-600 rounded-2xl shadow-lg shadow-blue-500/20">
            <Globe className="text-white" size={28} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight">World Explorer Map</h2>
            <p className="text-slate-400 text-sm">Discover adventures across the globe</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setJourneyMode(!journeyMode)}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all duration-300 ${
              journeyMode 
                ? 'bg-blue-600 text-white shadow-[0_0_25px_rgba(37,99,235,0.4)]' 
                : 'bg-white/5 text-slate-300 hover:bg-white/10'
            }`}
          >
            {journeyMode ? <Navigation size={18} /> : <Compass size={18} />}
            {journeyMode ? 'Exit Journey Mode' : 'Enter Journey Mode'}
          </button>
        </div>
      </div>

      {/* Map Container */}
      <div className="relative aspect-[2/1] w-full bg-slate-800/50 rounded-[2rem] border border-white/5 overflow-hidden">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Stylized World Map Background (Simplified Continents) */}
          <g fill="#1e293b" stroke="#334155" strokeWidth="1">
            {/* North America */}
            <path d="M150,100 L250,80 L350,120 L300,250 L200,280 L120,200 Z" />
            {/* South America */}
            <path d="M280,300 L350,320 L320,450 L250,420 Z" />
            {/* Europe */}
            <path d="M450,80 L550,70 L580,150 L480,180 Z" />
            {/* Africa */}
            <path d="M480,200 L580,220 L620,350 L500,380 L450,280 Z" />
            {/* Asia */}
            <path d="M600,80 L850,100 L900,250 L750,320 L620,250 Z" />
            {/* Australia */}
            <path d="M800,350 L900,360 L880,450 L780,430 Z" />
            {/* Greenland */}
            <path d="M350,40 L450,30 L420,80 Z" />
          </g>

          {/* City Markers */}
          {cities.map((city) => {
            const { x, y } = project(city.coords.lat, city.coords.lng, width, height);
            const unlocked = isUnlocked(0); // Mocked for now, should use real volume ID if available
            // Note: citiesData slugs don't directly map to volume IDs easily without a lookup.
            // For now, let's just show them as interactive markers.
            
            return (
              <g
                key={city.slug}
                className="cursor-pointer group"
                onMouseEnter={() => setHoveredCity(city.slug)}
                onMouseLeave={() => setHoveredCity(null)}
                onClick={() => navigate(`/books/${city.slug}`)}
              >
                {/* Glow Effect */}
                <motion.circle
                  cx={x}
                  cy={y}
                  r={8}
                  fill={journeyMode ? "rgba(59, 130, 246, 0.2)" : "rgba(24ACC15, 0.1)"}
                  initial={false}
                  animate={{
                    scale: hoveredCity === city.slug ? 2.5 : 1,
                    opacity: hoveredCity === city.slug ? 0.5 : 0
                  }}
                />
                
                {/* Main Marker */}
                <motion.circle
                  cx={x}
                  cy={y}
                  r={hoveredCity === city.slug ? 6 : 4}
                  fill={hoveredCity === city.slug ? "#3B82F6" : "#FACC15"}
                  stroke="white"
                  strokeWidth={hoveredCity === city.slug ? 2 : 1.5}
                  initial={false}
                  animate={{
                    scale: hoveredCity === city.slug ? 1.2 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />

                {/* Tooltip */}
                <AnimatePresence>
                  {hoveredCity === city.slug && (
                    <motion.g
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                    >
                      <foreignObject x={x - 60} y={y - 50} width="120" height="40">
                        <div className="flex justify-center">
                          <div className="bg-white text-slate-900 text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-2xl border border-slate-200 whitespace-nowrap">
                            {city.name}
                          </div>
                        </div>
                      </foreignObject>
                    </motion.g>
                  )}
                </AnimatePresence>
              </g>
            );
          })}
        </svg>

        {/* Info Overlay */}
        <div className="absolute bottom-6 left-6 flex items-center gap-2 px-4 py-2 bg-slate-900/80 backdrop-blur-md rounded-xl border border-white/10 text-xs text-slate-300">
          <Info size={14} className="text-blue-400" />
          <span>Click a marker to explore the city adventure!</span>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm">
        <div className="flex items-center gap-3 text-slate-400">
          <div className="w-3 h-3 rounded-full bg-[#FACC15] shadow-[0_0_10px_rgba(250,204,21,0.4)]" />
          <span className="font-medium">Available Destination</span>
        </div>
        <div className="flex items-center gap-3 text-slate-400">
          <div className="w-3 h-3 rounded-full bg-[#3B82F6] shadow-[0_0_10px_rgba(59,130,246,0.4)]" />
          <span className="font-medium">Selected</span>
        </div>
      </div>
    </div>
  );
}
