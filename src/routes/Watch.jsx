import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { watches } from "../data";
import { motion as m } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { useFavSection } from "../context/FavContext";
import SingleWatch from "../components/SingleWatch";

const Watch = () => {
  const [items, setItems] = useState(watches);
  const { favSection, addItem, removeItem } = useFavSection();
  const { id } = useParams();

  return (
    <>
      <PageTransition />
      <m.div
        initial={{ y: "100%", display: "none" }}
        animate={{ y: "0%", display: "block" }}
        transition={{ duration: 0.75, delay: 2.5, ease: "easeOut" }}
        exit={{ opacity: 1 }}
        className="absolute top-0 left-0 w-full h-full bg-[#fff]"
      >
        <div className="w-full">
          {items
            .filter((element, index) => {
              return index === id - 1;
            })
            .map((item) => {
              const isInFavSection = favSection.some((i) => i.id === item.id);
              return (
                <SingleWatch
                  item={item}
                  isInFavSection={isInFavSection}
                  addItem={addItem}
                  removeItem={removeItem}
                  key={item.id}
                />
              );
            })}
        </div>
      </m.div>
    </>
  );
};

export default Watch;
