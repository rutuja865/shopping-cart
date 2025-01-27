import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/Slices/productSlice"; // Import fetchProduct action
import { Spinner } from "../components/Spinner";
import { Product } from "../components/Product";
import { PromoPage } from "./PromoPage";
import { BannerCorousal } from "./BannerCorousal";
import image2 from '../assets/images/poster.webp';

export const Home = () => {
  const dispatch = useDispatch();

  // Access the product state and loading state from Redux store
  const { products, loading } = useSelector((state) => state.productsdata);

  // Fetch product data on component mount
  useEffect(() => {
    // Fetch products by dispatching fetchProduct action for all products
    const fetchAllProducts = async () => {
      for (let id = 1; id <= 20; id++) { // Assuming there are 20 products, adjust if needed
        dispatch(fetchProduct(id)); // Dispatch action for each product
      }
    };

    fetchAllProducts();
  }, [dispatch]);

  return (
    <>
      <div className="pt-4 header-banner-container flex justify-center w-full h-screen">
        <img src={image2} alt="Banner" className="" />
      </div>

      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <PromoPage />
        </div>
      </header>

      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <BannerCorousal />
        </div>
      </main>

      <div>
        {
          loading ? <Spinner /> :
          Object.keys(products).length > 0 ? 
          (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 py-6">
              {
                Object.values(products).map((product) => (
                  <Product key={product.id} product={product} />
                ))
              }
            </div>
          ) :
          <div className="flex justify-center items-center">
            <p>No Data Found</p>
          </div>
        }
      </div>
    </>
  );
};
