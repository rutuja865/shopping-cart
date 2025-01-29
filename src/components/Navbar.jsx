import { FaShoppingCart, FaShoppingBag } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const user = {
  name: "Rutuja",
  email: "rutujag44@gmail.com",
  imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const navigation = [
  { name: "Men", href: "#", current: false },
  { name: "Women", href: "#", current: false },
  { name: "Jewelry", href: "#", current: false },
  { name: "Electronics", href: "#", current: false },
];

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "/login" },
];

export const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div className="min-h-full">
      <Disclosure as="nav" className="bg-gray-800 fixed top-0 w-full z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center h-16">
              <NavLink to="/" className="text-slate-100 text-xl flex items-center gap-2">
                <FaShoppingBag />
                <p>Shoppybuddy</p>
              </NavLink>
              {/* Desktop Navigation Links */}
              <div className="hidden md:flex ml-10 space-x-4">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Section (Cart, Notifications, Profile) */}
            <div className="hidden md:flex space-x-4 items-center">
              {/* Cart Button */}
              <NavLink to="/cart">
                <button className="relative p-1 text-gray-400 hover:text-white focus:outline-none">
                  {cart.length > 0 && (
                    <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                      {cart.reduce((acc, item) => acc + item.quantity, 0)}
                    </span>
                  )}
                  <FaShoppingCart className="size-6" />
                </button>
              </NavLink>

              {/* Notifications Button */}
              <button className="p-1 text-gray-400 hover:text-white focus:outline-none">
                <BellIcon className="size-6" />
              </button>

              {/* Profile Dropdown */}
              <Menu as="div" className="relative">
                <MenuButton className="flex items-center rounded-full bg-gray-800 text-sm focus:outline-none">
                  <img alt="" src={user.imageUrl} className="size-8 rounded-full" />
                </MenuButton>
                <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                  {userNavigation.map((item) => (
                    <MenuItem key={item.name}>
                      <a href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        {item.name}
                      </a>
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <NavLink to="/cart">
                <button className="relative p-1 text-gray-400 hover:text-white focus:outline-none">
                  {cart.length > 0 && (
                    <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                      {cart.reduce((acc, item) => acc + item.quantity, 0)}
                    </span>
                  )}
                  <FaShoppingCart className="size-6" />
                </button>
              </NavLink>
              <DisclosureButton className="ml-4 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none">
                <XMarkIcon className="hidden size-6 group-data-[open]:block" />
                <img src={user.imageUrl} alt="" className="size-8 rounded-full" />
              </DisclosureButton>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <DisclosurePanel className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navigation.map((item) => (
              <DisclosureButton key={item.name} as="a" href={item.href} className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                {item.name}
              </DisclosureButton>
            ))}
          </div>
          <div className="border-t border-gray-700 pb-3 pt-4">
            <div className="flex items-center px-5">
              <img alt="" src={user.imageUrl} className="size-10 rounded-full" />
              <div className="ml-3">
                <div className="text-base font-medium text-white">{user.name}</div>
                <div className="text-sm font-medium text-gray-400">{user.email}</div>
              </div>
              <button className="ml-auto p-1 text-gray-400 hover:text-white focus:outline-none">
                <BellIcon className="size-6" />
              </button>
            </div>
            <div className="mt-3 space-y-1 px-2">
              {userNavigation.map((item) => (
                <DisclosureButton key={item.name} as="a" href={item.href} className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
};
