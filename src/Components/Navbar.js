import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { MdRestaurantMenu } from "react-icons/md";

const navItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "",
  },
  {
    title: "Category",
    path: "",
  },
  {
    title: "Recipie",
    path: "",
  },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="bg-primary sticky top-0 text-white font-pop w-full py-4 z-50">
        <div className="flex justify-between items-center mx-auto container px-4 max-w-[1200px]">
          <Link to="/" className="font-alisson text-5xl">
            Exotic
          </Link>

          <div className="space-x-10 items-center hidden lg:flex">
            {navItems.map((items, index) => (
              <>
                <Link key={index} to={items.path}>
                  {items.title}
                </Link>
              </>
            ))}
          </div>
          <button
            onClick={handleMenuClick}
            className="transition-all duration-700 ease-in-out lg:hidden"
          >
            {isOpen === false ? (
              <CiMenuFries className="text-2xl" />
            ) : (
              <MdRestaurantMenu className="text-2xl" />
            )}
          </button>
        </div>
      </nav>
      {isOpen === true && <MobileNavbar />}
    </>
  );
};

export default Navbar;

export const MobileNavbar = () => {
  return (
    <>
      <div className="fixed w-full py-6 flex flex-col space-y-6 items-center bg-primary text-white rounded-b-2xl z-50">
        {navItems.map((items, index) => (
          <>
            <Link key={index} to={items.path}>
              {items.title}
            </Link>
          </>
        ))}
      </div>
    </>
  );
};
