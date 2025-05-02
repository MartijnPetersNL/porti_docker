import { ThemeProvider } from "../context/ThemeContext.jsx";
import LoginFormulier from "../components/LoginForm";
import Modal from "../components/ModalLogin";
import React, { useState } from "react";
import SignInFormulier from "../components/SigninForm";
export default function BudgetPagina() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <ThemeProvider>
      <div>
        {/* <img src="./public/header-edited.jpg" alt="header home" /> */}
        {/* <h1 className="text-8xl font-bold centered text-white ">
          {" "}
          Budget Buddy
        </h1> */}
        <button onClick={openModal}> Log-In</button>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <SignInFormulier />
          <LoginFormulier />
        </Modal>
        <button> Help</button>
      </div>
    </ThemeProvider>
  );
}
