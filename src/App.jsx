import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Philosophy from "./components/Philosophy";
import Price from "./components/Price";
import ABOUT from "./components/ABOUT";
import CONTACT from "./components/CONTACT";
import FOOTER from "./components/FOOTER";

export default function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Works />
      <Philosophy />
      <Price />   
      <ABOUT />
      <CONTACT />
      <FOOTER />
    </div>
  );
}
