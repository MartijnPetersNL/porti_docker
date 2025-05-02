import { Link } from "react-router-dom";
export function Webshoppagina() {
  return (
    <div className="flex flex-col items-center content-center">
      <br />

      {/* <img src="public/bikeheader.png" alt="bike header" id="header" /> */}
      <img src="banner-webshop.webp" alt="webwinkel banner" />
      <h1 className=" text-6xl text-white-800 font-bold mt-5">
        {" "}
        Welcome to Bike Webshop
      </h1>
      <br></br>
      <Link to="/products">
        <button className="mt-8">View all products</button>
      </Link>
      <br></br>
      <i
        className="fa-solid fa-person-biking"
        style={{ fontSize: "100px" }}
      ></i>

      <p>
        {" "}
        <a>I want to sell my second hand bike</a>{" "}
      </p>
    </div>
  );
}
