import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { remove, updateQuantity } from "../redux/Slices/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const USD_TO_INR = 82; // Conversion rate (example value)

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item removed from Cart");
  };

  const incrementQuantity = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const decrementQuantity = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      removeFromCart(); // Remove item if quantity is decremented to 0
    }
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center w-full sm:max-w-2xl mt-6 p-4 gap-4 sm:gap-8 bg-white rounded-lg shadow-md">
      {/* Product Image */}
      <div className="flex-shrink-0 w-full sm:w-32">
        <img
          src={item.image}
          className="h-32 w-full object-contain"
          alt={item.title}
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-grow">
        <h1 className="text-gray-700 font-semibold text-lg truncate">
          {item.title}
        </h1>
        <p className="text-gray-500 text-sm mt-1 line-clamp-2">
          {item.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>

        {/* Price and Quantity Controls */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-green-600 font-semibold text-lg">
            ₹{(item.price * USD_TO_INR).toLocaleString("en-IN")}
          </p>

          <div className="flex items-center gap-2">
            <button
              className="px-3 py-1 bg-gray-200 rounded-full text-lg font-semibold"
              onClick={decrementQuantity}
            >
              -
            </button>
            <p className="text-gray-700 font-semibold">{item.quantity}</p>
            <button
              className="px-3 py-1 bg-gray-200 rounded-full text-lg font-semibold"
              onClick={incrementQuantity}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
