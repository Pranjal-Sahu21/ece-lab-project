import React from "react";
import And from "./components/And";
import Nand from "./components/Nand";
import Nor from "./components/Nor";
import Not from "./components/Not";
import Xor from "./components/Xor";
import Or from "./components/Or";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar/>
      <And />
      <Nand />
      <Nor />
      <Not />
      <Or />
      <Xor />
      
    </div>
  );
};

export default App;
