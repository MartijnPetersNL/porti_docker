import React from "react";

const TemperatureAndDetails = ({
  weather: {
    details,
    iconClass,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
  },
  units,
}) => {
  const verticalDetails = [
    {
      id: 1,
      iconClass: "fa-solid fa-temperature-empty", // Font Awesome class
      title: "Real feel",
      value: `${feels_like.toFixed()}°`,
    },
    {
      id: 2,
      iconClass: "fa-solid fa-droplet",
      title: "Humidity",
      value: `${humidity.toFixed()}%`,
    },
    {
      id: 3,
      iconClass: "fa-solid fa-wind",
      title: "Wind",
      value: `${speed.toFixed()} ${units === "metric" ? "km/h" : "m/h"}`,
    },
  ];

  const horizontalDetails = [
    {
      id: 1,

      iconClass: "fa-solid fa-sun",
      title: "Sunrise",
      value: sunrise,
    },
    {
      id: 2,
      iconClass: "fa-solid fa-sun",
      title: "Sunset",
      value: sunset,
    },
    {
      id: 3,
      iconClass: "fa-solid fa-arrow-up",

      title: "High",
      value: `${temp_max.toFixed()}°`,
    },
    {
      id: 4,

      iconClass: "fa-solid fa-arrow-down",
      title: "Low",
      value: `${temp_min.toFixed()}°`,
    },
  ];

  return (
    <div>
      <div
        className="flex flex-row
        items-center justify-center py-6 text-xl text-white"
      >
        <p>{details}</p>
        <div className="flex flex-row items-center justify-between py-3">
          <img src={icon} alt="weer icoon" className="w-20" />
          <p className="text-5xl">{`${temp.toFixed()}°`}</p>
        </div>
        <div className="flex  flex-col space-y-3 items-start">
          {verticalDetails.map(({ id, iconClass, title, value }) => (
            <div
              key={id}
              className="flex flex-row font-light text-sm items-center justify-center"
            >
              <i
                className={iconClass}
                style={{ fontSize: "18px", marginRight: "4px" }}
              ></i>
              {`${title}:`} <span className="font-medium ml-1">{value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex  flex-col items-center space-x-10 text-sm py-3">
        {horizontalDetails.map(({ id, iconClass, title, value }) => (
          <div key={id} className="flex flex-row items-center">
            <i
              className={iconClass}
              style={{ fontSize: "30px", marginRight: "4px" }}
            ></i>
            <p className="font-light ml-1">
              {`${title}:`} <span className="font-medium ml-1">{value}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
