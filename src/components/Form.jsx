import React, { useState } from "react";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <form
      className="max-w-lg mx-auto p-6 bg-gray-100 shadow-lg rounded-lg"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-semibold text-center mb-6 text-blue-900">
        Details
      </h2>

      {[
        { label: "First Name", id: "firstName", type: "text" },
        { label: "Last Name", id: "lastName", type: "text" },
        { label: "Email", id: "email", type: "email" },
        { label: "Phone", id: "phone", type: "tel" },
        { label: "Company", id: "company", type: "text" },
        { label: "Street", id: "street", type: "text" },
        { label: "Post Code", id: "postCode", type: "text" },
        { label: "Country", id: "country", type: "text" },
      ].map(({ label, id, type }) => (
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
          />
        </div>
      ))}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
      >
        Check Out
      </button>
    </form>
  );
};

export default Form;
