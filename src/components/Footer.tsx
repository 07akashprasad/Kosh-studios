import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#141518] text-[#D4D4D8] border-t border-[#27272A] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#27272A]">
          {/* Col 1: Studio Brand & Manifesto */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block">
              <span className="font-serif-luxury text-3xl tracking-[0.2em] font-semibold text-white">
                KOSH
              </span>
              <span className="block text-[9px] tracking-[0.4em] text-[#A1A1AA] uppercase mt-0.5">
                Architecture & Interiors
              </span>
            </Link>
            <p className="text-sm text-[#A1A1AA] max-w-sm leading-relaxed font-light">
              We design spaces of quiet permanence, grounded in climate responsiveness,
              material honesty, and tailored craftsmanship. Based in Mumbai & Bangalore, practicing nationwide.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-[#222327] border border-[#33343A] text-[11px] text-[#D4D4D8] tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Accepting Select Commissions for 2026/2027</span>
              </div>
            </div>
          </div>

          {/* Col 2: Studio Locations */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-white font-semibold">
              Studios
            </h4>
            <div className="space-y-4 text-xs text-[#A1A1AA] leading-relaxed">
              <div>
                <strong className="text-white block font-medium">Mumbai Main Studio</strong>
                <p>Suite 402, Trade World, Kamala Mills, Lower Parel, Mumbai 400013</p>
              </div>
              <div>
                <strong className="text-white block font-medium">Bangalore Design Lab</strong>
                <p>12th Main Road, HAL 2nd Stage, Indiranagar, Bangalore 560038</p>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-white font-semibold">
              Index
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A1A1AA]">
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services & Turnkey Scope
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Philosophy & Principals
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Consultation Questionnaire
                </Link>
              </li>
              <li>
                <Link href="/services#estimator" className="hover:text-white transition-colors">
                  Project Cost Estimator
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Connect & Inquiries */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-white font-semibold">
              Inquiries
            </h4>
            <ul className="space-y-3 text-xs text-[#A1A1AA]">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#A3704C]" />
                <a href="mailto:hello@koshstudios.com" className="hover:text-white transition-colors">
                  hello@koshstudios.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#A3704C]" />
                <a href="tel:+919820012345" className="hover:text-white transition-colors">
                  +91 98200 12345
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#A3704C]" />
                <span>Mon – Sat: 10:00 AM – 7:00 PM</span>
              </li>
            </ul>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xs bg-[#222327] hover:bg-[#A3704C] hover:text-white flex items-center justify-center transition-all text-[#A1A1AA]"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xs bg-[#222327] hover:bg-[#A3704C] hover:text-white flex items-center justify-center transition-all text-[#A1A1AA]"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#71717A] gap-4">
          <p>© {new Date().getFullYear()} Kosh Studios. Registered with Council of Architecture (COA) & Indian Institute of Architects (IIA).</p>
          <div className="flex items-center space-x-6 text-[11px]">
            <span className="text-[#A1A1AA]">Architecture</span>
            <span>•</span>
            <span className="text-[#A1A1AA]">Interior Architecture</span>
            <span>•</span>
            <span className="text-[#A1A1AA]">Turnkey Construction</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
