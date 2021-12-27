import React from "react";
import ReactDOM from "react-dom";
import calculator from "./calculator";
import Add from "./components/Add";
import Multiply from "./components/Multiply";
import Divide from "./components/Divide";
import Substract from "./components/Substract";

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

ReactDOM.render(
  <ul>
    <li>{Add(1, 2)}</li>
    <li>{Multiply(2, 3)}</li>
    <li>{Substract(7, 2)}</li>
    <li>{Divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);
