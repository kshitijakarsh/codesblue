export default function PriceCard() {
  return (
    <div className="flex justify-center items-end bg-[#1F2B68] gap-6 py-24">
      <div className="w-[374px] h-[372px] bg-[#183282] border border-white rounded-2xl p-6 text-white flex flex-col justify-between shadow-lg">
        <div>
          <h1 className="text-2xl font-semibold mb-2">Web Development</h1>
          <p className="text-sm text-gray-200">
            We specialize in developing interactive and conversion-focused websites.
          </p>
        </div>
        <div className="mt-6 space-y-3">
          <h1 className="border-b border-gray-400 pb-1 hover:text-yellow-300 transition duration-200 cursor-pointer">
            01 Visibility
          </h1>
          <h1 className="border-b border-gray-400 pb-1 hover:text-yellow-300 transition duration-200 cursor-pointer">
            02 Identity
          </h1>
          <h1 className="border-b border-gray-400 pb-1 hover:text-yellow-300 transition duration-200 cursor-pointer">
            03 Messaging
          </h1>
          <h1 className="border-b border-gray-400 pb-1 hover:text-yellow-300 transition duration-200 cursor-pointer">
            04 Value Proposition
          </h1>
          <h1 className="border-b border-gray-400 pb-1 hover:text-yellow-300 transition duration-200 cursor-pointer">
            05 CRO
          </h1>
        </div>
      </div>

      <div className="w-[374px] h-[432px] bg-gradient-to-b from-[#7796FD] to-[#4958CC] border border-white rounded-2xl p-6 flex flex-col justify-between shadow-lg text-white">
        <div>
          <h1 className="text-2xl font-semibold mb-2">Web Design</h1>
          <p className="text-sm text-gray-200">
            We specialize in developing interactive experiences.
          </p>
        </div>
        <div className="mt-6 space-y-3">
          <h1 className="border-b border-gray-100 pb-1 hover:text-yellow-300 transition duration-200 cursor-pointer">
            01 UI/UX
          </h1>
          <h1 className="border-b border-gray-100 pb-1 hover:text-yellow-300 transition duration-200 cursor-pointer">
            02 Landing Pages
          </h1>
          <h1 className="border-b border-gray-100 pb-1 hover:text-yellow-300 transition duration-200 cursor-pointer">
            03 Redesigns
          </h1>
          <h1 className="border-b border-gray-100 pb-1 hover:text-yellow-300 transition duration-200 cursor-pointer">
            04 Functionality
          </h1>
          <h1 className="border-b border-gray-100 pb-1 hover:text-yellow-300 transition duration-200 cursor-pointer">
            05 Optimization
          </h1>
        </div>
      </div>

      <div className="w-[374px] h-[372px] bg-[#183282] border border-white rounded-2xl p-6 flex flex-col justify-between shadow-lg text-white">
        <div>
          <h1 className="text-2xl font-semibold mb-2">E-commerce</h1>
          <p className="text-sm text-gray-200">
            Developing interactive, scalable, brand-oriented platforms.
          </p>
        </div>
        <div className="mt-6 space-y-3">
          <h1 className="border-b border-gray-400 pb-1 hover:text-yellow-300 transition duration-200 cursor-pointer">
            01 3D Animation
          </h1>
          <h1 className="border-b border-gray-400 pb-1 hover:text-yellow-300 transition duration-200 cursor-pointer">
            02 Socials
          </h1>
          <h1 className="border-b border-gray-400 pb-1 hover:text-yellow-300 transition duration-200 cursor-pointer">
            03 Paid Ads
          </h1>
          <h1 className="border-b border-gray-400 pb-1 hover:text-yellow-300 transition duration-200 cursor-pointer">
            04 On-Page
          </h1>
          <h1 className="border-b border-gray-400 pb-1 hover:text-yellow-300 transition duration-200 cursor-pointer">
            05 Technical
          </h1>
        </div>
      </div>
    </div>
  );
}
