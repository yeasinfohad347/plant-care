import React, { useContext } from "react";

import { Link } from "react-router";
import { AuthContext } from "../Authentication/AuthContext";
//import { Helmet } from "react-helmet-async";

const Profile = () => {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <img
          src="/loadingSpinner.gif"
          alt="Loading..."
          className="w-10 h-10 animate-spin"
        />
      </div>
    );
  }

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6 text-center">
      {/* <Helmet>
        <title>Profile</title>
      </Helmet> */}
      <img
        src={user?.photoURL || "/defaultUserIcon.png"}
        alt="Profile"
        className="w-24 h-24 rounded-full mx-auto object-cover mb-4 border-4 border-blue-500"
      />
      <h2 className="text-xl font-semibold text-gray-800">
        {user?.displayName || "Anonymous User"}
      </h2>
      <p className="text-gray-600">{user?.email}</p>
      <Link to='/auth/update-profile'>
        <button className="mt-4 px-4 py-2 bg-[#325432] text-white rounded-lg hover:bg-[#060b06] transition">
          Update Profile
        </button>
      </Link>
    </div>
  );
};

export default Profile;
