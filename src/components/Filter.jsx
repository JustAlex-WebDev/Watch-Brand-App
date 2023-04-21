import React from "react";
import { motion as m } from "framer-motion";

const Filter = ({
  items,
  activeCategory,
  setActiveCategory,
  setFilteredItems,
  handleFilter,
}) => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 4, duration: 1 }}
      className="flex justify-center items-center mb-12 gap-8 font-bold cursor-pointer"
    >
      <div
        onClick={() => setFilteredItems(items) & setActiveCategory("All")}
        className="flex justify-center items-center gap-2"
      >
        {activeCategory === "All" ? (
          <>
            <div className="cursor-pointer text-green-800">All</div>
            <div className="w-2 h-2 bg-green-800 rounded-full"></div>
          </>
        ) : (
          <>
            <div className="cursor-pointer hover:text-green-800">All</div>
          </>
        )}
      </div>
      <div
        onClick={() => handleFilter("Classic")}
        className="flex justify-center items-center gap-2"
      >
        {activeCategory === "Classic" ? (
          <>
            <div className="cursor-pointer text-green-800">Classic</div>
            <div className="w-2 h-2 bg-green-800 rounded-full"></div>
          </>
        ) : (
          <>
            <div className="cursor-pointer hover:text-green-800">Classic</div>
          </>
        )}
      </div>
      <div
        onClick={() => handleFilter("Professional")}
        className="flex justify-center items-center gap-2"
      >
        {activeCategory === "Professional" ? (
          <>
            <div className="cursor-pointer text-green-800">Professional</div>
            <div className="w-2 h-2 bg-green-800 rounded-full"></div>
          </>
        ) : (
          <>
            <div className="cursor-pointer hover:text-green-800">
              Professional
            </div>
          </>
        )}
      </div>
    </m.div>
  );
};

export default Filter;
