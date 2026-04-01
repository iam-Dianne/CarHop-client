import React, { useState } from "react";
import type { BookingData } from "../types/booking";
import { initialBookingData } from "../types/booking";
import Hero from "../components/HomepageSections/Hero";
import FeaturedCars from "../components/HomepageSections/FeaturedCars";
import Whyus from "../components/HomepageSections/Whyus";
import Faqs from "../components/HomepageSections/Faqs";
import RentalInfoCard from "../components/RentalInfoCard";

const Homepage = () => {
  const [bookingData, setBookingData] =
    useState<BookingData>(initialBookingData);

  return (
    <div className="px-7 sm:px-20 lg:px-[100px] xl:px-[200px] 2xl:px-[450px] text-gray-900">
      <Hero />
      <section className="min-h-[400px] w-full py-10 flex items-center 2xl:hidden">
        <div className="w-full px-4 sm:px-8 py-5 backdrop-blur-md border border-gray-900/20 bg-gray-100/40 text-gray-900 shadow-lg rounded-lg">
          <RentalInfoCard
            bookingData={bookingData}
            setBookingData={setBookingData}
            onNext={() => console.log("Next step", bookingData)}
          />
        </div>
      </section>
      <FeaturedCars />
      <Whyus />
      <Faqs />
    </div>
  );
};

export default Homepage;
