import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { watches } from "../data";

const SearchModal = ({
  openSearchModal,
  setOpenSearchModal,
  searchInputRef,
}) => {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(-1);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (e) => {
    // console.log(e.key);
    if (selectedItem < searchData.length) {
      if (e.key === "ArrowUp" && selectedItem > 0) {
        setSelectedItem((prev) => prev - 1);
      } else if (
        e.key === "ArrowDown" &&
        selectedItem < searchData.length - 1
      ) {
        setSelectedItem((prev) => prev + 1);
      } else if (e.key === "Enter" && selectedItem >= 0) {
        // window.open(searchData[selectedItem].show.url)
      }
    } else {
      setSelectedItem(-1);
    }
  };

  useEffect(() => {
    if (search !== "") {
      const newFilterData = watches.filter((watch) => {
        return watch.name.toLowerCase().includes(search.toLowerCase());
      });

      setSearchData(newFilterData);
    } else {
      setSearchData([]);
    }
  }, [search]);

  return (
    <div
      onClick={() => setOpenSearchModal(false) & setSearch("")}
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
              ? "bg-white shadow-2xl w-[75%] max-w-2xl h-[25%] rounded-3xl flex flex-col animate-animateOpacity2"
              : "bg-white shadow-2xl w-[75%] max-w-2xl h-[25%] rounded-3xl flex flex-col"
          }
        >
          <div className="w-full flex justify-end p-2">
            <AiOutlineClose
              onClick={() => setOpenSearchModal(false) & setSearch("")}
              size={20}
              title="Close Modal"
              className="hover:text-green-900 hover:cursor-pointer m-2"
            />
          </div>
          <div className="w-[100%] flex flex-col justify-center items-center gap-8">
            <p className="mt-2 text-2xl font-semibold flex flex-col justify-center items-center">
              Can we help you find this
            </p>
            <div className="flex flex-col justify-center items-center gap-2">
              <input
                ref={searchInputRef}
                type="text"
                className="w-[100%] p-2 rounded-2xl border-2 border-gray outline-green-800"
                placeholder="Find your watch"
                onChange={handleChange}
                value={search}
                onKeyDown={handleKeyDown}
              />
              <div
                className={
                  search !== ""
                    ? "w-[100%] rounded-2xl border-2 border-gray bg-white shadow-2xl text-center overflow-hidden"
                    : "w-[100%] rounded-2xl bg-white shadow-2xl text-center"
                }
              >
                {searchData.slice(0, 5).map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={
                        selectedItem === index
                          ? "font-sans text-sm p-2 bg-green-800 text-white cursor-pointer"
                          : "font-sans text-sm p-2 hover:bg-green-800 hover:text-white cursor-pointer"
                      }
                    >
                      {item.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
