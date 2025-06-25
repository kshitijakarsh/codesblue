export default function Projects() {
  return (
    <div className="bg-[#1F2B68] py-20 px-4">
      <div className="max-w-[660px] mx-auto text-6xl text-center text-white leading-tight">
        <h1>Comprised of diverse minds</h1>
      </div>

      <div className="mt-16 flex justify-center items-center">
        <div className="flex gap-4 items-start">
          <div className="flex-shrink-0">
            <img 
              src="./gemini.svg" 
              alt="project1" 
              className="w-full h-auto max-w-[646px] max-h-[508px] object-contain"
            />
          </div>
          <div className="flex-shrink-0">
            <img 
              src="./silv.svg" 
              alt="project2" 
              className="w-full h-auto max-w-[484px] max-h-[508px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}