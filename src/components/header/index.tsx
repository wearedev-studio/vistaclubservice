import Link from "next/link";

const Header = () => {
  return (
    <div className="page-header-02 page-header-02_view_01 page_section_2 section section_container-width_1200">
      <div className="page-header-02__inner section__content">
        <div className="page-header-02__content page-header-02__content_mobile-vertical-align_top">
          <div className="page-header-02__left">
            <div className="page-header-02__brand">
              <a className="page-header-02__brand-logo" href="">
                <img style={{ width: 125 }} alt="Grad" src="./images/008/786/001/photo_2023_03_28_16_00_45.svg" />
              </a>
            </div>
            <div className="page-header-02__subheader wysiwyg-string">
              <strong>Поставка авто</strong>
              <br />
              <strong>из Японии, Кореи, Китая, ОАЭ</strong>
              <br />
              ООО «НАЗВАНИЕ» © 2016
            </div>
          </div>
          <div className="page-header-02__right">
            <div className="page-header-02__contacts">
              <div className="page-header-02__phonesub wysiwyg-string">
                <strong>Адрес: </strong>
                г.Якутск, окружное шоссе 4км, 14д
                <br />
                Звонок по РФ бесплатный
              </div>
              <div className="page-header-02__phone">
                <a className="bzm-calltracking" href="tel:8 999 999 99 99">
                  8 914 273 50 05
                  <br/>
                  8 914 273 50 04
                </a>
              </div>
              <a className="page-header-02__button button" href="https://wa.me/111" target="_blank">
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
              <a className="bzm-calltracking" href="tel:8 999 999 99 99">
                8 999 999 99 99
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
