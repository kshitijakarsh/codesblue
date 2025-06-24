export default function Features() {
  return (
    <div className="grid grid-cols-2 items-center gap-10 bg-[#1F2B68] py-35 px-30">
      <div>
        <h1 className="text-5xl w-[476px] text-white font-semibold">
          Design beautiful websites
        </h1>
        <p className="text-white w-[377px] pt-9">
          Empower your franchisees and locations to grow with our intelligent
          dashboards and tools.
        </p>

        <button className="p-2 mt-9 rounded-xl bg-gradient-to-r from-[#FF9A63] to-[#FE804B] text-white drop-shadow-2xl ">
          Contact Us
        </button>
        <div className="flex -space-x-4 pt-9">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="User 1"
            className="w-14 h-14 rounded-full border-2 border-black"
          />
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="User 2"
            className="w-14 h-14 rounded-full border-2 border-black"
          />
          <img
            src="https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="User 3"
            className="w-14 h-14 rounded-full border-2 border-black"
          />
          <img
            src="https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="User 4"
            className="w-14 h-14 rounded-full border-2 border-black"
          />
        </div>
        <div>
          <h1 className="text-3xl text-white font-semibold mt-4">1000+</h1>
          <p className="text-xl text-white font-normal">Positive Feedback</p>
        </div>
      </div>
      <div>
        <img src="./features.svg" alt="Features" />
      </div>
    </div>
  );
}
