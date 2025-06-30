import { format, parseISO } from "date-fns";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router";

const AllPlants = () => {
  const plants = useLoaderData();
  const [sortBy, setSortBy] = useState("");

  const careLevelOrder = {
    easy: 1,
    moderate: 2,
    difficult: 3,
  };

  const sortedPlants = [...plants].sort((a, b) => {
    if (sortBy === "nextWateringDate") {
      return new Date(a.nextWateringDate) - new Date(b.nextWateringDate);
    } else if (sortBy === "careLevel") {
      return careLevelOrder[a.careLevel] - careLevelOrder[b.careLevel];
    }
    return 0;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <Helmet>
        <title>All-Plants</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-center mb-6 text-green-700">
        All Plants
      </h2>

      {/* Sorting */}
      <div className="mb-6 text-right">
        <label className="mr-2 font-medium">Sort by:</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="">Default</option>
          <option value="nextWateringDate">Next Watering Date</option>
          <option value="careLevel">Care Level</option>
        </select>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedPlants.map((plant) => (
          <div
            key={plant._id}
            className="bg-white rounded-xl shadow-lg p-6 border border-green-100 hover:shadow-green-300 transition duration-200"
          >
            <h3 className="text-xl font-bold text-green-700 mb-2">{plant.plantName}</h3>
            <p className="text-gray-700"><span className="font-semibold">Category:</span> {plant.category}</p>
            <p className="text-gray-700"><span className="font-semibold">Watering Frequency:</span> {plant.wateringFrequency}</p>
            <p className="text-gray-700">
              <span className="font-semibold">Next Watering:</span>{" "}
              {plant.nextWateringDate
                ? format(parseISO(plant.nextWateringDate), "dd MMM yyyy")
                : "N/A"}
            </p>
            <p className="text-gray-700 capitalize">
              <span className="font-semibold">Care Level:</span> {plant.careLevel}
            </p>
            <div className="mt-4">
              <Link
                to={`/plants/${plant._id}`}
                className="btn btn-sm bg-green-600 text-white hover:bg-green-700"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPlants;
