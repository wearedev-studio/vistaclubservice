const Menu = () => {
  return (
    <div className="menu-01 menu-01_align_center page_section_7 section section_container-width_1200">
      <div className="menu-01__inner section__content">
        <ul className="menu-01-list">
          <li className="menu-01-list__item menu-01-item">
            <a className="menu-01-item__link" href="#about">
              О компании
            </a>
          </li>
          <li className="menu-01-list__item menu-01-item">
            <a className="menu-01-item__link" href="#shema">
              Схема работы
            </a>
          </li>
          <li className="menu-01-list__item menu-01-item">
            <a className="menu-01-item__link" href="#otzivy">
              Отзывы
            </a>
          </li>
          <li className="menu-01-list__item menu-01-item">
            <a className="menu-01-item__link" href="http://auc.getauto-dv.ru/" target="_blank">
              Аукционы Online
            </a>
            <ul className="menu-01-item__sub menu-01-item-sub">
              <li className="menu-01-item-sub__item">
                <a className="menu-01-item-sub__link" href="http://auc.getauto-dv.ru/" target="_blank">
                  Аукционы в режиме реального времени
                </a>
              </li>
              <li className="menu-01-item-sub__item">
                <a className="menu-01-item-sub__link" href="https://www.tks.ru/auto/calc/" target="_blank">
                  Калькулятор стоимости авто
                </a>
              </li>
              <li className="menu-01-item-sub__item">
                <a className="menu-01-item-sub__link" href="http://auc.getauto-dv.ru/" target="_blank">
                  Каталог автомобилей
                </a>
              </li>
              <li className="menu-01-item-sub__item">
                <a className="menu-01-item-sub__link" href="http://auc.getauto-dv.ru/st?classic" target="_blank">
                  Статистика продаж Online
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-01-list__item menu-01-item">
            <a className="menu-01-item__link" href="https://instagram.com/get_auto_dv" target="_blank">
              Мы в соц. сетях
            </a>
            <ul className="menu-01-item__sub menu-01-item-sub">
              <li className="menu-01-item-sub__item">
                <a className="menu-01-item-sub__link" href="https://instagram.com/get_auto_dv" target="_blank">
                  Instagram
                </a>
              </li>
              <li className="menu-01-item-sub__item">
                <a className="menu-01-item-sub__link" href="https://www.youtube.com/@getauto2684/videos">
                  YouTube
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-01-list__item menu-01-item">
            <a className="menu-01-item__link" href="#contacts">
              Контакты
            </a>
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
              <a className="page-section-mobile-nav__link" href="#about" style={{ fontSize: 15 }}>
                О компании
              </a>
            </li>
            <li className="page-section-mobile-nav__item">
              <a className="page-section-mobile-nav__link" href="#shema" style={{ fontSize: 15 }}>
                Схема работы
              </a>
            </li>
            <li className="page-section-mobile-nav__item">
              <a className="page-section-mobile-nav__link" href="#otzivy" style={{ fontSize: 15 }}>
                Отзывы
              </a>
            </li>
            <li className="page-section-mobile-nav__item">
              <a
                className="page-section-mobile-nav__link page-section-mobile-nav__link_has-sub"
                href=""
                ng-class="{'page-section-mobile-nav__link_active' : mobileNav.activeSubIndex === 3}"
                ng-click="mobileNav.toggleSub(3)"
                style={{ fontSize: 15 }}
              >
                Аукционы Online
              </a>
            </li>
            <li className="page-section-mobile-nav__item">
              <a
                className="page-section-mobile-nav__link page-section-mobile-nav__link_has-sub"
                href=""
                ng-class="{'page-section-mobile-nav__link_active' : mobileNav.activeSubIndex === 4}"
                ng-click="mobileNav.toggleSub(4)"
                style={{ fontSize: 15 }}
              >
                Мы в соц. сетях
              </a>
            </li>
            <li className="page-section-mobile-nav__item">
              <a className="page-section-mobile-nav__link" href="#contacts" style={{ fontSize: 15 }}>
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="page-section-mobile-nav__subs">
          <div className="page-section-mobile-nav__sub" ng-cloak="" ng-if="mobileNav.activeSubIndex === 3">
            <ul className="page-section-mobile-nav__sub-inner">
              <li className="page-section-mobile-nav__sub-main-item">
                <a className="page-section-mobile-nav__sub-main-link" href="http://auc.getauto-dv.ru/" target="_blank" style={{ fontSize: 15 }}>
                  Аукционы Online
                </a>
              </li>
              <li className="page-section-mobile-nav__sub-item">
                <a className="page-section-mobile-nav__sub-link" href="http://auc.getauto-dv.ru/" target="_blank" style={{ fontSize: 15 }}>
                  Аукционы в режиме реального времени
                </a>
              </li>
              <li className="page-section-mobile-nav__sub-item">
                <a className="page-section-mobile-nav__sub-link" href="https://www.tks.ru/auto/calc/" target="_blank" style={{ fontSize: 15 }}>
                  Калькулятор стоимости авто
                </a>
              </li>
              <li className="page-section-mobile-nav__sub-item">
                <a className="page-section-mobile-nav__sub-link" href="http://auc.getauto-dv.ru/" target="_blank" style={{ fontSize: 15 }}>
                  Каталог автомобилей
                </a>
              </li>
              <li className="page-section-mobile-nav__sub-item">
                <a className="page-section-mobile-nav__sub-link" href="http://auc.getauto-dv.ru/st?classic" target="_blank" style={{ fontSize: 15 }}>
                  Статистика продаж Online
                </a>
              </li>
            </ul>
          </div>
          <div className="page-section-mobile-nav__sub" ng-cloak="" ng-if="mobileNav.activeSubIndex === 4">
            <ul className="page-section-mobile-nav__sub-inner">
              <li className="page-section-mobile-nav__sub-main-item">
                <a className="page-section-mobile-nav__sub-main-link" href="https://instagram.com/get_auto_dv" target="_blank" style={{ fontSize: 15 }}>
                  Мы в соц. сетях
                </a>
              </li>
              <li className="page-section-mobile-nav__sub-item">
                <a className="page-section-mobile-nav__sub-link" href="https://instagram.com/get_auto_dv" target="_blank" style={{ fontSize: 15 }}>
                  Instagram
                </a>
              </li>
              <li className="page-section-mobile-nav__sub-item">
                <a className="page-section-mobile-nav__sub-link" href="https://www.youtube.com/@getauto2684/videos" style={{ fontSize: 15 }}>
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Menu };
