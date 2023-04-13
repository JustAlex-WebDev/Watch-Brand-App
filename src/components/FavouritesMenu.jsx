import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFavSection } from "../context/FavContext";
import FavouritesItems from "./FavouritesItems";
import Item from "./Item";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const FavouritesMenu = ({ fav, setFav }) => {
  const { favSection, removeItem } = useFavSection();
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? favSection.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === favSection.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

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
            ? "fixed top-[0] left-0 h-[50vh] w-full flex flex-col justify-center items-center bg-white text-center z-30 text-lg ease-in-out duration-700 animate-animateOpacity shadow-xl rounded-b-2xl"
            : "fixed top-[-100%] left-0 h-[50vh] w-full flex flex-col justify-center items-center text-center z-30 text-lg ease-in-out duration-700 shadow-xl rounded-b-2xl"
        }
      >
        <div className={fav ? "p-4 animate-animateOpacity3" : "p-4"}>
          <div className="border-b py-6 flex justify-center items-center">
            <p className="text-green-900 uppercase tracking-widest">
              Your Selection
            </p>
          </div>
          <div className="py-6 flex justify-center">
            {favSection.length === 0 ? (
              <p className="text-sm">
                Your list is currently empty. Explore the collections to create
                your selection.
              </p>
            ) : (
              <div>
                <div className="font-sans text-green-800 mb-4 text-base">
                  {favSection.length}{" "}
                  {favSection.length === 1 ? (
                    <span>item</span>
                  ) : (
                    <span>items</span>
                  )}
                </div>
                <div className="relative overflow-hidden w-60 m-auto">
                  <div
                    className="h-56 w-[500%] flex transition-transform ease-out duration-500"
                    style={{ transform: `translateX(-${currentIndex * 20}%)` }}
                  >
                    {favSection.map((item) => {
                      const isInFavSection = favSection.some(
                        (i) => i.id === item.id
                      );
                      return (
                        <FavouritesItems
                          item={item}
                          isInFavSection={isInFavSection}
                          removeItem={removeItem}
                          key={item.id}
                          setFav={setFav}
                          goToPrev={goToPrev}
                        />
                      );
                    })}
                  </div>
                  <div className="absolute flex items-center justify-between top-[50%]">
                    <button
                      onClick={goToPrev}
                      className="cursor-pointer hover:opacity-50 absolute z-10 p-1.5 border rounded-full transition-all"
                    >
                      <AiOutlineArrowLeft size={17} />
                    </button>
                    <button
                      onClick={goToNext}
                      className="cursor-pointer hover:opacity-50 absolute left-52 z-10 p-1.5 border rounded-full transition-all"
                    >
                      <AiOutlineArrowRight size={17} />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          {favSection.length === 0 ? (
            <div className="flex justify-center">
              <Link
                to="/watches"
                onClick={() => setFav(false)}
                className="p-2 px-4 text-sm border border-green-900 text-green-900 hover:text-white hover:bg-green-900 rounded-2xl cursor-pointer transition-all"
              >
                Find your Timeless
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default FavouritesMenu;
