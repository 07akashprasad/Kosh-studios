import { MapPin, Phone, Mail, Clock, MessageSquare, Calendar, Sparkles, ArrowUpRight } from "lucide-react";
import ConsultationForm from "@/components/ConsultationForm";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs uppercase tracking-[0.25em] text-[#A3704C] font-semibold">
          Initiate Collaboration
        </span>
        <h1 className="font-serif-luxury text-4xl sm:text-6xl text-[#18181B] font-semibold">
          Connect With Our Architects
        </h1>
        <p className="text-sm sm:text-base text-[#71717A] leading-relaxed">
          We welcome residential, interior, and commercial commissions. Complete the project questionnaire
          below for a formal feasibility evaluation, or reach out via direct phone or WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Multi-Step Consultation Questionnaire */}
        <div className="lg:col-span-7">
          <ConsultationForm />
        </div>

        {/* Right Column: Alternative Direct Channels & Studio Visits */}
        <div className="lg:col-span-5 space-y-8">
          {/* Quick Connect Card */}
          <div className="bg-[#18181B] text-white p-6 sm:p-8 rounded-xs space-y-6">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#C18C5D] font-semibold">
                Direct Channels
              </span>
              <h3 className="font-serif-luxury text-2xl font-semibold text-white">
                Immediate Studio Access
              </h3>
            </div>

            <div className="space-y-4 pt-2">
              <a
                href="https://wa.me/919128979202?text=Hello%20Kosh%20Studios%2C%20I%20would%20like%20to%20discuss%20a%20new%20architectural%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xs bg-[#24262B] hover:bg-[#2F3238] border border-[#3E424B] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xs bg-emerald-500/20 text-emerald-400">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-xs font-semibold text-white block">WhatsApp Lead Concierge</strong>
                    <span className="text-[11px] text-[#A1A1AA]">Average reply within 15 mins</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#A1A1AA]" />
              </a>

              <a
                href="tel:+919128979202"
                className="flex items-center justify-between p-3.5 rounded-xs bg-[#24262B] hover:bg-[#2F3238] border border-[#3E424B] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xs bg-[#A3704C]/20 text-[#C18C5D]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-xs font-semibold text-white block">Direct Studio Telephone</strong>
                    <span className="text-[11px] text-[#A1A1AA]">+91 91289 79202</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#A1A1AA]" />
              </a>

              <a
                href="mailto:hello@koshstudios.com"
                className="flex items-center justify-between p-3.5 rounded-xs bg-[#24262B] hover:bg-[#2F3238] border border-[#3E424B] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xs bg-sky-500/20 text-sky-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-xs font-semibold text-white block">Formal Proposal Inquiries</strong>
                    <span className="text-[11px] text-[#A1A1AA]">hello@koshstudios.com</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#A1A1AA]" />
              </a>
            </div>

            <div className="pt-4 border-t border-[#2E3036] text-[11px] text-[#A1A1AA] space-y-1">
              <p className="text-white font-medium">Studio Consultation Hours:</p>
              <p>Monday – Saturday: 10:00 AM – 7:00 PM IST</p>
              <p>Site visits across India scheduled by prior appointment.</p>
            </div>
          </div>

          {/* Physical Studio Locations */}
          <div className="bg-white p-6 sm:p-8 rounded-xs border border-[#E5DFD5] space-y-6">
            <h3 className="font-serif-luxury text-xl font-semibold text-[#18181B]">
              Studio Locations
            </h3>

            <div className="space-y-6 text-xs text-[#52525B]">
              <div className="space-y-1.5 pb-4 border-b border-[#E5DFD5]">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#18181B]">
                  <MapPin className="w-4 h-4 text-[#A3704C]" />
                  <span>Mumbai Main Studio</span>
                </div>
                <p className="pl-6 text-[#71717A] leading-relaxed">
                  Suite 402, Trade World, Kamala Mills Compound, Lower Parel, Mumbai 400013
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#18181B]">
                  <MapPin className="w-4 h-4 text-[#A3704C]" />
                  <span>Bangalore Design Lab</span>
                </div>
                <p className="pl-6 text-[#71717A] leading-relaxed">
                  12th Main Road, HAL 2nd Stage, Indiranagar, Bangalore 560038
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
