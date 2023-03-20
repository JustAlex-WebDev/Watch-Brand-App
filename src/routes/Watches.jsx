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
      className="text-grey-900 absolute top-0 left-0 w-full h-full lg:px-48 px-16"
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
            className="bg-green-800 text-white p-2 hover:opacity-50"
          >
            Click to save
          </button>
          {favourites ? <div>saved</div> : <div>not saved</div>}
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
