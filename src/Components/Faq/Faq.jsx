
import React, { useState } from "react";
import "./Faq.css";

const questions = [
  {
    q: "Koreys tilini noldan o‘rgansam bo‘ladimi?",
    a: "Ha! Darslar boshlang‘ich darajadan boshlanadi. Siz koreys tilini bosqichma-bosqich o‘rganasiz."
  },
  {
    q: "TOPIK 6 darajasiga qancha vaqtda erishish mumkin?",
    a: "Bu sizning boshlang‘ich darajangiz, muntazam shug‘ullanishingiz va tayyorgarligingizga bog‘liq. Aniq natijani kafolatlab bo‘lmaydi."
  },
  {
    q: "Darslar online yoki offline o‘tiladimi?",
    a: "Darslarning formati, jadvali va mavjud guruhlar haqida ma’lumot olish uchun biz bilan bog‘lanishingiz mumkin."
  },
  {
    q: "Janubiy Koreyada grant yutishga yordam berasizmi?",
    a: "Ha, grant dasturlari, TOPIK tayyorgarligi va hujjatlar bo‘yicha yo‘l-yo‘riq berishimiz mumkin. Grant ajratilishi tanlov va rasmiy talablariga bog‘liq."
  },
  {
    q: "Bepul sinov darsiga yozilsam bo‘ladimi?",
    a: "Albatta! Pastdagi bog‘lanish formasini to‘ldiring, siz bilan bog‘lanish uchun ma’lumotlaringizni qoldiring."
  }
];

const FAQ = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq__heading">
          <span className="faq__label">FAQ</span>
          <h2 className="faq__title">
            Ko‘p beriladigan <span>savollar</span>
          </h2>
          <p className="faq__description">
            Sizni qiziqtirgan savollarga javoblarni shu yerdan toping.
          </p>
        </div>

        <div className="faq__list">
          {questions.map((item, index) => (
            <div
              className={`faq__item ${
                active === index ? "faq__item--active" : ""
              }`}
              key={item.q}
            >
              <button
                className="faq__question"
                onClick={() =>
                  setActive(active === index ? -1 : index)
                }
                aria-expanded={active === index}
              >
                <span className="faq__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{item.q}</span>
                <span className="faq__icon">
                  {active === index ? "−" : "+"}
                </span>
              </button>

              {active === index && (
                <div className="faq__answer">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
