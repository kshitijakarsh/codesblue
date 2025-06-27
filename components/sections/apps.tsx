export default function Apps() {
  return (
    <div className="bg-[#1F2B68] py-20 px-4 text-white text-center flex justify-center">
      <div className="w-[1100px]">
        <h1 className="text-4xl md:text-5xl font-bold mb-16">Apps We Built</h1>

        <div className="flex gap-6 justify-center flex-wrap">
          <div className="w-[240px] h-[500px] bg-white rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
            <img
              src="https://i.pinimg.com/736x/6e/b8/eb/6eb8eb82a2ac5ebc3911c0d9a0b15cf0.jpg"
              alt="App 1"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-[240px] h-[500px] bg-white rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
            <img
              src="https://i.pinimg.com/736x/6e/b8/eb/6eb8eb82a2ac5ebc3911c0d9a0b15cf0.jpg"
              alt="App 2"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-[240px] h-[500px] bg-white rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
            <img
              src="https://i.pinimg.com/736x/6e/b8/eb/6eb8eb82a2ac5ebc3911c0d9a0b15cf0.jpg"
              alt="App 3"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-[240px] h-[500px] bg-white rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
            <img
              src="https://i.pinimg.com/736x/6e/b8/eb/6eb8eb82a2ac5ebc3911c0d9a0b15cf0.jpg"
              alt="App 4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
