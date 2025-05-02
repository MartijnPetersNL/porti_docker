import React from "react";

const TopButtons = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      name: "London",
    },
    {
      id: 2,
      name: "Berlin",
    },
    {
      id: 3,
      name: "Sydney",
    },
    {
      id: 4,
      name: "Washington",
    },
    {
      id: 5,
      name: "Amsterdam",
    },
  ];
  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-lg font-medium hover:bg-gray-700 px-3 py-2 rounded-md transition ease-in weerknop"
          onClick={() => setQuery({ q: city.name })}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
