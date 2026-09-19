import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Award, CheckCircle2, Compass, Globe, Sparkles } from "lucide-react";
import { teamMembers, studioStats } from "@/data/projects";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs uppercase tracking-[0.25em] text-[#A3704C] font-semibold">
          About Kosh Studios
        </span>
        <h1 className="font-serif-luxury text-4xl sm:text-6xl text-[#18181B] font-semibold">
          A Practice Dedicated to Craft, Context & Calm
        </h1>
        <p className="text-sm sm:text-base text-[#71717A] leading-relaxed">
          Founded in 2017, Kosh Studios is an architectural and interior design atelier
          celebrating the union of structural clarity and sensory warmth.
        </p>
      </div>

      {/* Hero Studio Banner */}
      <div className="relative aspect-21/9 w-full overflow-hidden rounded-xs bg-[#E5DFD5] shadow-md">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
          alt="Kosh Studios Design Workspace"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 text-white max-w-md">
          <p className="text-xs uppercase tracking-widest text-[#E5DFD5]">The Studio Workspace</p>
          <p className="font-serif-luxury text-lg sm:text-xl font-medium mt-0.5">Where physical mockups, timber samples, and light studies take shape.</p>
        </div>
      </div>

      {/* Studio Ethos & Manifesto */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A3704C] font-semibold">
            Our Ethos
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#18181B] font-semibold leading-tight">
            We do not believe in buildings that shout. We design spaces that whisper.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-[#52525B] leading-relaxed font-light">
          <p>
            Architecture in the tropics demands patience and deep contextual respect. We begin every project
            not with a computer screen, but by sitting on the earth — studying the direction of early morning shadows,
            the path of monsoonal winds, and the native trees anchoring the terrain.
          </p>
          <p>
            Whether executing an 8,000 sq.ft coastal estate or an intimate penthouse in Mumbai, our work is characterized
            by generous unprogrammed courtyards, tactile natural stones, and deep timber eaves that shelter living spaces
            from the elements while inviting nature inward.
          </p>
        </div>
      </div>

      {/* Principal Architects & Leadership */}
      <div className="space-y-12">
        <div className="space-y-2 border-b border-[#E5DFD5] pb-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A3704C] font-semibold">
            Leadership
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#18181B] font-semibold">
            The Partners
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="space-y-4 bg-white p-6 rounded-xs border border-[#E5DFD5]">
              <div className="relative aspect-4/5 w-full overflow-hidden rounded-xs bg-[#E5DFD5]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-1.5">
                <span className="text-[10px] uppercase tracking-wider text-[#A3704C] font-semibold block">
                  {member.role}
                </span>
                <h3 className="font-serif-luxury text-xl font-semibold text-[#18181B]">
                  {member.name}
                </h3>
                <p className="text-[11px] text-[#71717A] font-medium">
                  {member.credentials}
                </p>
                <p className="text-xs text-[#52525B] pt-2 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accreditations & Recognitions */}
      <div className="bg-[#18181B] text-white p-8 sm:p-12 rounded-xs space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C18C5D] font-semibold">
            Trust & Credentials
          </span>
          <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white font-semibold">
            Professional Standards & Green Practice
          </h3>
          <p className="text-xs text-[#A1A1AA] leading-relaxed">
            All designs adhere strictly to statutory bylaws and national building codes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#2E3036]">
          <div className="space-y-1.5">
            <Award className="w-5 h-5 text-[#C18C5D] mb-2" />
            <h4 className="text-sm font-semibold text-white">Council of Architecture (COA)</h4>
            <p className="text-xs text-[#A1A1AA]">Statutory regulatory registration guaranteeing legal and ethical architectural compliance.</p>
          </div>
          <div className="space-y-1.5">
            <Globe className="w-5 h-5 text-[#C18C5D] mb-2" />
            <h4 className="text-sm font-semibold text-white">Indian Green Building Council</h4>
            <p className="text-xs text-[#A1A1AA]">IGBC certified sustainable design protocols for energy efficiency and water recycling.</p>
          </div>
          <div className="space-y-1.5">
            <Compass className="w-5 h-5 text-[#C18C5D] mb-2" />
            <h4 className="text-sm font-semibold text-white">Indian Institute of Architects (IIA)</h4>
            <p className="text-xs text-[#A1A1AA]">Fellow members recognized for ongoing excellence in contemporary residential practice.</p>
          </div>
        </div>
      </div>

      {/* Careers & Internships Callout */}
      <div className="p-8 sm:p-10 bg-[#FAF8F5] border border-[#E5DFD5] rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <h4 className="font-serif-luxury text-xl font-semibold text-[#18181B]">
            Join Our Design Studio
          </h4>
          <p className="text-xs text-[#71717A]">
            We are always looking for passionate architects, interior architects, and 3D visualizers.
          </p>
        </div>
        <a
          href="mailto:careers@koshstudios.com"
          className="px-5 py-2.5 bg-[#18181B] text-white hover:bg-[#A3704C] text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors flex items-center gap-2"
        >
          <span>Send Portfolio (careers@koshstudios.com)</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
