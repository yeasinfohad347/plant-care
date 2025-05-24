import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdatePlant = () => {
  const plant = useLoaderData();
  const navigate = useNavigate();

  const {
    _id,
    image,
    careLevel,
    category,
    description,
    healthStatus,
    lastWateredDate,
    nextWateringDate,
    plantName,
    wateringFrequency,
  } = plant;

  const [loading, setLoading] = useState(false);

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    return new Date(dateStr).toISOString().split("T")[0];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);
    const newPlantInfo = Object.fromEntries(formData.entries());

    fetch(`https://plant-care-tracker-server-two.vercel.app/plants/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPlantInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.modifiedCount) {
          navigate("/myplants");
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Plant info has been updated",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "info",
            title: "No changes detected",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to update plant info. Please try again.",
        });
        console.error(err);
      });
  };

  return (
    <div className="max-w-2xl mx-auto p-8 mt-10 bg-white shadow-2xl rounded-lg">
      <Helmet>
        <title>Update Plant</title>
      </Helmet>
      <h2 className="text-2xl font-bold mb-6 text-center text-green-800">
        Update Plant
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Image URL */}
        <div className="space-y-1">
          <label className="label font-medium">Image URL</label>
          <input
            type="url"
            id="image"
            name="image"
            defaultValue={image}
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
            defaultValue={plantName}
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
            defaultValue={category}
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
            defaultValue={description}
            className="textarea textarea-bordered w-full"
          />
        </div>

        {/* Care Level */}
        <div className="space-y-1">
          <label className="label font-medium">Care Level</label>
          <select
            id="careLevel"
            name="careLevel"
            defaultValue={careLevel}
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
            defaultValue={wateringFrequency}
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
            defaultValue={formatDate(lastWateredDate)}
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
            defaultValue={formatDate(nextWateringDate)}
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
            defaultValue={healthStatus}
            className="input input-bordered w-full"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary w-full bg-green-600"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Plant"}
        </button>
      </form>
    </div>
  );
};

export default UpdatePlant;
