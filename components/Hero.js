import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">

        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
          One little SalesPoop. Endless Possibilities.
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          Gain credibility, increase sales and delight your visitors with SalesPoop — the magical little WEB3 bubble that converts.
        </p>
        <button className="btn btn-primary btn-wide">
          Get {config.appName}
        </button>

        <TestimonialsAvatars priority={true} />
      </div>
      <div className="lg:w-full">
        <Image
          src="https://i.imgur.com/E5iAyeF.png"
          alt="Product Demo"
          className="w-full"
          priority={true}
          width={600}
          height={600}
        />
      </div>
    </section>
  );
};

export default Hero;
