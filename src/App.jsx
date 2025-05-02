import "./Tailwind.css";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext.jsx";
//Always use HashRouter, browserRouter gives Page refresh problems
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Contactpagina } from "./pages/contact";
import { Homepagina } from "./pages/home";
import Nasa_App from "./pages/nasapod";
import { Cart } from "./pages/Cart";
import Weer_App from "./pages/weerapp";
import { Layout } from "./Layout";
import { Webshoppagina } from "./pages/webshop";
import { ProductPagina } from "./pages/products";
import { useState } from "react";
import ProjectPagina from "./pages/Projects";
import { useContext } from "react";
// import ThemeContext from "./context/ThemeContext.jsx";
// Formik removed
// Firebase account created

//🔵 Te doen
// Dark mode toggler werkend krijgen zie React 19 release notes
// https://react.dev/blog/2024/12/05/react-19
// 2. Expense tracker maken met grafieken
//
//functies:
// User Authentication: Allow users to create accounts and log in securely using authentication Firebase autenication.
// gebruik zo veel mogelijk formulier opties van react 19
// 1B Add phone autenication via SMS or on screen click
//Add/Edit/Delete Transactions: Enable users to record income and expenses, modify existing entries, and remove transactions when needed.
//Category Management: Allow users to categorize transactions (e.g., Food, Rent, Entertainment) and even create their own custom categories.
//Dashboard Summary: Show a dashboard with an overview of their financial data, such as total income, total expenses, and the remaining budget.
//Date Range Filter: Include functionality to filter transactions by specific time periods (daily, weekly, monthly, custom dates).
//Visual Charts: Add interactive charts (e.g., pie charts for category breakdowns or line/bar charts for spending trends) using libraries like Chart.js or Recharts.
//Budget Tracking: Allow users to set a monthly budget and track how close they are to exceeding it, with visual indicators or warnings.
//Recurring Expenses/Income: Provide the ability to schedule recurring transactions, such as monthly subscriptions or salaries.
//Search & Sort Transactions: Enable search and sorting by date, amount, or category to make navigation through past expenses seamless.
//Cloud Sync and Data Export: Sync user data to the cloud (e.g., Firebase or a backend database) and allow users to export their data as a CSV file for offline use.
// functies optioneel
// budget bunny logo ontwerpen met slogan thuis
//
// 3. Een kunstmatige model laden en animeren
// https://r3f.docs.pmnd.rs/tutorials/loading-models
function App() {
  const [cart, setCart] = useState([]);
  console.log("Theme context value:", useContext(ThemeContext));
  return (
    <ThemeProvider>
      <div className="dark:bg-gray-900 dark:text-white light:bg-white light:text-black">
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Homepagina />} />
              <Route path="/contact" element={<Contactpagina />} />
              <Route path="/nasa_Foto" element={<Nasa_App />} />
              <Route path="/webshop" element={<Webshoppagina />} />
              <Route path="/Projects" element={<ProjectPagina />} />
              <Route
                path="/Products"
                element={<ProductPagina cart={cart} setCart={setCart} />}
              />
              <Route
                path="/cart"
                element={<Cart cart={cart} setCart={setCart} />}
              ></Route>
              <Route path="/weer_Bericht" element={<Weer_App />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
