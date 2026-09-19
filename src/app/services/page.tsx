import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Compass, Layers, ShieldCheck, Sparkles, HelpCircle, HardHat, PenTool, Hammer } from "lucide-react";
import ProjectEstimator from "@/components/ProjectEstimator";

const servicesList = [
  {
    id: "architecture",
    title: "Ground-Up Architectural Planning",
    tagline: "Climate-responsive, structurally honest architecture designed for permanence.",
    icon: Compass,
    scope: [
      "Site topography, solar-path & wind-tunnel microclimate analysis",
      "Conceptual spatial planning, floor plans, sections & 3D massing",
      "Structural, civil & MEP (Mechanical, Electrical, Plumbing) engineering",
      "Statutory municipal sanction liaising and code compliance",
      "Comprehensive Tender documentation and Contractor BOQs",
    ],
  },
  {
    id: "interiors",
    title: "Interior Architecture & Bespoke Styling",
    tagline: "Sensory spatial curation blending tactile materiality with custom joinery.",
    icon: PenTool,
    scope: [
      "Spatial re-zoning, partition removal & circulation optimization",
      "Custom millwork, bespoke timber cabinetry & architectural joinery",
      "Lighting design (Museum grade 98+ CRI, circadian rhythm integration)",
      "Material palette curation: Honed marbles, raw plasters, aged metals",
      "Soft furnishings, bespoke loose furniture, and art consultation",
    ],
  },
  {
    id: "turnkey",
    title: "Turnkey Execution & Site Contracting",
    tagline: "Single-point studio accountability from demolition to final handover.",
    icon: HardHat,
    scope: [
      "Dedicated On-Site Project Engineer and Lead Architect audits",
      "Material procurement directly from verified stone quarries and sawmills",
      "Meticulous budget tracking and zero hidden milestone escalation",
      "Stringent quality testing for waterproofing, acoustics & finishes",
      "Defect-liability period and post-handover facility manuals",
    ],
  },
  {
    id: "renovation",
    title: "Adaptive Reuse & Structural Remodeling",
    tagline: "Breathe enduring modern vitality into heritage bungalows and older apartments.",
    icon: Hammer,
    scope: [
      "Non-destructive structural integrity and load-bearing testing",
      "Re-engineering outdated plumbing, electrical grids & HVAC ducts",
      "Restoration of historic timber rafters, laterite stone, or cornices",
      "Double-height volume creation and courtyard insertions",
    ],
  },
];

const faqs = [
  {
    q: "How does Kosh Studios structure architectural and interior design fees?",
    a: "We operate on a transparent, milestone-based percentage of estimated project value or a fixed per-square-foot architectural fee. For turnkey commissions, we provide itemized Bill of Quantities (BOQ) with zero hidden markups.",
  },
  {
    q: "What is the typical minimum project scale you accept?",
    a: "Our studio focuses on high-touch, bespoke commissions. We typically accept residential projects above 2,500 sq.ft and commercial/hospitality projects above 3,000 sq.ft to ensure our principal architects can devote intensive personal supervision.",
  },
  {
    q: "Do you execute projects outside Mumbai and Bangalore?",
    a: "Yes. While our primary design studios are in Mumbai and Bangalore, we have completed bespoke residences in Goa, Alibaug, Hyderabad, Pune, and New Delhi. For outstation projects, we deploy senior resident project engineers for continuous quality control.",
  },
  {
    q: "Can clients hire Kosh Studios for Design-Only without Turnkey Construction?",
    a: "Absolutely. We offer complete Architectural & Interior Design consultancy where we provide all working drawings, 3D renders, and contractor tenders, followed by periodic scheduled site audits to ensure your chosen contractor executes precisely to spec.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs uppercase tracking-[0.25em] text-[#A3704C] font-semibold">
          Studio Capabilities
        </span>
        <h1 className="font-serif-luxury text-4xl sm:text-6xl text-[#18181B] font-semibold">
          End-to-End Architectural & Interior Scope
        </h1>
        <p className="text-sm sm:text-base text-[#71717A] leading-relaxed">
          Whether constructing an expansive coastal estate from the ground up or completely
          reimagining a luxury city penthouse, we offer rigorous design leadership paired with turnkey execution.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {servicesList.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="bg-white p-8 rounded-xs border border-[#E5DFD5] space-y-6 shadow-xs hover:border-[#A3704C] transition-colors"
            >
              <div className="w-12 h-12 rounded-xs bg-[#FAF8F5] border border-[#E5DFD5] flex items-center justify-center text-[#A3704C]">
                <Icon className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif-luxury text-2xl font-semibold text-[#18181B]">
                  {service.title}
                </h3>
                <p className="text-xs text-[#71717A] leading-relaxed">
                  {service.tagline}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5DFD5] space-y-2.5">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#18181B] block">
                  Key Deliverables
                </span>
                <ul className="space-y-2">
                  {service.scope.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#52525B]">
                      <CheckCircle2 className="w-4 h-4 text-[#A3704C] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* ESTIMATOR SECTION */}
      <section className="space-y-4">
        <ProjectEstimator />
      </section>

      {/* FAQS SECTION */}
      <section className="space-y-8 max-w-4xl mx-auto">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A3704C] font-semibold">
            Common Inquiries
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-semibold text-[#18181B]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-[#E5DFD5] rounded-xs space-y-2"
            >
              <h3 className="text-sm sm:text-base font-semibold text-[#18181B] flex items-start gap-2.5">
                <HelpCircle className="w-4 h-4 text-[#A3704C] shrink-0 mt-1" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#71717A] pl-6.5 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="p-8 sm:p-12 bg-[#18181B] text-white rounded-xs flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-white">
            Have a project with custom parameters?
          </h3>
          <p className="text-xs sm:text-sm text-[#A1A1AA]">
            Schedule a 20-minute discovery call with our partners to discuss your site or floor plan.
          </p>
        </div>
        <Link
          href="/contact"
          className="px-6 py-3.5 bg-[#A3704C] hover:bg-[#8D5E3C] text-white text-xs uppercase tracking-widest font-semibold rounded-xs transition-colors flex items-center gap-2 whitespace-nowrap shadow-md"
        >
          <span>Schedule Initial Call</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
