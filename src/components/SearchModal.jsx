import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const SearchModal = ({
  openSearchModal,
  setOpenSearchModal,
  searchInputRef,
}) => {
  return (
    <div
      onClick={() => setOpenSearchModal(false)}
      className={
        openSearchModal
          ? "fixed top-[0] left-0 h-screen w-full flex justify-center items-center bg-modal text-center z-30 text-lg ease-in-out duration-700 animate-animateOpacity"
          : "fixed top-[-100%] left-0 h-screen w-full flex justify-center items-center text-center z-30 text-lg ease-in-out duration-700"
      }
    >
      <div className="w-full h-full flex justify-center items-center">
        <div
          onClick={(e) => e.stopPropagation()}
          className={
            openSearchModal
              ? "bg-white border-2 border-black shadow-xl w-[75%] h-[25%] rounded-3xl flex flex-col animate-animateOpacity2"
              : "bg-white border-2 border-black shadow-xl w-[75%] h-[25%] rounded-3xl flex flex-col"
          }
        >
          <div className="w-full flex justify-end p-2">
            <AiOutlineClose
              onClick={() => setOpenSearchModal(false)}
              size={20}
              title="Close Modal"
              className="hover:text-green-900 hover:cursor-pointer m-2"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-8">
            <p className="mt-2 text-2xl font-semibold flex flex-col justify-center items-center">
              Can we help you find this
            </p>
            <input
              ref={searchInputRef}
              type="text"
              className="w-[50%] p-2 rounded-2xl border-2 border-gray outline-green-800"
              placeholder="Find your watch"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
