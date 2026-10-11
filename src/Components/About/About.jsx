
import React, { useState } from "react";
import "./About.css";

import rasm1 from "./images/1.jpg";
import rasm2 from "./images/2.jpg";
import rasm3 from "./images/3.jpg";
import rasm4 from "./images/4.jpg";
import rasm5 from "./images/5.jpg";
import rasm6 from "./images/6.jpg";
import rasm7 from "./images/7.jpg";
import rasm8 from "./images/8.jpg";

const rasmlar = [
  rasm1, rasm2, rasm3, rasm4,
  rasm5, rasm6, rasm7, rasm8,
];

const About = () => {
  const [active, setActive] = useState(0);

  const oldinga = () => {
    setActive((prev) => (prev + 1) % rasmlar.length);
  };

  const orqaga = () => {
    setActive((prev) => (prev - 1 + rasmlar.length) % rasmlar.length);
  };

  return (
    <section className="about" id="results">
      <div className="container">
        <div className="about__container">
          <span className="about__subtitle">KOREAN LAB NATIJALARI</span>

          <h2 className="about__title">
            Katta maqsadlar.
            <span> Haqiqiy natijalar.</span>
          </h2>

          <p className="about__text">
            O‘quvchilarimizning TOPIK imtihonidagi natijalari bilan tanishing.
          </p>

          <div className="about__carousel">
            {rasmlar.map((rasm, index) => {
              const offset =
                (index - active + rasmlar.length) % rasmlar.length;
              const position =
                offset > rasmlar.length / 2 ? offset - rasmlar.length : offset;

              return (
                <button
                  type="button"
                  className={`about__card ${
                    position === 0 ? "about__card--active" : ""
                  }`}
                  key={index}
                  style={{
                    "--position": position,
                    "--distance": Math.abs(position),
                  }}
                  onClick={() => setActive(index)}
                  aria-label={`Natija ${index + 1}`}
                  tabIndex={Math.abs(position) > 2 ? -1 : 0}
                >
                  <img
                    src={rasm}
                    alt={`TOPIK natijasi ${index + 1}`}
                    draggable="false"
                  />
                </button>
              );
            })}
          </div>

          <div className="about__controls">
            <button onClick={orqaga} aria-label="Oldingi natija">
              &#8592;
            </button>

            <div className="about__counter">
              <span>{String(active + 1).padStart(2, "0")}</span>
              <div className="about__progress">
                <div
                  style={{
                    width: `${((active + 1) / rasmlar.length) * 100}%`,
                  }}
                />
              </div>
              {String(rasmlar.length).padStart(2, "0")}
            </div>

            <button onClick={oldinga} aria-label="Keyingi natija">
              &#8594;
            </button>
          </div>

          <p className="about__caption">
            Har bir natija — mehnat va izlanish samarasi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
