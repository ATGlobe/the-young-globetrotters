import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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

const CONTINENTS = [
  {
    id: "north-america",
    name: "North America",
    path: "M100,120 C120,80 250,50 380,80 C420,100 450,180 400,280 C350,350 250,360 150,320 C100,280 80,200 100,120 Z"
  },
  {
    id: "south-america",
    name: "South America",
    path: "M280,300 C340,300 410,320 410,420 C410,480 360,510 300,510 C240,510 210,460 210,400 C210,340 240,300 280,300 Z"
  },
  {
    id: "europe",
    name: "Europe",
    path: "M470,80 C520,50 590,50 630,90 C660,130 640,200 590,220 C540,240 480,220 460,180 C440,140 440,100 470,80 Z"
  },
  {
    id: "africa",
    name: "Africa",
    path: "M460,220 C540,180 660,200 690,300 C720,400 660,490 580,510 C500,520 440,460 430,380 C420,300 430,240 460,220 Z"
  },
  {
    id: "asia",
    name: "Asia",
    path: "M630,80 C780,30 950,40 980,120 C1000,200 960,320 850,410 C740,440 650,400 620,320 C600,240 600,120 630,80 Z"
  },
  {
    id: "australia",
    name: "Australia",
    path: "M780,350 C850,350 930,370 930,450 C930,510 880,530 820,530 C760,530 730,500 730,440 C730,370 750,350 780,350 Z"
  },
  {
    id: "greenland",
    name: "Greenland",
    path: "M350,40 C400,20 480,30 500,60 C520,100 480,130 430,130 C380,130 340,100 340,70 C340,50 340,40 350,40 Z"
  }
];

const TYPE_COLORS = {
  city: "#FFD600",
  nature: "#4CAF50",
  special: "#00E5FF"
};

export default function WorldMap() {
  const navigate = useNavigate();
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  const project = (lat: number, lng: number) => {
    const x = (lng + 180) * (1000 / 360);
    const y = (90 - lat) * (500 / 180);
    return { x, y };
  };

  const destinations = Object.keys(citiesData).map(slug => ({
    slug,
    name: citiesData[slug].name,
    ...CITY_COORDS[slug]
  })).filter(d => d.lat !== undefined);

  return (
    <div className="w-full bg-[#162447] rounded-[2rem] p-4 md:p-8 shadow-2xl border border-white/10 overflow-hidden">
      <div className="relative w-full h-auto">
        <svg
          viewBox="0 0 1000 500"
          width="100%"
          height="auto"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-auto"
        >
          {/* Ocean Background */}
          <rect width="1000" height="500" fill="#162447" />

          {/* Continents */}
          {CONTINENTS.map((continent) => (
            <path
              key={continent.id}
              d={continent.path}
              className="transition-all duration-300 ease-in-out hover:fill-[#3E5F9E] hover:scale-[1.01] cursor-pointer origin-center"
              fill="#2E4A7D"
              stroke="none"
            />
          ))}

          {/* Markers */}
          {destinations.map((dest) => {
            const { x, y } = project(dest.lat, dest.lng);
            const color = TYPE_COLORS[dest.type] || TYPE_COLORS.city;
            const isHovered = hoveredCity === dest.slug;

            return (
              <g
                key={dest.slug}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredCity(dest.slug)}
                onMouseLeave={() => setHoveredCity(null)}
                onClick={() => navigate(`/books/${dest.slug}`)}
              >
                {/* Glow Effect */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.circle
                      cx={x}
                      cy={y}
                      initial={{ r: 6, opacity: 0 }}
                      animate={{ r: 15, opacity: 0.3 }}
                      exit={{ r: 6, opacity: 0 }}
                      fill={color}
                      className="pointer-events-none"
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
                    scale: isHovered ? 1.3 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{
                    filter: isHovered ? `drop-shadow(0 0 8px ${color})` : 'none'
                  }}
                />

                {/* Tooltip */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.g
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="pointer-events-none"
                    >
                      <rect
                        x={x - 60}
                        y={y - 40}
                        width={120}
                        height={24}
                        rx={6}
                        fill="white"
                        className="shadow-xl"
                      />
                      <text
                        x={x}
                        y={y - 24}
                        textAnchor="middle"
                        fill="#0f172a"
                        fontSize="12"
                        fontWeight="bold"
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
      <div className="mt-6 flex flex-wrap justify-center gap-6 text-[10px] font-bold uppercase tracking-widest">
        <div className="flex items-center gap-2 text-slate-400">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFD600]" />
          <span>Cities</span>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <div className="w-2.5 h-2.5 rounded-full bg-[#4CAF50]" />
          <span>Nature</span>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <div className="w-2.5 h-2.5 rounded-full bg-[#00E5FF]" />
          <span>Special</span>
        </div>
      </div>
    </div>
  );
}
