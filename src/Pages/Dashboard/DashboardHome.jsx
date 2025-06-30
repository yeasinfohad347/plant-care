// src/Pages/Dashboard/DashboardHome.jsx
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Authentication/AuthContext";


export default function DashboardHome() {
  const { user } = useContext(AuthContext);
  const [totalItems, setTotalItems] = useState(0);
  const [myItems, setMyItems] = useState(0);

  useEffect(() => {
    fetch("https://plant-care-tracker-server-two.vercel.app/plants")
      .then(res => res.json())
      .then(data => setTotalItems(data.length));

    fetch(`https://plant-care-tracker-server-two.vercel.app/plants/email/${user.email}`)
      .then(res => res.json())
      .then(data => setMyItems(data.length));
  }, [user]);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Welcome, {user?.displayName}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-4xl font-bold text-primary">{totalItems}</h2>
          <p className="text-gray-600 mt-2">Total Products</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-4xl font-bold text-primary">{myItems}</h2>
          <p className="text-gray-600 mt-2">My Items</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-2xl font-medium text-gray-700">
            {user?.email}
          </h2>
          <p className="text-gray-600 mt-2">Logged-in Email</p>
        </div>
      </div>
    </div>
  );
}
