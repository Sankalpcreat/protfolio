import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Service from "./components/Service";
import About from "./components/About";

function App() {
  return (
    <div >
      <Banner/>
      <Nav/>
      <Service/>
      <About/>
    </div>
     
  );
}

export default App;
