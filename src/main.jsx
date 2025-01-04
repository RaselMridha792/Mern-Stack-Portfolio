import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MainPage from "./routes/MainPage";
import router from "./routes/router";
import NavigateProvider from "./context/NavigateProvider";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavigateProvider>
    <RouterProvider router={router}>
        <MainPage></MainPage>
      </RouterProvider>
    </NavigateProvider>
  </StrictMode>
);
