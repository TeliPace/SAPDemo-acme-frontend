import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    street: "",
    postCode: "",
    country: "",
  });

  const [formMessage, setFormMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormMessage("");
    console.log("Form Data:", formData);
    axios
      .post(
        "https://e-pace-s4hana-frontend-api-fcz81c.ed2k4s.gbr-e1.cloudhub.io/order",
        formData
      )
      .then((res) => {
        setFormMessage("Successfully submitted");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          street: "",
          postCode: "",
          country: "",
        });
      })
      .catch((err) => {
        setFormMessage("An error occurred");
        console.log(err);
      });
  };

  return (
    <form
      className="max-w-lg mx-auto p-6 pt-10 bg-gray-100 shadow-lg rounded-lg"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-semibold text-center mb-6 text-blue-900">
        Details
      </h2>

      {[
        { label: "First Name", id: "firstName", type: "text", required: true },
        { label: "Last Name", id: "lastName", type: "text", required: true },
        { label: "Email", id: "email", type: "email", required: true },
        { label: "Phone", id: "phone", type: "tel" },
        { label: "Company", id: "company", type: "text", required: true },
        { label: "Street", id: "street", type: "text" },
        { label: "Post Code", id: "postCode", type: "text" },
        { label: "Country", id: "country", type: "text" },
      ].map(({ label, id, type, required }) => (
        <div className="mb-4" key={id}>
          <label htmlFor={id} className="block text-gray-700 font-medium mb-2">
            {label}
          </label>
          <input
            type={type}
            id={id}
            name={id}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData[id]}
            onChange={handleChange}
            required={required}
          />
        </div>
      ))}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
      >
        Check Out
      </button>
      <h3 className="text-red p-2">{formMessage}</h3>
    </form>
  );
};

export default Form;
