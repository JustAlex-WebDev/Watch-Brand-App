import React from "react";
import { Link } from "react-router-dom";

const MainMenu = ({ nav, setNav }) => {
  return (
    <div
      className={
        nav
          ? "fixed top-[0] left-0 h-screen w-full flex justify-center items-center bg-white text-center z-40 text-lg ease-in-out duration-700 animate-animateOpacity"
          : "fixed top-[-100%] left-0 h-screen w-full flex justify-center items-center text-center z-40 text-lg ease-in-out duration-700"
      }
    >
      <ul className={nav ? "p-4 animate-animateOpacity3" : "p-4"}>
        <li
          onClick={() => setNav(!nav)}
          className="border-b py-6 flex justify-center items-center"
        >
          <Link to="/">
            <p className="hover:text-green-900 hover:cursor-pointer">Home</p>
          </Link>
        </li>
        <li
          onClick={() => setNav(!nav)}
          className="border-b py-6 flex justify-center"
        >
          <Link to="/watches">
            <p className="hover:text-green-900 hover:cursor-pointer">
              Timeless watches
            </p>
          </Link>
        </li>
        <li
          onClick={() => setNav(!nav)}
          className="border-b py-6 flex justify-center"
        >
          <p className="hover:text-green-900 hover:cursor-pointer">
            Configure your own watch
          </p>
        </li>
        <li
          onClick={() => setNav(!nav)}
          className="border-b py-6 flex justify-center"
        >
          <p className="hover:text-green-900 hover:cursor-pointer">
            Your selection
          </p>
        </li>
        <li onClick={() => setNav(!nav)} className="py-6 flex justify-center">
          <p className="hover:text-green-900 hover:cursor-pointer">
            World of Timeless
          </p>
        </li>
      </ul>
    </div>
  );
};

export default MainMenu;
