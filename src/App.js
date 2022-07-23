import React from "react";
import "./assets/styles/App.css";
import { Hero } from "./components/home/Hero";
import { Services } from "./components/services/Services";
import { Header } from "./components/header/header";
export const App = () => {
  return (
    <>
      <Header/>
      <Hero />
      <Services />
    </>
  );
};
