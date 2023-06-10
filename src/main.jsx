import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import AuthProvider from "./providers/AuthProvider";
import router from "./routes/router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <div className="container mx-auto text-white">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>
);
