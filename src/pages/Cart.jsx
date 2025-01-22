import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart); // Assuming `cart` is an array in the Redux store
  const [totalAmount, setTotalAmount] = useState(0);
  const USD_TO_INR = 82;

  useEffect(() => {
    // Calculate the total amount considering the quantity of items
    const total = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
    setTotalAmount(total);
  }, [cart]);

  const totalAmountInINR = (totalAmount * USD_TO_INR).toLocaleString("en-IN");

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {cart.length > 0 ? (
        <div className="flex flex-col lg:flex-row lg:gap-16 max-w-6xl mx-auto">
          {/* Cart Items */}
          <div className="w-full lg:w-[70%]">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* Cart Summary */}
          <div className="mt-8 lg:mt-0 lg:w-[30%] w-full flex flex-col gap-8 justify-between">
            <div className="text-center lg:text-left">
              <p className="text-lg sm:text-xl text-[#166534] uppercase font-semibold">
                Your Cart
              </p>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#15803d] uppercase mb-4">
                Summary
              </p>
              <p className="text-lg sm:text-xl font-semibold text-slate-700">
                Total Items:{" "}
                <span className="font-normal">
                  {cart.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              </p>
              <p className="text-lg sm:text-xl font-semibold text-slate-700 mb-5">
                Total Amount:{" "}
                <span className="font-bold ml-2 text-black">₹{totalAmountInINR}</span>
              </p>
              <button
                className="text-base sm:text-lg w-full py-2.5 rounded-lg font-bold text-white bg-[#15803d]
                border-2 border-[#15803d] hover:bg-white hover:text-[#15803d] transition-all duration-300 ease-in"
              >
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-6 w-full h-[calc(100vh-80px)]">
          <h1 className="text-lg sm:text-xl font-semibold">Your Cart is Empty!</h1>
          <Link to={"/"}>
            <button
              className="bg-[#16a34a] text-white text-md uppercase font-semibold py-3 px-10 rounded-md
              border-[#16a34a] border-2 hover:bg-white hover:text-[#16a34a] transition-all duration-300"
            >
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
