import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 mt-10 border-t border-gray-300">
      <div className="mx-auto px-4 py-10 sm:flex sm:justify-between space-y-5 gap-10 2xl:px-[350px]">
        {/* Brand */}
        <div>
          <div className="brand h-12 flex items-center text-primary">
            <Link to={"/"} className="flex items-center gap-1">
              <img
                src="../../../public/carhop-logo.png"
                alt="carhop-logo"
                className="h-5 block "
              />
              <span className="font-bold cursor-pointer">CarHop Rentals</span>
            </Link>
          </div>
          <p className="mb-8">
            Browse, book, and hit the road in minutes with our easy-to-use car
            rental platform.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="text-sm space-y-1">
            <li>
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/vehicles" className="hover:text-primary">
                Vehicles
              </Link>
            </li>
            <li>
              <Link to="/booking" className="hover:text-primary">
                Book Now
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact3" className="hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <p className="text-sm mb-2">Email: support@carhop.com</p>
          <p className="text-sm mb-4">Phone: (+63) 999 123 1234</p>
          <div className="flex gap-4 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-primary">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-primary">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-primary">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm py-4 border-t border-gray-200 bg-gray-50">
        © {new Date().getFullYear()} Made by Dianne Ramirez {"<3"}. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
