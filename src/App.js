import React, { useEffect, useState } from "react";
import AnimationOnLoad from "./components/AnimationOnLoad";

function App() {
  const [loading, setLoading] = useState(false);

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
        <div className="text-2xl font-bold text-center p-4 w-full animate-animateOpacity">
          TIMELESS
        </div>
      )}
    </>
  );
}

export default App;
