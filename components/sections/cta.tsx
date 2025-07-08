"use client";
import { useForm, ValidationError } from "@formspree/react";

export default function Cta() {
  const [state, handleSubmit] = useForm("xovwolga");

  if (state.succeeded) {
    return (
      <div className="bg-[#1F2B68] relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#F98C05] to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#FF6B35] to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative flex justify-center py-32 px-6">
          <div className="w-full max-w-2xl">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400/20 to-green-500/20 rounded-full flex items-center justify-center border border-green-400/30 backdrop-blur-sm">
                  <svg
                    className="w-10 h-10 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="absolute -inset-4 bg-green-400/10 rounded-full blur-xl"></div>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl text-white font-light tracking-wide">
                  Thank You
                </h2>
                <p className="text-white/60 text-lg leading-relaxed max-w-md">
                  We&apos;ve received your message and will get back to you
                  within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#1F2B68] relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#F98C05] to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#FF6B35] to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[length:32px_32px] bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)]"></div>
      </div>

      <div className="relative flex justify-center py-32 px-6">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-6">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-2">
              <div className="w-2 h-2 bg-[#F98C05] rounded-full animate-pulse"></div>
              <span className="text-white/70 text-sm font-light">
                Let&apos;s collaborate
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-light leading-tight tracking-wide">
              Have an{" "}
              <span className="relative">
                <span className="relative z-10">Idea</span>
              </span>
              ?
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed">
              Let&apos;s Build and Scale It Together
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
            <div className="space-y-5">
              <div className="group">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    disabled={state.submitting}
                    className="w-full px-6 py-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder-white/40 focus:outline-none focus:bg-white/10 focus:border-[#F98C05]/30 focus:ring-1 focus:ring-[#F98C05]/20 transition-all duration-500 disabled:opacity-50 group-hover:bg-white/8 group-hover:border-white/20"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#F98C05]/5 to-[#FF6B35]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                  className="text-red-300/80 text-sm mt-2 ml-2"
                />
              </div>

              <div className="group">
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    disabled={state.submitting}
                    className="w-full px-6 py-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder-white/40 focus:outline-none focus:bg-white/10 focus:border-[#F98C05]/30 focus:ring-1 focus:ring-[#F98C05]/20 transition-all duration-500 disabled:opacity-50 group-hover:bg-white/8 group-hover:border-white/20"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#F98C05]/5 to-[#FF6B35]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-red-300/80 text-sm mt-2 ml-2"
                />
              </div>

              <div className="group">
                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={6}
                    disabled={state.submitting}
                    className="w-full px-6 py-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder-white/40 focus:outline-none focus:bg-white/10 focus:border-[#F98C05]/30 focus:ring-1 focus:ring-[#F98C05]/20 transition-all duration-500 resize-none disabled:opacity-50 group-hover:bg-white/8 group-hover:border-white/20"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#F98C05]/5 to-[#FF6B35]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="text-red-300/80 text-sm mt-2 ml-2"
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={state.submitting}
                className="group relative w-full py-5 px-8 rounded-2xl bg-gradient-to-r from-[#F98C05]/80 to-[#FF6B35]/80 text-white font-medium transition-all duration-500 hover:from-[#F98C05] hover:to-[#FF6B35] focus:outline-none focus:ring-2 focus:ring-[#F98C05]/30 focus:ring-offset-2 focus:ring-offset-[#1F2B68] disabled:opacity-50 disabled:cursor-not-allowed transform hover:translate-y-[-2px] disabled:hover:translate-y-0 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#F98C05]/20 to-[#FF6B35]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <span className="relative z-10 flex items-center justify-center space-x-3">
                  {state.submitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Get Started Today</span>
                      <svg
                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </>
                  )}
                </span>
              </button>
            </div>
          </form>

          <div className="mt-4 text-center space-y-4">
            <div className="flex items-center justify-center space-x-6 text-white/30">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                <span className="text-sm">Quick response</span>
              </div>
              <div className="w-px h-4 bg-white/20"></div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-[#F98C05] rounded-full"></div>
                <span className="text-sm">Expert team</span>
              </div>
            </div>
            <p className="text-white/40 text-sm">
              We typically respond within 24 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
