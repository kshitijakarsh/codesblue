"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "About", href: "#about" },
    { name: "FAQ", href: "#faq" }
  ];

  const handleClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="bg-[#1F2B68] text-white px-5 md:px-20 py-6 relative z-50">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight hover:scale-105 transition-transform duration-200">
          <span className="text-white">Codes</span>
          <span className="text-transparent bg-gradient-to-r from-[#F98C05] to-[#FF6B35] bg-clip-text">Blue</span>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        <nav className="hidden md:flex gap-8 text-base font-medium">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleClick(item.href)}
              className="relative group py-2 hover:text-white transition-colors duration-300 cursor-pointer"
            >
              <span className="relative z-10">{item.name}</span>
              <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#F98C05] to-[#FF6B35] w-0 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <button 
            onClick={handleContactClick}
            className="relative bg-gradient-to-r from-[#F98C05] to-[#FF6B35] text-white px-6 py-3 rounded-2xl font-semibold shadow-lg overflow-hidden hover:scale-105 hover:-translate-y-0.5 transition-all duration-200"
          >
            <span className="relative z-10">Contact Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35] to-[#F98C05] opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-6 pb-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleClick(item.href)}
                className="text-base font-medium py-3 border-b border-white/10 hover:text-[#F98C05] transition-colors duration-300 text-left"
              >
                {item.name}
              </button>
            ))}
            
            <button 
              onClick={handleContactClick}
              className="mt-4 bg-gradient-to-r from-[#F98C05] to-[#FF6B35] text-white px-6 py-3 rounded-2xl font-semibold shadow-lg w-full hover:scale-102 transition-transform duration-200"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
