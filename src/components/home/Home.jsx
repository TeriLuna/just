import React from "react";
// import bgImg from "../../assets/images/bg/bg-hero-home.jpg";

export const Home = () => {
  return (
    <section>
      <div className="container">
        <div className="flex-row">
          <div className=" col-span-12">
            <div
              className="fullscreen bg-img hero-img flex items-center justify-center absolute -z-10"
            ></div>
            <span className="tpurple">Cambia tu vida con</span>
            <span>Bienestar para ti y los demás</span>
          </div>
        </div>
      </div>
    </section>
  );
};
