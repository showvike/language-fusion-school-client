import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import AllClasses from "../pages/allClasses/AllClasses/AllClasses";
import AllInstructors from "../pages/allInstructors/AllInstructors/AllInstructors";
import AddClass from "../pages/dashboard/AddClass/AddClass";
import Dashboard from "../pages/dashboard/Dashboard/Dashboard";
import EnrolledClasses from "../pages/dashboard/EnrolledClasses/EnrolledClasses";
import SelectedClasses from "../pages/dashboard/SelectedClasses/SelectedClasses";
import TotalClasses from "../pages/dashboard/TotalClasses/TotalClasses";
import Home from "../pages/home/Home/Home";
import Login from "../pages/login/Login/Login";
import Registration from "../pages/registration/Registration/Registration";
import Error from "../pages/shared/Error/Error";
import PrivateRoute from "./PrivateRoute";

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
            "https://b7a12-summer-camp-server-side-showvike.vercel.app/users?role=instructor"
          ),
      },
      {
        path: "/classes",
        element: <AllClasses />,
        loader: () =>
          fetch(
            "https://b7a12-summer-camp-server-side-showvike.vercel.app/classes?status=approved"
          ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
        children: [
          {
            path: "/dashboard/selected-classes",
            element: <SelectedClasses />,
          },
          {
            path: "/dashboard/enrolled-classes",
            element: <EnrolledClasses />,
          },
          {
            path: "/dashboard/add-class",
            element: <AddClass />,
          },
          {
            path: "/dashboard/total-classes",
            element: <TotalClasses />,
          },
        ],
      },
    ],
    errorElement: <Error />,
  },
]);

export default router;
