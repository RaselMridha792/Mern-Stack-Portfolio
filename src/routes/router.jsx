import { createBrowserRouter } from "react-router-dom";
import MainPage from "./MainPage";
import Homepage from "../pages/homepages/Homepage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    children: [
      { path: "/", element: <Homepage></Homepage> },
    ],
  },
]);

export default router;
