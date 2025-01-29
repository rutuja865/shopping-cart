import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import StarRating from "../components/global/utility/StarRating";

const CategoryPage = () => {
  const { products, category, loading, error } = useSelector((state) => state.category);
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 capitalize">{category}</h2>

      {loading && <p className="text-center text-gray-600">Loading products...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            {/* Product Image */}
            <div className="h-48 w-full flex items-center justify-center">
              <img
                src={product.image}
                className="h-full w-full object-contain rounded-md"
                alt={product.title}
              />
            </div>

            {/* Product Info */}
            <div className="w-full text-left mt-3">
              <p className="text-gray-800 font-medium text-sm truncate w-40">
                {product.title}
              </p>
              <p className="text-gray-500 text-xs mt-1">
                {product.description.split(" ").slice(0, 12).join(" ") + "..."}
              </p>

              {/* Rating */}
              <div className="flex items-center mt-2">
                <StarRating rating={product.rating.rate} />
                <p className="text-gray-500 text-xs ml-2">{product.rating.count} reviews</p>
              </div>

              {/* Price */}
              <p className="text-gray-800 font-semibold text-sm mt-1">
                ₹{(product.price * 82).toLocaleString("en-IN")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;