import React from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasErrors = false;
    const newErrors = { ...errors };

    if (formData.firstName.trim() === "") {
      newErrors.firstName = "* First name is required";
      hasErrors = true;
    } else {
      newErrors.firstName = "";
    }

    if (formData.lastName.trim() === "") {
      newErrors.lastName = "* Last Name is required";
      hasErrors = true;
    } else {
      newErrors.lastName = "";
    }

    if (formData.email.trim() === "") {
      newErrors.email = " *Email is required";
      hasErrors = true;
    } else {
      newErrors.email = "";
    }

    // check for valid email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "* Invalid email format";
      hasErrors = true;
    }

    if (formData.message.trim() === "") {
      newErrors.message = "* Message is required";
      hasErrors = true;
    } else {
      newErrors.message = "";
    }

    setErrors(newErrors);

    if (!hasErrors) {
      // Perform form submission logic
      console.log("Form submitted successfully:", formData);
    }
  };

  return (
    <div class="container mx-auto my-20 w-1/3 border border-aqua bg-white bg-opacity-10 rounded-lg backdrop-blur-lg shadow-lg ">
      <div class="p-5 space-y-5 shadow-xl">
        <h4 class="text-center text-3xl"></h4>

        <form>
          <div class="grid grid-cols-2 gap-5">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`border border-light-blue px-4 py-2 focus:outline-none focus:border-purple ${
                errors.firstName && "border-red-500"
              }`}
              placeholder="First Name"
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName}</p>
            )}
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`border border-light-blue px-4 py-2 focus:outline-none focus:border-purple ${
                errors.lastName && "border-red-500"
              }`}
              placeholder="Last Name"
            />
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName}</p>
            )}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`border border-light-blue px-4 py-2 focus:outline-none focus:border-purple col-span-2 ${
                errors.email && "border-red-500"
              }`}
              placeholder="Email"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              cols="10"
              rows="5"
              className={`border border-light-blue px-4 py-2 focus:outline-none focus:border-purple col-span-2 ${
                errors.message && "border-red-500"
              }`}
              placeholder="Write your message..."
            ></textarea>
            {errors.message && <p className="text-red-500">{errors.message}</p>}
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              value="Send Message"
              class="focus:outline-none mt-5 bg-dark-blue px-4 py-2 text-white font-bold "
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
