// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "Product", href: "/product" },
  { name: "Blog", href: "/blog" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo – BIG */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/ROAV.png"
              alt="Logo"
              className="h-10 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Links – BIG & CENTERED */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="flex items-center space-x-12">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xl font-semibold text-gray-800 hover:text-indigo-600 transition"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu – BIG */}
      {isOpen && (
        <div className="bg-white shadow-2xl md:hidden">
          <div className="space-y-6 px-8 py-12 text-center">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-3xl font-bold text-gray-800 hover:text-indigo-600"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block rounded-full bg-linear-to-r from-indigo-600 to-purple-600 py-5 text-2xl font-bold text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
