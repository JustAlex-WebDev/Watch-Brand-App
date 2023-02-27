import React from "react";
import { motion as m } from "framer-motion";

const Home = () => {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="text-grey-900 absolute top-0 left-0 w-full h-full lg:px-48 px-16"
    >
      <main>
        <div className="my-96 p-4 overflow-hidden">
          <m.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-6xl text-center lg:text-left lg:text-9xl"
          >
            Happy Pickle
          </m.h1>
        </div>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex justify-between"
        >
          <div>
            <h2>Design</h2>
            <h2>Company</h2>
            <h2>2023</h2>
          </div>
          <div>
            <h3>This pickle is gonna make you smile.</h3>
            <h3>Scottish design to make you happy.</h3>
            <h3>Click contact for cool transition.</h3>
          </div>
        </m.div>
      </main>
    </m.div>
  );
};

export default Home;
