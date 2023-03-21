import React, { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import Footer from "../components/Footer";

const favouritesData = JSON.parse(
  window.localStorage.getItem("MY_FAVOURITES_STATE")
);

const Watches = () => {
  const [favourites, setFavourites] = useState(false);

  useEffect(() => {
    if (favouritesData !== null) setFavourites(JSON.parse(favouritesData));
    // console.log("data", data);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "MY_FAVOURITES_STATE",
      JSON.stringify(favourites)
    );
    // console.log("favourites", favourites);
  }, [favourites]);

  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="text-grey-900 bg-[#f5f5f5] absolute top-0 left-0 w-full lg:px-48 px-16"
    >
      <main className="main-div mb-64">
        <div className="mt-56 mb-16 p-2 overflow-hidden">
          <m.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-4xl xs:text-5xl lg:text-6xl text-center tracking-widest"
          >
            WATCHES
          </m.h1>
        </div>

        <div className="flex flex-col justify-center items-center gap-4">
          <button
            onClick={() => setFavourites(!favourites)}
            className="bg-green-800 text-white p-2 hover:opacity-50 tracking-wider rounded-lg"
          >
            Save Button
          </button>
          {favourites ? <div>saved</div> : <div>not saved</div>}
        </div>
        <div className="bg-[#f5f5f5] mt-16 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2 justify-between items-center w-[80%] m-auto p-2">
          <div className="flex rounded-sm justify-center items-center bg-white h-80">
            <div className="flex flex-col justify-center w-full items-center">
              <div className="h-52 w-[70%] flex justify-center items-center mb-4">
                <img
                  className="w-auto h-auto max-h-52 hover:scale-105 transition-all cursor-pointer"
                  src="/images/Screenshot_2.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col text-center justify-center items-center">
                <div className="font-sans font-semibold tracking-wider">
                  DAY-DATE 40
                </div>
                <div className="font-sans text-sm">Oyster, 40 mm, platinum</div>
              </div>
            </div>
          </div>
          <div className="flex rounded-sm justify-center items-center bg-white h-80">
            <div className="flex flex-col justify-center w-full items-center gap-2">
              <div className="h-52 w-[70%] flex justify-center items-center mb-2">
                <img
                  className="w-auto h-auto max-h-52 hover:scale-105 transition-all cursor-pointer"
                  src="/images/Screenshot_2.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col text-center justify-center items-center">
                <div className="font-sans font-semibold tracking-wider">
                  DAY-DATE 40
                </div>
                <div className="font-sans text-sm">Oyster, 40 mm, platinum</div>
              </div>
            </div>
          </div>
          <div className="flex rounded-sm justify-center items-center bg-white h-80">
            <div className="flex flex-col justify-center w-full items-center gap-2">
              <div className="h-52 w-[70%] flex justify-center items-center mb-2">
                <img
                  className="w-auto h-auto max-h-52 hover:scale-105 transition-all cursor-pointer"
                  src="/images/Screenshot_2.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col text-center justify-center items-center">
                <div className="font-sans font-semibold tracking-wider">
                  DAY-DATE 40
                </div>
                <div className="font-sans text-sm">Oyster, 40 mm, platinum</div>
              </div>
            </div>
          </div>
          <div className="flex rounded-sm justify-center items-center bg-white h-80">
            <div className="flex flex-col justify-center w-full items-center gap-2">
              <div className="h-52 w-[70%] flex justify-center items-center mb-2">
                <img
                  className="w-auto h-auto max-h-52 hover:scale-105 transition-all cursor-pointer"
                  src="/images/Screenshot_2.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col text-center justify-center items-center">
                <div className="font-sans font-semibold tracking-wider">
                  DAY-DATE 40
                </div>
                <div className="font-sans text-sm">Oyster, 40 mm, platinum</div>
              </div>
            </div>
          </div>
          <div className="flex rounded-sm justify-center items-center bg-white h-80">
            <div className="flex flex-col justify-center w-full items-center gap-2">
              <div className="h-52 w-[70%] flex justify-center items-center mb-2">
                <img
                  className="w-auto h-auto max-h-52 hover:scale-105 transition-all cursor-pointer"
                  src="/images/Screenshot_2.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col text-center justify-center items-center">
                <div className="font-sans font-semibold tracking-wider">
                  DAY-DATE 40
                </div>
                <div className="font-sans text-sm">Oyster, 40 mm, platinum</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.75, duration: 0.5 }}
      >
        <Footer />
      </m.div>
    </m.div>
  );
};

export default Watches;
