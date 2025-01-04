import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MainPage from "./routes/MainPage";
import router from "./routes/router";
import NavigateProvider from "./context/NavigateProvider";
import AuthProvider from "./context/AuthProvider";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <NavigateProvider>
        <RouterProvider router={router}>
          <MainPage></MainPage>
        </RouterProvider>
      </NavigateProvider>
    </AuthProvider>
  </StrictMode>
);
