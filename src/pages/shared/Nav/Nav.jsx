import { Link } from "react-router-dom";
import defaultUserImage from "../../../assets/default-user-image.jpg";
import logo2 from "../../../assets/logo-2.png";
import useAuth from "../../../hooks/useAuth";

const Nav = () => {
  const { user, logOut } = useAuth();

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      {user && (
        <li>
          <Link>Dashboard</Link>
        </li>
      )}
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("logout successful");
      })
      .catch((error) => {
        const message = error.message;
        console.log(message);
      });
  };

  return (
    <div className="navbar bg-neon-blue">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/">
          <div className="flex gap-4 items-center">
            <img
              className="w-12 h-12 object-contain"
              src={logo2}
              alt="logo 2"
            />
            <h1 className="font-bold text-xl">Language Fusion School</h1>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div
            className="tooltip tooltip-warning tooltip-left"
            data-tip="Logout"
          >
            <button onClick={handleLogOut}>
              <img
                className="w-12 h-12 rounded-full object-cover"
                src={user.photoURL || defaultUserImage}
              />
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn hover:bg-blue-700 hover:text-white">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
