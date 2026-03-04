import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  ComposableMap, 
  Geographies, 
  Geography, 
  Marker,
  Line
} from "react-simple-maps";
import { VOLUMES } from "../constants";
import { usePassport } from "../hooks/usePassport";
import { MapPin, Navigation, Compass, Globe } from "lucide-react";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Map coordinates for the 10 volumes (mocked for now, should be in VOLUMES data)
const CITY_COORDS: Record<string, [number, number]> = {
  '1': [12.4964, 41.9028],   // Rome
  '2': [2.3522, 48.8566],    // Paris
  '3': [-74.0060, 40.7128],  // New York
  '4': [2.1734, 41.3851],    // Barcelona
  '5': [4.8952, 52.3702],    // Amsterdam
  '6': [139.6503, 35.6762],  // Tokyo
  '7': [115.1889, -8.4095],  // Bali
  '8': [151.2093, -33.8688], // Sydney
  '9': [18.4241, -33.9249],  // Cape Town (Africa)
  '10': [-43.1729, -22.9068], // Rio
};

export default function WorldMap() {
  const navigate = useNavigate();
  const { isUnlocked, passport } = usePassport();
  const [journeyMode, setJourneyMode] = useState(false);

  const purchasedIds = passport.purchasedVolumes.map(String);
  const nextDestinationId = (Math.max(0, ...passport.purchasedVolumes) + 1).toString();

  return (
    <div className="relative w-full max-w-6xl mx-auto bg-slate-900 rounded-[40px] p-4 md:p-8 shadow-2xl overflow-hidden border border-white/10">
      
      {/* Header & Toggle */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-600 rounded-xl">
            <Globe className="text-white" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-white">Interactive World Map</h2>
        </div>

        <button
          onClick={() => setJourneyMode(!journeyMode)}
          className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all ${
            journeyMode 
              ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]' 
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
        >
          {journeyMode ? <Navigation size={18} /> : <Compass size={18} />}
          {journeyMode ? 'Exit Journey Mode' : 'Enter Journey Mode'}
        </button>
      </div>

      <div className={`relative transition-all duration-700 ${journeyMode ? 'brightness-75' : ''}`}>
        <ComposableMap
          projectionConfig={{
            scale: 140,
          }}
          className="w-full h-auto"
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={journeyMode ? "#1E293B" : "#334155"}
                  stroke="#475569"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "#475569", outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {/* Journey Lines */}
          {journeyMode && passport.purchasedVolumes.length > 1 && (
            passport.purchasedVolumes
              .sort((a, b) => a - b)
              .map((id, index, arr) => {
                if (index === 0) return null;
                const prevId = arr[index - 1].toString();
                const currId = id.toString();
                if (!CITY_COORDS[prevId] || !CITY_COORDS[currId]) return null;
                
                return (
                  <Line
                    key={`line-${prevId}-${currId}`}
                    from={CITY_COORDS[prevId]}
                    to={CITY_COORDS[currId]}
                    stroke="#FACC15"
                    strokeWidth={2}
                    strokeDasharray="4 4"
                    className="animate-[dash_20s_linear_infinite]"
                  />
                );
              })
          )}

          {/* Markers */}
          {VOLUMES.map((book) => {
            const coords = CITY_COORDS[book.id];
            if (!coords) return null;

            const unlocked = isUnlocked(parseInt(book.id));
            const isNext = journeyMode && book.id === nextDestinationId;
            
            // In Journey Mode, we only show unlocked cities + the next one
            if (journeyMode && !unlocked && !isNext) return null;

            return (
              <Marker key={book.id} coordinates={coords}>
                <g
                  className="cursor-pointer group"
                  onClick={() => navigate(`/books/${book.slug}`)}
                >
                  <motion.circle
                    r={isNext ? 8 : 6}
                    fill={unlocked ? "#FACC15" : (isNext ? "#3B82F6" : "#EF4444")}
                    stroke="#fff"
                    strokeWidth={2}
                    initial={{ scale: 0 }}
                    animate={{ 
                      scale: 1,
                      boxShadow: unlocked ? "0 0 20px #FACC15" : "none"
                    }}
                    whileHover={{ scale: 1.5 }}
                  />
                  
                  {isNext && (
                    <motion.circle
                      r={12}
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth={2}
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />
                  )}

                  <foreignObject x="-40" y="-35" width="80" height="30">
                    <div className="flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-slate-900 text-white text-[10px] px-2 py-1 rounded shadow-xl whitespace-nowrap border border-white/10">
                        {book.city} {unlocked ? '✨' : ''}
                      </div>
                    </div>
                  </foreignObject>
                </g>
              </Marker>
            );
          })}
        </ComposableMap>
      </div>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
        <div className="flex items-center gap-2 text-slate-400">
          <div className="w-3 h-3 rounded-full bg-[#FACC15]" />
          <span>Unlocked</span>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
          <span>Locked</span>
        </div>
        {journeyMode && (
          <div className="flex items-center gap-2 text-slate-400">
            <div className="w-3 h-3 rounded-full bg-[#3B82F6]" />
            <span>Next Destination</span>
          </div>
        )}
      </div>

      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }
      `}</style>
    </div>
  );
}
