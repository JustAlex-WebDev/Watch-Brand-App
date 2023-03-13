import React from "react";
import { Link } from "react-router-dom";

const FavouritesMenu = ({ fav, setFav }) => {
  return (
    <div
      className={
        fav
          ? "fixed top-[0] left-0 h-[50vh] w-full flex justify-center items-center bg-white text-center z-30 text-lg ease-in-out duration-700 animate-animateOpacity shadow-xl rounded-b-2xl"
          : "fixed top-[-100%] left-0 h-[50vh] w-full flex justify-center items-center text-center z-30 text-lg ease-in-out duration-700 shadow-xl rounded-b-2xl"
      }
    >
      <ul className={fav ? "p-4 animate-animateOpacity3" : "p-4"}>
        <li className="border-b py-6 flex justify-center items-center">
          <p className="text-green-900 uppercase tracking-widest">
            Your Selection
          </p>
        </li>
        <li className="py-6 flex justify-center">
          <p className="text-sm">
            Your list is currently empty. Explore the collections to create your
            selection.
          </p>
        </li>
        <li className="flex justify-center">
          <Link
            to="/watches"
            onClick={() => setFav(false)}
            className="p-2 px-4 text-sm border border-green-900 text-green-900 hover:text-white hover:bg-green-900 rounded-2xl cursor-pointer transition-all"
          >
            Find your Timeless
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FavouritesMenu;
