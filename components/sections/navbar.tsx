"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#1F2B68] text-white px-5 md:px-20 py-5">
      <div className="flex items-center justify-between">
        <div className="text-xl font-semibold">CodesBlue</div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <nav className="hidden md:flex gap-10 text-sm">
          {["Pricing", "Success", "Stories", "About Us", "Company"].map((item) => (
            <a
              key={item}
              href="#"
              className="relative after:absolute after:left-0 after:top-6 after:h-[2px] after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full hover:text-white/90 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <button
            className="border border-white px-3 py-1 rounded-xl bg-[#253783] text-white transform transition-transform duration-300 ease-out hover:scale-110 hover:shadow-lg hover:bg-[#2d4194]"
          >
            Contact Us
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col mt-4 space-y-3 md:hidden">
          {["Pricing", "Success", "Stories", "About Us", "Company"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm border-b pb-2 border-white/20"
            >
              {item}
            </a>
          ))}
          <button
            className="mt-2 border border-white px-3 py-1 rounded-xl bg-[#253783] text-white transform transition-transform duration-300 ease-out hover:scale-105 hover:shadow-md hover:bg-[#2d4194]"
          >
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
}
