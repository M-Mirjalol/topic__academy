
import React from "react";
import "./Hero.css";
import rasm from "./images/kr.png";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__glow hero__glow--one" />
      <div className="hero__glow hero__glow--two" />
      <div className="hero__grid" />

      <div className="container">
        <div className="hero__container">
          {/* LEFT CONTENT */}
          <div className="hero__content">
            <a href="#courses" className="hero__badge">
              <span className="hero__badge-dot" />
              KOREAN LAB — KELAJAGINGIZ SARI YO‘L
              <span className="hero__badge-arrow">↗</span>
            </a>

            <h1 className="hero__title">
              Koreys tilini o‘rganing.
              <span className="hero__title-accent">
                {" "}Orzularingizni{" "}
              </span>
              Koreyada amalga oshiring.
            </h1>

            <p className="hero__text">
              TOPIK imtihoniga tayyorlaning, Janubiy Koreya universitetlariga
              kirish imkoniyatlarini o‘rganing va xalqaro kelajagingiz uchun
              bugundan qadam tashlang.
            </p>

            <div className="hero__features">
              <div className="hero__feature">
                <span className="hero__feature-icon">한</span>
                <div>
                  <strong>Koreys tili</strong>
                  <span>Noldan boshlab</span>
                </div>
              </div>

              <div className="hero__feature-divider" />

              <div className="hero__feature">
                <span className="hero__feature-icon hero__feature-icon--red">
                  TOPIK
                </span>
                <div>
                  <strong>TOPIK tayyorgarlik</strong>
                  <span>Maqsadingiz sari</span>
                </div>
              </div>
            </div>

            <div className="hero__actions">
              <a href="tel:+998333060098" className="hero__button">
                Bepul darsga yozilish
                <span>↗</span>
              </a>

              <a href="#courses" className="hero__button-secondary">
                Kurslarni ko‘rish
                <span>→</span>
              </a>
            </div>

            <div className="hero__note">
              <span className="hero__note-line" />
              <p>
                <strong>Bugun boshlang.</strong> Kelajagingizni o‘zingiz yarating.
              </p>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="hero__visual">
            <div className="hero__visual-orbit hero__visual-orbit--one" />
            <div className="hero__visual-orbit hero__visual-orbit--two" />

            <div className="hero__image-frame">
              <div className="hero__image-top">
                <span className="hero__image-status">
                  <span /> KOREAN LANGUAGE
                </span>
                <span className="hero__image-korean">한국어</span>
              </div>

              <img
                className="hero__image"
                src={rasm}
                alt="Koreys tili va Janubiy Koreya ta'limi"
              />

              <div className="hero__image-bottom">
                <div>
                  <span className="hero__image-caption">YOUR NEXT CHAPTER</span>
                  <strong>Seulga yo‘l shu yerdan boshlanadi.</strong>
                </div>
                <span className="hero__image-symbol">↗</span>
              </div>
            </div>

            <div className="hero__floating hero__floating--top">
              <span className="hero__floating-icon">✦</span>
              <div>
                <strong>Yangi imkoniyatlar</strong>
                <span>Bilimdan kelajakka</span>
              </div>
            </div>

            <div className="hero__floating hero__floating--bottom">
              <span className="hero__floating-flag">🇰🇷</span>
              <div>
                <strong>한국에서 만나요!</strong>
                <span>Koreyada ko‘rishguncha!</span>
              </div>
            </div>

            <span className="hero__decor hero__decor--one">꽃</span>
            <span className="hero__decor hero__decor--two">한국</span>
          </div>
        </div>

        <div className="hero__bottom">
          <span>01 <i /> KOREAN LANGUAGE</span>
          <span>02 <i /> TOPIK PREPARATION</span>
          <span>03 <i /> GLOBAL OPPORTUNITIES</span>
          <span className="hero__bottom-korean">꿈을 향해 — Orzular sari</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
