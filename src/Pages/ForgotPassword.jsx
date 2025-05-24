import React, { useState, useEffect, useContext } from "react";
import { useLocation, Link } from "react-router"; 
import Swal from "sweetalert2"; 
import { AuthContext } from "../Authentication/AuthContext";

import { Helmet } from "react-helmet-async";

const ForgotPassword = () => {
  const { forgotPass } = useContext(AuthContext);
  const location = useLocation();
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();
   
    forgotPass(email)
      .then(() => {
        
      })
      .catch((error) => {
        console.log(error.message)
      });

    //  show success message
    Swal.fire({
      title: "Password reset email sent!",
      text: `Check your inbox for ${email}`,
      icon: "success",
    });

    // redirect to Gmail
    setTimeout(() => {
       window.open("https://mail.google.com/", "_blank");
    }, 2000); 
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-20">
      <Helmet><title>Forgot-password</title></Helmet>
      <div className="card-body">
        <h2 className="text-xl font-bold mb-4 text-center">Forgot Password</h2>

        <form onSubmit={handleSubmit}>
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input input-bordered w-full"
            placeholder="mail@site.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button className="btn bg-purple-600 text-white mt-4 w-full">
            Reset Password
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Remember password?{" "}
          <Link to="/login" className="underline text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
