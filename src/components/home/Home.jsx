import React from "react";

export const Home = () => {
  return (
    <section>
      <div className="container px-4">
        <div className="flex-row">
          <div className=" col-span-12">
            <div
              className="bg-img hero-img"
              style={{ backgroundImage: "url(/imgages/bg/bg-hero-home.jpg)" }}
            ></div>
            <span className="tpurple">Cambia tu vida con</span>
            <span>Bienestar para ti y los demás</span>
          </div>
        </div>
      </div>
    </section>
  );
};
