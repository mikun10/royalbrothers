import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Homepagelayout from "./Components/Homepagelayout";

function App() {
  return <Homepagelayout />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
