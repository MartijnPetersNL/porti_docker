import "../App.css";

//Bootstrap 5 grid systeem vervangen met Tailwind css!

import { ThemeProvider } from "../context/ThemeContext.jsx";
export default function Footer(props) {
  const { showModal, handleDisplayModal, data } = props;
  return (
    <ThemeProvider>
      <footer className="dark:bg-gray-900 dark:text-black light:bg-white light:text-black pb-3">
        <h2 className="footer scifi dark:text-white">Details</h2>
        <p className="footer scifi dark:text-white">
          {" "}
          Gemaakt door Martijn Peters
        </p>
        <p className="footer scifi dark:text-white">
          {" "}
          Gemaakt met REACT + VITE{" "}
        </p>
        <h2 className="footer scifi dark:text-white">
          Copyright: {data?.copyright}
        </h2>
        <p className="desciptionTitle scifi dark:text-white"> Beschrijving</p>
        <p className="footer scifi dark:text-white">
          {" "}
          Data komt van NASA open API klik op het info icoon voor uitgebreide
          informatie
        </p>

        <button className="terugknop" onClick={handleDisplayModal}>
          <i class="fa-solid fa-circle-info"></i>
        </button>
      </footer>
    </ThemeProvider>
  );
}
