import PriceCard from "../ui/priceCard";

export default function Services() {
  return (
    <div>
      <div className="bg-[#1F2B68] flex justify-center text-center px-4 py-12 sm:py-16 md:py-20">
        <div className="text-white max-w-[594px] w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl leading-snug">
            Retail franchise digital marketing
          </h1>
        </div>
      </div>
      <PriceCard />
    </div>
  );
}
