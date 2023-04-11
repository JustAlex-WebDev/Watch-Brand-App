import React from "react";

const FavouritesItems = ({ item, isInFavSection, removeItem }) => {
  return (
    <div className="w-[20%] flex flex-col justify-center items-center">
      <img
        className="w-auto h-48 max-h-48 group-hover:scale-105 transition-all duration-300 cursor-pointer"
        src={item.img}
        alt=""
      />
    </div>
  );
};

export default FavouritesItems;
