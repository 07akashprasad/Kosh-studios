"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Search, SlidersHorizontal } from "lucide-react";
import { projects } from "@/data/projects";

const categories = ["All", "Residential", "Interior Design", "Commercial", "Hospitality"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs uppercase tracking-[0.25em] text-[#A3704C] font-semibold">
          Architectural Portfolio
        </span>
        <h1 className="font-serif-luxury text-4xl sm:text-6xl text-[#18181B] font-semibold">
          Selected Works & Case Studies
        </h1>
        <p className="text-sm sm:text-base text-[#71717A] leading-relaxed">
          Explore our collection of built residences, curated penthouses, adaptive commercial workspaces,
          and hospitality destinations across India.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-6 border-b border-[#E5DFD5]">
        {/* Category Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-wider rounded-xs whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-[#18181B] text-white font-medium"
                  : "bg-[#F4EFE6] text-[#52525B] hover:bg-[#E5DFD5] hover:text-[#18181B]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-[#A1A1AA] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by city, project..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-white border border-[#E5DFD5] rounded-xs text-xs focus:outline-hidden focus:border-[#A3704C]"
          />
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group block space-y-4 bg-white p-4 rounded-xs border border-[#E5DFD5] hover:border-[#A3704C] transition-all duration-300 shadow-2xs hover:shadow-md"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-xs bg-[#E5DFD5]">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-[#18181B]/80 backdrop-blur-xs text-white text-[10px] uppercase tracking-wider font-medium rounded-xs">
                  {project.category}
                </div>
                <div className="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-full bg-white text-[#18181B] shadow-md">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px] text-[#71717A] tracking-wider uppercase">
                  <span>{project.location}</span>
                  <span>{project.area} • {project.year}</span>
                </div>
                <h3 className="font-serif-luxury text-xl font-semibold text-[#18181B] group-hover:text-[#A3704C] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-[#52525B] line-clamp-2 leading-relaxed">
                  {project.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white border border-[#E5DFD5] rounded-xs space-y-3">
          <p className="font-serif-luxury text-xl text-[#18181B]">No matching projects found</p>
          <p className="text-xs text-[#71717A]">Try adjusting your search criteria or category filter.</p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="px-4 py-2 bg-[#18181B] text-white text-xs uppercase tracking-wider rounded-xs mt-2"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
