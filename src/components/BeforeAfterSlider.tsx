"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Bare Shell / Concept",
  afterLabel = "Completed Space",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      let position = (x / rect.width) * 100;
      if (position < 0) position = 0;
      if (position > 100) position = 100;
      setSliderPosition(position);
    },
    []
  );

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-16/10 sm:aspect-16/9 overflow-hidden rounded-xs select-none shadow-md cursor-ew-resize bg-[#18181B]"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Full background) */}
      <div className="absolute inset-0">
        <Image
          src={afterImage}
          alt={afterLabel}
          fill
          className="object-cover"
          sizes="(max-width: 1200px) 100vw, 1200px"
          priority
        />
        <span className="absolute top-4 right-4 z-10 px-2.5 py-1 text-[11px] font-medium tracking-widest uppercase bg-[#18181B]/80 text-white backdrop-blur-xs rounded-xs">
          {afterLabel}
        </span>
      </div>

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <div className="relative w-full h-full" style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : "100%" }}>
          <Image
            src={beforeImage}
            alt={beforeLabel}
            fill
            className="object-cover filter contrast-105"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>
        <span className="absolute top-4 left-4 z-10 px-2.5 py-1 text-[11px] font-medium tracking-widest uppercase bg-[#18181B]/80 text-white backdrop-blur-xs rounded-xs">
          {beforeLabel}
        </span>
      </div>

      {/* Slider Divider Line & Handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white z-20 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-[#18181B] shadow-xl flex items-center justify-center border border-black/10">
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
            <polyline points="9 18 3 12 9 6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
