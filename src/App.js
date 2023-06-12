import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../src/style.css"; // Import the CSS file for custom styles
import Type from "react-typed";

const HintWebsite = () => {
  const [hints, setHints] = useState([]);

  const fetchHints = async () => {
    if (hints.length === 0) {
      // Fetch hints data
      const dummyData = [
        { id: 1, hint: "S" },
        { id: 2, hint: "Tall about 170 - 190 cm" },
        { id: 3, hint: "Best Valorant Player For SEA SERVER" },
        { id: 4, hint: "Ming's friend" },
      ];

      setHints(dummyData);
    } else {
      setHints([]);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen  bg-banner-bg bg-no-repeat bg-center bg-cover">
      <div className="container mx-auto px-4 py-8">
        <div className="fix">
          <div className="flex justify-center items-center  uppercase  text-white text-3xl text-center my-8">
            <Type
              className="text-center text-white shadow-inner shadow-[#38c7ff]"
              strings={[
                " ..",
                " Welcome to hint website",
                " I'm your P' Take ",
                " Hints will be shown below",
              ]}
              typeSpeed={120}
              backSpeed={120}
              loop
            />
          </div>
          <div className="flex">
            <button className="bg-[#043c4d] hover:bg-[#1a9dc5] shadow-cyan-500/50 text-white font-bold py-2 px-4 rounded block mx-auto mb-4 shadow-inner">
              {hints.length === 0 ? "Get hints" : "ahhahha"}
            </button>{" "}
            <button className="bg-[#488396] hover:bg-[#1a9dc5] shadow-cyan-500/50 text-white font-bold py-2 px-4 rounded block mx-auto mb-4 shadow-inner">
              {hints.length === 0 ? "Get hints" : "ahahhaha"}
            </button>
            <button
              className="bg-[#4ed6ff] hover:bg-[#1a9dc5] shadow-cyan-500/50 text-white font-bold py-2 px-4 rounded block mx-auto mb-4 shadow-inner"
              onClick={fetchHints}
            >
              {hints.length === 0 ? "Get hints" : "Hide hints"}
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <TransitionGroup component="ul" className="list">
            {hints.map((hint) => (
              <CSSTransition key={hint.id} classNames="fade" timeout={300}>
                <li className="bg-gray-50 rounded p-2 mb-2 shadow-xl">
                  {hint.hint}
                </li>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    </div>
  );
};

export default HintWebsite;
