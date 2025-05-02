import { Link } from "react-router-dom";
import "../Tailwind.css";
import React from "react";
// import { useEffect, useState } from "react";
//   { useDarkMode={useDarkMode}}
import { ThemeProvider, useDarkMode } from "../context/ThemeContext.jsx";
import DarkModeToggler from "../components/DarkModeToggler";

function HomeContent() {
  const { darkMode } = useDarkMode("light");

  return (
    <div className={`transition-all ${darkMode ? "dark" : ""}`}>
      <div className="dark:bg-gray-800 dark:text-white light:bg-white light:text-black w-full">
        <div className="mt-5 mb-5">
          <img src="/banner-home.webp" alt="banner homePagina" />
        </div>

        <br />
        <br />
        <br />
        <div className="sm:grid md:flex xl:flex   ">
          <div className="flex  sm:w-full xl:flex xl:w-1/2">
            <img
              src="/profile foto optie A.png"
              alt="profielfoto creator"
              aria-label="profile picture website creator"
              id="profielfoto"
              // className="object-center"
            />
          </div>
          <div id="introduction" className="features grid sm:w-full  xl:w-1/2 ">
            <DarkModeToggler />
            <h2 className="text-3xl mb-5 mt-5"> About Me</h2>
            <p>
              Hello I am Martijn Peters a fullstack Javascript developer who
              started in '24.
            </p>
            <p>
              {" "}
              I also have experience in graphic design with Inkscape and
              Clipstudio.
            </p>

            <div style={{ display: "flex" }} className="mt-3">
              <svg
                className="mt-3"
                xmlns="http://www.w3.org/2000/svg"
                width="112"
                height="75"
                viewBox="0 0 9 6"
              >
                <rect fill="#21468B" width="9" height="6" />
                <rect fill="#FFF" width="9" height="4" />
                <rect fill="#AE1C28" width="9" height="2" />
              </svg>

              <i
                className="fa-brands fa-react mx-3"
                style={{ fontSize: "85px", color: "lightblue" }}
              ></i>
              <i
                className="fa-brands fa-docker"
                style={{ fontSize: "90px", color: "blue" }}
              ></i>
            </div>
          </div>
        </div>
        <div className="grid content-start sm:w-full  xl:w-1/2 text-left ms-23">
          <h1 className="  text-3xl stijluitleg mt-8 pb-4">Services</h1>
          <br />
          <ol className="mb-5 list-disc">
            <li className="stijluitleg">WebDesign</li>
            <li className="stijluitleg">
              Creating websites with out without a framework such as wordpress,
            </li>
            <li className="stijluitleg"> depending on your requirements</li>
            <li className="stijluitleg">
              Making your website concept too a multi-plathorm website
            </li>
            <li className="stijluitleg">Corparate Idenity</li>
            <li className="stijluitleg">
              From choosing your text colours to logo design
            </li>
            <li className="stijluitleg">
              Logo variants that suite multiple colour themes
            </li>
            <li className="stijluitleg"> Programming</li>
            <li className="stijluitleg"> Search Engine Optimalisation SEO</li>
            <li className="stijluitleg">
              {" "}
              making your website easy to find on search engines such as google
            </li>
            <li>
              {" "}
              I know about the basics of docker but this containerzation
              applications is not used for this website. Only the github
              dockerized version does.
            </li>
            <li> I have use react + Vite often, the most of any libraries</li>
          </ol>
        </div>
        <br />
        <div className="text-left ">
          <h1 className="text-6xl font-bold ms-23"> Technical details</h1>
          <div>
            <h3 className="text-2xl mb-5 mt-5 ms-23"> Installed modules </h3>
            <div className="features flex sm:w-full xl:w-1/2 overflow-x-auto">
              <table className="w-full table-auto border-collapse border border-gray-300 mb-5 lg:me-0 sm:mr-5">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border border-gray-300">Name</th>
                    <th className="px-4 py-2 border border-gray-300">
                      Version
                    </th>
                    <th className="px-4 py-2 border border-gray-300">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">Formik</td>
                    <td className="px-4 py-2 border border-gray-300"></td>
                    <td className="px-4 py-2 border border-gray-300">
                      Small size library
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      FireBase
                    </td>
                    <td className="px-4 py-2 border border-gray-300"></td>
                    <td className="px-4 py-2 border border-gray-300">
                      Google Database
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">Luxon</td>
                    <td className="px-4 py-2 border border-gray-300">3.5.0</td>
                    <td className="px-4 py-2 border border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      Tailwind CSS
                    </td>
                    <td className="px-4 py-2 border border-gray-300">4.0.0</td>
                    <td className="px-4 py-2 border border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      Bootstrap 5
                    </td>
                    <td className="px-4 py-2 border border-gray-300">5.2</td>
                    <td className="px-4 py-2 border border-gray-300"></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">lodash</td>
                    <td className="px-4 py-2 border border-gray-300">
                      4.17.21
                    </td>
                    <td className="px-4 py-2 border border-gray-300"></td>
                  </tr>
                  {/* <tr>
                    <td className="px-4 py-2 border border-gray-300">
                      React-Helmet Asnync
                    </td>
                    <td className="px-4 py-2 border border-gray-300">2.0.5</td>
                    <td className="px-4 py-2 border border-gray-300">
                      SEO optimalization
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>

            <div className="desciption sm:w-full  xl:w-1/2 mb-5 ">
              <h2 className="text-2xl ms-18">Other Features</h2>
              <p className="ms-18">SSL certificate Wildcard:none</p>
              <p className="ms-18">DarkMode</p>
              <p className="ms-18">Screen reader accesibility: WIP</p>
              <p className="ms-18">
                Website secruirtity: cross site scripting by defeault
              </p>
            </div>
          </div>
          <div className="ms-15">
            <Link to="/contact">
              <button className="contactbutton"> Contact the creator</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Homepagina() {
  return (
    <ThemeProvider>
      <HomeContent />
    </ThemeProvider>
  );
}
