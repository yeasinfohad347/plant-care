import { useState, useEffect } from "react";
import { Link } from "react-router"; // FIX: Correct import

const NewPlantsSection = () => {
  const [plants, setPlants] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  const displayedPlants = showAll ? plants : plants.slice(0, 8);

  return (
    <div className="my-10 px-4 w-11/12 mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">🌿 New Plants</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {displayedPlants.map((plant) => (
          <div
            key={plant._id}
            className="card bg-base-100 w-full max-w-sm shadow-sm hover:shadow-md transition duration-300"
          >
            <figure className="px-5 pt-5">
              <img
                src={plant.image}
                alt={plant.plantName}
                className="rounded-xl h-40 w-full object-cover"
              />
            </figure>
            <div className="card-body px-4 pt-3 pb-4 items-center text-center">
              <h2 className="card-title text-lg">{plant.plantName}</h2>
              <p className="text-sm">{plant.description}</p>
              <div className="card-actions mt-3">
                <Link to={`/plants/${plant._id}`}>
                  <button className="btn btn-success btn-sm">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!showAll && plants.length > 8 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll(true)}
            className="btn btn-outline btn-primary"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default NewPlantsSection;
