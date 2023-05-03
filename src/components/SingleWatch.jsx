import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { HiSun, HiMoon } from "react-icons/hi";
import { CgMoveDown } from "react-icons/cg";

const SingleWatch = ({ item, isInFavSection, addItem, removeItem }) => {
  const [theme, setTheme] = useState(false);

  return (
    <>
      <div className="sticky -top-[25rem] md:-top-[14rem] left-0 w-full h-full bg-white duration-500">
        <div
          className={`${
            theme
              ? "bg-black mt-28 pt-8 duration-500"
              : "bg-white mt-28 pt-8 duration-500"
          }`}
        >
          <main className="main-div h-full">
            <div className="flex justify-between">
              <span
                className={`${
                  theme
                    ? "font-bold font-sans tracking-tight text-sm p-4 text-white duration-500"
                    : "font-bold font-sans tracking-tight text-sm p-4 duration-500"
                }`}
              >
                New model
              </span>
              {theme ? (
                <div
                  className={`${
                    theme
                      ? "flex items-center cursor-pointer hover:text-green-800 text-white duration-500"
                      : "flex items-center cursor-pointer hover:text-green-800 duration-500"
                  }`}
                >
                  <HiSun
                    onClick={() => setTheme(false)}
                    title="Light Mode"
                    className="text-primary text-xl mr-4"
                  />
                </div>
              ) : (
                <div className="flex items-center cursor-pointer hover:text-green-800">
                  <HiMoon
                    onClick={() => setTheme(true)}
                    title="Dark Mode"
                    className="text-primary text-xl mr-4"
                  />
                </div>
              )}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 justify-between items-center w-full gap-0 md:gap-4 mt-16 p-4">
              <div className="col-span-3 md:col-span-1 row-start-2 md:row-start-1">
                <div className="flex items-center gap-2 mb-4 mt-8">
                  <div
                    className={`w-6 h-6 rounded-full flex justify-center items-center bg-[#dddddd] hover:bg-green-800 transition-all ${
                      isInFavSection ? "bg-green-800" : null
                    }`}
                  >
                    {isInFavSection ? (
                      <AiFillHeart
                        size={14}
                        title="Remove From Selection"
                        onClick={() => removeItem(item.id)}
                        className="text-white cursor-pointer"
                      />
                    ) : (
                      <AiFillHeart
                        size={14}
                        title="Add To Selection"
                        onClick={() => addItem(item)}
                        className="text-white cursor-pointer"
                      />
                    )}
                  </div>
                  <div
                    className={`${
                      theme
                        ? "text-sm font-bold text-white duration-500"
                        : "text-sm font-bold duration-500"
                    }`}
                  >
                    {isInFavSection ? (
                      <span
                        className="font-sans cursor-pointer"
                        onClick={() => removeItem(item.id)}
                        title="Remove From Selection"
                      >
                        Remove from favourites
                      </span>
                    ) : (
                      <span
                        className="font-sans cursor-pointer"
                        onClick={() => addItem(item)}
                        title="Add To Selection"
                      >
                        Add to favourites
                      </span>
                    )}
                  </div>
                </div>
                <div
                  className={`${
                    theme
                      ? "font-sans font-bold text-3xl mb-2 text-white duration-500"
                      : "font-sans font-bold text-3xl mb-2 duration-500"
                  }`}
                >
                  {item.name}
                </div>
                <div
                  className={`${
                    theme
                      ? "font-sans text-lg text-white duration-500"
                      : "font-sans text-lg duration-500"
                  }`}
                >
                  {item.description}
                </div>
                <div
                  className={`${
                    theme
                      ? "flex items-center gap-2 text-white duration-500"
                      : "flex items-center gap-2 duration-500"
                  }`}
                >
                  <div className="font-sans text-lg">Price on request</div>
                  <AiOutlineInfoCircle
                    className="cursor-pointer hover:text-green-800"
                    title="Info"
                  />
                </div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="h-96 flex justify-center items-center">
                  {theme ? (
                    <img
                      className="w-auto min-w-40 h-auto max-h-96"
                      src={item.darkImg}
                      alt=""
                    />
                  ) : (
                    <img
                      className="w-auto min-w-40 h-auto max-h-96 hover:cursor-pointer"
                      src={item.img}
                      title="View Full Image"
                      alt=""
                    />
                  )}
                </div>
              </div>
              <div className="hidden xxs:block">
                <div
                  className={`${
                    theme
                      ? "hidden flex-col justify-center items-center mr-12 md:mr-0 duration-500"
                      : "flex flex-col justify-center items-center mr-12 md:mr-0 duration-500"
                  }`}
                >
                  <img
                    className="w-16 md:w-20 h-auto hover:cursor-pointer"
                    src={item.variation}
                    title="View Variations"
                    alt=""
                  />
                  <div className="text-xs font-sans tracking-wide font-semibold">
                    View variations
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-16 pb-24">
              <span className="font-bold font-sans tracking-tight text-sm p-4 px-8 bg-green-800 rounded-3xl text-white hover:opacity-50 hover:cursor-pointer">
                Configure
              </span>
              <div
                className={`${
                  theme
                    ? "mt-16 animate-pulseduration-500 text-white"
                    : "mt-16 animate-pulseduration-500"
                }`}
              >
                <CgMoveDown size={28} />
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="sticky top-0 w-full flex justify-center h-[100vh] bg-black text-white">
        wadwa
      </div>
      <div className="sticky top-0 w-full flex justify-center h-[100vh] bg-blue-300">
        wadwa
      </div>
    </>
  );
};

export default SingleWatch;
