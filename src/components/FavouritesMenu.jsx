import React from "react";
import { Link } from "react-router-dom";
import { useFavSection } from "../context/FavContext";
import Item from "./Item";

const FavouritesMenu = ({ fav, setFav }) => {
  const { favSection, removeItem } = useFavSection();

  return (
    <div
      onClick={() => setFav(false)}
      className={
        fav
          ? "fixed top-[0] left-0 h-[100vh] w-full bg-transparent z-30"
          : "fixed top-[-100%] left-0 h-[100vh] w-full z-30"
      }
    >
      <div
        onClick={(e) => e.stopPropagation()}
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
            {favSection.length === 0 ? (
              <p className="text-sm">
                Your list is currently empty. Explore the collections to create
                your selection.
              </p>
            ) : (
              <div>
                {favSection.map((item) => {
                  const isInFavSection = favSection.some(
                    (i) => i.id === item.id
                  );
                  return (
                    <div
                      item={item}
                      isInFavSection={isInFavSection}
                      removeItem={removeItem}
                      key={item.id}
                      className="font-sans font-semibold"
                    >
                      {item.name}
                    </div>
                  );
                })}
              </div>
            )}
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
    </div>
  );
};

export default FavouritesMenu;
