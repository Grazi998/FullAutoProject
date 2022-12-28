import React from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Router from "./Router";

import "./css/compiled/app.css";

function App() {
  return (
    <div id="appWrapper">
      <Navigation />
      <div id="shatteringContainer"></div>
      <Router />
      <Footer />
    </div>
  );
}

export default App;
