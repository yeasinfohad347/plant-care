import React, { useContext,  } from "react";
import logo from "../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Authentication/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { creatUser, updateUser, signInWithGoogle, setUser, user } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((res) => {
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photoUrl = e.target.photo.value;

    if (!regex.test(password)) {
      toast.error(
        "Password must include:\n• One uppercase letter\n• One lowercase letter\n• Minimum 6 characters",
        { autoClose: 5000 }
      );
      return;
    }

    creatUser(email, password)
      .then((res) => {
        updateUser({
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            Swal.fire({
              title: "Congratulations! You successfully registered!",
              icon: "success",
            });
            setUser({ ...user, displayName: name, photoURL: photoUrl });
            navigate(`${location.state ? location.state : "/"}`);
          })
          .catch((err) => {
            toast.error(err.message);
          });
      })
      .catch((err) => {
        if (err.code === "auth/email-already-in-use") {
          toast.error("This email is already registered.");
        } else {
          toast.error(err.message);
        }
      });
  };

  return (
    <div className="max-w-sm mx-auto my-20 p-5">
      <Helmet>
        <title>Register</title>
      </Helmet>

      <ToastContainer />

      <div className="text-center space-y-2 mb-6">
        <div className="flex justify-center">
          <img
            src={logo}
            className="h-12 w-12 rounded-[50%] bg-[#348553]"
            alt="logo"
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
            name="name"
            placeholder="Enter your Name"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Photo
          </label>
          <input
            type="url"
            name="photo"
            placeholder="Enter photo URL"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
          <p className="text-xs text-gray-500 mt-1">
            Password must contain an uppercase, lowercase, and a number
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
            <a href="#" className="font-medium text-green-600 hover:text-green-500">
              Forgot password?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Sign Up
          </button>
        </div>
      </form>

      <div className="text-center">
        <button
          onClick={handleGoogleSignIn}
          className="btn w-full bg-[#FEE502] text-black my-2 border-[#e5e5e5]"
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
