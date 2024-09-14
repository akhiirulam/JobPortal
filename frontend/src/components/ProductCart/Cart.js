import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import axios from 'axios'; // Ensure you have axios installed

const CartPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cartItem, setCartItem] = useState(null); // Changed to a single item
  const [coupon, setCoupon] = useState("");

  useEffect(() => {
    if (location.state) {
      console.log(location.state);

      const { Id, label, Price } = location.state;
      const newItem = {
        id: Id,
        name: label,
        price: parseFloat(Price.replace("$", "")),
        quantity: 1,
        image: "https://via.placeholder.com/100",
      };
      setCartItem(newItem); // Set single item
    }
  }, [location.state]);

  const handleQuantityChange = (newQuantity) => {
    if (cartItem) {
      setCartItem((prevItem) => ({
        ...prevItem,
        quantity: newQuantity,
      }));
    }
  };

  const handleRemoveItem = () => {
    setCartItem(null); // Remove item
  };

  const handleCouponApply = () => {
    console.log("Coupon applied:", coupon);
  };

  const getTotalPrice = () => {
    if (cartItem) {
      return cartItem.price * cartItem.quantity;
    }
    return 0;
  };

  const handleCheckout = async () => {
    try {
      if (cartItem) {
        const response = await axios.post('http://localhost:5000/api/v1/payment/checkout', { cartItems: [cartItem], totalPrice: getTotalPrice(), coupon });
        
        if (response.status === 200) {
          navigate('/product/billing');
        }
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <div className="flex flex-col mt-[115px] md:flex-row lg:flex-row justify-between p-4 mt-6 space-y-6 md:space-y-0">
      {/* Cart Item Section */}
      <div className="w-full lg:w-1/2 lg:ml-16 mb-4 lg:mb-0">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        {cartItem ? (
          <div className="flex flex-col sm:flex-row items-center justify-between border-b py-4">
            <div className="flex items-center space-x-4">
              <img src={cartItem.image} alt={cartItem.name} className="w-20 h-20" />
              <div className="text-center sm:text-left">
                <p className="font-semibold">{cartItem.name}</p>
                <p className="text-gray-500">${cartItem.price}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-2 sm:mt-0">
              <input
                type="number"
                value={cartItem.quantity}
                min="1"
                onChange={(e) => handleQuantityChange(Number(e.target.value))}
                className="w-16 border text-center"
              />
              <p className="font-semibold">${cartItem.price * cartItem.quantity}</p>
              <FaTimes
                onClick={handleRemoveItem}
                className="bg-red-500 w-6 h-6 rounded cursor-pointer"
              />
            </div>
          </div>
        ) : (
          <p>Your cart is empty</p>
        )}

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
        <button
          onClick={handleCheckout}
          className="bg-green-500 text-white w-full py-2 font-semibold"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
