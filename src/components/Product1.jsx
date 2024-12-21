import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

export const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  };

  return (
    <div className="flex flex-col items-center justify-between gap-4 p-6 mt-8 ml-6 bg-white rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="w-full text-left">
        <p className="text-gray-800 font-semibold text-lg">{post.title}</p>
        <p className="text-gray-500 text-sm mt-2">
          {post.description.split(" ").slice(0, 15).join(" ") + "..."}
        </p>
      </div>

      <div className="h-64 w-full mt-4">
        <img
          src={post.image}
          className="h-full w-full object-contain rounded-lg"
          alt={post.title}
        />
      </div>

      <div className="flex justify-between items-center w-full mt-4">
        <p className="text-green-600 font-bold text-lg">${post.price}</p>

        {cart.some((p) => p.id === post.id) ? (
          <button
            className="text-red-600 border border-red-600 rounded-full font-medium text-sm py-1 px-4 hover:bg-red-600 hover:text-white transition-colors duration-300"
            onClick={removeFromCart}
          >
            Remove
          </button>
        ) : (
          <button
            className="text-blue-600 border border-blue-600 rounded-full font-medium text-sm py-1 px-4 hover:bg-blue-600 hover:text-white transition-colors duration-300"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};
