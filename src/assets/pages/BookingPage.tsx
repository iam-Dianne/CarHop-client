import React, { useState } from "react";
import RentalInfoStep from "../components/BookingSteps/RentalInfoStep";
import type { BookingData } from "../types/booking";
import { initialBookingData } from "../types/booking";

const BookingPage = () => {
  const [step, setStep] = useState(0);

  const [bookingData, setBookingData] =
    useState<BookingData>(initialBookingData);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <RentalInfoStep
            bookingData={bookingData}
            setBookingData={setBookingData}
            onNext={nextStep}
          />
        );

      case 1:
        return <div>Next step coming soon 👀</div>;

      default:
        return <div>Invalid step</div>;
    }
  };

  return (
    <div className="min-h-screen sm:pt-[150px] pt-[100px] px-7 sm:px-20 lg:px-[100px] xl:px-[200px] 2xl:px-[450px] text-gray-900">
      {/* PROGRESS */}
      <div className="flex justify-center border-b-1 pb-2">
        STEP {step + 1} OF {step + 1}
      </div>

      <div className="sm:flex justify-between gap-14 mt-8">
        {/* FORM */}
        <div className="sm:w-3/4">{renderStep()}</div>

        {/* SUMMARY */}
        <div className="sm:h-[600px] h-14 sm:w-1/4 shadow-lg border border-gray-900/20 rounded-lg p-4">
          <div className="text-sm space-y-2">
            <p>
              <strong>Location:</strong> {bookingData.location}
            </p>
            <p>
              <strong>Pickup:</strong> {bookingData.pickupDate}{" "}
              {bookingData.pickupTime}
            </p>
            <p>
              <strong>Dropoff:</strong> {bookingData.dropoffDate}{" "}
              {bookingData.dropoffTime}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
