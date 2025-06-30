import { useEffect, useState, useContext } from "react";

import { useNavigate } from "react-router";
import Swal from "sweetalert2";

import { format, parseISO } from "date-fns";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Authentication/AuthContext";
import Loading from "../Loading";

const MyItem = () => {
  const { user } = useContext(AuthContext);
  const [plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://plant-care-tracker-server-two.vercel.app/plants/email/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setPlants(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [user.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This plant will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#22c55e",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://plant-care-tracker-server-two.vercel.app/plants/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            setPlants(plants.filter((plant) => plant._id !== id));
            Swal.fire("Deleted!", "Your plant has been deleted.", "success");
          })
          .catch(() => {
            Swal.fire("Error!", "Failed to delete the plant.", "error");
          });
      }
    });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-4 sm:p-6 md:p-8 w-full max-w-7xl mx-auto my-10">
      <Helmet>
        <title>My-Plants</title>
      </Helmet>
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-green-700">
        🌿 My Plants
      </h2>

      {plants.length === 0 ? (
        <div className="text-center my-20">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">
            You haven't added any plants yet.
          </h3>
          <button
            onClick={() => navigate("/addplant")}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Add Your First Plant 🌱
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {plants.map((plant) => (
            <div
              key={plant._id}
              className="card bg-base-100 w-full max-w-sm mx-auto shadow-sm"
            >
              <figure className="h-52 bg-base-200 flex items-center justify-center overflow-hidden">
                <img
                  src={plant.image}
                  alt={plant.plantName}
                  className="h-full w-auto object-contain rounded-xl"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-green-700">
                  {plant.plantName}
                  <div className="badge badge-success">
                    {plant.healthStatus}
                  </div>
                </h2>
                <p className="text-gray-600 text-sm">{plant.description}</p>

                <div className="text-sm text-gray-700 space-y-1">
                  <p>
                    <span className="font-medium">Category:</span>{" "}
                    {plant.category}
                  </p>
                  <p>
                    <span className="font-medium">Care Level:</span>{" "}
                    {plant.careLevel}
                  </p>
                  <p>
                    <span className="font-medium">Watering:</span>{" "}
                    {plant.wateringFrequency}
                  </p>
                  <p>
                    <span className="font-medium">Last Watered:</span>{" "}
                    {plant.lastWateredDate
                      ? format(parseISO(plant.lastWateredDate), "dd MMM yyyy")
                      : "N/A"}
                  </p>
                  <p>
                    <span className="font-medium">Next Watering:</span>{" "}
                    {plant.nextWateringDate
                      ? format(parseISO(plant.nextWateringDate), "dd MMM yyyy")
                      : "N/A"}
                  </p>
                </div>

                <div className="card-actions justify-between pt-4">
                  <button
                    onClick={() => navigate(`/update-plant/${plant._id}`)}
                    className="btn btn-sm text-white bg-[#325432]"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(plant._id)}
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyItem;
