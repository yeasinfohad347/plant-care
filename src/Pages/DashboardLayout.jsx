// src/layouts/DashboardLayout.jsx
import { NavLink, Outlet } from "react-router";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-primary font-semibold bg-white px-3 py-2 rounded"
      : "hover:text-primary px-3 py-2 transition-colors";

  return (
    <div className="min-h-screen flex bg-[#f0f4f8]">
        <Helmet>
            <title>Dashboard</title>
        </Helmet>
      {/* Sidebar for larger screens */}
      <aside className="hidden md:flex w-64 bg-[#03373D] text-white shadow-lg flex-col p-6 rounded-3xl ml-3 mt-3">
        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
        <nav className="flex flex-col gap-4 text-base">
          <NavLink to="/dashboard" className={navLinkClass}>
            Overview
          </NavLink>
          <NavLink to="/dashboard/all-items" className={navLinkClass}>
            All Items
          </NavLink>
          <NavLink to="/dashboard/add-item" className={navLinkClass}>
            Add Item
          </NavLink>
          <NavLink to="/dashboard/my-items" className={navLinkClass}>
            My Items
          </NavLink>
        </nav>
      </aside>

      {/* Sidebar Toggle for Small Screens */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button onClick={toggleSidebar} className="btn btn-ghost text-2xl text-[#03373D]">
          <FaBars />
        </button>
      </div>

      {/* Slide-out Sidebar for Mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <div className="w-64 bg-[#03373D] text-white p-6 space-y-4">
            <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
            <nav className="flex flex-col gap-4 text-base">
              <NavLink to="/dashboard" className={navLinkClass} onClick={toggleSidebar}>
                Overview
              </NavLink>
              <NavLink to="/dashboard/all-items" className={navLinkClass} onClick={toggleSidebar}>
                All Items
              </NavLink>
              <NavLink to="/dashboard/add-item" className={navLinkClass} onClick={toggleSidebar}>
                Add Item
              </NavLink>
              <NavLink to="/dashboard/my-items" className={navLinkClass} onClick={toggleSidebar}>
                My Items
              </NavLink>
            </nav>
          </div>
          <div className="flex-1" onClick={toggleSidebar} />
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 bg-[#f9fafb] overflow-auto rounded-l-2xl">
        <Outlet />
      </main>
    </div>
  );
}
