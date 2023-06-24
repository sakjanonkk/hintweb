import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../src/style.css"; // Import the CSS file for custom styles
import Type from "react-typed";

const HintWebsite = () => {
  const [hints, setHints] = useState([]);
  const [newHints, setNewHints] = useState([]);
  const [showNextPage, setShowNextPage] = useState(false);
  const [hideText, setHideText] = useState(false); // Added state for hiding text

  const fetchHints = async () => {
    if (hints.length === 0) {
      // Fetch hints data
      const dummyData = [
        { id: 1, hint: "S..." },
        { id: 2, hint: "Tall about 170 - 190 cm" },
        { id: 3, hint: "Best Valorant Player For SEA SERVER" },
        { id: 4, hint: "Ming's friend" },
      ];

      setHints(dummyData);
      setHideText(true); // Hide the text when hints are fetched
    } else {
      setHints([]);
      setShowNextPage(true);
      setNewHints([
        { id: 1, newHint: "I love Singha's water" },
        { id: 2, newHint: "P'( Khao, Chang, etc ) 's friend " },
        {
          id: 3,
          newHint:
            "I use a green phone, maybe for the case's color or the phone's color. also I use a green watch",
        },
        {
          id: 4,
          newHint:
            "I have a lot of friends. When we eat lunch, we go together.",
        },
      ]);
    }
  };

  const handleNextPage = () => {
    setShowNextPage(false);
    setHideText(false); // Show the text when going back
  };

  if (showNextPage) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-banner-bg bg-no-repeat bg-center bg-cover">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center items-center uppercase text-white text-3xl text-center py-5">
            <h1>Find me if you can</h1>
          </div>
          <button
            className="bg-[#4ed6ff] hover:bg-[#1a9dc5] shadow-cyan-500/50 text-white font-bold py-2 px-4 rounded block mx-auto mb-4 shadow-inner"
            onClick={handleNextPage}
          >
            Back
          </button>
          <div className="flex justify-center">
            <TransitionGroup component="ul" className="list">
              {newHints.map((newHint) => (
                <CSSTransition key={newHint.id} classNames="fade" timeout={300}>
                  <li className="bg-gray-50 rounded p-2 mb-2 shadow-xl text-center">
                    {newHint.newHint}
                  </li>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-banner-bg bg-no-repeat bg-center bg-cover">
      <div className="container mx-auto px-4 py-8">
        <div className="fix">
          <div className="flex justify-center items-center uppercase text-white text-3xl text-center py-5">
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
          <div className="flex justify-center items-center">
            <button
              className="bg-[#4ed6ff] hover:bg-[#1a9dc5] shadow-cyan-500/50 text-white font-bold py-2 px-4 rounded block mx-auto mb-4 shadow-inner"
              onClick={fetchHints}
            >
              {hints.length === 0 ? "Get hints" : "Get new hints"}
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <TransitionGroup component="ul" className="list">
            {hints.map((hint) => (
              <CSSTransition key={hint.id} classNames="fade" timeout={300}>
                <li className="bg-gray-50 rounded p-2 mb-2 shadow-xl text-center">
                  {hint.hint}
                </li>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        {!hideText && ( // Display the text if hideText state is false
          <CSSTransition classNames="fade" timeout={300}>
            <span className="flex items-center justify-center text-gray-800 opacity-60 text-center ">
              Don't forget to find me na cuz I'm lazy to give a hint eiei
            </span>
          </CSSTransition>
        )}
      </div>
    </div>
  );
};

export default HintWebsite;
