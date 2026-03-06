import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { BOOKS } from '../data/books';

// Simplified World Map Paths (ISO Alpha-2 codes)
const COUNTRY_PATHS: Record<string, { name: string; path: string }> = {
  "US": { name: "United States", path: "M160,140 L240,140 L240,200 L160,200 Z" },
  "CA": { name: "Canada", path: "M160,80 L260,80 L260,140 L160,140 Z" },
  "MX": { name: "Mexico", path: "M180,200 L220,200 L210,240 L190,240 Z" },
  "BR": { name: "Brazil", path: "M280,300 L340,300 L360,380 L300,420 L260,360 Z" },
  "AR": { name: "Argentina", path: "M280,420 L320,420 L310,500 L280,500 Z" },
  "CL": { name: "Chile", path: "M260,420 L280,420 L280,500 L260,500 Z" },
  "PE": { name: "Peru", path: "M260,340 L280,340 L280,420 L260,420 Z" },
  "CO": { name: "Colombia", path: "M260,300 L280,300 L280,340 L260,340 Z" },
  "VE": { name: "Venezuela", path: "M280,280 L320,280 L320,300 L280,300 Z" },
  "GB": { name: "United Kingdom", path: "M460,100 L480,100 L480,120 L460,120 Z" },
  "FR": { name: "France", path: "M470,130 L500,130 L500,160 L470,160 Z" },
  "IT": { name: "Italy", path: "M510,160 L530,160 L520,200 L500,200 Z" },
  "DE": { name: "Germany", path: "M500,100 L530,100 L530,130 L500,130 Z" },
  "ES": { name: "Spain", path: "M440,170 L470,170 L460,200 L430,200 Z" },
  "PT": { name: "Portugal", path: "M430,170 L440,170 L440,200 L430,200 Z" },
  "NL": { name: "Netherlands", path: "M490,100 L500,100 L500,110 L490,110 Z" },
  "BE": { name: "Belgium", path: "M490,110 L500,110 L500,120 L490,120 Z" },
  "CH": { name: "Switzerland", path: "M500,130 L510,130 L510,140 L500,140 Z" },
  "AT": { name: "Austria", path: "M510,130 L530,130 L530,140 L510,140 Z" },
  "SE": { name: "Sweden", path: "M530,40 L550,40 L550,100 L530,100 Z" },
  "NO": { name: "Norway", path: "M510,40 L530,40 L530,100 L510,100 Z" },
  "FI": { name: "Finland", path: "M550,40 L570,40 L570,100 L550,100 Z" },
  "RU": { name: "Russia", path: "M550,40 L950,40 L950,120 L550,120 Z" },
  "UA": { name: "Ukraine", path: "M550,120 L600,120 L600,150 L550,150 Z" },
  "TR": { name: "Turkey", path: "M550,160 L620,160 L620,190 L550,190 Z" },
  "EG": { name: "Egypt", path: "M550,230 L600,230 L600,280 L550,280 Z" },
  "LY": { name: "Libya", path: "M500,230 L550,230 L550,280 L500,280 Z" },
  "DZ": { name: "Algeria", path: "M440,230 L500,230 L500,280 L440,280 Z" },
  "MA": { name: "Morocco", path: "M420,230 L440,230 L440,260 L420,260 Z" },
  "NG": { name: "Nigeria", path: "M480,320 L520,320 L520,360 L480,360 Z" },
  "ET": { name: "Ethiopia", path: "M600,320 L640,320 L640,360 L600,360 Z" },
  "KE": { name: "Kenya", path: "M600,360 L640,360 L640,400 L600,400 Z" },
  "ZA": { name: "South Africa", path: "M560,450 L620,450 L610,500 L570,500 Z" },
  "SA": { name: "Saudi Arabia", path: "M600,230 L660,230 L660,300 L600,300 Z" },
  "IR": { name: "Iran", path: "M660,160 L720,160 L720,220 L660,220 Z" },
  "PK": { name: "Pakistan", path: "M720,180 L750,180 L750,240 L720,240 Z" },
  "IN": { name: "India", path: "M750,250 L820,250 L800,320 L760,320 Z" },
  "CN": { name: "China", path: "M750,150 L880,150 L880,240 L750,240 Z" },
  "MN": { name: "Mongolia", path: "M750,120 L850,120 L850,150 L750,150 Z" },
  "KZ": { name: "Kazakhstan", path: "M650,120 L750,120 L750,150 L650,150 Z" },
  "JP": { name: "Japan", path: "M920,160 L940,160 L940,220 L920,220 Z" },
  "KR": { name: "South Korea", path: "M880,180 L900,180 L900,210 L880,210 Z" },
  "ID": { name: "Indonesia", path: "M800,330 L900,330 L900,360 L800,360 Z" },
  "AU": { name: "Australia", path: "M800,380 L920,380 L920,480 L800,480 Z" },
  "NZ": { name: "New Zealand", path: "M940,440 L960,440 L960,500 L940,500 Z" },
  "GL": { name: "Greenland", path: "M350,20 L450,20 L450,60 L350,60 Z" },
  "IS": { name: "Iceland", path: "M430,60 L450,60 L450,80 L430,80 Z" },
  "AE": { name: "UAE", path: "M650,230 L670,230 L670,250 L650,250 Z" },
  "SG": { name: "Singapore", path: "M840,320 L850,320 L850,330 L840,330 Z" },
  "TH": { name: "Thailand", path: "M800,240 L830,240 L830,280 L800,280 Z" },
  "VN": { name: "Vietnam", path: "M830,240 L850,240 L850,300 L830,300 Z" },
  "PH": { name: "Philippines", path: "M880,250 L910,250 L910,300 L880,300 Z" },
};

