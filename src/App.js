import React from "react";
import "./assets/styles/App.css";
import { Beneficios } from "./components/beneficios/beneficios";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";
import Hero from "./components/home/Hero";
import ListServices from "./components/services/ListServices";
import Services from "./components/services/Services";
import Steps from "./components/services/Steps";
import Navbar from "./components/navbar/Navbar";

export const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <ListServices />
      <Steps />
      <Beneficios />
      <Contact />
      <Footer />
    </>
  );
};
