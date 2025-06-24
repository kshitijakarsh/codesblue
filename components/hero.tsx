export default function Hero() {
  return (
    <div className="relative bg-[#1F2B68] text-white min-h-[110vh] pl-28 overflow-hidden">
      <div className="text-8xl font-bold pt-28 w-full">
        <h1>
          We develop the <span className="text-orange-400">eye</span>
        </h1>
        <h1>
          <span className="text-orange-400">catching</span> brands
        </h1>
      </div>

      <div>
        <p className="w-[440px] h-[90px] mt-12 text-[23px] leading-6 font-light">
          Empower your franchises and locations to grow with our intelligent
          dashboards and tools
        </p>
      </div>

      <div className="mt-10">
        <button
          className="
            bg-white text-black p-3 text-xl rounded-xl 
            shadow-[inset_0_-4px_0_rgba(0,0,0,0.2),0_8px_0_0_rgba(0,0,0,0.2)]
            active:translate-y-[4px] active:shadow-[inset_0_-2px_0_rgba(0,0,0,0.2)]
            transition-all duration-150
          "
        >
          Contact Us
        </button>
      </div>

      <div className="absolute bottom-0 right-0 pr-15">
        <img src="./hero.svg" alt="hero" className="w-[570px] h-[464px]" />
      </div>

      <div className="mt-50">
        <img src="./brands.svg" alt="brands"className="w-[540px] h-[50px]"/>
      </div>
    </div>
  );
}
