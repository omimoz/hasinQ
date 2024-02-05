import { Navigate, createBrowserRouter } from "react-router-dom";

import MainLayout from "../components/layouts/MainLayout";
import Home from "../pages/home";
import About from "../pages/about";
import SinglePage from "../pages/single-card";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home />, index: true },
      { path: "about", element: <About /> },
      { path: "/:id", element: <SinglePage /> },
      {
        path: "*",
        element: <Navigate to={"/"} />,
      },
      {
        path: "/",
        element: <Navigate to={"/"} />,
      },
    ],
  },
]);
export default router;
