import React from "react";
import logo from "../assets/logo.png"
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="space-y-6 max-w-sm mx-auto my-20">
      <div className="text-center space-y-2">
        <div className="flex justify-center ">
          <img
            src={logo}
            className="h-12 w-12 rounded-[50%] bg-[#348553]"
            alt=""
          />
        </div>
        <h1 className="text-3xl font-bold text-green-800">Register</h1>
        <p className="text-gray-500">Your personal plant care assistant</p>
      </div>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            placeholder="Enter your Name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Photo
          </label>
          <input
            type="url"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            placeholder="Enter photo url"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            defaultValue="demo@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            defaultValue="demo123"
          />
          <p className="text-xs text-gray-500 mt-1">
            Demo credentials are pre-filled for this prototype
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-700">
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-green-600 hover:text-green-500"
            >
              Forgot password?
            </a>
          </div>
        </div>

        <div>
          <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            Sign Up
          </button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?
            <Link
              to='/login'
              className="font-medium text-green-600 hover:text-green-500"
            >
              {" "}
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
