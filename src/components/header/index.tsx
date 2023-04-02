import Link from "next/link";
import Image from "next/image";
import { Header as HeaderProps } from "@/types/header";
import { convertText } from "@/helpers/convertText";

interface ComponentProps {
  headerData: HeaderProps;
}

const Header = ({ headerData }: ComponentProps) => {
  const phone1 = headerData.phone1;
  const phone2 = headerData.phone2;

  const parsePhone1 = convertText(headerData.phone1);
  const parsePhone2 = convertText(headerData.phone2);
  const parseWhatsapp = convertText(headerData.whatsapp);
  return (
    <div className="page-header-02 page-header-02_view_01 page_section_2 section section_container-width_1200">
      <div className="page-header-02__inner section__content">
        <div className="page-header-02__content page-header-02__content_mobile-vertical-align_top">
          <div className="page-header-02__left">
            <div className="page-header-02__brand">
              <Link className="page-header-02__brand-logo" href="/">
                {/* Такие изображения (пути до изображений) нужно импортить желательно через import. Пример - footer. Чтобы пути не ломались в внутренних страницах */}
                <Image src="/images/008/786/001/photo_2023-03-28_16-00-45.jpg" alt="Grad" width={125} height={125} />
              </Link>
            </div>
            <div dangerouslySetInnerHTML={{__html: `${headerData.description.html}`}} className="page-header-02__subheader wysiwyg-string"></div>
          </div>
          <div className="page-header-02__right">
            <div className="page-header-02__contacts">
              <div dangerouslySetInnerHTML={{__html: `${headerData.address.html}`}} className="page-header-02__phonesub wysiwyg-string"></div>
              <div className="page-header-02__phone">
                <a className="bzm-calltracking" href={`tel:${parsePhone1}`}>
                  {phone1}
                </a>
                <br />
                <a className="bzm-calltracking" href={`tel:${parsePhone2}`}>
                  {phone2}
                </a>
              </div>
              <a className="page-header-02__button button" href={`https://wa.me/${parseWhatsapp}`} target="_blank">
                <div className="button__inner">
                  <span className="button__text">Написать в WhatsApp</span>
                </div>
              </a>
              <button className="page-header-02-mobile-contacts-btn">
                <svg>
                  <use xlinkHref="/assets/sites/template1/icons.svg#icon-phone"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="header-mobile-contacts-container">
        <div className="header-mobile-contacts">
          <div className="header-mobile-contacts__phone">
            <div className="header-mobile-contacts__phone-info">
              <strong>Адрес</strong>
              <br />
              Звонок по РФ бесплатный
            </div>
            <div className="header-mobile-contacts__phone-num">
              <a className="bzm-calltracking" href="tel:8 914 273 50 05; 8 914 273 50 04">
                8 914 273 50 05
                <br />8 914 273 50 04
              </a>
            </div>
          </div>
          <div className="header-mobile-contacts__phone">
            <a className="page-header-02__button button" href="https://wa.me/111" target="_blank">
              <div className="button__inner">
                <span className="button__text">Написать в WhatsApp</span>
              </div>
            </a>
          </div>
          <button className="header-mobile-contacts__close-btn">
            <svg>
              <use xlinkHref="/assets/sites/template1/icons.svg#icon-cross"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export { Header };
