import civicImage from "../assets/cars/car-civic.jfif";
import camryImage from "../assets/cars/car-camry.jfif";
import crvImage from "../assets/cars/car-crv.jfif";
import explorerImage from "../assets/cars/car-explorer.jfif";
import hiaceImage from "../assets/cars/car-hiace.jfif";
import lcImage from "../assets/cars/car-lc.jfif";

const cars = [
  {
    id: 1,
    name: "Honda Civic",
    image: civicImage,
    type: "Sedan",
    capacity: 5,
    doors: 4,
    baggage: 2,
    airConditioning: "A/C",
    gasType: "Petrol",
    transmission: "Automatic",
    pricePerDay: 45,
    rating: 4.6,
    description:
      "A compact and reliable sedan, perfect for city driving and fuel efficiency.",
    features: [
      "Bluetooth",
      "Rear Camera",
      "Cruise Control",
      "Lane Assist",
      "USB Charging",
    ],
  },
  {
    id: 2,
    name: "Toyota Camry",
    image: camryImage,
    type: "Sedan",
    capacity: 5,
    doors: 4,
    baggage: 2,
    airConditioning: "A/C",
    gasType: "Petrol",
    transmission: "Automatic",
    pricePerDay: 50,
    rating: 4.7,
    description:
      "A mid-size sedan offering comfort, style, and smooth performance for everyday use.",
    features: [
      "Apple CarPlay",
      "Dual Zone A/C",
      "Keyless Entry",
      "Blind Spot Monitor",
      "Heated Seats",
    ],
  },
  {
    id: 3,
    name: "Honda CR-V",
    image: crvImage,
    type: "SUV",
    capacity: 5,
    doors: 5,
    baggage: 3,
    airConditioning: "A/C",
    gasType: "Petrol",
    transmission: "Automatic",
    pricePerDay: 60,
    rating: 4.5,
    description:
      "A versatile SUV with ample space and comfort for families or adventure seekers.",
    features: [
      "All-Wheel Drive",
      "Power Tailgate",
      "Sunroof",
      "Touchscreen Display",
      "Rear Camera",
    ],
  },
  {
    id: 4,
    name: "Ford Explorer",
    image: explorerImage,
    type: "SUV",
    capacity: 7,
    doors: 5,
    baggage: 4,
    airConditioning: "A/C",
    gasType: "Petrol",
    transmission: "Automatic",
    pricePerDay: 80,
    rating: 4.4,
    description:
      "A powerful 7-seater SUV with advanced features for long trips and group travel.",
    features: [
      "Third Row Seating",
      "Navigation System",
      "Remote Start",
      "Blind Spot Info",
      "Adaptive Cruise",
    ],
  },
  {
    id: 5,
    name: "Toyota Hiace",
    image: hiaceImage,
    type: "Van",
    capacity: 15,
    doors: 4,
    baggage: 6,
    airConditioning: "A/C",
    gasType: "Diesel",
    transmission: "Manual",
    pricePerDay: 100,
    rating: 4.3,
    description:
      "A spacious van ideal for large groups or transport services, with high passenger capacity.",
    features: [
      "Passenger Bench Seating",
      "Power Windows",
      "Rear A/C",
      "Manual Transmission",
      "ABS Brakes",
    ],
  },
  {
    id: 6,
    name: "Toyota Land Cruiser",
    image: lcImage,
    type: "SUV",
    capacity: 7,
    doors: 5,
    baggage: 4,
    airConditioning: "A/C",
    gasType: "Diesel",
    transmission: "Automatic",
    pricePerDay: 120,
    rating: 4.8,
    description:
      "A rugged luxury SUV built for off-road performance and premium comfort.",
    features: [
      "4WD",
      "Leather Seats",
      "Sunroof",
      "Premium Audio",
      "Terrain Management System",
    ],
  },
];

export default cars;
