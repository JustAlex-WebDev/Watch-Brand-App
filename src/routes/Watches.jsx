import React, { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import Footer from "../components/Footer";
import { watches } from "../data";
import Item from "../components/Item";
import { useFavSection } from "../context/FavContext";
import PageTransition from "../components/PageTransition";
import Filter from "../components/Filter";

// Local Storage Test
// const favouritesData = JSON.parse(
//   window.localStorage.getItem("MY_FAVOURITES_STATE")
// );

const Watches = () => {
  const [items, setItems] = useState(watches);
  const { favSection, addItem, removeItem } = useFavSection();
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState(items);

  const handleFilter = (category) => {
    const filtered = watches.filter((item) => {
      return item.category === category;
    });
    if (category === "Classic") {
      setActiveCategory("Classic");
    } else if (category === "Professional") {
      setActiveCategory("Professional");
    }
    setFilteredItems(filtered);
  };

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
      <PageTransition />
      <m.div
        initial={{ y: "100%", display: "none" }}
        animate={{ y: "0%", display: "block" }}
        transition={{ duration: 0.75, delay: 3, ease: "easeOut" }}
        exit={{ opacity: 1 }}
        className="absolute top-0 left-0 w-full h-full bg-[#fff] lg:px-48 px-16"
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

          <Filter
            items={items}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            setFilteredItems={setFilteredItems}
            handleFilter={handleFilter}
          />

          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.25, duration: 1 }}
            className="mt-16 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2 justify-between items-center w-full sm:w-[80%] m-auto p-2"
          >
            {filteredItems.map((item) => {
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
