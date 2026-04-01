import React from "react";
import RentalInfoCard from "../RentalInfoCard";
import type { BookingData } from "../../types/booking";

type Props = {
  bookingData: BookingData;
  setBookingData: React.Dispatch<React.SetStateAction<BookingData>>;
  onNext: () => void;
};

const RentalInfoStep = ({ bookingData, setBookingData, onNext }: Props) => {
  return (
    <div className="w-full">
      <RentalInfoCard
        bookingData={bookingData}
        setBookingData={setBookingData}
        onNext={() => {
          console.log("next step", bookingData);
        }}
      />
    </div>
  );
};

export default RentalInfoStep;
