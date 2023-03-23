import { Splide, SplideSlide } from "@splidejs/react-splide";
interface CarProps {
  name: string;
  img: string;
  price: string;
  url: string;
}
const Cars = () => {
  const data: CarProps[] = [
    {
      img: "./images/006/040/885/6040885/600x950crop/getauto_1.jpg",
      name: "Авто под полную пошлину",
      price: "от 500 000 руб.",
      url: "",
    },
    {
      img: "./images/006/040/886/6040886/600x950crop/getauto_2.jpg",
      name: "Конструкторы и Распилы",
      price: "от 250 000 руб.",
      url: "",
    },
    {
      img: "./images/006/040/887/6040887/600x950crop/getauto_3.jpg",
      name: "Грузовики",
      price: "от 700 000 руб.",
      url: "",
    },
    {
      img: "./images/006/040/888/6040888/600x950crop/getauto_4.jpg",
      name: "Спецтехника",
      price: "от 400 000 руб.",
      url: "",
    },
  ];
  return (
    <div className="cards-05 page_section_15 section section_container-width_1200">
      <div className="cards-05__inner section__content">
        <div className="section__header wysiwyg-string">
          <h2>Любые автомобили на ваш выбор!</h2>
        </div>
        <div className="section__subheader wysiwyg-string">Мы бесплатно&nbsp;поможем подобрать авто под ваш бюджет и характеристики!</div>
        <div className="cards-05-carousel">
          <div className="cards-05-carousel__list-container">
            <Splide
              className="cards-05-carousel__list cards-05-list flexible-list flexible-list_columns_4 flexible-list_mobile-columns_1 page_section_15__list"
              options={{ rewind: true }}
              aria-label="React Splide Example"
            >
              <SplideSlide className="cards-05-item cards-05-list__item flexible-list__item">
                <a
                  className="cards-05-item__inner"
                  href="#poshlina"
                  style={{
                    backgroundImage: "url(./images/006/040/885/6040885/600x950crop/getauto_1.jpg)",
                  }}
                >
                  <div className="cards-05-item__content">
                    <div className="cards-05-item__title">
                      <h3>Авто под полную пошлину</h3>
                    </div>
                    <div className="cards-05-item__sub wysiwyg-string">
                      <u>от 500 000 руб.</u>
                    </div>
                  </div>
                </a>
              </SplideSlide>
              <SplideSlide className="cards-05-item cards-05-list__item flexible-list__item">
                <a
                  className="cards-05-item__inner"
                  href="#poshlina"
                  style={{
                    backgroundImage: "url(./images/006/040/885/6040885/600x950crop/getauto_1.jpg)",
                  }}
                >
                  <div className="cards-05-item__content">
                    <div className="cards-05-item__title">
                      <h3>Авто под полную пошлину</h3>
                    </div>
                    <div className="cards-05-item__sub wysiwyg-string">
                      <u>от 500 000 руб.</u>
                    </div>
                  </div>
                </a>
              </SplideSlide>
              <SplideSlide className="cards-05-item cards-05-list__item flexible-list__item">
                <a
                  className="cards-05-item__inner"
                  href="#poshlina"
                  style={{
                    backgroundImage: "url(./images/006/040/885/6040885/600x950crop/getauto_1.jpg)",
                  }}
                >
                  <div className="cards-05-item__content">
                    <div className="cards-05-item__title">
                      <h3>Авто под полную пошлину</h3>
                    </div>
                    <div className="cards-05-item__sub wysiwyg-string">
                      <u>от 500 000 руб.</u>
                    </div>
                  </div>
                </a>
              </SplideSlide>
            </Splide>

            <button className="cards-05-carousel__nav-btn cards-05-carousel__nav-btn_prev page_section_15__prev-btn" type="button">
              <svg>
                <use xlinkHref="/assets/sites/template1/icons.svg#icon-left-half-arrow" />
              </svg>
            </button>
            <button className="cards-05-carousel__nav-btn cards-05-carousel__nav-btn_next page_section_15__next-btn" type="button">
              <svg>
                <use xlinkHref="/assets/sites/template1/icons.svg#icon-right-half-arrow" />
              </svg>
            </button>
          </div>
          <div className="cards-05-carousel__pagination cards-05-pagination page_section_15__pagination" />
        </div>
      </div>
    </div>
  );
};
export { Cars };
