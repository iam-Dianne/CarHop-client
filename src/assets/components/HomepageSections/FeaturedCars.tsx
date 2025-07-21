import { useNavigate } from "react-router-dom";
import Caption from "../Caption";
import CarCard from "../CarCard";
import Button from "../Button";

const FeaturedCars = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-20 flex flex-col items-center">
      <Caption label="RECENTLY VIEWED" className="mb-10" />
      <CarCard />
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
