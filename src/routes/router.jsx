import { createBrowserRouter } from "react-router-dom";
import MainPage from "./MainPage";
import Homepage from "../pages/homepages/Homepage";
import AdminPost from "../pages/admin/AdminPost";
import UpdatePost from "../pages/admin/UpdatePost";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    children: [
      { path: "/", element: <Homepage></Homepage> },
      {path: "/admin", element: <AdminPost></AdminPost>},
      {path: "/admin/update", element: <UpdatePost></UpdatePost>}
    ],
  },
]);

export default router;
