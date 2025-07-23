import React from "react";
import Caption from "../Caption";
import Button from "../Button";
import { IoCarSportOutline } from "react-icons/io5";
import { RiCoinsLine } from "react-icons/ri";
import { BsCoin } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { MdSupportAgent } from "react-icons/md";

const Whyus = () => {
  return (
    <div className="xl:h-screen w-full mt-20 flex flex-col xl:flex-row items-center gap-20 xl:gap-28">
      <div className="col xl:w-1/2 text-center xl:text-left">
        <Caption label="WHY CHOOSE US" className="mb-3 inline-block" />
        <h1 className="font-extrabold text-4xl sm:text-3 xl mb-2">
          Best deals for the best experience
        </h1>
        <p className="mb-5 ">
          Whether you’re planning a quick city drive, a scenic weekend escape,
          or handling business on the go, our services are designed to give you
          comfort, control, and complete peace of mind. We’ve combined
          convenience, affordability, and exceptional service to create a
          seamless rental experience that caters to both everyday needs and
          special moments.
        </p>
        <Button label="More details" onClick={() => {}} />
      </div>
      <div className="col xl:w-1/2 flex flex-col gap-7">
        <div className="row flex flex-col xl:flex-row items-center gap-8 text-center xl:text-left">
          <IoCarSportOutline className="text-primary text-6xl" />
          <div className="xl:w-3/4">
            <h4 className="font-bold mb-1">Wide Vehicle Selection</h4>
            <p>
              Choose from a diverse range of vehicles tailored to fit your
              lifestyle. A compact car for city driving, a family SUV for road
              trips, or a van for group travel, our fleet is regularly updated.
            </p>
          </div>
        </div>
        <div className="row flex flex-col xl:flex-row items-center gap-8 text-center xl:text-left">
          <BsCoin className="text-primary text-6xl" />
          <div className="xl:w-3/4">
            <h4 className="font-bold mb-1">Transparent & Fair Pricing</h4>
            <p>
              We believe in honest pricing with no hidden surprises. Our clear
              and competitive rates mean you can plan your trip with confidence,
              knowing exactly what you're paying for.
            </p>
          </div>
        </div>
        <div className="row flex flex-col xl:flex-row items-center gap-8 text-center xl:text-left">
          <MdSupportAgent className="text-primary text-6xl" />
          <div className="xl:w-3/4">
            <h4 className="font-bold mb-1">Transparent & Fair Pricing</h4>
            <p>
              We believe in honest pricing with no hidden surprises. Our clear
              and competitive rates mean you can plan your trip with confidence,
              knowing exactly what you're paying for.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
