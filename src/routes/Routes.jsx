import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Transport from "../pages/Transport/Transport/Transport";
import Warning from "../pages/Warning/Warning";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/transport",
        element: <Transport></Transport>
      },
      {
        path: "/warning",
        element: <Warning></Warning>
      }
    ],
  },
]);

export default router;
