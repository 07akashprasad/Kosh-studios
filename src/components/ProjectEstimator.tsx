"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Calculator, CheckCircle2, Sparkles } from "lucide-react";

export default function ProjectEstimator() {
  const [typology, setTypology] = useState<"villa" | "apartment" | "commercial" | "hospitality">("villa");
  const [scope, setScope] = useState<"turnkey" | "architecture" | "interior">("turnkey");
  const [area, setArea] = useState<number>(4500);
  const [tier, setTier] = useState<"premium" | "luxury" | "bespoke">("luxury");

  // Approximate cost per sq.ft brackets in INR
  const costMatrix = {
    turnkey: {
      premium: 4500,
      luxury: 7000,
      bespoke: 10500,
    },
    architecture: {
      premium: 600,
      luxury: 950,
      bespoke: 1400,
    },
    interior: {
      premium: 2800,
      luxury: 4800,
      bespoke: 7500,
    },
  };

  const costPerSqFt = costMatrix[scope][tier];
  const estimatedTotal = area * costPerSqFt;
  const estimatedMin = Math.round(estimatedTotal * 0.9);
  const estimatedMax = Math.round(estimatedTotal * 1.15);

  const formatCurrency = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(val / 100000).toFixed(1)} Lakhs`;
  };

  const estimatedTimeline = {
    villa: "14 - 18 Months",
    apartment: "6 - 9 Months",
    commercial: "5 - 8 Months",
    hospitality: "7 - 10 Months",
  }[typology];

  return (
    <div id="estimator" className="p-6 sm:p-10 bg-white rounded-xs border border-[#E5DFD5] shadow-xs">
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#F4EFE6] text-[#A3704C] text-[11px] font-semibold tracking-widest uppercase mb-3">
          <Calculator className="w-3.5 h-3.5" />
          <span>Interactive Scope & Investment Estimator</span>
        </div>
        <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#18181B] font-semibold">
          Calculate Your Project Scope
        </h3>
        <p className="text-sm text-[#71717A] mt-2">
          Receive an instant ballpark estimate for architectural design and turnkey execution based on your space parameters.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Typology */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#18181B] mb-2.5">
              1. Space Typology
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: "villa", label: "Villa / Estate" },
                { id: "apartment", label: "Penthouse / Apt" },
                { id: "commercial", label: "Commercial" },
                { id: "hospitality", label: "Hospitality" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setTypology(item.id as any)}
                  className={`px-3 py-2 text-xs rounded-xs border text-center transition-all ${
                    typology === item.id
                      ? "border-[#18181B] bg-[#18181B] text-white font-medium shadow-xs"
                      : "border-[#E5DFD5] bg-[#FAF8F5] text-[#52525B] hover:border-[#A3704C]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Scope of Engagement */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#18181B] mb-2.5">
              2. Scope of Engagement
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { id: "turnkey", label: "Architecture + Turnkey Build", sub: "Complete end-to-end" },
                { id: "architecture", label: "Architecture Only", sub: "Concept, schematics & MEP" },
                { id: "interior", label: "Interior Architecture", sub: "Fitout & bespoke styling" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setScope(item.id as any)}
                  className={`p-3 text-left rounded-xs border transition-all ${
                    scope === item.id
                      ? "border-[#A3704C] bg-[#FAF8F5] ring-1 ring-[#A3704C]"
                      : "border-[#E5DFD5] bg-white hover:border-[#D4D4D8]"
                  }`}
                >
                  <p className="text-xs font-semibold text-[#18181B]">{item.label}</p>
                  <p className="text-[10px] text-[#71717A] mt-0.5">{item.sub}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Area Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs uppercase tracking-wider font-semibold text-[#18181B]">
                3. Total Built-Up / Carpet Area
              </label>
              <span className="text-sm font-semibold font-serif-luxury text-[#A3704C]">
                {area.toLocaleString()} sq.ft
              </span>
            </div>
            <input
              type="range"
              min="1000"
              max="15000"
              step="250"
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full accent-[#A3704C] bg-[#E5DFD5] h-1.5 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-[#A1A1AA] mt-1">
              <span>1,000 sq.ft</span>
              <span>8,000 sq.ft</span>
              <span>15,000+ sq.ft</span>
            </div>
          </div>

          {/* Step 4: Finish Tier */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#18181B] mb-2.5">
              4. Specification & Material Grade
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "premium", label: "Premium Architectural", desc: "Engineered timber, natural stone, standard automation" },
                { id: "luxury", label: "Ultra Luxury Curated", desc: "Imported travertine, bespoke brass, Lutron lighting" },
                { id: "bespoke", label: "Masterpiece Atelier", desc: "Rare monolithic marbles, custom cast facades, gallery spec" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setTier(item.id as any)}
                  className={`p-3 text-left rounded-xs border transition-all ${
                    tier === item.id
                      ? "border-[#18181B] bg-[#18181B] text-white"
                      : "border-[#E5DFD5] bg-[#FAF8F5] hover:border-[#A3704C]"
                  }`}
                >
                  <p className="text-xs font-semibold">{item.label}</p>
                  <p className={`text-[10px] mt-1 line-clamp-2 ${tier === item.id ? "text-stone-300" : "text-[#71717A]"}`}>
                    {item.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Card */}
        <div className="lg:col-span-5 bg-[#18181B] text-white p-6 sm:p-8 rounded-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[#2E3036]">
              <span className="text-xs uppercase tracking-widest text-[#A1A1AA]">
                Estimated Investment Bracket
              </span>
              <Sparkles className="w-4 h-4 text-[#C18C5D]" />
            </div>

            <div className="my-6">
              <div className="text-3xl sm:text-4xl font-serif-luxury font-semibold text-[#FAF8F5]">
                {formatCurrency(estimatedMin)} – {formatCurrency(estimatedMax)}
              </div>
              <p className="text-xs text-[#A1A1AA] mt-1">
                Estimated rate: ₹{costPerSqFt.toLocaleString()} / sq.ft (Excludes statutory land fees)
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#2E3036] text-xs text-[#D4D4D8]">
              <div className="flex items-center justify-between">
                <span className="text-[#A1A1AA]">Estimated Timeline:</span>
                <span className="font-medium text-white">{estimatedTimeline}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#A1A1AA]">Principal Architect In-Charge:</span>
                <span className="font-medium text-white">Direct Supervision</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#A1A1AA]">Deliverables:</span>
                <span className="font-medium text-white">Full 3D, BOQ, MEP, On-site Audits</span>
              </div>
            </div>

            <div className="mt-6 p-3 rounded-xs bg-[#24262B] border border-[#33363F] text-[11px] text-[#A1A1AA] space-y-1">
              <div className="flex items-center gap-1.5 text-white font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C18C5D]" />
                <span>Zero Obligation Feasibility Review</span>
              </div>
              <p>
                Our lead architects will analyze your site drawings and prepare a formal line-item breakdown.
              </p>
            </div>
          </div>

          <div className="pt-6">
            <Link
              href={`/contact?typology=${typology}&area=${area}&scope=${scope}&tier=${tier}`}
              className="w-full py-3.5 bg-[#A3704C] hover:bg-[#8D5E3C] text-white text-xs uppercase tracking-widest font-semibold rounded-xs transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <span>Book Feasibility Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
