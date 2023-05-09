import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { HiSun, HiMoon } from "react-icons/hi";
import { CgMoveDown } from "react-icons/cg";
import { motion as m } from "framer-motion";
import Footer from "./Footer";

const SingleWatch = ({ item, isInFavSection, addItem, removeItem }) => {
  const [theme, setTheme] = useState(false);

  return (
    <>
      <div className="sticky -top-[100%] left-0 w-full h-full bg-white duration-500">
        <div
          className={`mt-20 pt-[3.5rem] duration-500 ${
            theme ? `bg-black` : `bg-white`
          }`}
        >
          <main className="main-div h-full">
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.75, delay: 3.5, ease: "easeOut" }}
              className="flex justify-between"
            >
              <span
                className={`font-bold font-sans tracking-tight text-sm p-4 duration-500 ${
                  theme ? `text-white` : ``
                }`}
              >
                New model
              </span>
              {theme ? (
                <div className="flex items-center">
                  <HiSun
                    onClick={() => setTheme(false)}
                    title="Light Mode"
                    className="text-primary text-xl mr-4 text-white cursor-pointer hover:text-green-800 duration-500"
                  />
                </div>
              ) : (
                <div className="flex items-center">
                  <HiMoon
                    onClick={() => setTheme(true)}
                    title="Dark Mode"
                    className="text-primary text-xl mr-4 cursor-pointer hover:text-green-800"
                  />
                </div>
              )}
            </m.div>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.75, delay: 4, ease: "easeOut" }}
              className="grid grid-cols-2 md:grid-cols-3 justify-between items-center w-full gap-0 md:gap-4 mt-16 p-4"
            >
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
                    className={`text-sm font-bold duration-500 ${
                      theme ? `text-white` : ``
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
                  className={`font-sans font-bold text-3xl mb-2 duration-500 ${
                    theme ? `text-white` : ``
                  }`}
                >
                  {item.name}
                </div>
                <div
                  className={`font-sans text-lg duration-500 ${
                    theme ? `text-white` : ``
                  }`}
                >
                  {item.description}
                </div>
                <div
                  className={`flex items-center gap-2 duration-500 ${
                    theme ? `text-white` : ``
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
              <div className="hidden absolute right-0 xs:block md:relative">
                <div
                  className={`relative flex-col justify-center items-center mr-12 md:mr-0 opacity-100 duration-500 ${
                    theme ? `hidden opacity-0` : `flex opacity-100`
                  }`}
                >
                  <img
                    className="w-20 md:w-20 h-auto hover:cursor-pointer"
                    src={item.variation}
                    title="View Variations"
                    alt=""
                  />
                  <div className="absolute bottom-0 text-center text-xs font-sans tracking-wide font-semibold">
                    View variations
                  </div>
                </div>
              </div>
            </m.div>
            <div className="flex flex-col justify-center items-center mt-16 pb-24">
              <m.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.75, delay: 4.5, ease: "easeOut" }}
                className={`font-bold font-sans tracking-tight text-sm p-4 px-8 rounded-3xl shadow-2xl hover:cursor-pointer duration-300 ${
                  theme
                    ? `bg-white text-black hover:text-green-800`
                    : `bg-green-800 text-white hover:opacity-50`
                }`}
              >
                Configure
              </m.span>
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.75, delay: 4.75, ease: "easeOut" }}
                className={`mt-16 animate-pulseduration-500 ${
                  theme ? `text-white` : ``
                }`}
              >
                <CgMoveDown size={28} />
              </m.div>
            </div>
          </main>
        </div>
      </div>
      <div className="sticky top-0 w-full flex justify-center items-center h-[100vh] bg-gradient-to-tr from-[#252525] to-[#b3b3b3]">
        <div className="flex flex-col w-[80%] max-w-[58rem] items-start">
          <div className="uppercase text-[#d6d6d6] tracking-widest text-xs sm:text-sm md:text-lg">
            Make the world your Oyster
          </div>
          <div className="text-white tracking-widest text-lg xxs:text-2xl sm:text-4xl md:text-6xl font-bold">
            The <span className="text-[#d6d6d6]">Oyster Perpetual 41</span> with{" "}
            <span className="text-[#d6d6d6]">a silver </span>dial and an{" "}
            <span className="text-[#d6d6d6]">Oyster</span> bracelet.
          </div>
        </div>
      </div>
      <div className="sticky top-0 w-full flex justify-center items-center h-[100vh] bg-gradient-to-tr from-[#4e4e4e] to-[#b3b3b3]">
        <div className="flex flex-col w-[80%] max-w-[58rem] items-start">
          <div className="uppercase text-[#d6d6d6] tracking-widest text-xs sm:text-sm md:text-lg">
            Make the world your Oyster
          </div>
          <div className="text-white tracking-widest text-lg xxs:text-2xl sm:text-4xl md:text-6xl font-bold">
            The <span className="text-[#d6d6d6]">Oyster Perpetual 41</span> with{" "}
            <span className="text-[#d6d6d6]">a silver </span>dial and an{" "}
            <span className="text-[#d6d6d6]">Oyster</span> bracelet.
          </div>
        </div>
      </div>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, delay: 5, ease: "easeOut" }}
        className="sticky"
      >
        <Footer />
      </m.div>
    </>
  );
};

export default SingleWatch;