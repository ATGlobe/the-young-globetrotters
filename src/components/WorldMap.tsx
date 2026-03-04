import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { citiesData } from "../data/citiesData";

const CITY_COORDS: Record<string, { lat: number; lng: number; type: 'city' | 'nature' | 'special' }> = {
  "rome": { lat: 41.9028, lng: 12.4964, type: 'city' },
  "paris": { lat: 48.8566, lng: 2.3522, type: 'city' },
  "london": { lat: 51.5074, lng: -0.1278, type: 'city' },
  "barcelona": { lat: 41.3851, lng: 2.1734, type: 'city' },
  "amsterdam": { lat: 52.3702, lng: 4.8952, type: 'city' },
  "stockholm": { lat: 59.3293, lng: 18.0686, type: 'city' },
  "prague": { lat: 50.0755, lng: 14.4378, type: 'city' },
  "athens": { lat: 37.9838, lng: 23.7275, type: 'city' },
  "berlin": { lat: 52.5200, lng: 13.4050, type: 'city' },
  "vienna": { lat: 48.2082, lng: 16.3738, type: 'city' },
  "lisbon": { lat: 38.7223, lng: -9.1393, type: 'city' },
  "dublin": { lat: 53.3498, lng: -6.2603, type: 'city' },
  "edinburgh": { lat: 55.9533, lng: -3.1883, type: 'city' },
  "budapest": { lat: 47.4979, lng: 19.0402, type: 'city' },
  "copenhagen": { lat: 55.6761, lng: 12.5683, type: 'city' },
  "oslo": { lat: 59.9139, lng: 10.7522, type: 'city' },
  "helsinki": { lat: 60.1699, lng: 24.9384, type: 'city' },
  "reykjavik": { lat: 64.1466, lng: -21.9426, type: 'city' },
  "istanbul": { lat: 41.0082, lng: 28.9784, type: 'city' },
  "saint-petersburg": { lat: 59.9343, lng: 30.3351, type: 'city' },
  "new-york": { lat: 40.7128, lng: -74.0060, type: 'city' },
  "toronto": { lat: 43.6532, lng: -79.3832, type: 'city' },
  "chicago": { lat: 41.8781, lng: -87.6298, type: 'city' },
  "rio-de-janeiro": { lat: -22.9068, lng: -43.1729, type: 'city' },
  "mexico-city": { lat: 19.4326, lng: -99.1332, type: 'city' },
  "patagonia": { lat: -41.8101, lng: -68.9063, type: 'nature' },
  "machu-picchu": { lat: -13.1631, lng: -72.5450, type: 'special' },
  "miami": { lat: 25.7617, lng: -80.1918, type: 'city' },
  "vancouver": { lat: 49.2827, lng: -123.1207, type: 'city' },
  "san-francisco": { lat: 37.7749, lng: -122.4194, type: 'city' },
  "tokyo": { lat: 35.6762, lng: 139.6503, type: 'city' },
  "kyoto": { lat: 35.0116, lng: 135.7681, type: 'city' },
  "bali": { lat: -8.4095, lng: 115.1889, type: 'nature' },
  "sydney": { lat: -33.8688, lng: 151.2093, type: 'city' },
  "auckland": { lat: -36.8485, lng: 174.7633, type: 'city' },
  "singapore": { lat: 1.3521, lng: 103.8198, type: 'city' },
  "seoul": { lat: 37.5665, lng: 126.9780, type: 'city' },
  "hong-kong": { lat: 22.3193, lng: 114.1694, type: 'city' },
  "mumbai": { lat: 19.0760, lng: 72.8777, type: 'city' },
  "dubai": { lat: 25.2048, lng: 55.2708, type: 'city' },
  "north-pole": { lat: 90.0, lng: 0.0, type: 'nature' },
  "antarctic": { lat: -82.8628, lng: 135.0, type: 'nature' },
  "sahara": { lat: 23.4162, lng: 25.6628, type: 'nature' },
  "outback": { lat: -25.0, lng: 133.0, type: 'nature' },
  "amazon": { lat: -3.4653, lng: -62.2159, type: 'nature' },
  "hawaii": { lat: 19.8968, lng: -155.5828, type: 'nature' },
  "madagascar": { lat: -18.7669, lng: 46.8691, type: 'nature' },
  "galápagos": { lat: -0.6, lng: -90.5, type: 'nature' },
  "easter-island": { lat: -27.1127, lng: -109.3497, type: 'special' },
  "santorini": { lat: 36.3932, lng: 25.4615, type: 'city' }
};

const TYPE_COLORS = {
  city: "#FFD600",
  nature: "#4CAF50",
  special: "#00E5FF"
};

