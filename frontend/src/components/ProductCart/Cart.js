import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";



const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Package 1", price: 100, quantity: 1, image: "https://via.placeholder.com/100" },
    { id: 2, name: "Package 2", price: 200, quantity: 2, image: "https://via.placeholder.com/100" },
  ]);

  const [coupon, setCoupon] = useState("");

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleCouponApply = () => {
    console.log("Coupon applied:", coupon);
    // Handle coupon logic here
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="flex flex-col mt-[115px] md:flex-row lg:flex-row justify-between p-4 mt-6 space-y-6 md:space-y-0">
      {/* Cart Items Section */}
      <div className="w-full lg:w-1/2 lg:ml-16 mb-4 lg:mb-0">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between border-b py-4">
            <div className="flex items-center space-x-4">
              <img src={item.image} alt={item.name} className="w-20 h-20" />
              <div className="text-center sm:text-left">
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-500">${item.price}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-2 sm:mt-0">
              <input
                type="number"
                value={item.quantity}
                min="1"
                onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                className="w-16 border text-center"
              />
              <p className="font-semibold">${item.price * item.quantity}</p>
              {/* Remove Button */}
              <FaTimes  onClick={() => handleRemoveItem(item.id)}
                className="bg-red-500 w-6 h-6 rounded"/>
              
            </div>
          </div>
        ))}

        {/* Coupon Section */}
        <div className="mt-4 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <input
            type="text"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="Enter coupon code"
            className="border p-2 w-full sm:w-2/3"
          />
          <button
            onClick={handleCouponApply}
            className="bg-blue-500 text-white p-2 w-full sm:w-1/3"
          >
            Apply Coupon
          </button>
        </div>
      </div>

      {/* Checkout Section */}
      <div className="w-full lg:w-1/3 lg:mr-16 bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
        <div className="mb-4 flex justify-between">
          <p className="font-semibold">Subtotal</p>
          <p className="font-semibold">${getTotalPrice()}</p>
        </div>
        <button className="bg-green-500 text-white w-full py-2 font-semibold">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
