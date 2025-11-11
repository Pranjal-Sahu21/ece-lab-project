import React from "react";
import And from "./components/And";
import Nand from "./components/Nand";
import Nor from "./components/Nor";
import Not from "./components/Not";
import Xor from "./components/Xor";
import Or from "./components/Or";
import Navbar from "./components/Navbar";
import HalfAdder from "./components/HalfAdder";
import FullAdder from "./components/FullAdder";
import HalfSubtractor from "./components/HalfSubtractor";
import FullSubtractor from "./components/FullSubtractor";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <And />
      <Nand />
      <Nor />
      <Not />
      <Or />
      <Xor />
      <HalfAdder />
      <FullAdder />
      <HalfSubtractor />
      <FullSubtractor />
      
    </div>
  );
};

export default App;
