import React from "react";
import "./assets/styles/App.css";
import { Hero } from "./components/home/Hero";
import { Services } from "./components/services/Services";

export const App = () => {
  return (
    <>
      <Hero />
      <Services />
    </>
  );
};
