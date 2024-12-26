import { toast } from "react-hot-toast";
import { FcDeleteDatabase } from "react-icons/fc";
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
    <div className="flex flex-col w-[450px] mt-6 justify-center items-center gap-16 h-[180px] rounded-[30px] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
      <div className="flex gap-8 mt-8 h-[200px] w-[400px]">
        <div>
          <img src={item.image} className="mt-4 h-[120px]" alt={item.title} />
        </div>
        <div className="h-[180px]">
          <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
            {item.title}
          </h1>
          <h1 className="w-40 text-gray-500 font-normal text-[12px] text-left">
            {item.description.split(" ").slice(0, 10).join(" ") + "..."}
          </h1>
          <div className="flex justify-between mt-4 items-center">
            <p className="text-green-600 font-semibold">
              ₹{(item.price * USD_TO_INR).toLocaleString("en-IN")}
            </p>
            <div className="flex items-center gap-2">
              <button
                className="px-2 py-1 bg-gray-200 rounded"
                onClick={decrementQuantity}
              >
                -
              </button>
              <p className="text-green-600 font-semibold">{item.quantity}</p>
              <button
                className="px-2 py-1 bg-gray-200 rounded"
                onClick={incrementQuantity}
              >
                +
              </button>
            </div>
            {/* <div onClick={removeFromCart} className="cursor-pointer">
              <FcDeleteDatabase size={24} />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
