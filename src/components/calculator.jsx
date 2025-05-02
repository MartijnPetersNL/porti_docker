import { useState } from "react";
import "../App.css";
//Flex input "display" breedte naar volle breedte rekenmachine
// geheel herbouwen op basis van Tailwindcss klassens op basis van tutorial:
// https://www.youtube.com/watch?v=xJ403Ik33n0&list=WL&index=44&pp=gAQBiAQB

const Calculator = () => {
  const [input, setInput] = useState("");

  function Display(value) {
    setInput(input + value);
  }

  function Clear() {
    setInput("");
  }

  function Calculation() {
    let Answers = eval(input);
    setInput(Answers);
  }
  return (
    <>
      <div className="flex justify-center items-center min-h-70 ">
        <form className="ms-5 h-[244px] w-[190px] lg:h-[490px] lg:w-[380px] lg:ms-0 rounded-xl p-5 bg-black">
          <input
            type="text"
            readOnly
            value={input}
            className="pr-2 text-end text-white font-semibold text-xl h-[45px] w-full bg-[#505050] focus:outline-none  rounded-xl"
          />
          <div className="text-white font-semibold grid grid-cols-4 grid-rows-5 text-1xl lg:text-3xl gap-y-2 my-3 items-center justify-center">
            <span
              className="h-[25px] w-[25px] lg:h-[70px] lg:w-[70px] rounded-full text-black bg-[#D4D4D4] flex justify-center items-center cursor-pointer "
              onClick={Clear}
            >
              C
            </span>
            <span
              className="h-[25px] w-[25px] lg:h-[70px] lg:w-[70px] rounded-full text-black bg-[#D4D4D4] flex justify-center items-center cursor-pointer "
              onClick={() => Display("+/-")}
            >
              +/-
            </span>
            <span
              className="h-[25px] w-[25px] lg:h-[70px] lg:w-[70px] rounded-full text-black bg-[#D4D4D4] flex justify-center items-center  cursor-pointer"
              onClick={() => Display("%")}
            >
              %
            </span>
            <span
              className="h-[25px] w-[25px] lg:h-[70px] lg:w-[70px] rounded-full bg-[#0040ff] flex justify-center items-center cursor-pointer "
              onClick={() => Display("/")}
            >
              ÷
            </span>
            <span
              className="h-[25px] w-[25px] lg:h-[70px] lg:w-[70px] rounded-full bg-[#1C1C1C] flex justify-center items-center  cursor-pointer"
              onClick={() => Display("7")}
            >
              7
            </span>
            <span
              className="h-[25px] w-[25px] lg:h-[70px] lg:w-[70px] rounded-full bg-[#1C1C1C] flex justify-center items-center  cursor-pointer"
              onClick={() => Display("8")}
            >
              8
            </span>
            <span
              className="h-[25px] w-[25px] lg:h-[70px] lg:w-[70px] rounded-full bg-[#1C1C1C] flex justify-center items-center  cursor-pointer"
              onClick={() => Display("9")}
            >
              9
            </span>
            <span
              className="h-[25px] w-[25px] lg:h-[70px] lg:w-[70px] rounded-full bg-[#0040ff] flex justify-center items-center  cursor-pointer"
              onClick={() => Display("*")}
            >
              ×
            </span>
            <span
              className="h-[25px] w-[25px] lg:h-[70px] lg:w-[70px] rounded-full bg-[#1C1C1C] flex justify-center items-center  cursor-pointer"
              onClick={() => Display("4")}
            >
              4
            </span>
            <span
              className="h-[25px] w-[25px] lg:h-[70px] lg:w-[70px] rounded-full bg-[#1C1C1C] flex justify-center items-center  cursor-pointer"
              onClick={() => Display("5")}
            >
              5
            </span>
            <span
              className="h-[25px] w-[25px] lg:h-[70px] lg:w-[70px] rounded-full bg-[#1C1C1C] flex justify-center items-center  cursor-pointer"
              onClick={() => Display("6")}
            >
              6
            </span>
            <span
              className="h-[25px] w-[25px] lg:h-[70px] lg:w-[70px] rounded-full bg-[#0040ff] flex justify-center items-center  cursor-pointer"
              onClick={() => Display("-")}
            >
              -
            </span>
            <span
              className="h-[25px] w-[25px] lg:h-[70px] lg:w-[70px] rounded-full bg-[#1C1C1C] flex justify-center items-center  cursor-pointer"
              onClick={() => Display("1")}
            >
              1
            </span>
            <span
              className="h-[25px] w-[25px] lg:h-[70px] lg:w-[70px] rounded-full bg-[#1C1C1C] flex justify-center items-center  cursor-pointer"
              onClick={() => Display("2")}
            >
              2
            </span>
            <span
              className="h-[25px] w-[25px] lg:h-[70px] lg:w-[70px] rounded-full bg-[#1C1C1C] flex justify-center items-center  cursor-pointer"
              onClick={() => Display("3")}
            >
              3
            </span>
            <span
              className="h-[25px] w-[25px] lg:h-[70px] lg:w-[70px] rounded-full bg-[#0040ff] flex justify-center items-center  cursor-pointer"
              onClick={() => Display("+")}
            >
              +
            </span>
            <span
              className="h-[25px] lg:h-[70px]  col-span-2 rounded-full bg-[#1C1C1C] flex justify-start items-center pl-2 cursor-pointer"
              onClick={() => Display("0")}
            >
              0
            </span>
            <span
              className="h-[25px] w-[25px] lg:h-[70px] lg:w-[70px] rounded-full bg-[#1C1C1C] flex justify-center items-center  cursor-pointer pr-2"
              onClick={() => Display(".")}
            >
              .
            </span>
            <span
              className="h-[25px] w-[25px] lg:h-[70px] lg:w-[70px] rounded-full bg-[#0040ff] flex justify-center items-center  cursor-pointer"
              onClick={Calculation}
            >
              =
            </span>
          </div>
        </form>
      </div>
    </>
  );
};
export default Calculator;
