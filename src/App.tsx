import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Toaster } from "sonner";
import MainLayout from "./assets/layouts/MainLayout";
import Homepage from "./assets/pages/Homepage";
import Vehicles from "./assets/pages/Vehicles";
import ScrollToTop from "./assets/components/LayoutComponents/ScrollToTop";
import BookingPage from "./assets/pages/BookingPage";
import AboutPage from "./assets/pages/AboutPage";
import ContactPage from "./assets/pages/ContactPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={
            <ScrollToTop>
              <MainLayout />
            </ScrollToTop>
          }
        >
          <Route index element={<Homepage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </>
    )
  );
  return (
    <>
      <Toaster richColors position="bottom-right" />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
