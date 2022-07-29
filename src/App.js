import React from "react";
import "./assets/styles/App.css";
import { Header } from "./components/header/header";
import Hero from "./components/home/Hero";
import ListServices from "./components/services/ListServices";
import Services from "./components/services/Services";

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <ListServices />
    </>
  );
};
