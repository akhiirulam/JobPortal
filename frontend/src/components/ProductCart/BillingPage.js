import React, { useState } from "react";
import Select from "react-select";
import { countries } from "./Countries"; 
import axios from "axios";

const BillingPage = () => {
  const [billingDetails, setBillingDetails] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    streetAddress: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("");

  const handleCountryChange = (selectedOption) => {
    setBillingDetails({ ...billingDetails, country: selectedOption.value });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails({ ...billingDetails, [name]: value });
  };

  const handlePayment = async () => {
    try {
     console.log("hello")
      const orderResponse = await axios.post("http://localhost:5000/api/v1/payment/order", {
        amount: 500, 
        currency: "INR",
        receipt: "receipt#1",
      });
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };



  return (
    <div className="flex flex-col md:flex-row mt-[115px] gap-4 lg:flex-row justify-between p-4 mt-6  space-y-6 md:space-y-0">
      {/* Billing Details Section */}
      <div className="w-full lg:w-2/3 mb-16">
        <h2 className="text-xl font-bold mb-4">Billing Details</h2>

        {/* First Name and Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-semibold">First Name *</label>
            <input
              type="text"
              name="firstName"
              value={billingDetails.firstName}
              onChange={handleInputChange}
              className="border p-2 w-full"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={billingDetails.lastName}
              onChange={handleInputChange}
              className="border p-2 w-full"
              required
            />
          </div>
        </div>

        {/* Company Name */}
        <div className="mt-4">
          <label className="block mb-2 font-semibold">Company Name (optional)</label>
          <input
            type="text"
            name="companyName"
            value={billingDetails.companyName}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
        </div>

         {/* Country/Region (Searchable Dropdown) */}
         <div className="mt-4">
          <label className="block mb-2 font-semibold">Country / Region *</label>
          <Select
            options={countries}
            onChange={handleCountryChange}
            className="w-full"
            placeholder="Select Country"
            isSearchable
          />
        </div>

        {/* Street Address */}
        <div className="mt-4">
          <label className="block mb-2 font-semibold">Street Address *</label>
          <input
            type="text"
            name="streetAddress"
            value={billingDetails.streetAddress}
            onChange={handleInputChange}
            className="border p-2 w-full mb-2"
            placeholder="House number and street name"
            required
          />
          <input
            type="text"
            name="apartment"
            value={billingDetails.apartment}
            onChange={handleInputChange}
            className="border p-2 w-full"
            placeholder="Apartment, suite, unit, etc. (optional)"
          />
        </div>

        {/* Town / City and State */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block mb-2 font-semibold">Town / City *</label>
            <input
              type="text"
              name="city"
              value={billingDetails.city}
              onChange={handleInputChange}
              className="border p-2 w-full"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">State *</label>
            <input
              type="text"
              name="state"
              value={billingDetails.state}
              onChange={handleInputChange}
              className="border p-2 w-full"
              required
            />
          </div>
        </div>

        {/* ZIP Code, Phone, and Email */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div>
            <label className="block mb-2 font-semibold">ZIP Code *</label>
            <input
              type="text"
              name="zipCode"
              value={billingDetails.zipCode}
              onChange={handleInputChange}
              className="border p-2 w-full"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Phone *</label>
            <input
              type="text"
              name="phone"
              value={billingDetails.phone}
              onChange={handleInputChange}
              className="border p-2 w-full"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Email Address *</label>
            <input
              type="email"
              name="email"
              value={billingDetails.email}
              onChange={handleInputChange}
              className="border p-2 w-full"
              required
            />
          </div>
        </div>
      </div>

      {/* Payment Methods Section */}
      <div className="w-full lg:w-1/3 bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Payment Methods</h2>

        <div className="mb-4">
          <label className="block">
            <input
              type="radio"
              name="paymentMethod"
              value="Direct bank transfer"
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            Direct bank transfer
          </label>
        </div>
        <div className="mb-4">
          <label className="block">
            <input
              type="radio"
              name="paymentMethod"
              value="Check payments"
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            Check payments
          </label>
        </div>
        <div className="mb-4">
          <label className="block">
            <input
              type="radio"
              name="paymentMethod"
              value="Cash on delivery"
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            Cash on delivery
          </label>
        </div>

        <button
          onClick={handlePayment}
          className="bg-green-500 text-white w-full py-2 font-semibold"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default BillingPage;
