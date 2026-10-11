
import "./Courses.css";

const courses = [
  {
    id: "individual",
    label: "MAXSUS TA'LIM",
    title: "Individual",
    subtitle: "Sizning maqsadingiz — bizning rejamiz.",
    price: "1 200 000",
    unit: "so‘m / oy",
    accent: "individual",
    features: [
      "Haftasiga 3–5 kun dars",
      "Shaxsiy o‘qituvchi",
      "Sizga mos individual reja",
      "Moslashuvchan dars vaqti",
      "Har oy individual natija tahlili",
    ],
    format: "1 o‘quvchi",
    duration: "60–90 daqiqa",
    button: "Individual kursni tanlash",
  },
  {
    id: "standard",
    label: "ENG OMMABOP",
    title: "Odatiy",
    subtitle: "Muvozanatli o‘qish va barqaror rivojlanish.",
    price: "500 000",
    unit: "so‘m / oy",
    accent: "standard",
    features: [
      "Haftasiga 3 kun dars",
      "Kichik guruhda ta’lim",
      "Grammatika va yangi so‘zlar",
      "Uy vazifalari va tekshiruv",
      "Muntazam bilim nazorati",
    ],
    format: "Guruhda",
    duration: "60–90 daqiqa",
    button: "Odatiy kursni tanlash",
  },
  {
    id: "intensive",
    label: "TEZKOR NATIJA",
    title: "Intensive",
    subtitle: "Qisqa muddatda faol va tizimli tayyorgarlik.",
    price: "800 000",
    unit: "so‘m / oy",
    accent: "intensive",
    features: [
      "Haftasiga 5 kun dars",
      "Tezlashtirilgan o‘quv dasturi",
      "TOPIK formatida mashqlar",
      "Qo‘shimcha amaliy topshiriqlar",
      "Haftalik natija tahlili",
    ],
    format: "Kichik guruh",
    duration: "90 daqiqa",
    button: "Intensive kursni tanlash",
  },
];

const Courses = () => {
  return (
    <section className="courses" id="courses">
      <div className="courses__glow" />

      <div className="container courses__container">
        <div className="courses__heading">
          <span className="courses__eyebrow">
            <span /> BIZNING KURSLAR
          </span>

          <h2>
            Maqsadingizga mos
            <br />
            <span>ta’lim yo‘lini tanlang.</span>
          </h2>

          <p>
            Koreys tilini o‘rganish uchun o‘zingizga mos formatni tanlang.
            Har bir kurs sizni yangi imkoniyatlarga yaqinlashtiradi.
          </p>
        </div>

        <div className="courses__grid">
          {courses.map((course) => (
            <article
              className={`course-card course-card--${course.accent}`}
              key={course.id}
            >
              <div className="course-card__top">
                <span className="course-card__label">
                  <span className="course-card__dot" />
                  {course.label}
                </span>

                <span className="course-card__number">
                  0{courses.indexOf(course) + 1}
                </span>
              </div>

              <h3>{course.title}</h3>
              <p className="course-card__subtitle">{course.subtitle}</p>

              <div className="course-card__price">
                <strong>{course.price}</strong>
                <span>{course.unit}</span>
              </div>

              <div className="course-card__divider" />

              <div className="course-card__details">
                <div>
                  <span>Ta’lim formati</span>
                  <strong>{course.format}</strong>
                </div>
                <div>
                  <span>Bir dars</span>
                  <strong>{course.duration}</strong>
                </div>
              </div>

              <h4 className="course-card__features-title">
                Kurs imkoniyatlari
              </h4>

              <ul className="course-card__features">
                {course.features.map((feature) => (
                  <li key={feature}>
                    <span className="course-card__check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={`#contact?course=${course.id}`}
                className="course-card__button"
              >
                {course.button}
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>

        <p className="courses__note">
          * Narxlar namunaviy. Haqiqiy narxlar, dars jadvali va davomiylik
          markaz tomonidan tasdiqlanishi kerak.
        </p>
      </div>
    </section>
  );
};

export default Courses;
