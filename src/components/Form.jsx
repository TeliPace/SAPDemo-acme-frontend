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
        setFormMessage("Order placed successfully");
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
  
      className="w-full max-w-5xl mx-auto p-6 pt-10 bg-gray-100 shadow-lg rounded-lg"
      onSubmit={handleSubmit}
    >
      <h2 className="text-3xl font-bold mb-8 text-primary">Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            label: "First Name *",
            id: "firstName",
            type: "text",
            required: true,
          },
          {
            label: "Last Name *",
            id: "lastName",
            type: "text",
            required: true,
          },
          { label: "Email *", id: "email", type: "email", required: true },
          { label: "Phone", id: "phone", type: "tel" },
          { label: "Company *", id: "company", type: "text", required: true },
          { label: "Street", id: "street", type: "text" },
          { label: "Post Code", id: "postCode", type: "text" },
          { label: "Country", id: "country", type: "text" },
        ].map(({ label, id, type, required }) => (
          <div className="mb-4" key={id}>
            <label
              htmlFor={id}
              className="block text-gray-700 font-medium mb-2"
            >
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
      </div>
      <div className="flex w-full flex-col justify-center items-center p-3">
        <button
          type="submit"
          className="bg-accent text-white py-2 px-4 rounded-md hover:bg-slate-700 transition duration-300"
        >
          Place Order
        </button>
        <h3 className="text-success font-bold text-xl p-3">{formMessage}</h3>
      </div>
    </form>
  );
};

export default Form;
