import React, { useRef, useState, useEffect } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    const handleNav = (e) => {
      // console.log(e);
      if (e.path[1] !== navRef.current) {
        setNav(false);
      }
    };

    document.body.addEventListener("click", handleNav);

    return () => document.body.removeEventListener("click", handleNav);
  }, []);

  return (
    <div className="main-div p-4 bg-trnasparent">
      <div className="flex justify-center">
        <div
          className="w-12 absolute h-12 rounded-full border border-black flex justify-center items-center text-2xl hover:cursor-pointer hover:text-green-800 hover:border-green-800"
          title="Timeless"
        >
          T
        </div>
      </div>
      <div className="h-12 flex justify-between items-center transition-all">
        <button
          ref={navRef}
          onClick={() => setNav(!nav)}
          className="block md:hidden  cursor-pointer z-50 hover:text-green-800 hover:cursor-pointer"
        >
          {nav ? (
            <AiOutlineClose size={20} title="Close Menu" />
          ) : (
            <AiOutlineMenu size={20} title="Open Menu" />
          )}
        </button>

        <div className="flex justify-center items-center gap-4">
          <AiOutlineSearch
            size={20}
            className="hover:text-green-800 hover:cursor-pointer"
            title="Search"
          />
          <AiOutlineHeart
            size={20}
            className="hover:text-green-800 hover:cursor-pointer"
            title="Favourites"
          />
        </div>
        <div
          className={
            nav
              ? "md:hidden fixed top-[0px] left-0 h-screen w-[100%] flex justify-center items-center bg-white text-center z-40 text-lg ease-in-out duration-700 animate-animateOpacity"
              : "fixed top-0 left-[-100%] h-screen w-[100%] flex justify-center items-center text-center z-40 text-lg ease-in-out duration-700"
          }
        >
          <ul className={nav ? "p-4 animate-animateOpacity3" : "p-4"}>
            <li className="border-b py-6 flex justify-center items-center">
              <p className="hover:text-green-800 hover:cursor-pointer">Home</p>
            </li>
            <li className="border-b py-6 flex justify-center">
              <p className="hover:text-green-800 hover:cursor-pointer">
                Account
              </p>
            </li>
            <li className="border-b py-6 flex justify-center">
              <p className="hover:text-green-800 hover:cursor-pointer">
                Shopping Cart
              </p>
            </li>
            <li className="border-b py-6 flex justify-center">
              <p className="hover:text-green-800 hover:cursor-pointer">
                Favourites
              </p>
            </li>
            <li className="py-6 flex justify-center">
              <p className="hover:text-green-800 hover:cursor-pointer">
                Sign Out
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
