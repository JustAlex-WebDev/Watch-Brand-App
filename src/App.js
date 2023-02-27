import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AnimationOnLoad from "./components/AnimationOnLoad";
// import TimelessWebsite from "./assets/TimelessWebsite.mp4";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { AnimatePresence } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  // Animation On Load
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <AnimationOnLoad />
      ) : (
        <div className="py-24 px-12 lg:px-48">
          {/* <div className="animate-animateOpacity w-full"> */}
          {/* Background video */}
          {/* <div className="w-full h-screen">
            <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)]"></div>
            <video
              src={TimelessWebsite}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            ></video>
            <div className="absolute w-full h-full top-0 text-white text-4xl font-bold text-center p-16 tracking-widest">
              TIMELESS
            </div>
          </div> */}

          <Navbar />
          <AnimatePresence initial={false}>
            <Routes location={location} key={location.pathName}>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
          {/* </div> */}
        </div>
      )}
    </>
  );
}

export default App;
