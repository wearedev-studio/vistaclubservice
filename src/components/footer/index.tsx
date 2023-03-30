import Link from "next/link";

const Footer = () => {
  return (
    <div className="animated-section page_section_75 section section_container-width_1000 text-36">
      <div className="section__background-image-container">
        <div
          className="section__background-image"
          style={{
            backgroundImage: "url(./images/005/143/700/5143700/1920xnoinc/dostavka-avtomobilej-iz-yaponii.jpg)",
          }}
        />
      </div>
      <div className="section__background-mask" />
      <div className="text-36__inner section__content">
        <div className="text-36__title wysiwyg-string">
          <div>
            <Link href="/">Главная</Link>
            <br />
            <Link href="/#about">О нас</Link>
            <br />
            <Link href="/#shema">Схема работы</Link>
            <br />
            <Link href="/" target="_blank">
              Online-аукционы
            </Link>
            <br />
            <Link href="#calculator">Калькулятор стоимости авто</Link>
            <br />
            <Link href="#cars">Каталог автомобилей</Link>
            <br />
            <Link href="/" target="_blank">
              Статистика продаж Online
            </Link>
            <Link href="#otzivy">
              <br />
            </Link>
            <Link href="#review">Отзывы</Link>
            <br />
            <Link href="/" target="_blank">
              Instagram
            </Link>
            <Link href="#contacts">
              <br />
            </Link>
            <Link href="#contacts">Контакты</Link>
            <br />
            <u>
              <Link href="#zvonok">ЗАКАЗАТЬ ЗВОНОК</Link>
            </u>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Footer };
