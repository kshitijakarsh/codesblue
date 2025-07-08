"use client";
import { useForm, ValidationError } from '@formspree/react';

export default function Cta() {
  const [state, handleSubmit] = useForm("xovwolga");

  if (state.succeeded) {
    return (
      <div className="bg-[#1F2B68] flex justify-center py-[120px] px-2">
        <div className="w-full max-w-[750px] text-center">
          <div className="flex flex-col items-center space-y-6">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl text-white font-semibold">
              Thank You!
            </h2>
            <p className="text-white/80 text-lg">
              We&apos;ve received your message and will get back to you soon.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#1F2B68] flex justify-center py-[120px] px-2">
      <div className="w-full max-w-[750px] text-center">
        <h1 className="text-4xl md:text-6xl text-white font-semibold leading-[1.2]">
          Have an Idea? Let&apos;s Build and Scale It!
        </h1>

        <form 
          onSubmit={handleSubmit}
          className="mt-12 space-y-6 max-w-md mx-auto"
        >
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              disabled={state.submitting}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#F98C05] focus:border-transparent backdrop-blur-sm disabled:opacity-50"
            />
            <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
              className="text-red-400 text-sm mt-1"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              disabled={state.submitting}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#F98C05] focus:border-transparent backdrop-blur-sm disabled:opacity-50"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
              className="text-red-400 text-sm mt-1"
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Tell us about your project..."
              rows={4}
              disabled={state.submitting}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#F98C05] focus:border-transparent backdrop-blur-sm resize-none disabled:opacity-50"
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
              className="text-red-400 text-sm mt-1"
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#F98C05] to-[#FF6B35] text-white font-semibold transition-transform transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#F98C05] focus:ring-offset-2 focus:ring-offset-[#1F2B68] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {state.submitting ? "Sending..." : "Get Started Today"}
          </button>
        </form>
      </div>
    </div>
  );
}
