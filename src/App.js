import React from "react";
import "./App.css";
import CurrApp from "./CurrApp.js";
import Notes from "./Notes.js";
import Stopwatch from "./Stopwatch.js";

function App() {
  return (
    <div className="App">
      <Stopwatch />
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <br></br>
      <br></br>
      <br></br>
      <Notes />
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <br></br>
      <br></br>
      <br></br>
      <CurrApp />
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default App;
