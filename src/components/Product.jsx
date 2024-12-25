import { useNavigate } from "react-router-dom";
import StarRating from "./global/utility/StarRating";

export const Product = ({ product }) => {
  const navigate = useNavigate();

  // Rating stars calculation
  // const renderStars = (rating) => {
  //   const filledStars = Math.floor(rating); // Full stars
  //   const hasHalfStar = rating % 1 >= 0.5; // Check for half-star
  //   const totalStars = 5; // We are showing 5 stars total

  //   let stars = [];
  //   // Add filled stars
  //   for (let i = 0; i < filledStars; i++) {
  //     stars.push("★");
  //   }
  //   // Add half star if applicable
  //   if (hasHalfStar) {
  //     stars.push("☆");
  //   }
  //   // Add empty stars
  //   for (let i = stars.length; i < totalStars; i++) {
  //     stars.push("☆");
  //   }

  //   return stars.join(" "); // Return stars as a string of characters
  // };

  return (
    <div
      className="flex flex-col items-center justify-between gap-2 p-3 mt-6 ml-4 bg-white rounded-xl shadow-md cursor-pointer"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      {/* Product Image */}
      <div className="h-48 w-full">
        <img
          src={product.image}
          className="h-full w-full object-contain rounded-md"
          alt={product.title}
        />
      </div>

      {/* Product Title and Description */}
      <div className="w-full text-left">
        <p className="text-gray-800 font-medium text-sm truncate w-40">
          {product.title}
        </p>
        <p className="text-gray-500 text-xs mt-1">
          {product.description.split(" ").slice(0, 12).join(" ") + "..."}
        </p>
 {/* Rating */}
 <div className="flex items-center mt-2">
          <p className="text-yellow-500 font-semibold text-sm">
            {/* {renderStars(post.rating.rate)} Display stars */}
            <StarRating rating={product.rating.rate}/>
          </p>
          <p className="text-gray-500 text-xs ml-2">{product.rating.count} reviews</p>
        </div>
        {/* Price */}
        <p className="text-gray-800 font-semibold text-sm mt-1">
          ₹{(product.price * 82).toLocaleString("en-IN")}
        </p>

       
      </div>
    </div>
  );
};
