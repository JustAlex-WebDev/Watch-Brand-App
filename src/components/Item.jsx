import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <Link
      to={"/watches/" + item.id}
      className="flex rounded-sm justify-center items-center bg-white h-80 group cursor-pointer relative"
    >
      <div className="absolute top-2 left-2 w-8 h-8 rounded-full flex justify-center items-center bg-[#dddddd] hover:bg-green-800 transition-all">
        <AiFillHeart
          size={18}
          title="Add To Selection"
          className="text-white"
        />
      </div>
      <div className="flex flex-col justify-center w-full items-center">
        <div className="h-52 w-[70%] flex justify-center items-center mb-4 p-4">
          <img
            className="w-auto h-auto max-h-52 group-hover:scale-105 transition-all duration-300"
            src={item.img}
            alt=""
          />
        </div>
        <div className="flex flex-col text-center justify-center items-center">
          <div className="font-sans font-semibold tracking-wider">
            {item.name}
          </div>
          <div className="font-sans text-sm">{item.description}</div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
