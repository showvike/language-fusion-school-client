import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Login from "../pages/login/Login/Login";
import Error from "../pages/shared/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default router;
