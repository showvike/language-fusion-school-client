import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import AllClasses from "../pages/allClasses/AllClasses/AllClasses";
import AllInstructors from "../pages/allInstructors/AllInstructors/AllInstructors";
import Home from "../pages/home/Home/Home";
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
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/instructors",
        element: <AllInstructors />,
        loader: () =>
          fetch(
            "https://b7a12-summer-camp-server-side-showvike.vercel.app/instructors"
          ),
      },
      {
        path: "/classes",
        element: <AllClasses />,
        loader: () =>
          fetch(
            "https://b7a12-summer-camp-server-side-showvike.vercel.app/classes"
          ),
      },
    ],
    errorElement: <Error />,
  },
]);

export default router;
