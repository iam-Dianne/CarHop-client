import Caption from "../components/Caption";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { IoCalendar, IoCard, IoCarSportOutline } from "react-icons/io5";
import { BsCoin } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";
import Faqs from "../components/HomepageSections/Faqs";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen sm:pt-[120px] pt-[100px] px-7 sm:px-20 lg:px-[100px] xl:px-[200px] 2xl:px-[450px] text-gray-900">
      <div className="flex flex-col items-center text-center">
        <Caption label="WHY CHOOSE US" className="mb-3 inline-block" />
        <h1 className="font-extrabold sm:text-3xl mb-2">
          Best deals for the best experience
        </h1>
        <p className="mb-5 sm:px-[120px] ">
          Whether you’re planning a quick city drive, a scenic weekend escape,
          or handling business on the go, our services are designed to give you
          comfort, control, and complete peace of mind. We’ve combined
          convenience, affordability, and exceptional service to create a
          seamless rental experience that caters to both everyday needs and
          special moments.
        </p>
        <div className="flex flex-col mt-10 gap-14 sm:px-[200px]">
          <div className=" row flex flex-col xl:flex-row items-center justify-center gap-8 text-start ">
            <IoCarSportOutline className="text-primary text-6xl" />
            <div className="xl:w-3/4 text-center xl:text-start">
              <h4 className="font-bold mb-1 sm:text-xl">
                Wide Vehicle Selection
              </h4>
              <p>
                Choose from a diverse range of vehicles tailored to fit your
                lifestyle. A compact car for city driving, a family SUV for road
                trips, or a van for group travel, our fleet is regularly
                updated.
              </p>
            </div>
          </div>
          <div className="row flex flex-col xl:flex-row items-center justify-center gap-8 text-end">
            <BsCoin className="text-primary text-6xl block xl:hidden" />
            <div className="xl:w-3/4 text-center xl:text-start">
              <h4 className="font-bold mb-1 sm:text-xl">
                Transparent & Fair Pricing
              </h4>
              <p>
                We believe in honest pricing with no hidden surprises. Our clear
                and competitive rates mean you can plan your trip with
                confidence, knowing exactly what you're paying for.
              </p>
            </div>
            <BsCoin className="text-primary text-6xl hidden xl:block" />
          </div>
          <div className="row flex flex-col xl:flex-row items-center justify-center gap-8 text-start">
            <MdSupportAgent className="text-primary text-6xl" />
            <div className="xl:w-3/4 text-center xl:text-start">
              <h4 className="font-bold mb-1 sm:text-xl">
                Transparent & Fair Pricing
              </h4>
              <p>
                We believe in honest pricing with no hidden surprises. Our clear
                and competitive rates mean you can plan your trip with
                confidence, knowing exactly what you're paying for.
              </p>
            </div>
          </div>
        </div>

        {/* HOW */}
        <Caption label="HOW TO BOOK" className="mb-3  mt-24 inline-block" />
        <h1 className="font-extrabold sm:text-3xl mb-2">
          Your adventure starts here
        </h1>
        <p className="mb-5 sm:px-[200px] ">
          Booking your ride has never been this easy! Pick your favorite car,
          set your dates, and reserve in just a few clicks. Hit the road with
          confidence and start your adventure!
        </p>
        <div className="flex flex-col xl:flex-row justify-between mt-10 gap-7">
          <div className="row flex flex-col xl:flex-row  gap-8 text-center">
            <div className="xl:w-3/4 ">
              <IoCalendar className="text-primary text-6xl mx-auto mb-4" />
              <h4 className="font-bold mb-1 sm:text-xl">
                1. Select Date & Location
              </h4>
              <p>
                Pick your preferred pickup and drop-off dates, along with the
                location that’s most convenient for you.
              </p>
            </div>
            <div className="xl:w-3/4">
              <IoCarSportOutline className="text-primary text-6xl mx-auto mb-4" />
              <h4 className="font-bold mb-1 sm:text-xl">2. Choose Your Car</h4>
              <p>
                Explore our wide selection of vehicles and find the one that
                matches your trip — whether it’s a compact car for city errands,
                a comfortable sedan for a weekend getaway, or a spacious SUV for
                family adventures.
              </p>
            </div>
            <div className="xl:w-3/4">
              <IoCard className="text-primary text-6xl mx-auto mb-4" />
              <h4 className="font-bold mb-1 sm:text-xl">3. Confirm & Pay</h4>
              <p>
                Once you’ve reviewed your booking details, simply proceed to our
                secure checkout to confirm your reservation. You’ll receive an
                instant booking confirmation with all the information you need.
              </p>
            </div>
          </div>
        </div>
        <Button
          label="Book now"
          onClick={() => {
            navigate("/booking");
          }}
          variant="primary"
          className="mt-20 "
        />
        {/* FAQS */}
        <div className="mt-24">
          <Faqs />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
