import React, { useState } from 'react';
import supportcardimg from '../img/arrow-right2.png';

const Support = () => {
  // State to manage the visibility of the additional content
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div id='support' className="support bg-[#080808] px-20 py-14">
        <div className="support-top">
          <div className="wrapper flex items-center flex-col gap-4">
            <h1 className="text-white text-center font-bold text-6xl">
              <span className="text-[#aad9d1]">Frequently Asked </span> Questions
            </h1>
            <p className="text-gray-400 text-xl text-center">
              We've compiled a list of the most frequently asked questions about SmartNotes to help you get the <br />
              information you need. If you have any other questions, feel free to reach out to our support team.
            </p>
          </div>
        </div>
        <div className="support-bottom flex items-center gap-4 flex-col mt-14">
          <div
            onClick={handleToggle}
            className={`information flex items-center px-8 border border-[#aad9d1] rounded-xl py-4 justify-between w-[80%] h-fit cursor-pointer transition-all ease-in-out duration-300 ${
              isOpen ? 'bg-[#080808]' : 'bg-[#080808]'
            }`}
          >
            <h1 className="text-white text-3xl font-semibold">What is SmartNotes</h1>
            <img src={supportcardimg} className="w-[4%] p-2 border border-[#aad9d1] rounded-xl" alt="Arrow" />
          </div>
          {isOpen && (
            <p className="text-white mt-4 border border-[#aad9d1] p-4 rounded-xl px-8 text-xl">
              Getting started with SmartNotes is easy! Simply visit our website, sign <br />
              up for a free trial, and start exploring the features. Our intuitive interface and <br />
              comprehensive onboarding materials will guide you through the process.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Support;
