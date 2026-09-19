import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Compass, Layers, MapPin, Calendar, Maximize2, Clock, CheckCircle } from "lucide-react";
import { projects } from "@/data/projects";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-28 pb-24 space-y-16">
      {/* Top Breadcrumb & Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#71717A] hover:text-[#18181B] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Works</span>
        </Link>
      </div>

      {/* Project Header Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 bg-[#18181B] text-white text-[11px] uppercase tracking-wider font-medium rounded-xs">
            {project.category}
          </span>
          <span className="text-xs text-[#71717A] flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#A3704C]" />
            {project.location}
          </span>
          <span className="text-xs text-[#71717A] flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-[#A3704C]" />
            Completed {project.year}
          </span>
        </div>

        <h1 className="font-serif-luxury text-4xl sm:text-6xl text-[#18181B] font-semibold max-w-4xl leading-tight">
          {project.title}
        </h1>

        <p className="text-base sm:text-xl text-[#71717A] font-light max-w-3xl leading-relaxed">
          {project.tagline}
        </p>

        {/* Project Meta Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-white border border-[#E5DFD5] rounded-xs text-xs">
          <div>
            <span className="text-[#A1A1AA] uppercase tracking-wider block text-[10px]">Built-Up Area</span>
            <strong className="text-sm font-semibold text-[#18181B] font-serif-luxury">{project.area}</strong>
          </div>
          <div>
            <span className="text-[#A1A1AA] uppercase tracking-wider block text-[10px]">Project Duration</span>
            <strong className="text-sm font-semibold text-[#18181B] font-serif-luxury">{project.duration}</strong>
          </div>
          <div>
            <span className="text-[#A1A1AA] uppercase tracking-wider block text-[10px]">Location</span>
            <strong className="text-sm font-semibold text-[#18181B] font-serif-luxury">{project.location}</strong>
          </div>
          <div>
            <span className="text-[#A1A1AA] uppercase tracking-wider block text-[10px]">Studio Scope</span>
            <strong className="text-sm font-semibold text-[#18181B] font-serif-luxury">Architecture & Interior</strong>
          </div>
        </div>
      </div>

      {/* Hero Cover Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-16/9 w-full overflow-hidden rounded-xs bg-[#E5DFD5] shadow-md">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Narrative Section: Challenge & Solution */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] text-[#A3704C] font-semibold">
            Spatial Narrative
          </span>
          <h2 className="font-serif-luxury text-3xl font-semibold text-[#18181B]">
            The Design Concept
          </h2>
          <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
            {project.overview}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="p-6 bg-white border border-[#E5DFD5] rounded-xs space-y-3">
            <h3 className="font-serif-luxury text-xl font-semibold text-[#18181B]">
              The Challenge & Site Constraints
            </h3>
            <p className="text-xs text-[#71717A] leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="p-6 bg-white border border-[#E5DFD5] rounded-xs space-y-3">
            <h3 className="font-serif-luxury text-xl font-semibold text-[#18181B]">
              The Architectural Solution
            </h3>
            <p className="text-xs text-[#71717A] leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>
      </div>

      {/* BEFORE & AFTER TRANSFORMATION SLIDER (If available) */}
      {project.beforeImage && project.afterImage && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#A3704C] font-semibold">
              Site Transformation
            </span>
            <h2 className="font-serif-luxury text-3xl font-semibold text-[#18181B]">
              Bare Shell to Architectural Reality
            </h2>
            <p className="text-xs text-[#71717A]">
              Drag the interactive slider to view the transformation from raw construction to finished bespoke space.
            </p>
          </div>

          <BeforeAfterSlider
            beforeImage={project.beforeImage}
            afterImage={project.afterImage}
            beforeLabel="Pre-Construction / Concept"
            afterLabel="Completed Architecture"
          />
        </div>
      )}

      {/* BLUEPRINTS & SCHEMATICS VIEWER */}
      {project.drawings && project.drawings.length > 0 && (
        <div className="bg-[#18181B] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] text-[#C18C5D] font-semibold">
                Technical Rigor
              </span>
              <h2 className="font-serif-luxury text-3xl font-semibold text-white">
                Schematics & Circulation Drawings
              </h2>
              <p className="text-xs text-[#A1A1AA] max-w-xl">
                Every project is anchored in precision spatial modeling, microclimate orientation, and structural calculations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.drawings.map((drawing) => (
                <div key={drawing.title} className="space-y-3 bg-[#222327] p-4 rounded-xs border border-[#33343A]">
                  <div className="relative aspect-16/10 w-full overflow-hidden rounded-xs bg-black/40">
                    <Image
                      src={drawing.imageUrl}
                      alt={drawing.title}
                      fill
                      className="object-cover filter contrast-125"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif-luxury text-base font-semibold text-white">
                      {drawing.title}
                    </h3>
                    <p className="text-xs text-[#A1A1AA] mt-1">
                      {drawing.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MATERIALITY & SPECIFICATION PALETTE */}
      {project.materials && project.materials.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#A3704C] font-semibold">
              Tactile Palette
            </span>
            <h2 className="font-serif-luxury text-3xl font-semibold text-[#18181B]">
              Materials & Textures
            </h2>
            <p className="text-xs text-[#71717A]">
              Authentic materials specified for enduring durability and sensory warmth.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {project.materials.map((mat) => (
              <div key={mat.name} className="p-4 bg-white border border-[#E5DFD5] rounded-xs space-y-3">
                <div className="relative aspect-square w-full overflow-hidden rounded-xs bg-[#E5DFD5]">
                  <Image
                    src={mat.textureUrl}
                    alt={mat.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#A3704C] font-semibold block">
                    {mat.category}
                  </span>
                  <p className="text-xs font-semibold text-[#18181B] mt-0.5">
                    {mat.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FULL PHOTO GALLERY */}
      {project.galleryImages && project.galleryImages.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#A3704C] font-semibold">
              Visual Documentation
            </span>
            <h2 className="font-serif-luxury text-3xl font-semibold text-[#18181B]">
              Project Gallery
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.galleryImages.map((imgUrl, idx) => (
              <div
                key={idx}
                className="relative aspect-4/3 w-full overflow-hidden rounded-xs bg-[#E5DFD5] shadow-xs"
              >
                <Image
                  src={imgUrl}
                  alt={`${project.title} gallery detail ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CLIENT TESTIMONIAL */}
      {project.testimonial && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A3704C] font-semibold">
            Client Words
          </span>
          <blockquote className="font-serif-luxury text-2xl sm:text-3xl text-[#18181B] font-light italic mt-4 leading-relaxed">
            &ldquo;{project.testimonial.quote}&rdquo;
          </blockquote>
          <div className="mt-4 text-xs uppercase tracking-wider text-[#71717A]">
            <strong className="text-[#18181B] font-medium">{project.testimonial.client}</strong>
            <span className="mx-2">•</span>
            <span>{project.testimonial.role}</span>
          </div>
        </div>
      )}

      {/* CONTEXTUAL CALL TO ACTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 bg-[#F4EFE6] border border-[#E5DFD5] rounded-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-[#18181B]">
              Inspired by {project.title}?
            </h3>
            <p className="text-xs sm:text-sm text-[#71717A] max-w-lg">
              Discuss your plot or upcoming interior commission directly with our Principal Architects.
            </p>
          </div>
          <Link
            href={`/contact?inspiredBy=${encodeURIComponent(project.title)}`}
            className="px-6 py-3.5 bg-[#18181B] hover:bg-[#A3704C] text-white text-xs uppercase tracking-widest font-semibold rounded-xs transition-colors flex items-center gap-2 whitespace-nowrap shadow-md"
          >
            <span>Inquire About This Style</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
