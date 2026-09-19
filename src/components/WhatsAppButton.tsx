"use client";

import { useState } from "react";
import { MessageSquare, X } from "lucide-react";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = "919820012345";
  const defaultMessage = encodeURIComponent(
    "Hello Kosh Studios, I came across your work on your website and would like to inquire about a new architectural / interior project."
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {showTooltip && (
        <div className="mb-3 p-3 rounded-xs bg-[#18181B] text-white text-xs shadow-xl border border-[#27272A] max-w-[240px] animate-fadeIn relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-[#A1A1AA] hover:text-white"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <p className="font-medium text-white pr-4">Direct Studio Line</p>
          <p className="text-[11px] text-[#A1A1AA] mt-1">
            Connect directly with our design team for quick queries or site visits.
          </p>
        </div>
      )}

      <a
        href={`https://wa.me/${phoneNumber}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group flex items-center gap-2.5 px-4 py-3 bg-[#18181B] text-white hover:bg-[#25D366] hover:text-white transition-all duration-300 rounded-full shadow-lg border border-[#3F3F46]/30"
        aria-label="Chat with Kosh Studios on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 text-[#25D366] group-hover:text-white transition-colors" />
        <span className="text-xs font-medium tracking-wider uppercase hidden sm:inline-block">
          WhatsApp Us
        </span>
      </a>
    </div>
  );
}
