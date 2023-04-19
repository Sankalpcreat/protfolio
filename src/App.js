import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Service from "./components/Service";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div >
      <Banner/>
      <Nav/>
      <Service/>
      <About/>
      <Contact/>
    </div>
     
  );
}

export default App;
