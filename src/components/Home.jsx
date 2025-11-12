import React from "react";

const Home = () => {
  return (
    <div className="relative flex flex-col justify-center items-center h-screen gap-6 lg:gap-10 px-4 sm:px-6 lg:px-10 text-center">
      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl underline text-gray-700">
        BASIC ELECTRONICS LAB PROJECT
      </h1>
      <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-600">
        Topic : IMPLEMENTATION OF LOGIC GATES, ADDERS & SUBTRACTORS
      </h2>
      <h3 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600">
        Professor : Santos Kumar Das
      </h3>
      <h3 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600">
        Subject Code : EC2700
      </h3>
    </div>
  );
};

export default Home;
