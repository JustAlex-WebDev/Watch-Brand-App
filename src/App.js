import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AnimationOnLoad from "./components/AnimationOnLoad";
import Navbar from "./components/Navbar";
import Watches from "./routes/Watches";
import Home from "./routes/Home";
import Watch from "./routes/Watch";

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
              <Route path="/watches" element={<Watches />} />
              <Route path="/watches/:id" element={<Watch />} />
            </Routes>
          </AnimatePresence>
        </div>
      )}
    </>
  );
}

export default App;
