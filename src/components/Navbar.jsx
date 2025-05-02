import "../Tailwind.css";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import DarkModeToggler from "./DarkModeToggler";
import { ThemeProvider } from "../context/ThemeContext.jsx";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("Menu state:", isOpen); // Log to ensure the state changes
  };
  console.log("teest21312");
  return (
    <ThemeProvider>
      <div
        className="flex flex-col sm:flex-row justify-between items-center my-5 sm:w-50"
        id="navigatie"
      >
        {/* Logo and Hamburger */}
        <div className="flex justify-between w-full sm:w-auto items-center">
          <button
            className="sm:show text-gray-700 hover:text-gray-900 focus:outline-none"
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } sm:flex flex-col sm:flex-row items-center mt-4 sm:mt-0 space-y-2 sm:space-y-0 content-start`}
        >
          <div className="">
            <Link to="/">
              <button className="nav-button">Home</button>
            </Link>
            <Link to="/nasa_Foto">
              <button className="nav-button">Nasa_Foto</button>
            </Link>
            <Link to="/weer_Bericht">
              <button className="nav-button">Weer</button>
            </Link>
            <Link to="/webshop">
              <button className="nav-button">Webshop</button>
            </Link>
            <Link to="/Products">
              <button className="nav-button">Products</button>
            </Link>
          </div>
          <br />
          <div className="flex items-center">
            <Link to="/contact">
              <button className="nav-button self-start">Contact</button>
            </Link>
            <Link to="/Cart">
              <button className="nav-button">Cart</button>
            </Link>
            <Link to="/Projects">
              <button className="nav-button">Projects</button>
            </Link>
            <DarkModeToggler />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
