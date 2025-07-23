import Faqs from "../components/HomepageSections/Faqs";
import FeaturedCars from "../components/HomepageSections/FeaturedCars";
import Hero from "../components/HomepageSections/Hero";
import Whyus from "../components/HomepageSections/Whyus";
import RentalInfoCard from "../components/RentalInfoCard";

const Homepage = () => {
  return (
    <div className="px-7 sm:px-20 lg:px-[100px] xl:px-[200px] 2xl:px-[450px] text-gray-900">
      <Hero />
      <section className="min-h-[400px] w-full py-10 flex items-center 2xl:hidden ">
        <RentalInfoCard className="block" />
      </section>
      <FeaturedCars />
      <Whyus />
      <Faqs />
    </div>
  );
};

export default Homepage;
