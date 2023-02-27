import React from "react";
import { motion as m } from "framer-motion";

const Contact = () => {
  return (
    <m.main
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="text-grey-900 absolute top-0 left-0 w-full h-full lg:px-48 px-16"
    >
      <div className="my-96 p-1">
        <h1 className="text-6xl text-center lg:text-left lg:text-9xl">
          Let's Talk
        </h1>
      </div>
      <div className="flex justify-between">
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
      </div>
    </m.main>
  );
};

export default Contact;
