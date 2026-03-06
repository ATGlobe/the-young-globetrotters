import React from 'react'
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useNavigate } from 'react-router-dom'
import { useProgress } from '../hooks/useProgress'
import { CITIES } from '../data/cities'
import { Trophy, Award } from 'lucide-react'

type Level = "bronze" | "silver" | "gold" | "diamond"

const LEVEL_COLORS: Record<Level, string> = {
  bronze: "#CD7F32",
  silver: "#C0C0C0",
  gold: "#FFD700",
  diamond: "#7DD3FC"
}

const getLevel = (status: 'unvisited' | 'in-progress' | 'completed'): Level => {
  if (status === "completed") return "gold"
  if (status === "in-progress") return "silver"
  return "bronze"
}

const getIcon = (level: Level) => {

  const color = LEVEL_COLORS[level]

  return L.divIcon({
    className: "custom-city-pin",
    html: `
      <div style="
        font-size:22px;
        color:${color};
        filter: drop-shadow(0 0 6px ${color});
        transform: translate(-50%, -50%);
      ">
        ✈️
      </div>
    `,
    iconSize: [30, 30],
    iconAnchor: [15, 15]
  })
}

export default function Mappa() {

  const navigate = useNavigate()
  const { isCityCompleted, isCityInProgress } = useProgress()

  const getCityStatus = (id: string) => {
    if (isCityCompleted(id)) return 'completed'
    if (isCityInProgress(id)) return 'in-progress'
    return 'unvisited'
  }

  return (

    <div className="min-h-screen bg-slate-50">

      {/* HERO */}
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

        {/* MAP */}
        <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden h-[70vh] relative z-10">

          <MapContainer
            center={[20,0]}
            zoom={2}
            scrollWheelZoom={true}
            className="h-full w-full"
          >

            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />

            {CITIES.map((city)=>{

              const status = getCityStatus(city.id)
              const level = getLevel(status)

              return (

                <Marker
                  key={city.id}
                  position={[city.coordinates.lat, city.coordinates.lng]}
                  icon={getIcon(level)}
                  eventHandlers={{
                    click: () => navigate(`/books/${city.id}`)
                  }}
                >

                  <Tooltip direction="top" offset={[0,-10]} opacity={1}>

                    <div className="text-center">

                      <p className="font-black text-slate-900">
                        {city.name}
                      </p>

                      <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">
                        {city.country}
                      </p>

                      {status === "completed" && (
                        <p className="text-[10px] text-yellow-500 font-black mt-1">
                          GOLD BADGE 🥇
                        </p>
                      )}

                      {status === "in-progress" && (
                        <p className="text-[10px] text-gray-500 font-black mt-1">
                          IN PROGRESS 🧭
                        </p>
                      )}

                    </div>

                  </Tooltip>

                </Marker>

              )

            })}

          </MapContainer>

        </div>


        {/* LEGEND */}
        <div className="mt-8 flex flex-wrap justify-center gap-8 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">

          <div className="flex items-center gap-3">
            <div className="text-xl">✈️</div>
            <span className="text-sm font-bold text-slate-700">
              City Destination
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-[#CD7F32]"></div>
            <span className="text-sm font-bold text-slate-700">
              Bronze (not started)
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-[#C0C0C0]"></div>
            <span className="text-sm font-bold text-slate-700">
              Silver (in progress)
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-[#FFD700]"></div>
            <span className="text-sm font-bold text-slate-700">
              Gold (completed)
            </span>
          </div>

        </div>



        {/* PASSPORT PREVIEW */}
        <section className="mt-24 pb-20">

          {/* FOX + BUTTON */}

          <div className="text-center mb-16">

            <img
              src="https://i.ibb.co/prsV4tns/Foxy-blu-palne-removebg-preview.png"
              alt="Axel & Tino Guide"
              className="w-40 mx-auto mb-6"
            />

            <button
              onClick={()=>navigate('/passport')}
              className="px-8 py-4 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-lg mb-10"
            >
              View Full Passport
            </button>

            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Your Journey
            </h2>

            <p className="text-lg text-slate-600 font-medium">
              Track your global achievements and collected badges.
            </p>

          </div>


          {/* ALL CITIES GRID */}

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            {CITIES.map((city)=>{

              const isCompleted = isCityCompleted(city.id)

              return (

                <div
                  key={city.id}
                  className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all group flex flex-col"
                >

                  <div className="flex items-start justify-between mb-6">

                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg ${
                      isCompleted ? "bg-yellow-500" : "bg-blue-500"
                    }`}>

                      {isCompleted ? <Trophy size={24}/> : <Award size={24}/>}

                    </div>

                  </div>

                  <h3 className="text-2xl font-black text-slate-900 mb-1">
                    {city.name}
                  </h3>

                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
                    {city.country}
                  </p>

                  <div className="mt-auto">

                    <button
                      onClick={()=>navigate(`/books/${city.id}`)}
                      className="w-full py-4 font-black rounded-2xl transition-all flex items-center justify-center gap-2 group-hover:shadow-lg bg-slate-50 text-slate-900 hover:bg-blue-600 hover:text-white"
                    >
                      Explore this City
                    </button>

                  </div>

                </div>

              )

            })}

          </div>

        </section>

      </div>

    </div>

  )

}
