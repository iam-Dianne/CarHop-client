import React from "react";
import { useState } from "react";
import Button from "../components/Button";

const BookingPage = () => {
  const [step, setStep] = useState(0);
  const [bookingData, setBookingData] = useState([]);

  const steps = ["Step 1", "Step 2", "Step 3"];

  const currentStep = steps[step];

  return (
    <div className="min-h-screen sm:pt-[150px] pt-[100px] px-7 sm:px-20 lg:px-[100px] xl:px-[200px] 2xl:px-[450px] text-gray-900">
      {/* PROGRESS BAR */}
      <div className="flex justify-center bg-red-200">
        [ PROGRESS BAR DITO ]
      </div>
      {/* COWNTENT */}
      <div className="sm:flex mt-8">
        {/* FORM CONTENT */}
        <div className=" sm:w-2/3">
          <div>{currentStep}</div>
          {/* BUTTONSSSS */}
          <div className="flex gap-10">
            <Button
              label="Back"
              onClick={() => {
                setStep((prev) => prev - 1);
                console.log(step);
              }}
              variant="primary"
              className="mt-2"
            />
            <Button
              label="Next"
              onClick={() => {
                setStep((prev) => prev + 1);
                console.log(step);
              }}
              variant="primary"
              className="mt-2"
            />
          </div>
        </div>
        {/* SUMMARY */}
        <div className="sm:h-[600px] h-14 sm:w-1/3 shadow-lg border border-gray-900/20 rounded-lg p-4">
          SUMMARY
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
