import React from "react";
import Caption from "./Caption";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="text-gray-900 h-screen w-full flex items-center">
      <div className="w-full flex gap-10 sm:hero-img ">
        <div className="col sm:w-[500px] flex flex-col items-center sm:items-start text-center sm:text-left">
          <Caption label="BROWSE. BOOK. DRIVE" className="font-bold" />
          <h1 className="text-5xl sm:text-6xl font-bold mt-5 mb-3">
            Car<span className="text-primary">Hop</span> to your next
            destination
          </h1>
          <p className="mb-8">
            Find the perfect ride for every journey. From quick city trips to
            weekend getaways. Browse, book, and hit the road in minutes with our
            easy-to-use car rental platform.
          </p>
          <div className="flex gap-5">
            <Button label="Book now" onClick={() => {}} variant="primary" />
            <Button
              label="Learn more >"
              onClick={() => {}}
              variant="tertiary"
            />
          </div>
        </div>
        <div className="col hidden sm:flex sm:items-center mt-20 ">
          <img
            src="../../../public/hero-car.png"
            alt="hero car image"
            className="transform -scale-x-100 w-[600px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
