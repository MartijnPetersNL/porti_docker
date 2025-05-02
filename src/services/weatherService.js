const API_KEY = "38b186dcd5d89fabc180f02ffb8d51f3";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

// const getWeatherData = (infoType, searchParams) => {
//   const url = new URL(BASE_URL + infoType);
//   url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
//   console.log(url);
//   return fetch(url)
//     .then((result) => result.json())
//     .then((data) => ({}));

// return fetch(url).then((result) => result.json());

//   // .then((data) => data);
// };
const iconURLFromCode = (icon) =>
  `http://openweathermap.org/img/wn/${icon}@2x.png`;
// Withour Luxon
const formatToLocalTime = (secs, offset, formatOptions) => {
  const date = new Date((secs + offset) * 1000); // Convert seconds to milliseconds
  return new Intl.DateTimeFormat("en-US", formatOptions).format(date);
};

const formatCurrent = (data) => {
  console.log("Received data: ", data); // Add this line to inspect the data structure

  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
    timezone,
  } = data;

  const { main: details, icon } = weather[0];
  const formattedLocalTime = formatToLocalTime(dt, timezone);

  if (!lat || !lon) {
    console.error("Latitude and/or longitude are missing in data:", data); // Log error with full data
  }

  return {
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    country,
    sunrise: formatToLocalTime(sunrise, timezone, "hh:mm a"),
    sunset: formatToLocalTime(sunset, timezone, "hh:mm a"),
    speed,
    details,
    iconClass,
    formattedLocalTime,
    dt,
    timezone,
    lat,
    lon,
  };
};

// Add additional logging in getWeatherData
const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  console.log("Fetching data from URL: ", url); // Log the URL being fetched

  return fetch(url)
    .then((result) => {
      if (!result.ok) {
        throw new Error(`Network response was not ok ${result.statusText}`);
      }
      return result.json();
    })
    .then((data) => {
      console.log("Data fetched: ", data); // Log the fetched data
      return data;
    })
    .catch((error) => {
      console.error("Fetch error: ", error); // Log any errors during fetch
    });
};

const formatForecastWeather = (secs, offset, data) => {
  //uurlijk
  const hourly = data
    .filter((f) => f.dt > secs)

    .map((f) => ({
      temp: f.main.temp,
      title: formatToLocalTime(f.dt, offset, "hh:mm a"),
      iconClass,
      date: f.dt_txt,
    }))
    .slice(0, 5);

  //dagelijks
  const daily = data
    .filter((f) => f.dt_txt.slice(-8) === "00:00:00") // -8 omdat
    .map((f) => ({
      temp: f.main.temp,
      title: formatToLocalTime(f.dt, offset, "ccc"),
      iconClass,
      date: f.dt_txt,
    }));
  return { hourly, daily };
};
const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrent);
  const { dt, lat, lon, timezone } = formattedCurrentWeather;
  const formattedForcastWeather = await getWeatherData("forecast", {
    lat,
    lon,
    units: searchParams.units,
  }).then((d) => formatForecastWeather(dt, timezone, d.list));
  return { ...formattedCurrentWeather, ...formattedForcastWeather };
};

export default getFormattedWeatherData;
