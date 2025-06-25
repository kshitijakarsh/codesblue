export default function Testimonials() {
  return (
    <div className="bg-[#1F2B68] w-full flex justify-center items-center py-20">
      <div className="bg-gradient-to-r from-[#FF9A63] to-[#FE804B] w-[1170px] h-[680px] rounded-[40px] border-[6px] border-white">
        <div className="flex ml-24 mt-20">

          <div className="w-[674px] h-[136px]">
            <h1 className="text-6xl text-white font-bold">
              Passion for creating digital experiences
            </h1>
            <p className="text-3xl text-white mt-20">
              I was very satisfied with my decision to work with Zorro on
              building the website for my brand, Gemini Skincare. They did a
              great job putting the site together in a timely fashion. Jon &
              team are extremely detail-oriented and were open to the feedback I
              provided them.
            </p>
            <div className="mt-20 text-white">
              <h1>Floyd Miles</h1>
              <h1>The Walt Disney Company</h1>
            </div>
          </div>

          <div className="flex items-center justify-center ml-10">
            <div className="flex flex-col justify-between items-center h-full text-white mt-40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-quote-icon lucide-quote"
              >
                <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
              </svg>
              <div className="flex gap-10 justify-center mt-40 pb-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="cursor-pointer transition-transform duration-200 ease-in-out hover:-translate-x-1 hover:scale-110"
                >
                  <path d="M6 8L2 12L6 16" />
                  <path d="M2 12H22" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="cursor-pointer transition-transform duration-200 ease-in-out hover:translate-x-1 hover:scale-110"
                >
                  <path d="M18 8L22 12L18 16" />
                  <path d="M2 12H22" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
