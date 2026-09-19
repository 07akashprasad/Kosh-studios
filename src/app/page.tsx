import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, ShieldCheck, Compass, Sparkles, SlidersHorizontal, Award, Layers } from "lucide-react";
import { projects, studioStats } from "@/data/projects";
import ProjectEstimator from "@/components/ProjectEstimator";

export default function Home() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Ambient Imagery */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
            alt="Kosh Studios Architectural Masterpiece"
            fill
            className="object-cover filter brightness-[0.4] scale-105 transition-transform duration-1000 ease-out"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141518] via-transparent to-black/40" />
        </div>

        <div className="max-w-5xl mx-auto text-center text-white space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs uppercase tracking-[0.25em] text-[#E8DED0]">
            <Sparkles className="w-3.5 h-3.5 text-[#C18C5D]" />
            <span>Architecture • Interior Architecture • Turnkey Execution</span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.08] text-[#FAF8F5]">
            Spaces of Quiet Permanence & Tactile Luxury
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#D4D4D8] font-light leading-relaxed">
            We orchestrate light, raw natural materials, and context to craft bespoke residences,
            luxury penthouses, and commercial sanctuaries across India and beyond.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-[#A3704C] hover:bg-[#8D5E3C] text-white text-xs uppercase tracking-[0.2em] font-medium rounded-xs transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
            >
              <span>Consult Our Architects</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              href="/projects"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/25 text-xs uppercase tracking-[0.2em] font-medium rounded-xs transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Explore Selected Works</span>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-2 text-[10px] uppercase tracking-widest">
          <span>Scroll To Discover</span>
          <div className="w-px h-8 bg-white/40 animate-pulse" />
        </div>
      </section>

      {/* METRICS & ACCREDITATION BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#18181B] text-white p-8 sm:p-12 rounded-xs border border-[#27272A] shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#2E3036]">
            {studioStats.map((stat, idx) => (
              <div key={stat.label} className={`pt-4 md:pt-0 ${idx !== 0 ? "md:pl-8" : ""}`}>
                <div className="font-serif-luxury text-3xl sm:text-5xl font-semibold text-[#C18C5D]">
                  {stat.value}
                </div>
                <p className="text-xs uppercase tracking-wider text-[#A1A1AA] mt-2 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E5DFD5] pb-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#A3704C] font-semibold">
              Selected Works
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#18181B] font-semibold mt-1">
              Curated Architectural Portfolio
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#18181B] hover:text-[#A3704C] transition-colors"
          >
            <span>View All Works ({projects.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group block space-y-4"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-xs bg-[#E5DFD5]">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#18181B]/80 backdrop-blur-xs text-white text-[11px] uppercase tracking-wider font-medium rounded-xs">
                  {project.category}
                </div>
                <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2.5 rounded-full bg-white text-[#18181B] shadow-lg">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs text-[#71717A] tracking-wider uppercase">
                  <span>{project.location}</span>
                  <span>{project.area} • {project.year}</span>
                </div>
                <h3 className="font-serif-luxury text-2xl font-semibold text-[#18181B] group-hover:text-[#A3704C] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-[#52525B] line-clamp-2 leading-relaxed">
                  {project.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* STUDIO PHILOSOPHY / 3 CORE PILLARS */}
      <section className="bg-[#F4EFE6] py-20 sm:py-28 border-y border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A3704C] font-semibold">
              The Kosh Philosophy
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#18181B] font-semibold leading-tight">
              Architecture that endures beyond fleeting trends
            </h2>
            <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
              We reject sterile modernism and superficial ornament. Every line we draw is informed
              by site microclimates, thermal orientation, honest materials, and spatial dignity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xs border border-[#E5DFD5] space-y-4 shadow-2xs">
              <div className="w-12 h-12 rounded-xs bg-[#FAF8F5] border border-[#E5DFD5] flex items-center justify-center text-[#A3704C]">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury text-xl font-semibold text-[#18181B]">
                1. Tectonic & Material Honesty
              </h3>
              <p className="text-xs text-[#71717A] leading-relaxed">
                We celebrate materials that age with grace — raw lime plaster, seasoned teak,
                hand-dressed sandstone, and architectural concrete that develop a noble patina over decades.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xs border border-[#E5DFD5] space-y-4 shadow-2xs">
              <div className="w-12 h-12 rounded-xs bg-[#FAF8F5] border border-[#E5DFD5] flex items-center justify-center text-[#A3704C]">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury text-xl font-semibold text-[#18181B]">
                2. Passive Microclimate Control
              </h3>
              <p className="text-xs text-[#71717A] leading-relaxed">
                By orienting courtyards, deep verandas, and thermal mass walls, our structures
                maintain natural coolness and cross-breezes, drastically cutting energy dependency.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xs border border-[#E5DFD5] space-y-4 shadow-2xs">
              <div className="w-12 h-12 rounded-xs bg-[#FAF8F5] border border-[#E5DFD5] flex items-center justify-center text-[#A3704C]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury text-xl font-semibold text-[#18181B]">
                3. Turnkey Spatial Precision
              </h3>
              <p className="text-xs text-[#71717A] leading-relaxed">
                We supervise every millimeter from municipal sanction drawings to bespoke millwork,
                insuring zero discrepancy between the 3D renders and final physical reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE ESTIMATOR PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectEstimator />
      </section>

      {/* THE 4-STEP CLIENT JOURNEY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A3704C] font-semibold">
            How We Collaborate
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#18181B] font-semibold">
            From Vision to Handover
          </h2>
          <p className="text-xs sm:text-sm text-[#71717A]">
            A structured, transparent roadmap ensuring your home or space is delivered on schedule and without surprise costs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Discovery & Site Feasibility",
              desc: "Deep-dive interview on how you live, site orientation study, municipal bylaws, and initial budgeting.",
            },
            {
              step: "02",
              title: "Concept & 3D Schematics",
              desc: "Volumetric spatial models, material moodboards, floor plans, and photorealistic virtual walkthroughs.",
            },
            {
              step: "03",
              title: "Engineering & Tendering",
              desc: "Structural, MEP, and lighting engineering drawings paired with precise BOQs for transparent contractor bidding.",
            },
            {
              step: "04",
              title: "On-Site Turnkey Build",
              desc: "Rigorous site audits by lead architects, millwork fabrication, quality benchmarks, and flawless handover.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="p-6 bg-white border border-[#E5DFD5] rounded-xs space-y-3 relative overflow-hidden"
            >
              <span className="font-serif-luxury text-4xl font-light text-[#E5DFD5] block">
                {item.step}
              </span>
              <h3 className="font-serif-luxury text-lg font-semibold text-[#18181B]">
                {item.title}
              </h3>
              <p className="text-xs text-[#71717A] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#18181B] text-white p-10 sm:p-16 rounded-xs relative overflow-hidden text-center space-y-6">
          <div className="absolute inset-0 -z-10 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop"
              alt="Architecture details"
              fill
              className="object-cover"
            />
          </div>

          <span className="text-xs uppercase tracking-[0.25em] text-[#C18C5D] font-semibold">
            Begin Your Spatial Journey
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-light text-[#FAF8F5] max-w-2xl mx-auto leading-tight">
            Ready to design a residence or space that defines a lifetime?
          </h2>
          <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-lg mx-auto leading-relaxed">
            Our Principal Architects are currently reviewing select commissions.
            Share your plot or space parameters for an initial feasibility discussion.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-[#A3704C] hover:bg-[#8D5E3C] text-white text-xs uppercase tracking-[0.2em] font-semibold rounded-xs transition-colors shadow-lg"
            >
              Start Project Questionnaire
            </Link>
            <a
              href="https://wa.me/919820012345"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#24262B] hover:bg-[#2F3238] border border-[#3E424B] text-white text-xs uppercase tracking-[0.2em] font-semibold rounded-xs transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
