import React from "react";
import logo from "../../assets/logo.svg";
import "../../styles/app.css";
import Footer from "../footer/footer-view";
import Clock from "../clock/clock";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo">
          <Clock />
        </div>
        <Clock />
      </header>
      <Footer />
    </div>
  );
}

export default App;
