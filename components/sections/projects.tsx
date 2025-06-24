export default function Projects() {
  return (
    <div className=" bg-[#1F2B68] py-20 px-4">
      <div className="max-w-[660px] mx-auto text-6xl text-center text-white leading-tight">
        <h1>Comprised of diverse minds</h1>
      </div>

      <div className="mt-16 w-full px-6 flex justify-center">
        <div className="grid grid-cols-2 gap-[40px] items-start">
          <div className="w-[646px] h-[508px]">
            <img src="./gemini.svg" alt="project1" />
          </div>
          <div className="w-[484px] h-[508px]">
            <img src="./silv.svg" alt="project2" />
          </div>
        </div>
      </div>
    </div>
  );
}
