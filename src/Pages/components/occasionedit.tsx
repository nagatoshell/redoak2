import React from "react";
import ranchImg from "../../assets/hfm.jpg";

const OccasionEdit: React.FC = () => {
  return (
    <section className="w-full bg-[#f5f1e8]">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-stretch md:flex-row">

        {/* Text Section */}
        <div className="flex w-full items-center justify-center md:w-1/2">
          <div className="w-full max-w-xl space-y-5 p-8 text-center md:p-16 md:text-left">
            
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-600">
              Red Oak Ranch
            </p>

            <h2 className="font-graffiti text-3xl font-bold leading-tight text-black md:text-5xl">
              From Our Ranch
              <br />
              <span className="text-red-600">To Your Table.</span>
            </h2>

            <div className="mx-auto h-1 w-12 bg-black md:mx-0" />

            <p className="text-base leading-7 text-gray-700 md:text-lg">
              Great meals begin with great ingredients. At Red Oak Ranch,
              we are committed to bringing quality ranch-raised beef to
              your table with care, purpose, and attention to quality.
            </p>

            <p className="text-base font-semibold text-black md:text-lg">
              Raised Right. Tastes Better.
            </p>

            <a
              href="/shop"
              className="inline-block bg-black px-7 py-3 text-sm font-semibold uppercase tracking-wider text-white transition duration-300 hover:bg-red-600"
            >
              Shop Our Beef
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={ranchImg}
            alt="Red Oak Ranch"
            className="h-[400px] w-full object-cover md:h-[520px]"
          />
        </div>

      </div>
    </section>
  );
};

export default OccasionEdit;