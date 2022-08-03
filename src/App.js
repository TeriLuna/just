import React from "react";
import "./assets/styles/App.css";
import { Header } from "./components/header/header";
import { Beneficios } from "./components/beneficios/beneficios";
import Hero from "./components/home/Hero";
import ListServices from "./components/services/ListServices";
import Services from "./components/services/Services";
import Steps from "./components/services/Steps";
import "animate.css";

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <ListServices />
      <Steps />
      <Beneficios />
    </>
  );
};
