
import React, { useState } from "react";
import logo from "./images/logo.png.png";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { title: "Nega biz?", href: "#about" },
    { title: "Natijalar", href: "#results" },
    { title: "Kurslar", href: "#courses" },
    { title: "Savol-javob", href: "#faq" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header" id="home">
      <div className="header__atmosphere" aria-hidden="true" />
      <div className="header__overlay" aria-hidden="true" />

      <div className="container">
        <div className="header__container">
          <a href="#home" className="header__brand" onClick={closeMenu}>
            <div className="header__logo">
              <img src={logo} alt="Korean Lab logotipi" />
            </div>

            <div className="header__brand-text">
              <span className="header__brand-name">
                KOREAN <span>LAB</span>
              </span>
              <span className="header__brand-caption">
                YOUR KOREAN JOURNEY
              </span>
            </div>
          </a>

          <nav
            className={`header__nav ${
              menuOpen ? "header__nav--open" : ""
            }`}
            aria-label="Asosiy navigatsiya"
          >
            <a
              href="#home"
              className="header__link header__link--active"
              onClick={closeMenu}
            >
              Bosh sahifa
            </a>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="header__link"
                onClick={closeMenu}
              >
                {link.title}
              </a>
            ))}

            <a
              href="tel:+998333060098"
              className="header__mobile-contact"
              onClick={closeMenu}
            >
              Bog‘lanish <span>↗</span>
            </a>
          </nav>

          <div className="header__actions">
            <a
              href="tel:+998333060098"
              className="header__phone-icon"
              aria-label="Qo‘ng‘iroq qilish"
            >
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.2 18.85a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.68 2.8a2 2 0 0 1-.45 2.11L8.07 9.93a16 16 0 0 0 6 6l1.3-1.27a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.68A2 2 0 0 1 22 16.92Z" />
              </svg>
            </a>

            <div className="header__phone-info">
              <span>Biz bilan bog‘laning</span>
              <a href="tel:+998333060098">+998 (33) 306-00-98</a>
            </div>

            <a href="tel:+998333060098" className="header__contact">
              Bog‘lanish
              <span>↗</span>
            </a>
          </div>

          <button
            className={`header__menu-btn ${
              menuOpen ? "header__menu-btn--active" : ""
            }`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Menyuni yopish" : "Menyuni ochish"}
            aria-expanded={menuOpen}
            type="button"
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
