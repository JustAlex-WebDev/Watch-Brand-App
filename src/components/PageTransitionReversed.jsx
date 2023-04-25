import React from "react";
import { motion as m } from "framer-motion";

const PageTransitionReversed = () => {
  return (
    <m.div
      initial={{ y: "-100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="text-grey-900 bg-green-800 absolute top-0 left-0 w-full h-full"
    >
      <div className="main-div flex justify-center items-center h-full">
        <div className="overflow-hidden text-5xl xs:text-6xl sm:text-7xl lg:text-9xl flex animate-animatePulse tracking-widest">
          <m.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.75 }}
          >
            T
          </m.div>
          <m.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.75 }}
          >
            I
          </m.div>
          <m.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.75 }}
          >
            M
          </m.div>
          <m.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.75 }}
          >
            E
          </m.div>
          <m.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.75 }}
          >
            L
          </m.div>
          <m.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.75 }}
          >
            E
          </m.div>
          <m.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.75 }}
          >
            S
          </m.div>
          <m.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.75 }}
          >
            S
          </m.div>
        </div>
      </div>
    </m.div>
  );
};

export default PageTransitionReversed;
