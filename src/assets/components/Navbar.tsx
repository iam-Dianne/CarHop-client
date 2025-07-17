import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { label: "My Profile", to: "/profile" },
    { label: "Home", to: "/" },
    { label: "Book now", to: "/booking" },
    { label: "Vehicles", to: "/vehicles" },
    { label: "About", to: "/about" },
    { label: "FAQs", to: "/faqs" },
    { label: "Contact us", to: "/contact3" },
  ];

  const delays = [
    "delay-100",
    "delay-200",
    "delay-300",
    "delay-400",
    "delay-500",
    "delay-600",
    "delay-700",
  ];

  return (
    <header className="fixed w-full top-0 z-50 p-2 sm:p-3">
      <div className="min-h-16 px-4 py-2 backdrop-blur-md border border-white/30 bg-text/40 text-primary shadow-lg rounded-lg">
        <div className="flex items-center justify-between">
          <div className="brand h-12 flex items-center">
            <Link to={"/"} className="flex items-center gap-1">
              <img
                src="../../../public/carhop-logo.png"
                alt="carhop-logo"
                className="h-5 block "
              />
              <span className="font-bold cursor-pointer">CarHop Rentals</span>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Button label="Login" onClick={() => {}} variant="primary" />
            <button onClick={toggleMenu}>
              <FaBars
                className={`cursor-pointer ${isOpen ? "hidden" : "block"}`}
              />
              <FaX
                className={`cursor-pointer ${!isOpen ? "hidden" : "block"}`}
              />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`text-primary py-3 px-2 transition-all duration-300 transform origin-top ${
          isOpen
            ? "scale-y-100 opacity-100"
            : "scale-y-0 opacity-0 pointer-events-none"
        } backdrop-blur-md border border-white/30 bg-text/40 shadow-lg rounded-lg mt-2`}
        style={{
          transformOrigin: "top",
          transitionTimingFunction: "ease-in-out",
        }}
      >
        <ul className="">
          <ul>
            {menuItems.map((item, i) => (
              <li
                key={i}
                className={`transform transition-all duration-500 ${
                  isOpen
                    ? `opacity-100 translate-y-0 ${delays[i]}`
                    : "opacity-0 -translate-y-2 delay-0"
                }`}
              >
                <Link
                  to={item.to}
                  className="block py-1 px-5 w-full rounded-md hover:bg-text-muted transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
