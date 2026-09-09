import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import banner1 from "../../assets/dami_4.jpg";
import banner2 from "../../assets/br2.jpg";
import banner3 from "../../assets/dami_1.jpg";
import banner4 from "../../assets/hon.jpg";

const slides = [
  {
    id: 1,
    title: "Raised Right. Tastes Better.",
    subtitle:
      "Premium ranch-raised beef produced with care, quality, and responsible ranching at the heart of everything we do.",
    buttonText: "SHOP BEEF",
    image: banner1,
  },
  {
    id: 2,
    title: "From Our Ranch to Your Table",
    subtitle:
      "Discover carefully selected cuts of beef made for family dinners, weekend grilling, special occasions, and everything in between.",
    buttonText: "EXPLORE BEEF",
    image: banner2,
  },
  {
    id: 3,
    title: "Quality You Can Taste",
    subtitle:
      "From tender steaks to flavorful roasts and everyday favorites, find quality beef for every kind of meal.",
    buttonText: "SHOP OUR CUTS",
    image: banner3,
  },
  {
    id: 4,
    title: "Good Land. Good Cattle. Good Beef.",
    subtitle:
      "We believe great beef begins with responsible ranching, careful stewardship, and a commitment to doing things the right way.",
    buttonText: "OUR STORY",
    image: banner4,
  },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[650px] w-full overflow-hidden">
      {slides.map((slide, index) => {
        const isActive = index === currentIndex;

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              isActive
                ? "z-10 opacity-100"
                : "pointer-events-none z-0 opacity-0"
            }`}
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[6000ms] ease-out ${
                isActive ? "scale-105" : "scale-100"
              }`}
            />

            {/* Main Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#f5f1e8] via-[#f5f1e8]/90 to-transparent md:from-[#f5f1e8] md:via-[#f5f1e8]/75 md:to-transparent" />

            {/* Image Bottom Fade */}
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/30 to-transparent" />

            {/* Content */}
            <div className="relative z-20 flex h-full items-center px-6 sm:px-10 md:px-20 lg:px-28">
              <div className="max-w-2xl space-y-6">

                {/* Small Label */}
                <p
                  className={`text-sm font-bold uppercase tracking-[0.3em] text-red-700 transition-all duration-700 ${
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }`}
                >
                  Red Oak Ranch
                </p>

                {/* Main Heading */}
                <h1
                  className={`font-graffiti text-4xl font-semibold leading-[1.05] text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl transition-all duration-700 delay-100 ${
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  {slide.title}
                </h1>

                {/* Red Accent */}
                <div className="h-1 w-20 bg-red-700" />

                {/* Subtitle */}
                <p
                  className={`max-w-xl text-base font-medium leading-7 text-gray-700 sm:text-lg md:text-xl transition-all duration-700 delay-200 ${
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  {slide.subtitle}
                </p>

                {/* CTA */}
                <div
                  className={`pt-2 transition-all duration-700 delay-300 ${
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <Link
                    to={
                      slide.id === 4
                        ? "/shop"
                        : "/shop"
                    }
                    className="group inline-flex items-center gap-3 bg-black px-7 py-4 text-sm font-bold tracking-wider text-white transition-all duration-300 hover:bg-red-700"
                  >
                    {slide.buttonText}

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-6 z-30 flex items-center gap-3 sm:left-10 md:left-20 lg:left-28">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="group"
          >
            <span
              className={`block h-1 transition-all duration-500 ${
                index === currentIndex
                  ? "w-12 bg-red-700"
                  : "w-6 bg-black/40 group-hover:bg-black"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-6 z-30 flex items-center gap-2 text-sm font-semibold text-black sm:right-10 md:right-20">
        <span className="text-red-700">
          {String(currentIndex + 1).padStart(2, "0")}
        </span>

        <span className="text-black/40">/</span>

        <span>{String(slides.length).padStart(2, "0")}</span>
      </div>

      {/* Ranch Motto */}
      <div className="absolute bottom-8 right-1/2 z-30 hidden translate-x-1/2 md:block">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/60">
          Raised Right. Tastes Better.
        </p>
      </div>
    </section>
  );
};

export default Carousel;