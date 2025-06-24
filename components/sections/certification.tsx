export default function Certification() {
  return (
    <div className="flex justify-center bg-[#1F2B68] py-24 px-4">
      <div className="w-[1170px] h-[509px] bg-gradient-to-br from-[#7795FD] to-[#4958CC] rounded-[40px] border-4 border-white px-16 py-14 flex items-center justify-between text-white">

        <div className="flex flex-col items-start">
          <h1 className="text-[48px] font-bold mb-10">Certification</h1>
          <img
            src="./certification.svg"
            alt="Certification Icon"
            className="w-[381px] h-[215px]"
          />
        </div>

        <div className="flex flex-col gap-10 max-w-[450px]">
          <div>
            <h2 className="text-2xl font-semibold">Amazon</h2>
            <p className="text-base text-white/80 mt-1 leading-snug">
              We specialize in developing interactive, scalable, brand-oriented.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Google</h2>
            <p className="text-base text-white/80 mt-1 leading-snug">
              We specialize in developing interactive, scalable, brand-oriented.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Facebook</h2>
            <p className="text-base text-white/80 mt-1 leading-snug">
              We specialize in developing interactive, scalable, brand-oriented.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
