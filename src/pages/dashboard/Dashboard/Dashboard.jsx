import { NavLink, Outlet } from "react-router-dom";
import useRole from "../../../hooks/useRole";

const Dashboard = () => {
  const [, , role] = useRole();

  return (
    <div className="drawer lg:drawer-open bg-dashboard-texture bg-cover">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full">
          {/* Sidebar content here */}
          {role === "student" && (
            <>
              <li>
                <NavLink to="/dashboard/selected-classes">
                  My Selected Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/enrolled-classes">
                  My Enrolled Classes
                </NavLink>
              </li>
            </>
          )}
          {role === "instructor" && (
            <>
              <li>
                <NavLink to="/dashboard/add-class">Add a Class</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/total-classes">My Classes</NavLink>
              </li>
            </>
          )}
          {role === "admin" && (
            <>
              <li>
                <NavLink to="/dashboard/manage-classes">Manage Classes</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-users">Manage Users</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
