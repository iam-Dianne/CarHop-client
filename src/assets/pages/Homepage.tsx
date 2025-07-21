import Hero from "../components/Hero";
import RentalInfoCard from "../components/RentalInfoCard";

const Homepage = () => {
  return (
    <div className="px-7 sm:px-20 lg:px-[100px] xl:px-[120px] ">
      <Hero />
      <RentalInfoCard className="block" />
    </div>
  );
};

export default Homepage;
