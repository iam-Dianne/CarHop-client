import { Outlet } from "react-router-dom";
import Navbar from "../components/LayoutComponents/Navbar";
import Footer from "../components/LayoutComponents/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
