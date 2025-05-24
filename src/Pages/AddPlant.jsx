import React, { useContext } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { AuthContext } from "../Authentication/AuthContext";

const AddPlant = () => {
  const {user}=useContext(AuthContext)
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const plantInfo = Object.fromEntries(formData.entries());
    console.log(plantInfo);

    fetch("http://localhost:3000/addplant", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(plantInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("data from db", data);
          e.target.reset();
          Swal.fire({
            title: "Your plant is Successfully added",
            icon: "success",
            draggable: true,
          });
        }
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full mx-auto"
    >
      <div className="max-w-2xl mx-auto p-8 mt-10 bg-white shadow-2xl rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-800">
          Add New Plant
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Image URL */}
          <div className="space-y-1">
            <label className="label font-medium">Image URL</label>
            <input
              type="url"
              id="image"
              name="image"
              placeholder="Image URL"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Plant Name */}
          <div className="space-y-1">
            <label className="label font-medium">Plant Name</label>
            <input
              type="text"
              id="plantName"
              name="plantName"
              placeholder="Plant Name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Category */}
          <div className="space-y-1">
            <label className="label font-medium">Category</label>
            <select
              id="category"
              name="category"
              className="select select-bordered w-full"
            >
              <option value="succulent">Succulent</option>
              <option value="fern">Fern</option>
              <option value="flowering">Flowering</option>
            </select>
          </div>

          {/* Description */}
          <div className="space-y-1">
            <label className="label font-medium">Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="Description"
              className="textarea textarea-bordered w-full"
            />
          </div>

          {/* Care Level */}
          <div className="space-y-1">
            <label className="label font-medium">Care Level</label>
            <select
              id="careLevel"
              name="careLevel"
              className="select select-bordered w-full"
            >
              <option value="easy">Easy</option>
              <option value="moderate">Moderate</option>
              <option value="difficult">Difficult</option>
            </select>
          </div>

          {/* Watering Frequency */}
          <div className="space-y-1">
            <label className="label font-medium">Watering Frequency</label>
            <input
              type="text"
              id="wateringFrequency"
              name="wateringFrequency"
              placeholder="e.g., every 3 days"
              className="input input-bordered w-full"
            />
          </div>

          {/* Last Watered Date */}
          <div className="space-y-1">
            <label className="label font-medium">Last Watered Date</label>
            <input
              type="date"
              id="lastWateredDate"
              name="lastWateredDate"
              className="input input-bordered w-full"
            />
          </div>

          {/* Next Watering Date */}
          <div className="space-y-1">
            <label className="label font-medium">Next Watering Date</label>
            <input
              type="date"
              id="nextWateringDate"
              name="nextWateringDate"
              className="input input-bordered w-full"
            />
          </div>

          {/* Health Status */}
          <div className="space-y-1">
            <label className="label font-medium">Health Status</label>
            <input
              type="text"
              id="healthStatus"
              name="healthStatus"
              placeholder="Health Status"
              className="input input-bordered w-full"
            />
          </div>

          {/* User Email */}
          <div className="space-y-1">
            <label className="label font-medium">Your Email</label>
            <input
              type="email"
              id="userEmail"
              name="userEmail"
              value={user.email}
              className="input input-bordered w-full"
            />
          </div>

          {/* User Name */}
          <div className="space-y-1">
            <label className="label font-medium">Your Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={user.displayName}
              className="input input-bordered w-full"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full bg-green-600">
            Add Plant
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default AddPlant;
