import { useNavigate } from "react-router-dom";
import Caption from "../Caption";
import CarCard from "../CarCard";
import Button from "../Button";

const FeaturedCars = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-20 flex flex-col items-center">
      <Caption label="FEATURED CARS" className="mb-2" />
      <p className="mb-10">
        Choose from a variety of vehicles catered to your needs and ensured to
        be the best
      </p>
      <CarCard limit={3} />
      <Button
        label="Browse more >"
        onClick={() => {
          navigate("/vehicles");
        }}
        variant="secondary"
        className="mt-10"
      />
    </div>
  );
};

export default FeaturedCars;
