import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayouts />,
      errorElement: <ErrorPage />,
      children :[
        {
            path:'/',
            element: <Home />,
        }
      ]
    },
  ]);