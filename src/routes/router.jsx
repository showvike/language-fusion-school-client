import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import AllClasses from "../pages/allClasses/AllClasses/AllClasses";
import AllInstructors from "../pages/allInstructors/AllInstructors/AllInstructors";
import AddClass from "../pages/dashboard/AddClass/AddClass";
import AddedClasses from "../pages/dashboard/AddedClasses/AddedClasses";
import Dashboard from "../pages/dashboard/Dashboard/Dashboard";
import EnrolledClasses from "../pages/dashboard/EnrolledClasses/EnrolledClasses";
import Feedback from "../pages/dashboard/Feedback/Feedback";
import ManageClasses from "../pages/dashboard/ManageClasses/ManageClasses";
import ManageUsers from "../pages/dashboard/ManageUsers/ManageUsers";
import SelectedClasses from "../pages/dashboard/SelectedClasses/SelectedClasses";
import Home from "../pages/home/Home/Home";
import Login from "../pages/login/Login/Login";
import Registration from "../pages/registration/Registration/Registration";
import Error from "../pages/shared/Error/Error";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import PrivateRoute from "./PrivateRoute";
import StudentRoute from "./StudentRoute";

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
            element: (
              <StudentRoute>
                <SelectedClasses />
              </StudentRoute>
            ),
          },
          {
            path: "/dashboard/enrolled-classes",
            element: (
              <StudentRoute>
                <EnrolledClasses />
              </StudentRoute>
            ),
          },
          {
            path: "/dashboard/add-class",
            element: (
              <InstructorRoute>
                <AddClass />
              </InstructorRoute>
            ),
          },
          {
            path: "/dashboard/added-classes",
            element: (
              <InstructorRoute>
                <AddedClasses />
              </InstructorRoute>
            ),
          },
          {
            path: "/dashboard/manage-classes",
            element: (
              <AdminRoute>
                <ManageClasses />
              </AdminRoute>
            ),
          },
          {
            path: "/dashboard/manage-classes/feedback/:id",
            element: (
              <AdminRoute>
                <Feedback />
              </AdminRoute>
            ),
          },
          {
            path: "/dashboard/manage-users",
            element: (
              <AdminRoute>
                <ManageUsers />
              </AdminRoute>
            ),
          },
        ],
      },
    ],
    errorElement: <Error />,
  },
]);

export default router;
