export default function About() {
  return (
    <div>
      <div className="bg-[#1F2B68] flex justify-center text-center text-5xl text-white">
        <div className="w-[594px] mt-10">
          <h1>Strategic design over the years</h1>
        </div>
      </div>
      <div className="flex justify-center items-end bg-[#1F2B68] gap-6 py-24 text-[#183282]">
        <div className="w-[272px] h-[208px] bg-white rounded-2xl flex flex-col items-center justify-center text-center">
          <h1 className="text-7xl font-bold ">400</h1>
          <p className="text-xl mt-2 w-[200px]">
            Talented people ready to bring your vision
          </p>
        </div>

        <div className="w-[272px] h-[208px] bg-white rounded-2xl flex flex-col items-center justify-center text-center">
          <h1 className="text-7xl font-bold">15</h1>
          <p className="text-xl mt-2 w-[200px]">
            Years of experience working with tech
          </p>
        </div>
        <div className="w-[272px] h-[208px] bg-white rounded-2xl flex flex-col items-center justify-center text-center">
          <h1 className="text-7xl font-bold">40</h1>
          <p className="text-xl mt-2 w-[200px]">
            Offices in the United States
          </p>
        </div>
        <div className="w-[272px] h-[208px] bg-white rounded-2xl flex flex-col items-center justify-center text-center">
          <h1 className="text-7xl font-bold">3K+</h1>
          <p className="text-xl mt-2 w-[200px]">
            Pixel perfect projects designed
          </p>
        </div>
      </div>
    </div>
  );
}
