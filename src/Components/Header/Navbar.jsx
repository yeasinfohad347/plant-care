import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Authentication/AuthContext";
import userLogo from '../../assets/user.png'

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // console.log("sign out");
      })
      .catch((err) => {
        const error = err.message;
        console.log(error);
      });
  };

  return (
    <div className="bg-[#DDE5D7]">
      <div className="navbar w-11/12 mx-auto ">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/allplants">All Plants</NavLink>
              </li>
              <li>
                <NavLink to="/addplant">Add plant</NavLink>
              </li>
              <li>
                <NavLink to='/myplants'>My Plants</NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center gap-2">
            <img
              src={logo}
              className="h-12 w-12 rounded-[50%] bg-[#348553]"
              alt=""
            />
            <Link to='/' className=" text-2xl font-bold text-[#325432]">PlantPal</Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/allplants">All Plants</NavLink>
            </li>
            <li>
              <NavLink to="/addplant">Add plant</NavLink>
            </li>
            <li>
              <NavLink to='/myplants'>My Plants</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <NavLink to="/profile">
            <img
              className="rounded-full w-12 h-12 object-cover cursor-pointer"
              src={user?.photoURL || userLogo}
              alt="User profile"
            />
          </NavLink>
          {user ? (
            <button
              onClick={handleLogOut}
              className="btn bg-[#325432] text-white rounded-2xl"
            >
              Logout
            </button>
          ) : (
            <div className="flex gap-2 justify-center items-center">
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

        {/* <div className="navbar-end gap-2">
          <Link to="/login" className="btn bg-[#325432] text-white rounded-2xl">
            Login
          </Link>
          <Link
            to="/register"
            className="btn bg-[#325432] text-white rounded-2xl"
          >
            Register
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
