import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const SearchModal = ({ openSearchModal, onClose }) => {
  if (!openSearchModal) return null;

  return (
    <div
      onClick={onClose}
      className="overlay z-50 w-full h-screen absolute top-0 left-0 bg-modal bg-opacity-50"
    >
      <div className="modalContainer w-full h-full flex justify-center items-center">
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white w-[75%] h-[25%] rounded-3xl flex flex-col"
        >
          <div className="w-full flex justify-end p-2">
            <AiOutlineClose
              onClick={onClose}
              size={20}
              title="Close Modal"
              className="hover:text-green-900 hover:cursor-pointer m-2"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <p className="mt-2 text-2xl font-semibold flex flex-col justify-center items-center">
              Can we help you find this
            </p>
            <input
              type="text"
              className="w-[50%] p-2 rounded-2xl border-2 border-gray outline-none"
              value="Timeless XMS"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
