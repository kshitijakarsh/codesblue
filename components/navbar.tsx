export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-10 py-3 bg-[#1F2B68] text-white">
      <div className="text-xl font-semibold">CodesBlue</div>

      <nav className="flex gap-10 text-sm">
        <a
          href="#"
          className="relative after:absolute after:left-0 after:top-6 after:h-[2px] after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full hover:text-white/90 transition-colors duration-300"
        >
          Pricing
        </a>
        <a
          href="#"
          className="relative after:absolute after:left-0 after:top-6 after:h-[2px] after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full hover:text-white/90 transition-colors duration-300"
        >
          Success
        </a>
        <a
          href="#"
          className="relative after:absolute after:left-0 after:top-6 after:h-[2px] after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full hover:text-white/90 transition-colors duration-300"
        >
          Stories
        </a>
        <a
          href="#"
          className="relative after:absolute after:left-0 after:top-6 after:h-[2px] after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full hover:text-white/90 transition-colors duration-300"
        >
          About Us
        </a>
        <a
          href="#"
          className="relative after:absolute after:left-0 after:top-6 after:h-[2px] after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full hover:text-white/90 transition-colors duration-300"
        >
          Company
        </a>
      </nav>

      <button
        className="
          border border-white px-3 py-1 rounded-xl bg-[#253783] text-white
          transform transition-transform duration-300 ease-out
          hover:scale-110 hover:shadow-lg hover:bg-[#2d4194]
        "
      >
        Contact Us
      </button>
    </header>
  );
}
