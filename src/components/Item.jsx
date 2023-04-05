import React, { useState, useEffect, useRef } from "react";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const Item = ({ item }) => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();

  //  Intersection Observer's functionallity without the hook

  // const myRef = useRef();
  // const [myElementIsVisible, setMyElementIsVisible] = useState();
  // console.log(myElementIsVisible);
  // useEffect(() => {
  //   // console.log("myRef", myRef.current);
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     setMyElementIsVisible(entry.isIntersecting);
  //     // console.log("entry", entry);
  //   });
  //   observer.observe(myRef.current);
  // }, []);

  return (
    <Link
      ref={myRef}
      to={"/watches/" + item.id}
      className={
        myElementIsVisible
          ? "flex rounded-sm justify-center items-center bg-white shadow-md h-80 group cursor-pointer relative animate-animateOpacity"
          : "flex rounded-sm justify-center items-center bg-white shadow-md h-80 group cursor-pointer relative"
      }
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
