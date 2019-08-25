import React from "react";
import clock from "../../assets/clock.svg";
import "../../styles/app.css";
import Clock from "../clock/clock";
import Footer from "../footer/footer-view";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          What Time Is It
        <img src={clock} className="App-logo" alt="logo" />
        <button> search </button>
      </header>
      <div className="App-body">
        <Clock />
      </div>
      <Footer />
    </div>
  );
}

export default App;
