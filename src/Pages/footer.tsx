import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1D241F] text-white mt-8">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Brand Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-serif font-semibold mb-3">
              Red Oak Ranch
            </h2>

            <p className="text-red-400 text-sm font-medium mb-5">
              Raised Right. Tastes Better.
            </p>

            <p className="text-gray-400 text-sm leading-6">
              Premium ranch-raised beef brought from our pastures to your
              table. Quality, care, and responsible ranching in every cut.
            </p>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="uppercase tracking-wider font-semibold text-sm mb-3">
              Stay Connected to the Ranch
            </h3>

            <p className="text-gray-400 text-sm leading-6 mb-5 max-w-xl">
              Sign up for ranch updates, new beef releases, recipes, cooking
              tips, and special offers.
            </p>

            <form className="flex flex-col sm:flex-row gap-3 max-w-xl">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent border border-gray-600 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
              />

              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 px-6 py-3 text-sm font-semibold uppercase tracking-wide transition"
              >
                Subscribe
              </button>
            </form>

            <p className="text-[11px] text-gray-500 mt-3">
              By subscribing, you agree to receive updates and offers from
              Red Oak Ranch.
            </p>
          </div>

          {/* Social */}
          <div>
            <h3 className="uppercase tracking-wider font-semibold text-sm mb-4">
              Follow the Ranch
            </h3>

            <p className="text-gray-400 text-sm leading-6 mb-5">
              Follow us for ranch life, new products, recipes, and more.
            </p>

            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-600 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/2340000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-600 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-600 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="border-t border-gray-700 pt-12 grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* Shop */}
          <div>
            <h3 className="uppercase tracking-wider font-semibold text-sm mb-5">
              Shop Beef
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link
                  to="/shop"
                  className="hover:text-white transition"
                >
                  All Beef
                </Link>
              </li>

              <li>
                <Link
                  to="/shop"
                  className="hover:text-white transition"
                >
                  Steaks
                </Link>
              </li>

              <li>
                <Link
                  to="/shop"
                  className="hover:text-white transition"
                >
                  Ground Beef
                </Link>
              </li>

              <li>
                <Link
                  to="/shop"
                  className="hover:text-white transition"
                >
                  Roasts
                </Link>
              </li>

              <li>
                <Link
                  to="/shop"
                  className="hover:text-white transition"
                >
                  Beef Boxes
                </Link>
              </li>
            </ul>
          </div>

          {/* Ranch */}
          <div>
            <h3 className="uppercase tracking-wider font-semibold text-sm mb-5">
              Our Ranch
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition"
                >
                  Our Story
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  className="hover:text-white transition"
                >
                  Ranch Journal
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="uppercase tracking-wider font-semibold text-sm mb-5">
              Customer Care
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link
                  to="/legal"
                  className="hover:text-white transition"
                >
                  FAQs
                </Link>
              </li>

              <li>
                <Link
                  to="/legal"
                  className="hover:text-white transition"
                >
                  Shipping Info
                </Link>
              </li>

              <li>
                <Link
                  to="/legal"
                  className="hover:text-white transition"
                >
                  Refund Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/legal"
                  className="hover:text-white transition"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/legal"
                  className="hover:text-white transition"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="uppercase tracking-wider font-semibold text-sm mb-5">
              Visit & Contact
            </h3>

        

            <p className="text-sm text-gray-400 mb-2">
              Mon – Sat: 10am – 6pm
            </p>

            <p className="text-sm text-gray-400 mb-4">
              Sunday: 12pm – 5pm
            </p>

          
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3">

          <p className="text-xs text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Red Oak Ranch. All Rights Reserved.
          </p>

          <p className="text-xs text-gray-500">
            Raised Right. Tastes Better.
          </p>

       
        </div>
      </div>

    </footer>
  );
};

export default Footer;