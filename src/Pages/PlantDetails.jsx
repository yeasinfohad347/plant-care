import React from "react";
import { useLoaderData } from "react-router";

const PlantDetails = () => {
  const plant = useLoaderData();
   if (!plant) {
    return <div className="text-center mt-10 text-gray-600">Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 my-10 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-4 text-green-700 text-center">
        {plant.plantName}
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={plant.image}
          alt={plant.plantName}
          className="w-full md:w-1/2 object-cover rounded-md"
        />

        <div className="flex-1 space-y-3 text-gray-700">
          <p>
            <strong>Category:</strong> {plant.category}
          </p>
          <p>
            <strong>Description:</strong> {plant.description}
          </p>
          <p>
            <strong>Care Level:</strong> {plant.careLevel}
          </p>
          <p>
            <strong>Watering Frequency:</strong> {plant.wateringFrequency}
          </p>
          <p>
            <strong>Last Watered:</strong> {plant.lastWateredDate}
          </p>
          <p>
            <strong>Next Watering:</strong> {plant.nextWateringDate}
          </p>
          <p>
            <strong>Health Status:</strong> {plant.healthStatus}
          </p>
          <p>
            <strong>Added By:</strong> {plant.userName} ({plant.userEmail})
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