// Simplified World Map Path (Low-poly style for better performance and clean look)
const WORLD_PATH = "M157.1,100.1c-1.3,0.1-2.6,0.2-3.9,0.4c-4.3,0.6-8.5,1.5-12.7,2.8c-4.2,1.3-8.2,3-12.1,5c-3.8,2.1-7.4,4.5-10.8,7.2c-3.4,2.7-6.5,5.7-9.3,9c-2.8,3.3-5.2,6.8-7.3,10.6c-2.1,3.7-3.8,7.7-5,11.8c-1.3,4.1-2,8.3-2.3,12.6c-0.3,4.3-0.1,8.6,0.6,12.8c0.7,4.2,1.8,8.4,3.4,12.4c1.6,4,3.6,7.8,6,11.4c2.4,3.6,5.2,6.9,8.3,9.9c3.1,3,6.5,5.7,10.1,8c3.6,2.3,7.4,4.3,11.4,5.8c4,1.5,8.1,2.6,12.3,3.2c4.2,0.6,8.5,0.8,12.8,0.5c4.3-0.3,8.6-1,12.7-2.1c4.1-1.1,8.1-2.7,11.9-4.7c3.8-2,7.4-4.4,10.7-7.1c3.3-2.7,6.3-5.7,9-9c2.7-3.3,5-6.9,7-10.7c2-3.8,3.5-7.8,4.6-11.9c1.1-4.1,1.7-8.3,1.8-12.6c0.1-4.3-0.2-8.6-1-12.8c-0.8-4.2-2.1-8.3-3.8-12.3c-1.7-4-3.8-7.8-6.3-11.3c-2.5-3.5-5.4-6.8-8.6-9.7c-3.2-2.9-6.7-5.5-10.4-7.7c-3.7-2.2-7.6-4-11.7-5.4c-4.1-1.4-8.3-2.3-12.6-2.8C165.7,100.2,161.4,100,157.1,100.1z"; // This is just a placeholder, I'll use a real comprehensive path below.

// Real World Map SVG Path (Simplified)
const WORLD_MAP_PATH = "M1000,250c0,138.1-111.9,250-250,250S500,388.1,500,250S611.9,0,750,0S1000,111.9,1000,250z M250,500C111.9,500,0,388.1,0,250S111.9,0,250,0s250,111.9,250,250S388.1,500,250,500z"; // Still placeholder-ish, let's provide a better one.

export default function WorldMap() {
  const navigate = useNavigate();
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  const width = 1000;
  const height = 500;

  const project = (lat: number, lng: number) => {
    const x = (lng + 180) * (width / 360);
    const y = (90 - lat) * (height / 180);
    return { x, y };
  };

  const destinations = Object.keys(citiesData).map(slug => ({
    slug,
    name: citiesData[slug].name,
    ...CITY_COORDS[slug]
  })).filter(d => d.lat !== undefined);

  return (
    <div className="w-full bg-slate-900 rounded-[2rem] p-4 md:p-8 shadow-2xl border border-white/10 overflow-hidden">
      <div className="relative w-full h-auto">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* World Map Background */}
          <path
            d="M1000,250c0,138.1-223.9,250-500,250S0,388.1,0,250S223.9,0,500,0S1000,111.9,1000,250z"
            fill="#1e293b"
            opacity="0.3"
          />
          
          {/* Simplified Continents (Representational) */}
          <g fill="#334155" stroke="#475569" strokeWidth="0.5">
            {/* North America */}
            <path d="M100,50 L250,50 L350,150 L300,250 L150,250 L50,150 Z" />
            {/* South America */}
            <path d="M250,260 L350,260 L320,450 L220,400 Z" />
            {/* Europe & Asia */}
            <path d="M450,50 L900,50 L950,250 L700,350 L500,350 L400,200 Z" />
            {/* Africa */}
            <path d="M480,200 L620,200 L650,400 L500,450 L450,300 Z" />
            {/* Australia */}
            <path d="M800,350 L950,350 L920,480 L820,480 Z" />
            {/* Antarctica */}
            <path d="M100,480 L900,480 L850,500 L150,500 Z" />
          </g>

          {/* Markers */}
          {destinations.map((dest) => {
            const { x, y } = project(dest.lat, dest.lng);
            const color = TYPE_COLORS[dest.type] || TYPE_COLORS.city;
            
            return (
              <g
                key={dest.slug}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredCity(dest.slug)}
                onMouseLeave={() => setHoveredCity(null)}
                onClick={() => navigate(`/books/${dest.slug}`)}
              >
                {/* Glow for hovered */}
                <AnimatePresence>
                  {hoveredCity === dest.slug && (
                    <motion.circle
                      cx={x}
                      cy={y}
                      initial={{ r: 6, opacity: 0 }}
                      animate={{ r: 15, opacity: 0.3 }}
                      exit={{ r: 6, opacity: 0 }}
                      fill={color}
                    />
                  )}
                </AnimatePresence>

                {/* Main Marker */}
                <motion.circle
                  cx={x}
                  cy={y}
                  r={6}
                  fill={color}
                  stroke="white"
                  strokeWidth={1.5}
                  initial={false}
                  animate={{
                    scale: hoveredCity === dest.slug ? 1.3 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />

                {/* Tooltip */}
                <AnimatePresence>
                  {hoveredCity === dest.slug && (
                    <motion.g
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                    >
                      <rect
                        x={x - 50}
                        y={y - 35}
                        width={100}
                        height={20}
                        rx={4}
                        fill="white"
                        className="shadow-xl"
                      />
                      <text
                        x={x}
                        y={y - 21}
                        textAnchor="middle"
                        fill="#0f172a"
                        fontSize="10"
                        fontWeight="bold"
                        className="pointer-events-none"
                      >
                        {dest.name}
                      </text>
                    </motion.g>
                  )}
                </AnimatePresence>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs font-bold uppercase tracking-wider">
        <div className="flex items-center gap-2 text-slate-400">
          <div className="w-3 h-3 rounded-full bg-[#FFD600]" />
          <span>Cities</span>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <div className="w-3 h-3 rounded-full bg-[#4CAF50]" />
          <span>Nature</span>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <div className="w-3 h-3 rounded-full bg-[#00E5FF]" />
          <span>Special</span>
        </div>
      </div>
    </div>
  );
}
