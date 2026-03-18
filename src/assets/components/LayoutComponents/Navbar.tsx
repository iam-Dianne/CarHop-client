import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../Button";
import { FaBars } from "react-icons/fa";
import { FaRegCircleUser, FaX } from "react-icons/fa6";
import { toast } from "sonner";
import { RiArrowDropDownLine } from "react-icons/ri";

type NavbarProps = {
  onLoginClick: () => void;
};

const Navbar = ({ onLoginClick }: NavbarProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const menuItems = [
    { label: "Home", to: "/" },
    { label: "Book now", to: "/booking" },
    { label: "Vehicles", to: "/vehicles" },
    { label: "About", to: "/about" },
    { label: "Contact us", to: "/contact" },
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

  const handleLogout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    toast.success("Successfully logged out");
    navigate("/");
    setIsProfileOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 p-2 sm:pt-5 sm:px-10 2xl:px-[300px]">
      <div className="min-h-16 px-4 lg:px-8 py-2 backdrop-blur-md border border-white/30 bg-gray-100/40 text-gray-900 shadow-lg rounded-lg">
        <div className="flex items-center justify-between">
          <div className="brand h-12 flex items-center text-primary">
            <Link to={"/"} className="flex items-center gap-1">
              <img
                src="/carhop-logo.png"
                alt="carhop-logo"
                className="h-5 block "
              />
              <span className="font-bold cursor-pointer">CarHop Rentals</span>
            </Link>
          </div>
          <div className="flex gap-4">
            <ul className="hidden lg:flex">
              {menuItems.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.to}
                    className={`block py-1 px-3 w-full rounded-md hover:bg-gray-200 ${
                      location.pathname === item.to ? "font-bold" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="relative flex items-center gap-2">
              {isLoggedIn ? (
                <button
                  onClick={toggleProfile}
                  className="cursor-pointer hidden lg:flex items-center"
                >
                  <FaRegCircleUser className=" text-xl" />
                  <RiArrowDropDownLine className="text-xl" />
                </button>
              ) : (
                // <Button
                //   label="Logout"
                //   onClick={handleLogout}
                //   variant="primary"
                // />
                <Button
                  label="Login"
                  onClick={onLoginClick}
                  variant="primary"
                />
              )}

              <button onClick={toggleMenu} className="lg:hidden">
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
      </div>
      {/* profile dropdown */}
      {isProfileOpen && (
        <div className="absolute right-10 w-40 py-3 px-2 backdrop-blur-md border border-white/30 bg-text/40 shadow-lg rounded-lg mt-2">
          <ul>
            <li>
              <Link
                to={"/profile"}
                className="block py-1 px-3 rounded-md hover:bg-gray-200"
              >
                Profile
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="block py-1 px-3 rounded-md hover:bg-gray-200 w-full text-start"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
      {/* hamburger menu dropdown */}
      {isOpen && (
        <div className="py-3 px-2 backdrop-blur-md border border-white/30 bg-text/40 shadow-lg rounded-lg mt-2">
          <ul>
            <li>
              <Link
                to={"/profile"}
                className="block py-1 px-3 w-full rounded-md hover:bg-gray-200"
              >
                Profile
              </Link>
            </li>
            <li className="border-b border-gray-400 mb-1 pb-1">
              <Link
                to={"/profile"}
                className="block py-1 px-3 w-full rounded-md hover:bg-gray-200"
              >
                Logout
              </Link>
            </li>
            {menuItems.map((item, i) => (
              <li key={i}>
                <Link
                  to={item.to}
                  className={`block py-1 px-3 w-full rounded-md hover:bg-gray-200 ${
                    location.pathname === item.to ? "font-semibold" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
