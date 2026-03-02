import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { feature } from 'topojson-client';
import { VOLUMES } from '../constants';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, ZoomIn, ZoomOut, RotateCcw, Lock, Star, CheckCircle2 } from 'lucide-react';
import { progressApi } from '../lib/api';
import { useAuthStore } from '../store/authStore';

export default function WorldMap() {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();
  const [userProgress, setUserProgress] = React.useState<any[]>([]);

  useEffect(() => {
    if (isAuthenticated) {
      progressApi.get().then(res => setUserProgress(res.progress));
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = 600;

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', `0 0 ${width} ${height}`)
      .style('background-color', '#bae6fd'); // Soft blue oceans

    svg.selectAll('*').remove();

    // Add shadow filter
    const defs = svg.append('defs');
    const filter = defs.append('filter')
      .attr('id', 'drop-shadow')
      .attr('height', '130%');
    
    filter.append('feOffset')
      .attr('in', 'SourceAlpha')
      .attr('dx', 0)
      .attr('dy', 2)
      .attr('result', 'offOut');
    
    filter.append('feGaussianBlur')
      .attr('in', 'offOut')
      .attr('stdDeviation', 2)
      .attr('result', 'blurOut');
    
    filter.append('feBlend')
      .attr('in', 'SourceGraphic')
      .attr('in2', 'blurOut')
      .attr('mode', 'normal');

    const g = svg.append('g');

    const projection = d3.geoNaturalEarth1()
      .scale(width / 5.5)
      .translate([width / 2, height / 1.8]);

    const path = d3.geoPath().projection(projection);

    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, 8])
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
      });

    svg.call(zoom);

    // Load world data
    d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then((data: any) => {
      const countries = feature(data, data.objects.countries);

      // Draw countries
      g.selectAll('path')
        .data((countries as any).features)
        .enter()
        .append('path')
        .attr('d', path as any)
        .attr('fill', '#f1f5f9') // Light neutral continents
        .attr('stroke', '#cbd5e1') // Clean outlines
        .attr('stroke-width', 0.8)
        .attr('class', 'country hover:fill-blue-50 transition-colors duration-200');

      // Draw points for volumes
      const points = g.selectAll('.city-point')
        .data(VOLUMES)
        .enter()
        .append('g')
        .attr('class', 'city-point')
        .attr('cursor', 'pointer')
        .attr('filter', 'url(#drop-shadow)') // Add drop shadow to markers
        .on('click', (event, d) => {
          navigate(`/volume/${d.id}`);
        });

      points.each(function(d) {
        const progress = userProgress.find(p => p.city === d.city);
        const isMaster = progress?.completed_at;
        const isExplorer = progress?.free_quiz_completed;
        
        const group = d3.select(this);
        
        // Color based on state
        let color = '#94a3b8'; // Locked (Gray)
        if (isMaster) color = '#fbbf24'; // Master (Gold)
        else if (isExplorer) color = '#2563eb'; // Explorer (Blue)

        group.append('circle')
          .attr('cx', projection(d.coordinates)![0])
          .attr('cy', projection(d.coordinates)![1])
          .attr('r', isMaster ? 10 : 7)
          .attr('fill', color)
          .attr('stroke', '#ffffff')
          .attr('stroke-width', 2)
          .attr('class', (isMaster || isExplorer) ? 'animate-pulse' : '');

        if (isMaster) {
          group.append('text')
            .attr('x', projection(d.coordinates)![0])
            .attr('y', projection(d.coordinates)![1] + 4)
            .attr('text-anchor', 'middle')
            .attr('font-size', '8px')
            .attr('fill', '#ffffff')
            .attr('font-weight', 'bold')
            .text('★');
        }
      });

      points.append('text')
        .attr('x', d => projection(d.coordinates)![0])
        .attr('y', d => projection(d.coordinates)![1] - 15)
        .attr('text-anchor', 'middle')
        .attr('font-size', '10px')
        .attr('font-weight', 'bold')
        .attr('fill', '#1e293b')
        .text(d => d.city);
    });

    // Zoom controls
    const handleZoomIn = () => svg.transition().call(zoom.scaleBy, 1.5);
    const handleZoomOut = () => svg.transition().call(zoom.scaleBy, 0.75);
    const handleReset = () => svg.transition().call(zoom.transform, d3.zoomIdentity);

    (window as any).zoomIn = handleZoomIn;
    (window as any).zoomOut = handleZoomOut;
    (window as any).resetZoom = handleReset;

  }, [navigate]);

  return (
    <div className="relative bg-blue-50/30 rounded-[48px] border border-blue-100 overflow-hidden" ref={containerRef}>
      <svg ref={svgRef} className="w-full h-full" />
      
      {/* Controls */}
      <div className="absolute bottom-8 right-8 flex flex-col gap-2">
        <button onClick={() => (window as any).zoomIn()} className="p-3 bg-white rounded-xl shadow-lg hover:bg-blue-50 text-blue-600 transition-all">
          <ZoomIn className="w-5 h-5" />
        </button>
        <button onClick={() => (window as any).zoomOut()} className="p-3 bg-white rounded-xl shadow-lg hover:bg-blue-50 text-blue-600 transition-all">
          <ZoomOut className="w-5 h-5" />
        </button>
        <button onClick={() => (window as any).resetZoom()} className="p-3 bg-white rounded-xl shadow-lg hover:bg-blue-50 text-blue-600 transition-all">
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>

      {/* Legend */}
      <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-blue-100 shadow-xl space-y-3">
        <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Map Legend</h4>
        <div className="flex items-center gap-3 text-xs font-bold text-slate-700">
          <div className="w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center text-[8px] text-white">★</div>
          Master Explorer
        </div>
        <div className="flex items-center gap-3 text-xs font-bold text-slate-700">
          <div className="w-4 h-4 bg-blue-600 rounded-full animate-pulse" />
          Free Explorer
        </div>
        <div className="flex items-center gap-3 text-xs font-bold text-slate-700">
          <div className="w-4 h-4 bg-slate-400 rounded-full" />
          Locked City
        </div>
      </div>
    </div>
  );
}
