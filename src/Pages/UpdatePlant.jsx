import React from "react";
import { useLoaderData, useNavigate } from "react-router";

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

  console.log(plant);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newPlantInfo = Object.fromEntries(formData.entries());

    fetch(`http://localhost:3000/plants/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPlantInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          navigate("/myplants");
          e.target.reset()
        }
      });
  };
  return (
    <div className="max-w-2xl mx-auto p-8 mt-10 bg-white shadow-2xl rounded-lg">
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
            defaultValue={lastWateredDate}
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
            defaultValue={nextWateringDate}
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
        <button type="submit" className="btn btn-primary w-full bg-green-600">
          Update Plant
        </button>
      </form>
    </div>
  );
};

export default UpdatePlant;
