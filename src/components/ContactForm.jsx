import React, { useState } from "react";

export default function ContactFormulier() {
  const [alertData, setAlertData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const alertContent = {
      address: formData.get("address"),
      fullname: formData.get("fullname"),
      companyname: formData.get("companyname"),
      message: formData.get("message"),
    };

    setAlertData(alertContent);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="p-4">
        <input
          name="address"
          placeholder="Your full emailadres"
          className="border border-solid border-gray-500 rounded text-xl pl-2"
        />
        <br />
        <input
          type="text"
          placeholder="Your full name"
          name="fullname"
          className="border border-solid border-gray-500 rounded text-xl pl-2 mt-2"
        />
        <br />
        <input
          type="text"
          placeholder="Your company name"
          name="companyname"
          className="border border-solid border-gray-500 rounded text-xl pl-2 mt-2 mb-2"
        />
        <br />
        <textarea
          name="message"
          rows="10"
          cols="30"
          placeholder="Type your message"
          className="border border-solid border-black rounded ms-50 mt-4 mb-6 text-3xl"
        ></textarea>
        <br />
        <button
          type="submit"
          className="mt-3 mb-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Update
        </button>
      </form>

      {alertData && (
        <div className="alert-box mt-4 border border-blue-500 bg-blue-900 text-white p-4 rounded shadow-md text-xl">
          <h2 className="text-2xl font-bold mb-2">Thank you for contacting</h2>
          <p>E-mail: "{alertData.address}"</p>
          <p>Full Name: "{alertData.fullname}"</p>
          <p>Company Name: "{alertData.companyname}"</p>
          <p>Message: "{alertData.message}"</p>
        </div>
      )}
    </div>
  );
}
