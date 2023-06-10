import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Login from "../pages/login/Login/Login";
import Registration from "../pages/registration/Registration/Registration";
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
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default router;
