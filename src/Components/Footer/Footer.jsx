import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaLeaf,
} from "react-icons/fa";
import logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-[#325432] text-white py-16 mt-20">
      <div className="w-11/12 mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm md:text-base">
        {/* Website Info */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img
              src={logo}
              className="h-8 w-8 rounded-[50%] bg-[#348553]"
              alt=""
            />
            <h2 className="text-xl font-bold tracking-wide">PlantPal</h2>
          </div>
          <p className="text-gray-300">
            Empowering plant lovers to track, care, and nurture their greens
            with ease.
          </p>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#E0FFC2]">
            Our Services
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>Smart Watering Reminders</li>
            <li>Plant Health Tracking</li>
            <li>Image-Based Plant Records</li>
            <li>Categorized Plant Management</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#E0FFC2]">
            Contact Us
          </h3>
          <p>
            Email:{" "}
            <a
              href="mailto:support@plantcare.com"
              className="underline hover:text-lime-300"
            >
              support@plantcare.com
            </a>
          </p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Location: 123 Greenway Rd, Nature City</p>
        </div>

        {/* Social Media */}
        <div className="">
          <h3 className="text-lg font-semibold mb-3 text-[#E0FFC2]">
            Follow Us
          </h3>
          <div className="flex gap-4 mt-2 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-lime-400"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-lime-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-lime-400"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:support@plantcare.com"
              className="hover:text-lime-400"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-gray-400 text-sm border-t border-green-700 pt-4">
        © {new Date().getFullYear()} PlantCare Tracker. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
