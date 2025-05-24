import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Authentication/AuthContext";
import userLogo from "../../assets/user.png";
import Toggole from "../Toggole";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const handleToggle = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.log(err.message);
      });
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "bg-[#325432] text-white px-4 py-2 rounded-lg font-semibold"
      : "text-[#325432] hover:font-semibold px-4 py-2";

  return (
    <div className="bg-[#DDE5D7]">
      <div className="navbar w-11/12 mx-auto">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/" className={navLinkClass}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/allplants" className={navLinkClass}>
                  All Plants
                </NavLink>
              </li>
              <li>
                <NavLink to="/addplant" className={navLinkClass}>
                  Add Plant
                </NavLink>
              </li>
              <li>
                <NavLink to="/myplants" className={navLinkClass}>
                  My Plants
                </NavLink>
              </li>

              {/* Profile Link only visible in dropdown for sm devices */}
              {user && (
                <li className="block lg:hidden sm:hidden">
                  <NavLink to="/profile" className={navLinkClass}>
                    My Profile
                  </NavLink>
                </li>
              )}

              {/* Logout button inside dropdown on sm devices */}
              {user && (
                <li className="block lg:hidden sm:hidden">
                  <button
                    onClick={handleLogOut}
                    className="btn bg-[#325432] text-white rounded-2xl w-full"
                  >
                    Logout
                  </button>
                </li>
              )}

              {/* If user not logged in, show Login/Register in dropdown */}
              {!user && (
                <>
                  <li className="block lg:hidden sm:hidden">
                    <NavLink to="/login" className={navLinkClass}>
                      Login
                    </NavLink>
                  </li>
                  <li className="block lg:hidden sm:hidden">
                    <NavLink to="/register" className={navLinkClass}>
                      Register
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="flex items-center justify-center gap-2">
            <img
              src={logo}
              className="h-12 w-12 max-sm:hidden rounded-full bg-[#348553]"
              alt="logo"
            />
            <Link to="/" className="text-2xl max-sm:ml-2 font-bold text-[#325432]">
              PlantPal
            </Link>
          </div>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 space-x-1">
            <li>
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/allplants" className={navLinkClass}>
                All Plants
              </NavLink>
            </li>
            <li>
              <NavLink to="/addplant" className={navLinkClass}>
                Add Plant
              </NavLink>
            </li>
            <li>
              <NavLink to="/myplants" className={navLinkClass}>
                My Plants
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end gap-2 flex items-center">
          <Toggole handleToggle={handleToggle} />

          {/* Profile icon shown only on sm and md devices */}
          {user && (
            <NavLink
              to="/profile"
              className="hidden sm:block md:block ml-4"
              aria-label="User Profile"
            >
              <img
                data-tooltip-id="profileTooltip"
                data-tooltip-content={`${user?.displayName || "No Name"}\n${
                  user?.email || "No Email"
                }`}
                className="rounded-full w-12 h-12 object-cover cursor-pointer"
                src={user?.photoURL || userLogo}
                alt="User profile"
              />
              <Tooltip
                id="profileTooltip"
                place="bottom"
                className="max-w-xs break-words whitespace-pre-line z-10"
              />
            </NavLink>
          )}

          {/* Logout visible only md and above */}
          {user && (
            <button
              onClick={handleLogOut}
              className="btn bg-[#325432] text-white rounded-2xl ml-4 hidden sm:hidden md:inline-block"
            >
              Logout
            </button>
          )}

          {/* Auth buttons visible only md and above */}
          {!user && (
            <div className="flex gap-2 justify-center items-center ml-4 hidden sm:hidden md:flex">
              <NavLink
                to="/login"
                className="btn bg-[#325432] text-white rounded-2xl"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="btn bg-[#325432] text-white rounded-2xl"
              >
                Register
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
