import { FaShoppingCart, FaShoppingBag } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { BellIcon, XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { fetchCategoryProducts, setCategory } from "../redux/Slices/categorySlice"; 

const user = {
  name: "Rutuja",
  email: "rutujag44@gmail.com",
  imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];

export const Navbar = () => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category));
    dispatch(fetchCategoryProducts(category));
  };

  return (
    <div className="min-h-full">
      <Disclosure as="nav" className="bg-gray-800 fixed top-0 w-full z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            
            {/* Logo & Desktop Navigation */}
            <div className="flex items-center h-16">
              <NavLink to="/" className="text-slate-100 text-xl flex items-center gap-2">
                <FaShoppingBag />
                <p>Shoppybuddy</p>
              </NavLink>
              <div className="hidden md:flex ml-10 space-x-4">
                {categories.map((category) => (
                  <NavLink
                    key={category}
                    to={`/category/${category}`}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category.toUpperCase()}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Right Section: Cart, Notifications, Profile */}
            <div className="hidden md:flex space-x-4 items-center">
              
              {/* Cart Button */}
              <NavLink to="/cart" className="relative">
                <FaShoppingCart className="size-6 text-gray-400 hover:text-white" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                    {cart.reduce((acc, item) => acc + item.quantity, 0)}
                  </span>
                )}
              </NavLink>

              {/* Notifications */}
              <button className="p-1 text-gray-400 hover:text-white focus:outline-none">
                <BellIcon className="size-6" />
              </button>

              {/* Profile Dropdown */}
              <Menu as="div" className="relative">
                <MenuButton className="flex items-center rounded-full bg-gray-800 text-sm focus:outline-none">
                  <img alt="User" src={user.imageUrl} className="size-8 rounded-full" />
                </MenuButton>
                <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                  <MenuItem>
                    <NavLink to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Your Profile
                    </NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Settings
                    </NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Sign out
                    </NavLink>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              
              {/* Cart Button (Mobile) */}
              <NavLink to="/cart" className="relative mr-4">
                <FaShoppingCart className="size-6 text-gray-400 hover:text-white" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                    {cart.reduce((acc, item) => acc + item.quantity, 0)}
                  </span>
                )}
              </NavLink>

              {/* Mobile Menu Toggle */}
              <DisclosureButton className="p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none">
                <Bars3Icon className="size-6" />
              </DisclosureButton>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <DisclosurePanel className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {categories.map((category) => (
              <DisclosureButton
                key={category}
                as={NavLink}
                to={`/category/${category}`}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={() => handleCategoryClick(category)}
              >
                {category.toUpperCase()}
              </DisclosureButton>
            ))}
          </div>
          <div className="border-t border-gray-700 pb-3 pt-4">
            <div className="flex items-center px-5">
              <img alt="User" src={user.imageUrl} className="size-10 rounded-full" />
              <div className="ml-3">
                <div className="text-base font-medium text-white">{user.name}</div>
                <div className="text-sm font-medium text-gray-400">{user.email}</div>
              </div>
              <button className="ml-auto p-1 text-gray-400 hover:text-white focus:outline-none">
                <BellIcon className="size-6" />
              </button>
            </div>
            <div className="mt-3 space-y-1 px-2">
              <DisclosureButton as={NavLink} to="#" className="block px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">
                Your Profile
              </DisclosureButton>
              <DisclosureButton as={NavLink} to="#" className="block px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">
                Settings
              </DisclosureButton>
              <DisclosureButton as={NavLink} to="/login" className="block px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">
                Sign out
              </DisclosureButton>
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
};
