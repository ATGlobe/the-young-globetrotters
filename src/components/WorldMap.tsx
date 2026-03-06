import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import { CITIES } from "../data/cities";
import { useProgress } from "../hooks/useProgress";

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
  const { isCityCompleted, isCityInProgress } = useProgress();
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  const project = (lat: number, lng: number) => {
    const x = (lng + 180) * (1000 / 360);
    const y = (90 - lat) * (500 / 180);
    return { x, y };
  };

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
          <rect width="1000" height="500" fill="#162447" />
          {CONTINENTS.map((continent) => (
            <path
              key={continent.id}
              d={continent.path}
              className="transition-all duration-300 ease-in-out hover:fill-[#3E5F9E] hover:scale-[1.01] cursor-pointer origin-center"
              fill="#2E4A7D"
              stroke="none"
            />
          ))}
          {CITIES.map((city) => {
            const { x, y } = project(city.coordinates.lat, city.coordinates.lng);
            const color = TYPE_COLORS.city;
            const isHovered = hoveredCity === city.id;
            const completed = isCityCompleted(city.id);
            const inProgress = isCityInProgress(city.id);

            return (
              <g
                key={city.id}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredCity(city.id)}
                onMouseLeave={() => setHoveredCity(null)}
                onClick={() => navigate(`/books/${city.id}`)}
              >
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
                <motion.circle
                  cx={x}
                  cy={y}
                  r={completed ? 8 : 6}
                  fill={color}
                  stroke={completed ? "#F59E0B" : inProgress ? "#3B82F6" : "white"}
                  strokeWidth={completed ? 3 : 1.5}
                  initial={false}
                  animate={{
                    scale: isHovered ? 1.3 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{
                    filter: isHovered ? `drop-shadow(0 0 8px ${color})` : 'none'
                  }}
                />
                {completed && (
                  <circle
                    cx={x}
                    cy={y}
                    r={2}
                    fill="white"
                    className="pointer-events-none"
                  />
                )}
                {inProgress && !completed && (
                  <circle
                    cx={x}
                    cy={y}
                    r={2}
                    fill="#3B82F6"
                    className="pointer-events-none"
                  />
                )}
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
                        height={32}
                        rx={6}
                        fill="white"
                        className="shadow-xl"
                      />
                      <text
                        x={x}
                        y={y - 24}
                        textAnchor="middle"
                        fill="#0f172a"
                        fontSize="10"
                        fontWeight="bold"
                      >
                        {city.name}
                      </text>
                      <text
                        x={x}
                        y={y - 12}
                        textAnchor="middle"
                        fill={completed ? "#F59E0B" : inProgress ? "#3B82F6" : "#94a3b8"}
                        fontSize="8"
                        fontWeight="black"
                      >
                        {completed ? "⭐ COMPLETED" : inProgress ? "🔄 IN PROGRESS" : "UNVISITED"}
                      </text>
                    </motion.g>
                  )}
                </AnimatePresence>
              </g>
            );
          })}
        </svg>
      </div>
      <div className="mt-6 flex flex-wrap justify-center gap-6 text-[10px] font-bold uppercase tracking-widest">
        <div className="flex items-center gap-2 text-slate-400">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFD600]" />
          <span>Cities</span>
        </div>
        <div className="w-px h-4 bg-white/10" />
        <div className="flex items-center gap-2 text-amber-400">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400 border border-white" />
          <span>Completed ⭐</span>
        </div>
        <div className="flex items-center gap-2 text-blue-400">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-400 border border-white" />
          <span>In Progress 🔄</span>
        </div>
      </div>
    </div>
  );
}

