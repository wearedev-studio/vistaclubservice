import Link from "next/link";

const Menu = () => {
  return (
    <div className="menu-01 menu-01_align_center page_section_7 section section_container-width_1200">
      <div className="menu-01__inner section__content">
        <ul className="menu-01-list">
          <li className="menu-01-list__item menu-01-item">
            <Link className="menu-01-item__link" href="/#about">
              О компании
            </Link>
          </li>
          <li className="menu-01-list__item menu-01-item">
            <Link className="menu-01-item__link" href="/blog">
              Блог
            </Link>
          </li>
          <li className="menu-01-list__item menu-01-item">
            <Link className="menu-01-item__link" href="/#shema">
              Схема работы
            </Link>
          </li>
          <li className="menu-01-list__item menu-01-item">
            <Link className="menu-01-item__link" href="/#reviews">
              Отзывы
            </Link>
          </li>
          <li className="menu-01-list__item menu-01-item">
            <Link className="menu-01-item__link" href="http://auc.vistaclubservice.ru" target="_blank">
              Аукционы Online
            </Link>
            {/* <ul className="menu-01-item__sub menu-01-item-sub">
              <li className="menu-01-item-sub__item">
                <Link className="menu-01-item-sub__link" href="/" target="_blank">
                  Аукционы в режиме реального времени
                </Link>
              </li>
              <li className="menu-01-item-sub__item">
                <Link className="menu-01-item-sub__link" href="#calculator">
                  Калькулятор стоимости авто
                </Link>
              </li>
              <li className="menu-01-item-sub__item">
                <Link className="menu-01-item-sub__link" href="#cars">
                  Каталог автомобилей
                </Link>
              </li>
              <li className="menu-01-item-sub__item">
                <Link className="menu-01-item-sub__link" href="/" target="_blank">
                  Статистика продаж Online
                </Link>
              </li>
            </ul> */}
          </li>
          <li className="menu-01-list__item menu-01-item">
            <Link className="menu-01-item__link" href="/" target="_blank">
              Мы в соц. сетях
            </Link>
            <ul className="menu-01-item__sub menu-01-item-sub">
              <li className="menu-01-item-sub__item">
                <Link className="menu-01-item-sub__link" href="/#contacts">
                  Instagram
                </Link>
              </li>
              <li className="menu-01-item-sub__item">
                <Link className="menu-01-item-sub__link" href="#blog">
                  YouTube
                </Link>
              </li>
            </ul>
          </li>
          <li className="menu-01-list__item menu-01-item">
            <Link className="menu-01-item__link" href="/#contacts">
              Контакты
            </Link>
          </li>
        </ul>
      </div>
      <div className="page-section-mobile-nav" mobile-nav="" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="page-section-mobile-nav__left-gradient" ng-cloak="">
          <svg height="100%" preserveAspectRatio="none" viewBox="0 0 1 1" width="100%">
            <linearGradient id="page-section-mobile-nav-left-gradient_7" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset={0} stopColor="#f5f5f5" stopOpacity={1} />
              <stop offset="15%" stopColor="#f5f5f5" stopOpacity={1} />
              <stop offset={1} stopColor="#f5f5f5" stopOpacity={0} />
            </linearGradient>
            <rect fill="url(#page-section-mobile-nav-left-gradient_7)" height={1} width={1} x={0} y={0} />
          </svg>
        </div>
        <div className="page-section-mobile-nav__right-gradient" ng-cloak="">
          <svg height="100%" preserveAspectRatio="none" viewBox="0 0 1 1" width="100%">
            <linearGradient id="page-section-mobile-nav-right-gradient_7" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset={0} stopColor="#f5f5f5" stopOpacity={0} />
              <stop offset="85%" stopColor="#f5f5f5" stopOpacity={1} />
              <stop offset={1} stopColor="#f5f5f5" stopOpacity={1} />
            </linearGradient>
            <rect fill="url(#page-section-mobile-nav-right-gradient_7)" height={1} width={1} x={0} y={0} />
          </svg>
        </div>
        <button className="page-section-mobile-nav__scroll-btn page-section-mobile-nav__scroll-btn_left" ng-cloak="" type="button">
          <svg height={16} viewBox="0 0 192 320" width={10}>
            <title>arrow-left</title>
            <path d="M41.5 160L192 300.7 171.3 320 0 160 171.3 0 192 19.4 41.5 160" />
          </svg>
        </button>
        <button className="page-section-mobile-nav__scroll-btn page-section-mobile-nav__scroll-btn_right" ng-cloak="" type="button">
          <svg height={16} viewBox="0 0 192 320" width={10}>
            <title>arrow-right</title>
            <path d="M0 19.4L20.7 0 192 160 20.7 320 0 300.7 150.5 160 0 19.4" />
          </svg>
        </button>
        <div className="page-section-mobile-nav__list">
          <ul className="page-section-mobile-nav__list-inner">
            <li className="page-section-mobile-nav__item">
              <Link className="page-section-mobile-nav__link" href="/" style={{ fontSize: 15 }}>
                Главная
              </Link>
            </li>
            <li className="page-section-mobile-nav__item">
              <Link className="page-section-mobile-nav__link" href="/blog" style={{ fontSize: 15 }}>
                Блог
              </Link>
            </li>
            <li className="page-section-mobile-nav__item">
              <Link className="page-section-mobile-nav__link" href="/#about" style={{ fontSize: 15 }}>
                О компании
              </Link>
            </li>
            <li className="page-section-mobile-nav__item">
              <Link className="page-section-mobile-nav__link" href="/#shema" style={{ fontSize: 15 }}>
                Схема работы
              </Link>
            </li>
            <li className="page-section-mobile-nav__item">
              <Link className="page-section-mobile-nav__link" href="/#reviews" style={{ fontSize: 15 }}>
                Отзывы
              </Link>
            </li>
            <li className="page-section-mobile-nav__item">
              <Link className="page-section-mobile-nav__link" href="http://auc.vistaclubservice.ru" style={{ fontSize: 15 }}>
              Аукционы Online
              </Link>
            </li>
            <li className="page-section-mobile-nav__item">
              <Link className="page-section-mobile-nav__link" href="http://auc.vistaclubservice.ru" style={{ fontSize: 15 }}>
              Мы в соц. сетях
              </Link>
            </li>
            <li className="page-section-mobile-nav__item">
              <Link className="page-section-mobile-nav__link" href="/#contacts" style={{ fontSize: 15 }}>
                Контакты
              </Link>
            </li>
          </ul>
        </div>
        <div className="page-section-mobile-nav__subs">
          <div className="page-section-mobile-nav__sub" ng-cloak="" ng-if="mobileNav.activeSubIndex === 3">
            <ul className="page-section-mobile-nav__sub-inner">
              <li className="page-section-mobile-nav__sub-main-item">
                <Link className="page-section-mobile-nav__sub-main-link" href="http://auc.vistaclubservice.ru" target="_blank" style={{ fontSize: 15 }}>
                  Аукционы Online
                </Link>
              </li>
              <li className="page-section-mobile-nav__sub-item">
                <Link className="page-section-mobile-nav__sub-link" href="http://auc.vistaclubservice.ru" target="_blank" style={{ fontSize: 15 }}>
                  Аукционы в режиме реального времени
                </Link>
              </li>
              <li className="page-section-mobile-nav__sub-item">
                <Link className="page-section-mobile-nav__sub-link" href="http://auc.vistaclubservice.ru" target="_blank" style={{ fontSize: 15 }}>
                  Каталог автомобилей
                </Link>
              </li>
              <li className="page-section-mobile-nav__sub-item">
                <Link className="page-section-mobile-nav__sub-link" href="http://auc.vistaclubservice.ru/st?classic" target="_blank" style={{ fontSize: 15 }}>
                  Статистика продаж Online
                </Link>
              </li>
            </ul>
          </div>
          <div className="page-section-mobile-nav__sub" ng-cloak="" ng-if="mobileNav.activeSubIndex === 4">
            <ul className="page-section-mobile-nav__sub-inner">
              <li className="page-section-mobile-nav__sub-main-item">
                <Link className="page-section-mobile-nav__sub-main-link" href="/" target="_blank" style={{ fontSize: 15 }}>
                  Мы в соц. сетях
                </Link>
              </li>
              <li className="page-section-mobile-nav__sub-item">
                <Link className="page-section-mobile-nav__sub-link" href="https://instagram.com/vistaclubservice" target="_blank" style={{ fontSize: 15 }}>
                  Instagram
                </Link>
              </li>
              <li className="page-section-mobile-nav__sub-item">
                <Link className="page-section-mobile-nav__sub-link" href="https://youtube.com/@vistaclubservice2972" style={{ fontSize: 15 }}>
                  YouTube
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Menu };
