import "./Tailwind.css";
import FooterDiv from "./components/FooterDiv";
import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";
export function Layout() {
  return (
    <>
      <main>
        <Navbar />
        <Outlet />
      </main>
      <FooterDiv />
    </>
  );
}
