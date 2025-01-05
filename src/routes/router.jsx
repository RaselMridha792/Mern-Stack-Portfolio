import { createBrowserRouter } from "react-router-dom";
import MainPage from "./MainPage";
import Homepage from "../pages/homepages/Homepage";
import AdminPost from "../pages/admin/AdminPost";
import UpdatePost from "../pages/admin/UpdatePost";
import ProjectDetails from "../pages/homepages/projects/ProjectDetails";
import ContactMe from "../pages/homepages/ContactMe";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    children: [
      { path: "/", element: <Homepage></Homepage> },
      { path: "/admin", element: <AdminPost></AdminPost> },
      { path: "/admin/update", element: <UpdatePost></UpdatePost> },
      { 
        path: "/project/details/:id", 
        element: <ProjectDetails></ProjectDetails>,
        loader: ({params})=> fetch(`https://portfolio-server-site-kappa.vercel.app/projects/${params.id}`)
       },
       {
        path: '/contact',
        element: <ContactMe></ContactMe>
       }
    ],
  },
]);

export default router;
