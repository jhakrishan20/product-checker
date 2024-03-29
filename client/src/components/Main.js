import React from "react";
import Hero from "./main/Hero";
import Scanner from "./main/Scanner";
import Why from "./main/Why";
import About from "./main/About";

const Main = () => {
  return (
    <div>
      <div className="sticky top-10 -z-10">
        <div className="main sticky"></div>
      </div>
      <Hero />
      <Scanner />
      <Why />
      <About />
    </div>
  );
};

export default Main;
