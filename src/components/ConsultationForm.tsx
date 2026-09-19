"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Calendar,
  Phone,
  MessageSquare,
  Sparkles,
  Building,
  Home,
  Briefcase,
  Coffee,
} from "lucide-react";

export default function ConsultationForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    projectType: "Luxury Villa / Bungalow",
    location: "",
    area: "4,000 - 6,000 sq.ft",
    siteStatus: "Plot Acquired / Ready for Construction",
    budget: "₹2 Cr - ₹5 Cr",
    timeline: "Within 1 - 3 Months",
    name: "",
    phone: "",
    email: "",
    notes: "",
    preferredContact: "WhatsApp",
  });

  const handleSelect = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate instant lead submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 sm:p-12 rounded-xs border border-[#E5DFD5] shadow-xs text-center">
        <div className="w-16 h-16 bg-[#F4EFE6] text-[#A3704C] rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8" />
        </div>
        <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#A3704C]">
          Inquiry Received
        </span>
        <h3 className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-[#18181B] mt-2 mb-4">
          Thank You, {formData.name || "Valued Client"}
        </h3>
        <p className="text-sm text-[#71717A] max-w-md mx-auto leading-relaxed mb-8">
          Your project brief for a <strong>{formData.projectType}</strong> ({formData.area}) has been assigned to our Principal Architect.
          We will review your spatial requirements and contact you via {formData.preferredContact} within 24 hours.
        </p>

        {/* Immediate Next Steps */}
        <div className="pt-6 border-t border-[#E5DFD5] max-w-md mx-auto space-y-3">
          <p className="text-xs uppercase tracking-wider text-[#18181B] font-semibold mb-2">
            Want to speak immediately?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/919128979202"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold rounded-xs hover:bg-[#1EBE5D] transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Direct WhatsApp</span>
            </a>
            <a
              href="tel:+919128979202"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#18181B] text-white text-xs uppercase tracking-wider font-semibold rounded-xs hover:bg-[#A3704C] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Principal</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 sm:p-10 rounded-xs border border-[#E5DFD5] shadow-xs">
      {/* Progress Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs text-[#71717A] mb-2 font-medium">
          <span className="uppercase tracking-widest text-[#A3704C]">
            Step {step} of 4
          </span>
          <span>
            {step === 1 && "Project Typology"}
            {step === 2 && "Scale & Location"}
            {step === 3 && "Budget & Timeline"}
            {step === 4 && "Contact Details"}
          </span>
        </div>
        <div className="w-full bg-[#E5DFD5] h-1 rounded-full overflow-hidden">
          <div
            className="bg-[#A3704C] h-full transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* STEP 1: Typology */}
        {step === 1 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <h3 className="font-serif-luxury text-2xl font-semibold text-[#18181B]">
                What type of project are you planning?
              </h3>
              <p className="text-xs text-[#71717A] mt-1">
                Select the category that best matches your space.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  title: "Luxury Villa / Bungalow",
                  desc: "New ground-up architectural build & landscape",
                  icon: Home,
                },
                {
                  title: "Penthouse / Apartment Interior",
                  desc: "Turnkey interior architecture & bespoke joinery",
                  icon: Building,
                },
                {
                  title: "Commercial & Creative Office",
                  desc: "Design studios, brand headquarters, retail spaces",
                  icon: Briefcase,
                },
                {
                  title: "Hospitality & Dining",
                  desc: "Restaurants, cafes, boutique resort retreats",
                  icon: Coffee,
                },
              ].map((item) => {
                const isSelected = formData.projectType === item.title;
                const Icon = item.icon;
                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => handleSelect("projectType", item.title)}
                    className={`p-4 text-left border rounded-xs transition-all flex items-start gap-3.5 ${
                      isSelected
                        ? "border-[#18181B] bg-[#FAF8F5] ring-1 ring-[#18181B]"
                        : "border-[#E5DFD5] bg-white hover:border-[#A3704C]"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-xs ${
                        isSelected ? "bg-[#18181B] text-white" : "bg-[#F4EFE6] text-[#A3704C]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#18181B]">{item.title}</p>
                      <p className="text-[11px] text-[#71717A] mt-0.5">{item.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 2: Scale & Location */}
        {step === 2 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <h3 className="font-serif-luxury text-2xl font-semibold text-[#18181B]">
                Where is the project located, and what is its scale?
              </h3>
              <p className="text-xs text-[#71717A] mt-1">
                This helps us assign the right regional engineering and design team.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#18181B] mb-2">
                  City / Location
                </label>
                <input
                  type="text"
                  placeholder="e.g. Mumbai, Bangalore, Goa, Hyderabad..."
                  value={formData.location}
                  onChange={(e) => handleSelect("location", e.target.value)}
                  className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E5DFD5] rounded-xs text-xs focus:outline-hidden focus:border-[#A3704C]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#18181B] mb-2">
                  Approximate Built-Up / Carpet Area
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    "Under 2,500 sq.ft",
                    "2,500 - 4,500 sq.ft",
                    "4,500 - 8,000 sq.ft",
                    "8,000+ sq.ft",
                  ].map((area) => (
                    <button
                      key={area}
                      type="button"
                      onClick={() => handleSelect("area", area)}
                      className={`p-2.5 text-xs text-center border rounded-xs transition-all ${
                        formData.area === area
                          ? "border-[#18181B] bg-[#18181B] text-white font-medium"
                          : "border-[#E5DFD5] bg-[#FAF8F5] text-[#52525B] hover:border-[#A3704C]"
                      }`}
                    >
                      {area}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#18181B] mb-2">
                  Current Site Status
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    "Plot Acquired / Ready for Construction",
                    "Existing Bare-Shell Ready for Fitout",
                    "Major Renovation / Structural Remodel",
                  ].map((status) => (
                    <button
                      key={status}
                      type="button"
                      onClick={() => handleSelect("siteStatus", status)}
                      className={`p-3 text-left border rounded-xs text-xs transition-all ${
                        formData.siteStatus === status
                          ? "border-[#A3704C] bg-[#FAF8F5] text-[#18181B] font-medium"
                          : "border-[#E5DFD5] bg-white text-[#71717A] hover:border-[#D4D4D8]"
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Budget & Timeline */}
        {step === 3 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <h3 className="font-serif-luxury text-2xl font-semibold text-[#18181B]">
                Investment Budget & Target Timeline
              </h3>
              <p className="text-xs text-[#71717A] mt-1">
                Ensures we curate the appropriate material specifications and engineering teams.
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#18181B] mb-2">
                  Anticipated Execution Budget (Excluding Land)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    "₹75 Lakhs - ₹1.5 Cr",
                    "₹1.5 Cr - ₹3 Cr",
                    "₹3 Cr - ₹6 Cr",
                    "₹6 Cr+",
                  ].map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => handleSelect("budget", b)}
                      className={`p-3 text-xs text-center border rounded-xs transition-all ${
                        formData.budget === b
                          ? "border-[#18181B] bg-[#18181B] text-white font-medium"
                          : "border-[#E5DFD5] bg-[#FAF8F5] text-[#52525B] hover:border-[#A3704C]"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#18181B] mb-2">
                  When would you like to commence design / work?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    "Immediately (Within 30 Days)",
                    "1 - 3 Months",
                    "3 - 6 Months",
                    "Exploring Concept Only",
                  ].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => handleSelect("timeline", t)}
                      className={`p-3 text-xs text-center border rounded-xs transition-all ${
                        formData.timeline === t
                          ? "border-[#A3704C] bg-[#FAF8F5] text-[#18181B] font-medium"
                          : "border-[#E5DFD5] bg-white text-[#71717A] hover:border-[#D4D4D8]"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: Contact Details */}
        {step === 4 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <h3 className="font-serif-luxury text-2xl font-semibold text-[#18181B]">
                How should our Principal Architect reach you?
              </h3>
              <p className="text-xs text-[#71717A] mt-1">
                We respect your privacy; your details are strictly confidential.
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#18181B] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Singhania"
                    value={formData.name}
                    onChange={(e) => handleSelect("name", e.target.value)}
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E5DFD5] rounded-xs text-xs focus:outline-hidden focus:border-[#A3704C]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#18181B] mb-2">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 91289 XXXXX"
                    value={formData.phone}
                    onChange={(e) => handleSelect("phone", e.target.value)}
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E5DFD5] rounded-xs text-xs focus:outline-hidden focus:border-[#A3704C]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#18181B] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={formData.email}
                  onChange={(e) => handleSelect("email", e.target.value)}
                  className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E5DFD5] rounded-xs text-xs focus:outline-hidden focus:border-[#A3704C]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#18181B] mb-2">
                  Vision, Site Notes, or Pinterest Moodboard Link (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Share any specific wishes (e.g. double-height living room, courtyards, natural stone preference, Google Drive link)..."
                  value={formData.notes}
                  onChange={(e) => handleSelect("notes", e.target.value)}
                  className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E5DFD5] rounded-xs text-xs focus:outline-hidden focus:border-[#A3704C]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#18181B] mb-2">
                  Preferred Contact Medium
                </label>
                <div className="flex gap-4">
                  {["WhatsApp", "Phone Call", "Email"].map((mode) => (
                    <label key={mode} className="flex items-center gap-2 text-xs text-[#52525B] cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        checked={formData.preferredContact === mode}
                        onChange={() => handleSelect("preferredContact", mode)}
                        className="accent-[#A3704C]"
                      />
                      <span>{mode}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-8 mt-6 border-t border-[#E5DFD5]">
          {step > 1 ? (
            <button
              type="button"
              onClick={handlePrev}
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#D4D4D8] text-xs uppercase tracking-wider text-[#52525B] hover:text-[#18181B] rounded-xs transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {step < 4 ? (
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#18181B] text-white hover:bg-[#A3704C] text-xs uppercase tracking-widest font-semibold rounded-xs transition-colors shadow-xs"
            >
              <span>Continue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#A3704C] hover:bg-[#8D5E3C] text-white text-xs uppercase tracking-widest font-semibold rounded-xs transition-colors shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>Submit Project Brief</span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
