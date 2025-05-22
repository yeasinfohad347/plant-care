import React from "react";
import { Link, useLoaderData } from "react-router";

const AllPlants = () => {
  const plants = useLoaderData();
  console.log(plants);
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-green-700">
        All Plants
      </h2>

      <div className="overflow-x-auto">
        <table className="table w-full border rounded-lg shadow">
          <thead className="bg-green-200 text-green-900">
            <tr>
              <th>#</th>
              <th>Plant Name</th>
              <th>Category</th>
              <th>Watering Frequency</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {plants.map((plant, index) => (
              <tr key={plant._id} className="hover:bg-green-50 transition">
                <td>{index + 1}</td>
                <td>{plant.plantName}</td>
                <td>{plant.category}</td>
                <td>{plant.wateringFrequency}</td>
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
            {plants.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No plants found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPlants;
