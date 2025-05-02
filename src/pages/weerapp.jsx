import "../Tailwind.css";
// import "../app.css";
import React, { useEffect, useState } from "react";

import TopButtons from "../components/TopButtons";
import FormInputs from "../components/FormInputs";
import TimeAndLocation from "../components/TimeAndLocation";
import TempratureAndDetails from "../components/TempratureAndDetails";
import Forcast from "../components/Forcast";
// import getWeatherData from "./services/weatherService";
// import getFormattedWeatherData from "../services/weatherService";

//Translation

const formatBackground = (weather, units) => {
  if (!weather) return " from-cyan-900 to-blue-300";
  const threshold = units === "metric" ? 20 : 60;
  if (weather.temp <= threshold) return "from-cyan-600 to-blue-700";
  return "from-yellow-600 to-orage-700";
};

const Weer_App = () => {
  const [query, setQuery] = useState({ q: "london" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null); // later data fetch

  const getWeather = async () => {
    const message = query.q ? query.q : "current location";
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  return (
    <Weerpagina
      weather={weather}
      units={units}
      formatBackground={formatBackground}
      setQuery={setQuery}
      setUnits={setUnits}
    />
  );
};

const Weerpagina = ({
  weather,
  units,
  formatBackground,
  setQuery,
  setUnits,
}) => {
  return (
    <div
      className={`mx-auto  text-white max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 ${formatBackground(
        weather,
        units
      )}`}
    >
      <h1 className="text-7xl font-bold text-blue-700">Weerapp</h1>
      <p>Defect door React 19 incapitabliteit met Luxon</p>

      <p>App versie: 1.0</p>
      <h1>Meest gezochte locaties</h1>

      <TopButtons setQuery={setQuery} />
      <br />
      <FormInputs setQuery={setQuery} setUnits={setUnits} />
      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TempratureAndDetails weather={weather} units={units} />
          <Forcast title="3 hour steps forecast" data={weather.hourly} />
          <Forcast title="daily forecast" data={weather.daily} />
        </>
      )}
    </div>
  );
};

export default Weer_App;
