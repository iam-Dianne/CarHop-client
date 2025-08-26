import Caption from "../components/Caption";
import CarCard from "../components/CarCard";

const Vehicles = () => {
  return (
    <div className="min-h-screen sm:pt-[120px] pt-[100px] px-7 sm:px-20 lg:px-[100px] xl:px-[200px] 2xl:px-[450px] text-gray-900 flex flex-col items-center">
      <Caption label="FEATURED CARS" className="mb-2" />
      <p className="mb-10 text-center">
        Choose from a variety of vehicles catered to your needs and ensured to
        be the best
      </p>
      <CarCard />
    </div>
  );
};

export default Vehicles;
