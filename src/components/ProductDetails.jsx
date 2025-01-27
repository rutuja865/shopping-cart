import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/Slices/cartSlice";
import { useNavigate } from "react-router-dom";
import StarRating from "./global/utility/StarRating";
import { fetchProduct, selectProductById } from "../redux/Slices/productSlice"; // Import new redux functions

export const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [quantity, setQuantity] = useState(1); // Default quantity to 1
  const [addedToCart, setAddedToCart] = useState(false); // Track if product is added to cart

  const dispatch = useDispatch();
  const navigate = useNavigate(); // useNavigate for React Router v6

  // Fetch product from redux store, ensure safe access if product doesn't exist
  const product = useSelector((state) => selectProductById(state, id));
  const loading = useSelector((state) => state.productsdata?.loading); // Use optional chaining to avoid undefined error

  // Fetch product details on component mount
  useEffect(() => {
    if (!product) {
      dispatch(fetchProduct(id)); // Dispatch the fetchProduct action if the product isn't in the store
    }
  }, [dispatch, id, product]);

  const addToCart = () => {
    const productWithQuantity = { ...product, quantity };
    dispatch(add(productWithQuantity));
    toast.success(`${quantity} item(s) added to Cart`);
    setAddedToCart(true);
  };

  if (loading) {
    return <Spinner />;
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-700">Product not found.</p>
        <Link to="/" className="ml-4 text-blue-500 underline">
          Go back to Home
        </Link>
      </div>
    );
  }

  const USD_TO_INR = 82; // Conversion rate (example value)

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Product Image */}
          <div className="flex-1">
            <img
              src={product.image}
              alt={product.title}
              className="h-64 w-full object-contain rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
            <p className="text-gray-600 mt-2">{product.description}</p>

            {/* Price */}
            <p className="text-gray-900 font-semibold text-lg mt-4">
              ₹{(product.price * USD_TO_INR).toLocaleString("en-IN")}
            </p>

            {/* Rating */}
            <div className="mt-4">
              <p className="text-yellow-500 font-semibold text-lg">
                <StarRating rating={product.rating.rate}/>
              </p>
              <p className="text-gray-600 text-sm">
                {product.rating.count} reviews
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center mt-4">
              <label htmlFor="quantity" className="text-gray-700 mr-2">
                Quantity:
              </label>
              <select
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {[...Array(10).keys()].map((i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>

            {/* Add to Cart / Go to Cart Button */}
            <div className="flex justify-between items-center w-full mt-6">
              {addedToCart ? (
                <button
                  className="text-blue-600 border border-blue-600 rounded-lg font-medium text-sm py-1 px-4 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                  onClick={() => navigate("/cart")} // Navigate to the Cart page
                >
                  Go to Cart
                </button>
              ) : (
                <button
                  className="text-blue-600 border border-blue-600 rounded-lg font-medium text-sm py-1 px-4 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                  onClick={addToCart}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Link
            to="/"
            className="text-blue-500 underline hover:text-blue-700 transition-colors duration-200"
          >
            Go back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};
