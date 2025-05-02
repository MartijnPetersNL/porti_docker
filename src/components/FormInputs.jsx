import React from "react";
import { useState } from "react";

const FormInputs = ({ setQuery, setUnits }) => {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setQuery({ lat: latitude, lon: longitude });
      });
    }
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(async (position) => {
    //     const { latitude, longitude } = position.coords;
    //     const API_KEY = "38b186dcd5d89fabc180f02ffb8d51f3";
    //     const endpoint = `https://api.example.com/location?lat=${latitude}&long=${longitude}appid=${API_KEY}`;

    //     try {
    //       const response = await fetch(endpoint);
    //       if (!response.ok) {
    //         throw new Error(
    //           "Network response was not ok " + response.statusText
    //         );
    //       }

    //       const data = await response.json();
    //       console.log("Received data: ", data); // Added logging

    //       // Assuming getFormattedWeatherData is defined elsewhere
    //       const formattedData = await getFormattedWeatherData(data);
    //       console.log("Formatted data: ", formattedData);
    //     } catch (error) {
    //       console.error(
    //         "There was a problem with your fetch operation:",
    //         error
    //       );
    //     }
    //   });
    // }
  };

  // const handleCurrentLocationClick = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       const { latitude, longitude } = position.coords;
  //       setQuery({ lat: latitude, long: longitude });
  //     });
  //   }
  // };
  return (
    <div>
      <div className="bg-orange-700 py-3 px-3"></div>
      <div className="flex flex-row justify-center my-6">
        <div className="flex flex-row w-3/4 items-center justify-center space-x-4 my-3">
          <input
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
            type="text"
            placeholder="zoek op stad..."
            className="text-blue-700 bg-amber-400 text-xl  font-light  p-3 w-80 shadow-xl capitalize focus:outline-blue-600 placeholder:lowercase"
          />

          <i
            className="fa-solid fa-magnifying-glass"
            style={{ fontSize: "60px", color: "white" }}
            onClick={handleSearchClick}
          ></i>

          <i
            className="fa-solid fa-location-crosshairs"
            style={{ fontSize: "60px", color: "white" }}
            onClick={handleLocationClick}
          ></i>
        </div>
        <div className="flex flex-row w-1/4 items-center justify-content-center">
          <button
            className="text-2xl font-medium transition ease-out hover:scale-125"
            onClick={() => setUnits("metric")}
          >
            °C
          </button>
          <p className="text-2xl font-medium mx-1">|</p>
          <button
            className="text-2xl font-medium transition ease-out hover:scale-125"
            onClick={() => setUnits("imperial")}
          >
            {" "}
            °F
          </button>
        </div>
      </div>
    </div>
  );
};
export default FormInputs;
