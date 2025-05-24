import React, { useContext } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Authentication/AuthContext";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const { updateUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.url.value;

    updateUser({
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        Swal.fire({
          title: "Profile Updated!",
          text: "Your information has been successfully updated.",
          icon: "success",
        }).then(() => {
          navigate("/profile");
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-20 rounded-2xl">
      <Helmet>
        <title>Update-Profile</title>
      </Helmet>
      <h2 className="text-2xl font-bold mb-4 text-center">Update Profile</h2>
      <div className="card-body">
        <form className="" onSubmit={handleSubmit}>
          <label className="label mb-1">Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="name"
            required
          />
          <label className="label mt-3 mb-1">Photo URL</label>
          <input
            type="url"
            name="url"
            className="input"
            placeholder="Photo URL"
            required
          />

          <button className="btn bg-blue-600 text-white w-full mt-6">
            Update Information
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
