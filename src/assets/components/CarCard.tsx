import { useState } from "react";
import cars from "../../data/cars";
import { FaCar, FaCheck, FaGasPump, FaStar, FaUsers } from "react-icons/fa";
import { GiCarDoor } from "react-icons/gi";
import { MdOutlineLuggage } from "react-icons/md";
import { TbAirConditioning, TbManualGearbox } from "react-icons/tb";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import Button from "./Button";

const CarCard = () => {
  const limitCars = cars.slice(0, 3);
  const [activeDropdown, setActiveDropdown] = useState("");
  const toggleDropdown = (dropdown: string) => {
    // so this basically says: is this dropdown already open? if not the drop down eyy
    setActiveDropdown((prev) => (prev === dropdown ? "" : dropdown));
  };

  return (
    <>
      {limitCars.map((car) => (
        <div className="w-full py-3 px-10 border-t border-gray-900/20">
          <div key={car.id} className="flex gap-7">
            <img
              src={car.image}
              alt={car.name}
              className="h-[200px] rounded-md"
            />
            <div className="w-full flex items-center justify-between">
              <div>
                <h1 className="font-bold text-3xl">{car.name}</h1>
                <h2 className="flex items-center gap-2 text-primary mb-2">
                  <span className="text-lg font-bold">{car.rating}</span>{" "}
                  <FaStar />
                </h2>
                <ul className="text-gray-600 flex gap-3">
                  <li className="flex items-center gap-1">
                    <FaCar />
                    {car.type}
                  </li>
                  <li className="flex items-center gap-1">
                    <FaUsers />
                    {car.capacity}
                  </li>
                  <li className="flex items-center gap-1">
                    <GiCarDoor />
                    {car.doors}
                  </li>
                  <li className="flex items-center gap-1">
                    <MdOutlineLuggage />
                    {car.baggage}
                  </li>
                  <li className="flex items-center gap-1">
                    <TbAirConditioning />
                    {car.airConditioning}
                  </li>
                  <li className="flex items-center gap-1">
                    <TbManualGearbox />
                    {car.transmission}
                  </li>
                </ul>
                <ul>
                  <li className="flex items-center gap-2 text-sm">
                    <FaCheck className="text-primary" />
                    <span className="text-gray-600 "> Unlimited Mileage</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <FaCheck className="text-primary" />
                    <span className="text-gray-600 ">
                      {" "}
                      Basic protection included
                    </span>
                  </li>
                </ul>
                <button
                  type="button"
                  onClick={() => toggleDropdown(car.name)}
                  aria-expanded={activeDropdown === car.name}
                  aria-controls="dropdown"
                  className="text-primary font-bold text flex items-center mt-5 transition duration-7 cursor-pointer"
                >
                  More details{" "}
                  <span>
                    {activeDropdown === car.name ? (
                      <RiArrowDropDownLine />
                    ) : (
                      <RiArrowDropUpLine />
                    )}
                  </span>
                </button>
              </div>
              <div className="text-right">
                <h1 className="text-xl font-bold ">
                  ${car.pricePerDay}.00/day
                </h1>
                <p className="text-gray-600 mb-5">
                  TOTAL ${car.pricePerDay}.00/day
                </p>
                <Button label="Book now" onClick={() => {}} />
              </div>
            </div>
          </div>
          <div
            className={`${
              activeDropdown === car.name ? "block" : "hidden"
            } my-10`}
          >
            <h3 className="text-lg font-bold mb-2">Full Details</h3>
            <ul className="text-gray-600 flex gap-3 mb-4">
              <li className="flex items-center gap-1">
                <FaCar />
                {car.type}
              </li>
              <li className="flex items-center gap-1">
                <FaUsers />
                {car.capacity} Person capacity
              </li>
              <li className="flex items-center gap-1">
                <GiCarDoor />
                {car.doors} Doors
              </li>
              <li className="flex items-center gap-1">
                <MdOutlineLuggage />
                {car.baggage} Luggages
              </li>
              <li className="flex items-center gap-1">
                <TbAirConditioning />
                {car.airConditioning}
              </li>
              <li className="flex items-center gap-1">
                <TbManualGearbox />
                {car.transmission}
              </li>
              <li className="flex items-center gap-1">
                <FaGasPump />
                {car.gasType}
              </li>
            </ul>
            <p>{car.description}</p>
            <h3 className="font-bold mt-2 mb-2">Features:</h3>
            <ul className="list-disc list-inside">
              {car.features.map((feat, index) => (
                <li key={index + 1}>{feat}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default CarCard;
