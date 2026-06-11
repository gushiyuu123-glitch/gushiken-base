// src/sections/HeroGate.jsx
import Hero from "./Hero";
import HeroSP from "./HeroSP";

export default function HeroGate({ isDesktop }) {
  return isDesktop ? <Hero /> : <HeroSP />;
}