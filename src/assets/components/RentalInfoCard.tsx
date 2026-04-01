import React from "react";
import { FaCalendar } from "react-icons/fa";
import LocationInput from "./LocationInput";
import Button from "./Button";
import type { BookingData } from "../types/booking";

type Props = {
  bookingData: BookingData;
  setBookingData: React.Dispatch<React.SetStateAction<BookingData>>;
  onNext: () => void;
};

const RentalInfoCard = ({ bookingData, setBookingData, onNext }: Props) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingData.location) {
      alert("Please enter a location");
      return;
    }
    onNext();
  };

  if (!bookingData) return null; // safety check

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <LocationInput
        label="Pickup / Drop-off Location"
        userInput={bookingData.location}
        setUserInput={(value) =>
          setBookingData((prev) => ({ ...prev, location: value }))
        }
      />

      <div className="flex flex-col sm:flex-row gap-5">
        <div className="flex flex-col gap-1 sm:w-1/2">
          <label className="font-bold flex items-center gap-1">
            <FaCalendar className="text-primary" /> Pickup Date & Time
          </label>
          <div className="flex gap-2">
            <input
              type="date"
              value={bookingData.pickupDate}
              onChange={(e) =>
                setBookingData((prev) => ({
                  ...prev,
                  pickupDate: e.target.value,
                }))
              }
              className="p-2 border-gray-900/20 border rounded-md bg-gray-50 w-2/3"
            />
            <input
              type="time"
              value={bookingData.pickupTime}
              onChange={(e) =>
                setBookingData((prev) => ({
                  ...prev,
                  pickupTime: e.target.value,
                }))
              }
              className="p-2 border-gray-900/20 border rounded-md bg-gray-50w-1/3"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1 sm:w-1/2">
          <label className="font-bold flex items-center gap-1">
            <FaCalendar className="text-primary" /> Drop-off Date & Time
          </label>
          <div className="flex gap-2">
            <input
              type="date"
              value={bookingData.dropoffDate}
              onChange={(e) =>
                setBookingData((prev) => ({
                  ...prev,
                  dropoffDate: e.target.value,
                }))
              }
              className="p-2 border-gray-900/20 border rounded-md bg-gray-50 w-2/3"
            />
            <input
              type="time"
              value={bookingData.dropoffTime}
              onChange={(e) =>
                setBookingData((prev) => ({
                  ...prev,
                  dropoffTime: e.target.value,
                }))
              }
              className="p-2 border-gray-900/20 border rounded-md bg-gray-50w-1/3"
            />
          </div>
        </div>
      </div>

      <Button
        label="Show Available Cars"
        type="submit"
        className="mt-2"
        onClick={() => {}}
      />
    </form>
  );
};

export default RentalInfoCard;
