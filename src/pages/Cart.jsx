import React from "react";
import { useState } from "react";
import { ThemeProvider } from "../context/ThemeContext.jsx";
import DarkModeToggler from "../components/DarkModeToggler";
export function Cart({ cart, setCart }) {
  const [showModal, setShowModal] = useState(false);
  function handleRemove(item) {
    setCart(cart.filter((product) => product.title != item.title));
  }
  function handelBuy() {
    <div className="flex flex-col items-center justify-center h-60">
      <h1 className="text-2xl font-bold">
        Click on the button to open the modal.
      </h1>
      <button
        className="px-4 py-2 text-purple-100 bg-purple-600 rounded-md"
        type="button"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Open Modal
      </button>

      {showModal && <Modal setOpenModal={setShowModal} />}
    </div>;
  }
  return (
    <ThemeProvider>
      <>
        <h3 className="text-3xl"> cart page</h3>
        <DarkModeToggler />
        {cart.map((item, index) => {
          return (
            <div key={index}>
              <h2 className="text-xl3">{item.title}</h2>
              <p>{item.desc}</p>
              <button onClick={() => handleRemove(item)}>Remove item</button>
            </div>
          );
        })}
        <button onClick={() => handelBuy}>
          <p>CHECKOUT</p>
        </button>
      </>
    </ThemeProvider>
  );
}