export default function Map() {
  const navigate = useNavigate();
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const adventureCountries = useMemo(() => {
    const countryMap: Record<string, string> = {
      'Italy': 'IT', 'France': 'FR', 'United Kingdom': 'GB', 'Spain': 'ES',
      'Netherlands': 'NL', 'Sweden': 'SE', 'Czech Republic': 'CZ', 'Greece': 'GR',
      'Germany': 'DE', 'Austria': 'AT', 'Portugal': 'PT', 'Ireland': 'IE',
      'Hungary': 'HU', 'Denmark': 'DK', 'Norway': 'NO', 'Finland': 'FI',
      'Iceland': 'IS', 'Turkey': 'TR', 'Russia': 'RU', 'USA': 'US',
      'Canada': 'CA', 'Brazil': 'BR', 'Mexico': 'MX', 'Peru': 'PE',
      'Japan': 'JP', 'Indonesia': 'ID', 'Australia': 'AU', 'New Zealand': 'NZ',
      'Singapore': 'SG', 'South Korea': 'KR', 'China': 'CN', 'India': 'IN', 'UAE': 'AE'
    };

    const adventureSet = new Set<string>();
    BOOKS.forEach(book => {
      const iso = countryMap[book.country];
      if (iso) adventureSet.add(iso);
    });
    return adventureSet;
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleCountryClick = (iso: string) => {
    const book = BOOKS.find(b => {
      const countryMap: Record<string, string> = {
        'Italy': 'IT', 'France': 'FR', 'United Kingdom': 'GB', 'Spain': 'ES',
        'Netherlands': 'NL', 'Sweden': 'SE', 'Czech Republic': 'CZ', 'Greece': 'GR',
        'Germany': 'DE', 'Austria': 'AT', 'Portugal': 'PT', 'Ireland': 'IE',
        'Hungary': 'HU', 'Denmark': 'DK', 'Norway': 'NO', 'Finland': 'FI',
        'Iceland': 'IS', 'Turkey': 'TR', 'Russia': 'RU', 'USA': 'US',
        'Canada': 'CA', 'Brazil': 'BR', 'Mexico': 'MX', 'Peru': 'PE',
        'Japan': 'JP', 'Indonesia': 'ID', 'Australia': 'AU', 'New Zealand': 'NZ',
        'Singapore': 'SG', 'South Korea': 'KR', 'China': 'CN', 'India': 'IN', 'UAE': 'AE'
      };
      return countryMap[b.country] === iso;
    });

    if (book) {
      navigate(`/books/${book.slug}`);
    }
  };

  return (
    <div className="relative w-full bg-[#162447] rounded-[2rem] p-4 md:p-8 shadow-2xl border border-white/10 overflow-hidden" onMouseMove={handleMouseMove}>
      <svg
        viewBox="0 0 1000 500"
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        <rect width="1000" height="500" fill="#162447" />
        {Object.entries(COUNTRY_PATHS).map(([iso, data]) => {
          const hasAdventure = adventureCountries.has(iso);
          const isHovered = hoveredCountry === iso;

          return (
            <path
              key={iso}
              d={data.path}
              fill={isHovered ? "#FACC15" : (hasAdventure ? "#3E5F9E" : "#2E4A7D")}
              stroke="#162447"
              strokeWidth="0.5"
              className="transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredCountry(iso)}
              onMouseLeave={() => setHoveredCountry(null)}
              onClick={() => handleCountryClick(iso)}
            />
          );
        })}
      </svg>

      <AnimatePresence>
        {hoveredCountry && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed z-50 pointer-events-none bg-white px-4 py-2 rounded-xl shadow-2xl border border-slate-100"
            style={{ left: mousePos.x + 20, top: mousePos.y - 40 }}
          >
            <p className="font-bold text-slate-900">{COUNTRY_PATHS[hoveredCountry].name}</p>
            {adventureCountries.has(hoveredCountry) && (
              <p className="text-xs text-blue-600 font-bold uppercase tracking-wider">Adventure Available!</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-6 flex flex-wrap justify-center gap-6 text-[10px] font-bold uppercase tracking-widest">
        <div className="flex items-center gap-2 text-slate-400">
          <div className="w-2.5 h-2.5 rounded-full bg-[#3E5F9E]" />
          <span>Adventure Country</span>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <div className="w-2.5 h-2.5 rounded-full bg-[#2E4A7D]" />
          <span>Other Countries</span>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FACC15]" />
          <span>Selected</span>
        </div>
      </div>
    </div>
  );
}
