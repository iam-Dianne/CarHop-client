import Caption from "../Caption";
import Button from "../Button";
import RentalInfoCard from "../RentalInfoCard";

const Hero = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center gap-5 2xl:pt-24 2xl:gap-24 snap-center">
      <div className="">
        <div className="w-full flex justify-center gap-10">
          <div className="col xl:w-[500px] flex flex-col items-center xl:items-start text-center xl:text-left ">
            <Caption label="BROWSE. BOOK. DRIVE" className="font-bold" />
            <h1 className="text-5xl sm:text-5xl 2xl:text-6xl font-bold mt-5 mb-3">
              Car<span className="text-primary">Hop</span> to your next
              destination
            </h1>
            <p className="mb-8">
              Find the perfect ride for every journey. From quick city trips to
              weekend getaways. Browse, book, and hit the road in minutes with
              our easy-to-use car rental platform.
            </p>
            <div className="flex gap-5">
              <Button label="Book now" onClick={() => {}} variant="primary" />
              <Button
                label="Learn more >"
                onClick={() => {}}
                variant="tertiary"
              />
            </div>
          </div>
          <div className="col hidden xl:flex xl:items-center mt-20 ">
            <img
              src="../../../hero-car.png"
              alt="hero car image"
              className="transform -scale-x-100 w-[600px] xl:w-[800px]"
            />
          </div>
        </div>
      </div>
      <RentalInfoCard className="hidden 2xl:block" />
    </section>
  );
};

export default Hero;
