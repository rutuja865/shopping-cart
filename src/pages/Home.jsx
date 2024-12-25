import { useState, useEffect } from "react";
import {Spinner} from "../components/Spinner";
import {Product} from "../components/Product";
import { PromoPage } from "./PromoPage";
import { BannerCorousal } from "./BannerCorousal";
import axios from 'axios';
import image2 from '../assets/images/poster.webp'

export const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try {
      const response = await axios.get(API_URL); // Make API call using axios
      setProducts(response.data); // Extract and set the data from response
    } catch (error) {
      console.log("Error", error.message); 
      setProducts([]);
    } 
      setLoading(false); 
    
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <>
 <div className="pt-4 header-banner-container flex justify-center w-full h-screen">
  <img 
    src={image2} 
    alt="Banner" 
    className=""
  />
</div>


    <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            {/* <h1 className="text-3xl font-bold tracking-tight text-gray-900"></h1> */}
            <PromoPage/>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <BannerCorousal/>
          </div>
        </main>
       <div>
      {
        loading ? <Spinner />  :
        products.length > 0 ? 
        (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 py-6">
          {
            products.map( (product) => (
            <Product key = {product.id} product={product}/>
          ) )
          }
        </div>) :
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div> 
      }
    </div>
    </>
 
  );
};
