import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { AuthContext } from "../Authentication/AuthContext";
import Swal from "sweetalert2";
import { useNavigate, useLocation, Link } from "react-router";

const Login = () => {
  const [error, setError] = useState("");
  const { loginUser,signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

   const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((res) => {
        navigate(`${location.state ? location.state : "/"}`);
        
      })
      .catch((err) => {
        console.log(err)
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then(() => {
        Swal.fire({
          title: "Congratulations! You successfully logged in!",
          icon: "success",
        });
        navigate(location.state ? location.state : "/");
      })
      .catch(() => {
        setError("Wrong Password");
      });
  };

  return (
    <div className=" max-w-sm mx-auto my-20">
      <div className="text-center space-y-2 mb-6">
        <div className="flex justify-center">
          <img
            src={logo}
            className="h-12 w-12 rounded-full bg-[#348553]"
            alt="Logo"
          />
        </div>
        <h1 className="text-3xl font-bold text-green-800">Login</h1>
        <p className="text-gray-500">Your personal plant care assistant</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            required
          />
          <p className="text-xs text-gray-500 mt-1">
            Demo credentials are pre-filled for this prototype
          </p>
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center text-sm text-gray-700">
            <input
              type="checkbox"
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            />
            <span className="ml-2">Remember me</span>
          </label>

          <a
            href="#"
            className="text-sm font-medium text-green-600 hover:text-green-500"
          >
            Forgot password?
          </a>
        </div>

        {error && (
          <p className="text-red-600 text-sm whitespace-pre-line">{error}</p>
        )}

        <button
          type="submit"
          className="w-full py-2 px-4 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Sign in
        </button>
      </form>
      <div>
        {/* Login  with google */}
        <button
          onClick={handleGoogleSignIn}
          className="btn w-full  bg-[#FEE502]  text-black mt-2 border-[#e5e5e5]"
          type="button"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
        <p className="text-sm text-gray-600 text-center">
          Don't have an account?
          <Link
            to="/register"
            className="font-medium text-green-600 hover:text-green-500"
          >
            {" "}
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
