import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AnimationOnLoad from "./components/AnimationOnLoad";
// import TimelessWebsite from "./assets/TimelessWebsite.mp4";
import Navbar from "./components/Navbar";
import Contact from "./routes/Contact";
import Home from "./routes/Home";

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
        <div className="animate-animateOpacity w-full">
          <Navbar />
          <AnimatePresence initial={false}>
            <Routes location={location} key={location.pathName}>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </div>
      )}
    </>
  );
}

export default App;
