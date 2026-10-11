
import "./Footer.css";

const Icon = ({ type, size = 20 }) => {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const paths = {
    telegram: (
      <>
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="M22 2 11 13" />
      </>
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </>
    ),
    youtube: (
      <>
        <path d="M22 12s0-4-1-5-4-1-9-1-8 0-9 1-1 5-1 5 0 4 1 5 4 1 9 1 8 0 9-1 1-5 1-5Z" />
        <path d="m10 9 5 3-5 3Z" />
      </>
    ),
    arrow: (
      <>
        <path d="M7 17 17 7" />
        <path d="M7 7h10v10" />
      </>
    ),
    up: (
      <>
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </>
    ),
    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 2.8a2 2 0 0 1-.6 1.9L7.2 10a16 16 0 0 0 6 6l1.6-1.8a2 2 0 0 1 1.9-.6l2.8.5a2 2 0 0 1 1.5 1.8Z" />
    ),
  };

  return <svg {...common}>{paths[type]}</svg>;
};

const Footer = () => {
  const socialLinks = [
    {
      label: "Telegram",
      url: "https://t.me/your_channel",
      icon: "telegram",
    },
    {
      label: "Instagram",
      url: "https://instagram.com/your_page",
      icon: "instagram",
    },
    {
      label: "YouTube",
      url: "https://youtube.com",
      icon: "youtube",
    },
  ];

  const navigation = [
    { label: "Bosh sahifa", href: "#home" },
    { label: "Kurslar", href: "#courses" },
    { label: "GKS Grant", href: "#gks" },
    { label: "Ko‘p beriladigan savollar", href: "#faq" },
    { label: "Biz bilan bog‘lanish", href: "#contact" },
  ];

  const resources = [
    { label: "Koreyada ta’lim tizimi", href: "#gks" },
    { label: "TOPIK imtihoni", href: "#courses" },
    { label: "Universitetlar", href: "#gks" },
    { label: "Grant dasturlari", href: "#gks" },
    { label: "Aloqa", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer__glow" />

      <div className="footer__main container">
        <div className="footer__brand">
          <a href="#home" className="footer__logo">
            <span className="footer__logo-mark">K</span>
            <span>
              <span className="footer__logo-name">
                Korean <span>Lab</span>
              </span>
              <span className="footer__tagline">
                Koreys tili — orzular sari yo‘l
              </span>
            </span>
          </a>

          <p className="footer__description">
            Koreys tili, ta’lim va kelajak imkoniyatlari uchun siz bilan
            birga. Korean Lab — Koreyada o‘qish va muvaffaqiyat sari
            ishonchli hamkoringiz.
          </p>

          <div className="footer__socials">
            {socialLinks.map(({ label, url, icon }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="footer__social"
              >
                <Icon type={icon} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__column">
          <h3>Sayt bo‘limlari</h3>
          {navigation.map((item) => (
            <a href={item.href} key={item.label}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="footer__column">
          <h3>Foydali havolalar</h3>
          {resources.map((item) => (
            <a href={item.href} key={item.label}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="footer__contact">
          <h3>Biz bilan bog‘laning</h3>

          <a
            href="https://t.me/your_username"
            target="_blank"
            rel="noreferrer"
            className="footer__contact-link"
          >
            <span className="footer__contact-icon">
              <Icon type="telegram" size={17} />
            </span>
            Telegram orqali yozish
          </a>

          <p className="footer__contact-note">
            Savollaringiz bormi? Biz bilan bog‘laning — sizga yordam
            berishdan mamnunmiz.
          </p>

          <a href="#contact" className="footer__cta">
            Bog‘lanish <Icon type="arrow" size={18} />
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>
            © {new Date().getFullYear()}{" "}
            <span>Korean Lab.</span> Barcha huquqlar himoyalangan.
          </p>

          <p className="footer__motto">
            KOREYADA TA’LIM <span>—</span> YANGI IMKONIYATLAR
          </p>

          <button
            type="button"
            className="footer__top"
            onClick={scrollToTop}
            aria-label="Sahifa boshiga qaytish"
          >
            <Icon type="up" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
