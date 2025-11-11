import React from "react";
import And from "./components/And";
import Nand from "./components/Nand";
import Nor from "./components/Nor";
import Not from "./components/Not";
import Xor from "./components/Xor";
import Or from "./components/Or";

const App = () => {
  return (
    <div>
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
