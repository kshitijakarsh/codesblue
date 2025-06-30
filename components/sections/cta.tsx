export default function Cta() {
  return (
    <div className="bg-[#1F2B68] flex justify-center py-[120px] px-2">
      <div className="w-full max-w-[750px] text-center">
        <h1 className="text-4xl md:text-6xl text-white font-semibold leading-[1.2]">
          Have an Idea? Let&apos;s Build and Scale It!
        </h1>

        <form className="mt-12 space-y-6 max-w-md mx-auto">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#F98C05] focus:border-transparent backdrop-blur-sm"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#F98C05] focus:border-transparent backdrop-blur-sm"
            />
          </div>

          <div>
            <textarea
              placeholder="Tell us about your project..."
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#F98C05] focus:border-transparent backdrop-blur-sm resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#F98C05] to-[#FF6B35] text-white font-semibold transition-transform transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#F98C05] focus:ring-offset-2 focus:ring-offset-[#1F2B68]"
          >
            Get Started Today
          </button>
        </form>
      </div>
    </div>
  );
}
