import { useState } from "react";
import "../App.css";

import { ThemeProvider } from "../context/ThemeContext.jsx";

export default function ObjectToArrayInterface() {
  const [objectName, setObjectName] = useState("");
  const [objectValue, setObjectValue] = useState("");
  const [createdObjects, setCreatedObjects] = useState([]); // Store multiple objects
  const [errorMessage, setErrorMessage] = useState(""); // Error message state

  function createObject(event) {
    event.preventDefault();

    if (createdObjects.length >= 5) {
      setErrorMessage("You are only allowed to convert 5 objects per array");
      return; // Stop execution if limit is exceeded
    }

    const newObject = {
      objectName: objectName,
      objectValue: parseInt(objectValue, 10),
    };

    setCreatedObjects([...createdObjects, newObject]); // Add new object to list
    setErrorMessage(""); // Clear any previous error
  }
  function totalValueArray() {
    console.log("values total calculated");
  }
  function objectLimiter() {
    if (createdObjects.length >= 5) {
      setErrorMessage("You are only allowed to convert 5 objects per array");
    }
  }

  return (
    <ThemeProvider>
      <div className="dark:text-white light:text-black">
        <h1>Objects to Array Convert</h1>
        <div className="flex items-center justify-center mb-5">
          <i
            className="fa-solid fa-database"
            style={{ fontSize: "90px", color: "blue" }}
          ></i>
          <i
            className="fa-solid fa-arrow-right"
            style={{ fontSize: "70px", color: "blue" }}
          ></i>
          <i
            className="fa-solid fa-database"
            style={{ fontSize: "90px", color: "blue" }}
          ></i>
        </div>
        <form className="text-4xl">
          <input
            type="text"
            placeholder="Choose Object Name"
            onChange={(e) => setObjectName(e.target.value)}
          />
          <br />
          <input
            type="number"
            placeholder="Choose Object Value"
            onChange={(e) => {
              const value = e.target.value;
              if (!isNaN(value) && value !== "") {
                setObjectValue(value);
              }
            }}
          />
          <br />
          <button className="mb-7 mt-5" onClick={createObject}>
            Create Object
          </button>
        </form>
        <div className="text-3xl">
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <span>
            {" "}
            {"Total count"}
            {createdObjects.reduce(
              (total, obj) => total + obj.objectValue,
              0
            )}{" "}
            {/* 0 = inital value*/}
          </span>
          <br />
          <span>
            {"Strings: "}
            {createdObjects.map((obj) => obj.objectName).join(", ")}
          </span>
          <br />
          <span>
            {"Numbers: "}
            {createdObjects.map((obj) => obj.objectValue).join(", ")}
          </span>

          <ul>
            {createdObjects.map((obj, index) => (
              <li key={index}>
                {obj.objectName}: {obj.objectValue}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ThemeProvider>
  );
}
