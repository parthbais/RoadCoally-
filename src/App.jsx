import React from "react";
import "./index.css";
import "./App.css";

import NavBar from "./components/Navigation";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Download from "./components/Download";
import Trust from "./components/Trust";
import Partner from "./components/Partner";
import Footer from "./components/Footer";

function App(){
  return (
    <div>
      <NavBar />
      <Hero />
      <Features />
      <Download />
      <Trust />
      <Partner />
      <Footer />
     
    </div>
  );
}

<div className="bg-red-500 text-white p-4">
  If you see a red box, Tailwind is working!
</div>


export default App;
