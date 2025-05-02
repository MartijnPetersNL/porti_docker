import Calculator from "../components/calculator";
import DarkModeToggler from "../components/DarkModeToggler";
import Dobbelsteen from "../components/Dice";
import Masonarygrid from "../components/Masonarygrid";
import CubeModel from "../components/ModelingTest";
import ObjectToArrayInterface from "../components/ObjectToArray";
import Octogaan from "../components/Octogon";
import RentCalculator from "../components/RentCalcultator";
import { ThemeProvider } from "../context/ThemeContext.jsx";
import "../Tailwind.css";
//make layout 2 Kolom! no flex breaks SVGS

export default function ProjectPagina() {
  return (
    <ThemeProvider>
      <img src="/banner-projects.webp" alt="Banner projecten" />
      <div className="grid grid-cols-2 gap-4">
        <div className="sm:ms-0 lg:ms-10 sm:col-span-2 xl:col-span-1">
          <h1 className="text-6xl mb-5 sm:col-span-2 xl:col-span-1">
            {" "}
            Small projects
          </h1>
          <DarkModeToggler />
        </div>

        <br />
        <div className="sm:ms-0 lg:ms-10 sm:col-span-2 xl:col-span-1">
          <p> that do not need their own page</p>
          <br />
          <h2>Basic Calculator</h2>
          <Calculator />
        </div>
        <ObjectToArrayInterface />
        <div
          style={{
            display: "flex",
            padding: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="col-span-2 sm:col-span-2 lg:col-span-1"
        >
          <h2 className="mb-2 mt-4">3D Dice</h2>
          <div className="">
            <Dobbelsteen col-span-2 sm:col-span-2 lg:col-span-1 />
          </div>
        </div>

        <div className="col-span-2 xl:col-span-1">
          <h2 className="text-4xl mt-10">Other 3D models</h2>
          <CubeModel />
          <div
            style={{ width: "50vw", height: "50vh" }}
            className="col-span-2 sm:col-span-2 lg:col-span-1"
          >
            <Octogaan />
          </div>
        </div>
        <div className="mt-4 ms-5 sm:ms-10 lg:ms-0 ">
          <img src="banner-gallery.webp" alt="galerij banner" />

          <p>I have experience with both raster map and vector graphics</p>
          <Masonarygrid />
        </div>
        <div>
          {" "}
          <RentCalculator />
        </div>
      </div>
    </ThemeProvider>
  );
}
