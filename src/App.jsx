import React from "react";
import Homepage from "./components/Homepage";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";


import "./css/compiled/app.css";


function App() {
  return (
    <div id="appWrapper">
      <Navigation />
      <div id="shatteringContainer"></div>
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
