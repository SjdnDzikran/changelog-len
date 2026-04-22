"use client";

import { useState, useEffect, useCallback } from "react";

const NAV_LINKS = [
  { label: "TMS", href: "https://oms.lenlogistics.co.id" },
  { label: "WMS", href: "https://wms.lenlogistics.co.id" },
  { label: "Approval", href: "https://approval.lenlogistics.co.id" },
  { label: "Profile", href: "https://lenlogistics.co.id" },
];

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {!open ? (
        <>
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </>
      ) : (
        <>
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="6" y1="18" x2="18" y2="6" />
        </>
      )}
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const close = useCallback(() => setMenuOpen(false), []);

  // Close on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [menuOpen, close]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-[1024px] mx-auto h-16 flex items-center justify-between px-4">
          <a href="/" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.jpg"
              alt="LEN Logistics"
              className="h-8 w-auto rounded"
            />
            <span className="text-xl font-bold text-black">LEN Logistics</span>
            <span className="text-gray-400 text-sm hidden sm:inline">/ Changelog</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-black transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 -mr-2 text-gray-600 hover:text-black transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <HamburgerIcon open={menuOpen} />
          </button>
        </div>
      </nav>

      {/* Full-screen mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-transform duration-200 ease-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            onClick={close}
            className="p-2 -mr-2 text-gray-600 hover:text-black transition-colors"
            aria-label="Close menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-1 px-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="text-2xl font-medium text-black/90 hover:text-black py-3 border-b border-gray-100 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
