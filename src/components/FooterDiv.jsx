import { ThemeProvider } from "../context/ThemeContext.jsx";
export default function FooterDiv() {
  return (
    <ThemeProvider>
      <div
        className=" items-center footer mt-8 mb-5 ms-4 pb-5"
        style={{ display: "block" }}
      >
        <div style={{ display: "flex" }} className="lg:ms-20 sm:ms-5">
          {" "}
          <i
            className="fa-brands fa-react"
            style={{ fontSize: "90px", color: "lightblue" }}
          ></i>
          <p className="ml-2"> This website is made with ReactJS 19</p>
        </div>
        <br /> <br />
        <p>© Copyleft license</p>
        <a href="#">Terms of servics unavaliable</a> <br />
        <a href="#">Privacy policy unavaliable</a>
      </div>
    </ThemeProvider>
  );
}
