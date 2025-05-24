import { format, parseISO } from "date-fns";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router";

const AllPlants = () => {
  const plants = useLoaderData();
  const [sortBy, setSortBy] = useState("");

  // Define care level priority
  const careLevelOrder = {
    easy: 1,
    moderate: 2,
    difficult: 3,
  };

  // Apply sorting based on selected option
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

      {/* Sorting Dropdown */}
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

      {/* Plants Table */}
      <div className="overflow-x-auto min-h-screen">
        <table className="table w-full border rounded-lg shadow">
          <thead className="bg-green-200 text-green-900">
            <tr>
              <th>#</th>
              <th>Plant Name</th>
              <th>Category</th>
              <th>Watering Frequency</th>
              <th>Next Watering</th>
              <th>Care Level</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sortedPlants.map((plant, index) => (
              <tr key={plant._id} className="hover:bg-green-50 transition">
                <td>{index + 1}</td>
                <td>{plant.plantName}</td>
                <td>{plant.category}</td>
                <td>{plant.wateringFrequency}</td>
                <td>
                  {plant.nextWateringDate
                    ? format(parseISO(plant.nextWateringDate), "dd MMM yyyy")
                    : "N/A"}
                </td>
                <td className="capitalize">{plant.careLevel}</td>
                <td>
                  <Link
                    to={`/plants/${plant._id}`}
                    className="btn btn-sm bg-green-600 text-white hover:bg-green-700"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPlants;
