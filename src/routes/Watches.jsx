import React, { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import Footer from "../components/Footer";
import { watches } from "../data";
import Item from "../components/Item";
import { useFavSection } from "../context/FavContext";
import PageTransition from "../components/PageTransition";

// Local Storage Test
// const favouritesData = JSON.parse(
//   window.localStorage.getItem("MY_FAVOURITES_STATE")
// );

const Watches = () => {
  const [items, setItems] = useState(watches);
  const { favSection, addItem, removeItem } = useFavSection();

  // Local Storage Test
  // const [favourites, setFavourites] = useState(false);

  // useEffect(() => {
  //   if (favouritesData !== null) setFavourites(JSON.parse(favouritesData));
  //   // console.log("data", data);
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem(
  //     "MY_FAVOURITES_STATE",
  //     JSON.stringify(favourites)
  //   );
  //   // console.log("favourites", favourites);
  // }, [favourites]);

  return (
    <>
      <m.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 1 }}
        className="text-grey-900 bg-green-800 absolute top-0 left-0 w-full h-full lg:px-48 px-16"
      >
        <PageTransition />
      </m.div>
      <m.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.75, delay: 3, ease: "easeOut" }}
        exit={{ opacity: 1 }}
        className="text-grey-900 absolute top-0 left-0 w-full h-full bg-[#fff] lg:px-48 px-16"
      >
        <div className="main-div mb-64">
          <div className="mt-48 mb-16 p-2">
            <m.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.75, duration: 1 }}
              className="text-3xl lg:text-4xl text-center tracking-widest"
            >
              TIMELESS WATCHES
            </m.h1>
          </div>

          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
            className="flex justify-center items-center mb-12 gap-8 font-bold cursor-pointer"
          >
            <div className="flex justify-center items-center gap-2">
              <div className="text-green-800 hover:text-green-800">All</div>
              <div className="w-2 h-2 bg-green-800 rounded-full"></div>
            </div>
            <div>
              <div className="hover:text-green-800">Classic</div>
            </div>
            <div>
              <div className="hover:text-green-800">Professional</div>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.25, duration: 1 }}
            className="mt-16 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2 justify-between items-center w-full sm:w-[80%] m-auto p-2"
          >
            {items.map((item) => {
              const isInFavSection = favSection.some((i) => i.id === item.id);
              return (
                <Item
                  item={item}
                  isInFavSection={isInFavSection}
                  addItem={addItem}
                  removeItem={removeItem}
                  key={item.id}
                />
              );
            })}
          </m.div>
        </div>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5, duration: 1 }}
        >
          <Footer />
        </m.div>
      </m.div>
    </>
  );
};

export default Watches;
