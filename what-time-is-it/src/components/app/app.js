import React from "react";
import clock from "../../assets/clock.svg";
import "../../styles/app.css";
import Clock from "../clock/clock";
import Footer from "../footer/footer-view";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={clock} className="App-logo" alt="logo" />
        <Clock />
      </header>
      <Footer />
    </div>
  );
}

export default App;
