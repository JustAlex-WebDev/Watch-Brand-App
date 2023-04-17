import React from "react";
import { motion as m } from "framer-motion";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";

const Home = () => {
  return (
    <>
      <m.div
        initial={{ y: "-100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 1 }}
        className="text-grey-900 bg-green-800 absolute top-0 left-0 w-full h-full"
      >
        <PageTransition />
      </m.div>
      <m.div
        initial={{ y: "-100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.75, delay: 3, ease: "easeOut" }}
        exit={{ opacity: 1 }}
        className="text-grey-900 bg-[#fff] absolute top-0 left-0 w-full h-full p-4"
      >
        <main className="main-div mb-64">
          <div className="mt-56 mb-16 p-2 overflow-hidden">
            <m.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-4xl xs:text-5xl lg:text-6xl text-center tracking-widest"
            >
              TIMELESS
            </m.h1>
          </div>
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex flex-col gap-6 w-[80%] max-w-[600px] m-auto text-center"
          >
            <div className="text-base xs:text-lg lg:text-xl font-semibold">
              Crafted with scrupulous attention to detail
            </div>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.25, duration: 0.5 }}
              className="text-sm xs:text-base lg:text-lg text-justify"
            >
              Explore the Timeless collection of prestigious, high-precision
              timepieces. Timeless offers a wide assortment of Classic and
              Professional watch models to suit any wrist. Discover the broad
              selection of Timeless watches to find a perfect combination of
              style and functionality.
            </m.div>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="flex justify-center items-center gap-8 text-sm xs:text-base"
            >
              <Link
                to="/watches"
                className="p-2 px-4 border border-green-900 text-green-900 hover:text-white hover:bg-green-900 rounded-2xl cursor-pointer transition-all"
              >
                Watch Finder
              </Link>
              <div className="p-2 text-green-900 hover:opacity-60 rounded-2xl cursor-pointer transition-all">
                Configure your watch
              </div>
            </m.div>
          </m.div>
        </main>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.75, duration: 0.5 }}
        >
          <Footer />
        </m.div>
      </m.div>
    </>
  );
};

export default Home;
