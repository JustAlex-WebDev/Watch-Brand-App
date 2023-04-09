import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AnimationOnLoad from "./components/AnimationOnLoad";
import Navbar from "./components/Navbar";
import Watches from "./routes/Watches";
import Home from "./routes/Home";
import Watch from "./routes/Watch";
import ScrollToTop from "./components/ScrollToTop";
import FavContextProvider from "./context/FavContext";

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [scrollToTop, setScrollToTop] = useState(false);

  // Animation On Load
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  // Scroll To Top Button
  const scrollToTopIndicator = () => {
    if (window.scrollY >= 40) {
      setScrollToTop(true);
    } else {
      setScrollToTop(false);
    }
  };
  window.addEventListener("scroll", scrollToTopIndicator);

  const scrollToTopFunction = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <FavContextProvider>
        {loading ? (
          <AnimationOnLoad />
        ) : (
          <div className="animate-animateOpacity w-full">
            <Navbar />
            <ScrollToTop
              scrollToTopIndicator={scrollToTop}
              scrollToTopFunction={scrollToTopFunction}
            />
            <AnimatePresence initial={false}>
              <Routes location={location} key={location.pathName}>
                <Route path="/" element={<Home />} />
                <Route path="/watches" element={<Watches />} />
                <Route path="/watches/:id" element={<Watch />} />
              </Routes>
            </AnimatePresence>
          </div>
        )}
      </FavContextProvider>
    </>
  );
}

export default App;
