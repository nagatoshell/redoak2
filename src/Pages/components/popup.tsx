import {  useState } from "react";
import { X } from "lucide-react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function BusinessPopup() {
  const [showPopup, setShowPopup] = useState(true); // Show by default

  const handleClose = () => {
    setShowPopup(false); // Just close without storing anything
  };

  if (!showPopup) return null;

  return (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4">
  <div className="relative bg-[#F5F1E8] rounded-2xl p-8 w-full max-w-sm shadow-2xl text-center">

    {/* Close Button */}
    <button
      className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/5 text-gray-500 hover:bg-black hover:text-white transition"
      onClick={handleClose}
      aria-label="Close popup"
    >
      <X size={18} />
    </button>

    {/* Logo */}
    <div className="flex justify-center mb-5">
      <img
        src={logo}
        alt="Red Oak Ranch"
        width={70}
        className="object-contain"
      />
    </div>

    {/* Heading */}
    <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-2">
      Welcome to Red Oak Ranch
    </h2>

    {/* Motto */}
    <p className="text-sm font-medium text-red-600 mb-4">
      Raised Right. Tastes Better.
    </p>

    {/* Description */}
    <p className="text-sm leading-6 text-gray-600 mb-6">
      Discover premium beef, ranch stories, cooking inspiration, and
      helpful tips for bringing better meals to your table.
    </p>

    {/* Buttons */}
    <div className="flex flex-col gap-3">

      <Link
        to="/shop"
        onClick={handleClose}
        className="w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-red-600 transition duration-300"
      >
        Shop Our Beef
      </Link>

      <Link
        to="/blog"
        onClick={handleClose}
        className="w-full border border-black text-black font-semibold py-3 rounded-lg hover:bg-black hover:text-white transition duration-300"
      >
        Explore Our Journal
      </Link>

      <button
        className="mt-2 text-sm text-gray-500 hover:text-gray-900 underline transition"
        onClick={handleClose}
      >
        Maybe later
      </button>

    </div>
  </div>
</div>
  );
}
