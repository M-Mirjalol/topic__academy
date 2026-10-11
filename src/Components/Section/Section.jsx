
import React, { useState } from "react";
import GKS from "./images/gks.png";
import "./Section.css";

const Section = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="section" id="gks">
      <div className="container">
        <div className="section__container">
          <div className="section__heading">
            <span className="section__badge">GKS SCHOLARSHIP</span>

            <h2 className="section__title">
              Koreyada o‘qish sari
              <span> katta imkoniyat</span>
            </h2>

            <p className="section__intro">
              Janubiy Koreya hukumatining stipendiya dasturi bilan
              ta’lim olish imkoniyatlarini kashf eting.
            </p>
          </div>

          <div className="section__content">
            <div className="section__image">
              <img src={GKS} alt="GKS — Global Korea Scholarship" />
              <div className="section__image-label">
                <span>GKS</span>
                <p>Global Korea Scholarship</p>
              </div>
            </div>

            <div className="section__info">
              <span className="section__eyebrow">
                GLOBAL KOREA SCHOLARSHIP
              </span>

              <h3 className="section__subtitle">
                Orzuyingizdagi universitetga grant asosida yo‘l oling
              </h3>

              <p className="section__text">
                GKS — xorijiy talabalar uchun Janubiy Koreya hukumati
                tomonidan taqdim etiladigan stipendiya dasturi.
                Tanlangan dastur va talablar asosida o‘qish hamda
                yashash bilan bog‘liq xarajatlarni qoplash imkoniyati mavjud.
              </p>

              <div className="section__benefits">
                <div className="section__benefit">
                  <span className="section__check">✓</span>
                  <p>O‘qish to‘lovi uchun moliyaviy yordam</p>
                </div>

                <div className="section__benefit">
                  <span className="section__check">✓</span>
                  <p>Aviachipta xarajatlari uchun yordam</p>
                </div>

                <div className="section__benefit">
                  <span className="section__check">✓</span>
                  <p>Oylik stipendiya va boshqa imtiyozlar</p>
                </div>

                {showMore && (
                  <div className="section__extra">
                    <p>
                      Ayrim dasturlarda koreys tili kursi va
                      joylashish uchun boshlang‘ich yordam ham beriladi.
                      Imtiyozlar ta’lim bosqichi va rasmiy dastur
                      shartlariga qarab farq qiladi.
                    </p>
                  </div>
                )}
              </div>

              <button
                className="section__button"
                onClick={() => setShowMore(!showMore)}
                aria-expanded={showMore}
              >
                {showMore ? "Qisqartirish" : "Batafsil ma’lumot"}
                <span>{showMore ? "↑" : "→"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
