import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Toaster } from "sonner";
import MainLayout from "./assets/layouts/MainLayout";
import Homepage from "./assets/pages/Homepage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />
        </Route>
      </>
    )
  );
  return (
    <>
      <Toaster richColors position="top-right" />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
