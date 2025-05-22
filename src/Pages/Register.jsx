import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Authentication/AuthContext";

const Register = () => {
  const [error, setError] = useState("");
  const { creatUser, updateUser,signInWithGoogle } = useContext(AuthContext);
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
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const name = e.target.name.value;
    const photoUrl = e.target.photo.value;
    console.log(name, photoUrl);

    if (!regex.test(password)) {
      setError(
        "Must have an Uppercase letter in the password\nMust have a Lowercase letter in the password\nLength must be at least 6 characters"
      );
      return;
    } else {
      setError("");
    }

    creatUser(email, password)
      .then((res) => {
        updateUser({
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            navigate(`${location.state ? location.state : "/"}`);
          })
          .catch((err) => {
            console.log(err.message);
          });
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
        if (err.code === "auth/email-already-in-use") {
          setError("You have already been registered with this email.");
        } else {
          setError(err.message);
        }
      });
  };

  return (
    <div className=" max-w-sm mx-auto my-20">
      <div className="text-center space-y-2 mb-6">
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

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            placeholder="Enter your Name"
            name="name"
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
            name="photo"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            placeholder="Enter Email"
            name="email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            placeholder="password"
            name="password"
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
        {error && (
          <p style={{ color: "red", whiteSpace: "pre-line" }}>{error}</p>
        )}

        <div>
          <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            Sign Up
          </button>
        </div>
      </form>
      <div className="text-center">
        <button
          onClick={handleGoogleSignIn}
          className="btn w-full  bg-[#FEE502]  text-black my-2 border-[#e5e5e5]"
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
        <p className="text-sm text-gray-600">
          Already have an account?
          <Link
            to="/login"
            className="font-medium text-green-600 hover:text-green-500"
          >
            {" "}
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
