import { useEffect, useState } from "react";
import "../App.css";
import Main from "../components/Main";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";

//Bootstrap 5 grid systeem
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// productiemodus tutorial: https://vite.dev/guide/build
// react Boostrap en Axios geinstalleerd
// react boostrap icons geinstalleerd
// Voorbeeld Axios api: https://reqres.in/
// NASA api uitleg: https://www.youtube.com/watch?v=JfXp_YEQRRI&pp=ygURbmFzYSBhcGkgdHV0b3JpYWw%3D
// NASA api uitleg optie B: https://www.youtube.com/watch?v=5Gf6grFgoG8&pp=ygURbmFzYSBhcGkgdHV0b3JpYWw%3D
// d = data
// laad const = APIkeys altijd voordat het in een functie word gebruikt
// tutorials staatn in firefox favorieten
// 🔵 Geinstalleerd
// react router dom
// font : https://fonts.google.com/selection?categoryFilters=Feeling:%2FExpressive%2FFuturistic
// 🕸 webpack
// Webpack distucutie en Source code staan in "webpack-demo"
// Lodash voor webpack
// Deploy met: https://www.netlify.com/everything-you-need-to-know-about-the-netlify-platform/
function Nasa_App() {
  const [data, setData] = useState(null);
  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
  console.log("App Component: NASA_KEY:", NASA_KEY);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  function handleDisplayModal() {
    setShowModal(!showModal);
  }
  useEffect(() => {
    async function fetchAPIDataAPOD() {
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;
      const today = new Date().toDateString();
      const localKey = `NASA-${today}`;
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        console.log("Opgehaald van cache vandaag.");
        return;
      }
      // Je kunt selectief alleen de APOD cache-items verwijderen als je dat wilt.
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith("NASA-")) {
          localStorage.removeItem(key);
        }
      });
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const apiData = await res.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
        console.log("Opgehaald van API vandaag");
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchAPIDataAPOD();
  }, [NASA_KEY]);

  return (
    <div>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}

      {/* <Button onClick={handleShow}> Zoek sattelieten</Button> */}
      {showModal && (
        <SideBar data={data} handleDisplayModal={handleDisplayModal}>
          voorbeeld
        </SideBar>
      )}

      {data && <Footer data={data} handleDisplayModal={handleDisplayModal} />}
    </div>
  );
}

export default Nasa_App;
