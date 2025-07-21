import { FaCalendar } from "react-icons/fa";
import LocationInput from "./LocationInput";
import Button from "./Button";

const RentalInfoCard = ({ className }: { className: string }) => {
  return (
    <div
      className={`w-full px-4 sm:px-8 py-5 backdrop-blur-md border border-gray-900/20 bg-gray-100/40 text-gray-900 shadow-lg rounded-lg ${className} snap-center`}
    >
      <form action="" className="flex flex-col gap-4">
        <div className="w-full flex flex-col sm:flex-row gap-5">
          <LocationInput label="Pickup Location" />
          <LocationInput label="Drop-off Location" />
        </div>
        <div className="w-full flex gap-5 flex-col sm:flex-row  ">
          <div className="form-group flex flex-col gap-1 sm:w-1/2">
            <label htmlFor="" className="font-bold flex items-center gap-1">
              <FaCalendar className="text-primary" /> Pickup Date & Time
            </label>
            <div className="w-full flex gap-2">
              <input
                type="date"
                className="p-2 rounded-md border border-gray-900/20 bg-gray-50 w-2/3"
              />
              <input
                type="time"
                className="p-2 rounded-md border border-gray-900/20 bg-gray-50 w-1/3"
              />
            </div>
          </div>
          <div className="form-group flex flex-col gap-1 sm:w-1/2">
            <label htmlFor="" className="font-bold flex items-center gap-1">
              <FaCalendar className="text-primary" /> Drop-off Date & Time
            </label>
            <div className="w-full flex gap-2">
              <input
                type="date"
                className="p-2 rounded-md border border-gray-900/20 bg-gray-50 w-2/3"
              />
              <input
                type="time"
                className="p-2 rounded-md border border-gray-900/20 bg-gray-50 w-1/3"
              />
            </div>
          </div>
        </div>
        <Button
          label="Search"
          onClick={() => {}}
          className="mt-2 sm:w-50 sm:self-center"
        />
      </form>
    </div>
  );
};

export default RentalInfoCard;
