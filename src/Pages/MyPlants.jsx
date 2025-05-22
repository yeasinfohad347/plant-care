import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Authentication/AuthContext";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const MyPlants = () => {
  const { user } = useContext(AuthContext);
  const [plants, setPlants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/plants/email/${user.email}`)
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((err) => console.error("Error fetching plants:", err));
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
        fetch(`http://localhost:3000/plants/${id}`, {
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

  return (
    <div className="p-4 w-11/12 mx-auto my-20">
      <h2 className="text-4xl font-bold mb-10 text-center text-green-700">
        🌿 My Plants
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {plants.map((plant) => (
          <div
            key={plant._id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-transform transform hover:-translate-y-1"
          >
            {/* Image */}
            <div className="h-52 w-full overflow-hidden flex items-center justify-center rounded-2xl">
              <img
                src={plant.image}
                alt={plant.plantName}
                className="max-h-full max-w-full object-contain rounded-2xl"
              />
            </div>

            {/* Details */}
            <div className="p-5 space-y-2">
              <h3 className="text-2xl font-semibold text-green-700">
                {plant.plantName}
              </h3>
              <p className="text-gray-600 text-sm mb-2">{plant.description}</p>

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
                  {plant.lastWateredDate}
                </p>
                <p>
                  <span className="font-medium">Next Watering:</span>{" "}
                  {plant.nextWateringDate}
                </p>
                <p>
                  <span className="font-medium">Health:</span>{" "}
                  {plant.healthStatus}
                </p>
              </div>

              {/* Buttons */}
              <div className="pt-4 flex justify-between">
                <button
                  onClick={() => navigate(`/update/${plant._id}`)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(plant._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPlants;
