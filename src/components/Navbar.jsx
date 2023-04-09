import React, { useRef, useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useFavSection } from "../context/FavContext";
import FavouritesMenu from "./FavouritesMenu";
import MainMenu from "./MainMenu";
import SearchModal from "./SearchModal";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [fav, setFav] = useState(false);
  const [openSearchModal, setOpenSearchModal] = useState(false);
  const { favSection } = useFavSection();
  const searchInputRef = useRef();

  const clickToFocus = () => {
    searchInputRef.current.focus();
  };

  return (
    <div className="main-div p-4 bg-trnasparent z-10 relative mb-[49rem]">
      {/* Logo */}
      <div className="flex justify-center">
        <Link
          to="/"
          className="w-12 absolute h-12 rounded-full border border-black flex justify-center items-center text-2xl hover:cursor-pointer hover:text-green-900 hover:border-green-900"
          title="Timeless"
        >
          T
        </Link>
      </div>
      <div className="h-12 flex justify-between items-center transition-all">
        {/* Main Menu Button */}
        <button
          onClick={() => setNav(!nav)}
          className={
            fav || openSearchModal
              ? "cursor-pointer z-30 hover:text-green-900 hover:cursor-pointer"
              : "cursor-pointer z-50 hover:text-green-900 hover:cursor-pointer"
          }
        >
          {nav ? (
            <AiOutlineClose size={20} title="Close Menu" />
          ) : (
            <AiOutlineMenu size={20} title="Open Menu" />
          )}
        </button>

        <div className="flex justify-center items-center gap-4">
          {/* Search Modal Button */}
          <div onClick={clickToFocus}>
            <AiOutlineSearch
              size={20}
              onClick={() => setOpenSearchModal(true)}
              className="hover:text-green-900 hover:cursor-pointer z-30"
              title="Search"
            />
          </div>
          {/* Favourites Menu Button */}
          <button
            onClick={() => setFav(!fav)}
            className={
              openSearchModal
                ? "hover:text-green-900 hover:cursor-pointer z-30 relative"
                : "hover:text-green-900 hover:cursor-pointer z-40 relative"
            }
          >
            {fav ? (
              <AiOutlineClose size={20} title="Close Selection" />
            ) : (
              <>
                <AiOutlineHeart
                  onClick={() => setFav(!fav)}
                  size={20}
                  title="Your Selection"
                />
                {favSection.length > 0 ? (
                  <div className="font-sans text-sm font-bold absolute top-2 left-5 text-green-900 rounded-full">
                    {favSection.length}
                  </div>
                ) : null}
              </>
            )}
          </button>
        </div>
        {/* Search Modal */}
        <SearchModal
          openSearchModal={openSearchModal}
          setOpenSearchModal={setOpenSearchModal}
          searchInputRef={searchInputRef}
        />
        {/* Favourites Menu */}
        <FavouritesMenu fav={fav} setFav={setFav} />
        {/* Main Menu */}
        <MainMenu nav={nav} setNav={setNav} />
      </div>
    </div>
  );
};

export default Navbar;
