import { modalCallbackUpdate } from "@/pullstate";
import Link from "next/link";
import bgImage from "../../../public/images/005/143/700/5143700/1920xnoinc/dostavka-avtomobilej-iz-yaponii.jpg";

const Footer = () => {
  return (
    <footer className="footer animated-section page_section_75 section section_container-width_1000 text-36">
      <div className="section__background-image-container">
        <img loading="lazy" className="footer__bg-image" src={bgImage.src} alt="Задний фон" />
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
            <Link href="http://auc.vistaclubservice.ru" target="_blank">
              Online-аукционы
            </Link>
            <br />
            <Link href="http://auc.vistaclubservice.ru">Каталог автомобилей</Link>
            <br />
            <Link href="http://auc.vistaclubservice.ru/st?classic" target="_blank">
              Статистика продаж Online
            </Link>
            <Link href="/#reviews">
              <br />
            </Link>
            <Link href="/#reviews">Отзывы</Link>
            <br />
            <Link href="/" target="_blank">
              Instagram
            </Link>
            <Link href="/#contacts">
              <br />
            </Link>
            <Link href="/#contacts">Контакты</Link>
            <br />
            <u>
              <button style={{backgroundColor: 'transparent', outline: 0, border: 0}} onClick={()=>{modalCallbackUpdate(true)}}>ЗАКАЗАТЬ ЗВОНОК</button>
            </u>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
