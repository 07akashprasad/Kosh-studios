"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from "lucide-react";

const navLinks = [
  { name: "Portfolio", href: "/projects" },
  { name: "Services & Scope", href: "/services" },
  { name: "The Studio", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF8F5]/90 backdrop-blur-md shadow-xs border-b border-[#E5DFD5]/60 py-3.5"
          : "bg-[#FAF8F5]/70 backdrop-blur-xs py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="group flex flex-col">
            <span className="font-serif-luxury text-2xl sm:text-3xl tracking-[0.18em] font-semibold text-[#18181B] group-hover:text-[#A3704C] transition-colors">
              KOSH
            </span>
            <span className="text-[9px] tracking-[0.35em] text-[#71717A] uppercase font-medium -mt-1">
              Architecture & Interiors
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm tracking-widest uppercase transition-colors duration-200 ${
                    isActive
                      ? "text-[#A3704C] font-semibold"
                      : "text-[#3F3F46] hover:text-[#A3704C]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="tel:+919820012345"
              className="text-xs tracking-wider uppercase text-[#71717A] hover:text-[#18181B] flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#A3704C]" />
              <span>+91 98200 12345</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#18181B] text-white hover:bg-[#A3704C] text-xs uppercase tracking-widest font-medium transition-all duration-300 rounded-xs shadow-xs"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <Link
              href="/contact"
              className="px-3 py-1.5 bg-[#18181B] text-white text-[11px] uppercase tracking-wider font-medium rounded-xs"
            >
              Inquire
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#18181B] hover:text-[#A3704C] focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-[#FAF8F5] border-b border-[#E5DFD5] px-6 py-8 shadow-xl transition-all animate-fadeIn">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-lg font-serif-luxury tracking-wide transition-colors ${
                    isActive ? "text-[#A3704C] font-semibold" : "text-[#18181B]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-6 border-t border-[#E5DFD5] flex flex-col space-y-4">
              <Link
                href="/contact"
                className="w-full py-3 bg-[#18181B] text-white text-center text-xs uppercase tracking-widest font-medium rounded-xs flex items-center justify-center gap-2"
              >
                <span>Start a Project Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <div className="flex items-center justify-between text-xs text-[#71717A] pt-2">
                <a
                  href="https://wa.me/919820012345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#A3704C]"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Concierge</span>
                </a>
                <a
                  href="tel:+919820012345"
                  className="flex items-center gap-1.5 hover:text-[#A3704C]"
                >
                  <Phone className="w-4 h-4 text-[#A3704C]" />
                  <span>Call Studio</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
