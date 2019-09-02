import React from "react";
import "../../styles/app.css";
import Clock from "../clock/clock";
import Footer from "../footer/footer-view";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="App-body">
        <Clock />
      </div>
      <Footer />
    </div>
  );
}

export default App;
