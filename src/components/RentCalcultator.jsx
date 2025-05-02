// challenge: has to use function composition JS
// bereken rente over 1, 5, 15, 35 jaar
// rente moet hoger wanneer de gebruiker meerder jaren vashoud (geen banrekening toegang)
// zorg dat het euro teken voor het bedrag komt, zonder dat gebruik het hoeft te typen
// x => x + 1    x+2.5^5
import { useState } from "react";

export default function RentCalculator() {
  const applyInterest = (percentage) => (amount) => amount * percentage;
  const [selectedOption, setSelectedOption] = useState("");
  const [startbedrag, setStartbedrag] = useState(0);
  const [eindbedrag, setEindbedrag] = useState(0);
  const [eindbedragen, setEindbedragen] = useState(null);
  const noneHold = applyInterest(1.02);
  const year1Hold = applyInterest(1.16);
  const year5Hold = applyInterest(1.25);
  const year15Hold = applyInterest(1.35);
  const year35Hold = applyInterest(2.75);

  function Renteberekening() {
    if (selectedOption === "nonehold") {
      setEindbedrag(startbedrag * 1.02);
      console.log(eindbedrag);
    }
    if (selectedOption === "year1hold") {
      setEindbedrag(startbedrag * 1.16);
    }
    if (selectedOption === "year5hold") {
      setEindbedrag(startbedrag * 1.25);
    }
    if (selectedOption === "year15hold") {
      setEindbedrag(startbedrag * 1.35);
    }
    if (selectedOption === "year35hold") {
      setEindbedrag(startbedrag * 2.75);
    }
  }
  // function composition
  function RenteTotaleBerekening() {
    const berekendeBedragen = [
      { label: "None withdraw wait", amount: noneHold(startbedrag) },
      { label: "1 Year withdraw wait", amount: year1Hold(startbedrag) },
      { label: "5 Years withdraw wait", amount: year5Hold(startbedrag) },
      { label: "15 Years withdraw wait", amount: year15Hold(startbedrag) },
      { label: "35 Years withdraw wait", amount: year35Hold(startbedrag) },
    ];

    setEindbedragen(berekendeBedragen);
  }

  return (
    <div>
      <div className="flex items-center justify-center mb-5">
        <h1>
          {" "}
          <i
            className="fa-solid fa-euro-sign"
            style={{ fontSize: "90px", color: "white" }}
          ></i>
          Rent Calculator
        </h1>
      </div>

      <div className="flex items-center justify-center text-center">
        <input
          type="number"
          className="border border-solid border-gray-500 rounded text-xl w-48 pl-3 py-2"
          placeholder="deposit"
          onChange={(e) => setStartbedrag(e.target.value)}
        />
      </div>
      <h3 className="text-green-400 font-bold mt-4">
        {" "}
        Why You should Get a deposit at Bankname:{" "}
      </h3>
      <ol className="mt-2 lg:ml-25  text-left">
        <li>No Closure Costs</li>
        <li>Create free piggy banks for all your savings goals</li>
      </ol>
      <button className="knopsmall mt-4"> Read more about deposits</button>
      <br />
      <input />
      <br />

      <div className="mt-3">
        <label>
          <input
            type="radio"
            name="rente"
            value="nonehold"
            checked={selectedOption === "nonehold"}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          None withdraw wait
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="rente"
            value="year1hold"
            checked={selectedOption === "year1hold"}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          1 Year withdraw wait
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="rente"
            value="year5hold"
            checked={selectedOption === "year5hold"}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          5 Years withdraw wait
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="rente"
            value="year15hold"
            checked={selectedOption === "year5hold"}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          15 Years withdraw wait
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="rente"
            value="year35hold"
            checked={selectedOption === "year5hold"}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          35 Years withdraw wait
        </label>
      </div>
      <br />

      <h3 className="font-bold"> See a particular holding term </h3>
      <h3 className="font-bold"> Or compare all Holding terms</h3>
      <div className="lg:flex ml-0 lg:ml-20">
        <button
          className="mb-7 mt-5 text-1xl"
          value="allrent"
          onClick={Renteberekening}
        >
          {" "}
          Calculate all rente
        </button>

        <button
          className="mb-7 mt-5 text-1xl"
          value="allrent"
          onClick={RenteTotaleBerekening}
        >
          {" "}
          Calculate all rente
        </button>
      </div>

      <div>
        <h2>Choose a Option</h2>€ {eindbedrag.toFixed(2)}
      </div>

      <div>
        {eindbedragen?.map((item, index) => (
          <div key={index}>
            {item.label}: € {item.amount.toFixed(2)}
          </div>
        ))}
      </div>
      <button className="mb-7 mt-5 text-3xl"> Create deposite</button>
    </div>
  );
}
