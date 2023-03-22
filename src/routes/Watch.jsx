import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { watches } from "../data";

const Watch = () => {
  const [fw, setFw] = useState(watches);
  const { id } = useParams();

  return (
    <div className="w-full">
      {fw
        .filter((element, index) => {
          return index === id - 1;
        })
        .map((item) => (
          <div
            key={item.id}
            className="absolute top-0 left-0 w-full h-full p-4"
          >
            <main className="main-div mb-64">
              <div className="mt-56 mb-16 p-2 overflow-hidden">
                <h1 className="text-xl text-center tracking-widest flex flex-col">
                  <div className="font-sans">Item Name: {item.name}</div>
                  <div className="font-sans">Item Id: {item.id}</div>
                </h1>
              </div>
            </main>
          </div>
        ))}
    </div>
  );
};

export default Watch;
