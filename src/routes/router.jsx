import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Error from "../pages/shared/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
  },
]);

export default router;
