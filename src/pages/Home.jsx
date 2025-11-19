import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Works from "../components/Works";
import Philosophy from "../components/Philosophy";
import Price from "../components/Price";
import ABOUT from "../components/ABOUT";
import CONTACT from "../components/CONTACT";

export default function Home() {

  useEffect(() => {
    const sections = document.querySelectorAll(".home-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("home-show");
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-wrapper">
      <section className="home-section"><Hero /></section>
      <section className="home-section"><Works /></section>
      <section className="home-section"><Philosophy /></section>
      <section className="home-section"><Price /></section>
      <section className="home-section"><ABOUT /></section>
      <section className="home-section"><CONTACT /></section>
    </div>
  );
}
