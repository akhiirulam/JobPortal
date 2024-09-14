import React, { useState, useEffect } from "react";
import Select from "react-select";
import { countries } from "./Countries";
import axios from "axios";
import { useFormik } from 'formik';



const BillingPage = () => {


  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [loading, setLoading] = useState(false);

  // Function to dynamically load Razorpay script
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    // Fetch cart items from the server
    const fetchCartItems = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/payment/billing");
        setCartItems(response.data);
        
        // Calculate the total amount
        const total = response.data[0]?.totalPrice || 0;
        setTotalAmount(total);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  const formik = useFormik({
    initialValues: {
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
      paymentMethod: "",
    },
    onSubmit: async (values) => {
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        alert("Razorpay SDK failed to load. Please try again.");
        return;
      }

      try {
        // Create an order on your backend and get the order ID
        const orderResponse = await axios.post("http://localhost:5000/api/v1/payment/order", {
          amount: totalAmount * 1, // Razorpay requires amount in paise (1 INR = 100 paise)
          currency: "INR",
          receipt: "receipt#1",
          billingDetails: values,
          cartItems, // Send cart items to the backend
        });

        const { id: order_id, currency, amount } = orderResponse.data;

        // Razorpay options
        const options = {
          key: process.env.RAZORPAY_KEY_ID,// Replace with your Razorpay key
          amount: amount,
          currency: currency,
          name: "JOBPorta",
          description: "Test Transaction",
          order_id: order_id, // This is the order ID returned by Razorpay
          handler: async function (response) {
            const paymentResult = {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            };

            // Verify the payment on the server-side
            try {
              const verifyResponse = await axios.post("http://localhost:5000/api/v1/payment/verify", paymentResult);
              if (verifyResponse.data.success) {
                alert("Payment successful!");
              } else {
                alert("Payment verification failed. Please try again.");
              }
            } catch (error) {
              console.error("Error verifying payment:", error);
              alert("Payment verification failed. Please try again.");
            }
          },
          prefill: {
            name: `${values.firstName} ${values.lastName}`,
            email: values.email,
            contact: values.phone,
          },
          theme: {
            color: "#3399cc",
          },
        };

        // Open Razorpay payment interface
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } catch (error) {
        console.error("Error processing payment:", error);
        alert("Error processing payment. Please try again.");
      }
    },
  });

  const handleCountryChange = (selectedOption) => {
    formik.setFieldValue('country', selectedOption.value);
  };

  return (
    <div className="flex flex-col md:flex-row mt-[115px] gap-4 lg:flex-row justify-between p-4 mt-6 space-y-6 md:space-y-0">
      {/* Billing Details Section */}
      <div className="w-full lg:w-2/3 mb-16">
        <h2 className="text-xl font-bold mb-4">Billing Details</h2>

        {/* Form Fields */}
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-semibold">First Name *</label>
              <input
                type="text"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                className="border p-2 w-full"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                className="border p-2 w-full"
                required
              />
            </div>
          </div>

          {/* Additional form fields like company name, address, country, etc. */}
          
          {/* Payment Method */}
          <div className="mt-4">
            <label className="block mb-2 font-semibold">Payment Method *</label>
            <div className="flex gap-4">
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="creditCard"
                  checked={formik.values.paymentMethod === "creditCard"}
                  onChange={formik.handleChange}
                  className="mr-2"
                />
                Credit Card
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={formik.values.paymentMethod === "paypal"}
                  onChange={formik.handleChange}
                  className="mr-2"
                />
                PayPal
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Proceed to Payment
          </button>
        </form>
      </div>

      {/* Order Summary */}
      <div className="w-full lg:w-1/3 p-4 border rounded">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between mb-2">
              <span>{item.name}</span>
              <span>{item.quantity} x ₹{item.price}</span>
            </li>
          ))}
        </ul>
        <hr className="my-2" />
        <div className="flex justify-between font-bold">
          <span>Total Amount</span>
          <span>₹{totalAmount}</span>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;
