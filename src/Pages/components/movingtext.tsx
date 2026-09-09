import React from "react";

const MovingText: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-black py-2 text-white">
      <div className="whitespace-nowrap animate-marquee">
        <div className="inline-flex items-center gap-8 text-[9px] font-medium uppercase tracking-[0.15em]">
          <span>
            <span className="text-red-500">Red Oak Ranch</span> — Raised Right.
            Tastes Better.
          </span>

          <span className="text-white/30">✦</span>

          <span>Premium Ranch-Raised Beef</span>

          <span className="text-white/30">✦</span>

          <span>From Our Ranch to Your Table</span>

          <span className="text-white/30">✦</span>

          <span>Quality You Can Taste</span>

          <span className="text-white/30">✦</span>

          <span>Shop Our Beef Collection</span>
        </div>
      </div>
    </div>
  );
};

export default MovingText;