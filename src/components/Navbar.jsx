import React from 'react'
import {FaShoppingCart} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
export const Navbar = () => {
  return (
    <div className='bg-blue-500'>
        <div className="flex flex-row justify-between">
            <NavLink to="/">
                <div>
                <img src="https://media.istockphoto.com/id/1320617333/photo/shopping-cart-full-of-food-isolated-on-white-grocery-and-food-store-concept.jpg?s=612x612&w=0&k=20&c=e4O0Gvp-CVd6JGPTg4kh_2REP5GXJRpk7Tvdh_uaGJ0=" alt="" />
                </div>
            </NavLink>
            <div>
                <NavLink to="/">
                <p>Home</p>
                </NavLink>
         <NavLink to="/cart">
            <div>
            <FaShoppingCart/>
            </div>
       
         </NavLink>
       
            </div>
           
        </div>
        
    </div>
  )
}
