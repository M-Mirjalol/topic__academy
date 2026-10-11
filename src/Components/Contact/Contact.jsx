
import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^[+\d][\d\s()-]{8,19}$/.test(form.phone.trim())) {
      alert("Telefon raqamingizni to‘g‘ri kiriting.");
      return;
    }

    setSubmitted(true);
    setForm({ firstName: "", lastName: "", phone: "" });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__container">
          <div className="contact__info">
            <span className="contact__label">BOG‘LANISH</span>

            <h2 className="contact__title">
              Savollaringiz bormi?
              <span> Biz bilan bog‘laning.</span>
            </h2>

            <p className="contact__text">
              Formani to‘ldiring. Siz bilan bog‘lanib,
              koreys tili kurslari va bepul dars haqida
              batafsil ma’lumot beramiz.
            </p>

            <div className="contact__note">
              <span>✦</span>
              <p>Yangi maqsadlaringiz sari ilk qadamni bugun boshlang.</p>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <h3 className="contact__form-title">Ariza qoldiring</h3>
            <p className="contact__form-text">
              Ma’lumotlaringizni kiriting.
            </p>

            <label htmlFor="firstName">Ism</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Ismingiz"
              value={form.firstName}
              onChange={handleChange}
              autoComplete="given-name"
              required
            />

            <label htmlFor="lastName">Familiya</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Familiyangiz"
              value={form.lastName}
              onChange={handleChange}
              autoComplete="family-name"
              required
            />

            <label htmlFor="phone">Telefon raqami</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+998 90 123 45 67"
              value={form.phone}
              onChange={handleChange}
              autoComplete="tel"
              required
            />

            <button className="contact__button" type="submit">
              Ariza yuborish <span>→</span>
            </button>

            {submitted && (
              <p className="contact__success" role="status">
                Ma’lumotlar kiritildi! Arizalarni qabul qilishni
                yakunlash uchun formani server yoki Telegram bilan ulash kerak.
              </p>
            )}

            <p className="contact__privacy">
              Ma’lumotlaringiz faqat bog‘lanish maqsadida ishlatilishi kerak.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
