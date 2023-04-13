import React from "react";
import { AiOutlineClose, AiOutlineInfoCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const FavouritesItems = ({
  item,
  isInFavSection,
  removeItem,
  setFav,
  goToPrev,
}) => {
  return (
    <div className="w-[20%] flex justify-center items-center z-10">
      <div className="relative group">
        <img
          className="w-auto h-56 max-h-56 group-hover:scale-105 transition-all duration-300"
          src={item.img}
          alt=""
        />
        <div className="absolute hover:backdrop-blur-sm top-0 left-0 w-full h-full hidden group-hover:block transition-all">
          <div className="flex justify-center items-center gap-4 h-full font-bold">
            <Link to={"/watches/" + item.id} onClick={() => setFav(false)}>
              <AiOutlineInfoCircle
                size={32}
                title="Info"
                className="cursor-pointer text-green-800"
              />
            </Link>
            <div
              onClick={() => removeItem(item.id) & goToPrev()}
              className="rounded-full border border-black p-1"
            >
              <AiOutlineClose
                size={18}
                title="Remove"
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavouritesItems;
