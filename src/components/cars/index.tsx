import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination} from "swiper";

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
      <a name="cars"/>
      <div className="cards-05__inner section__content">
        <div className="section__header wysiwyg-string">
          <h2>Любые автомобили на ваш выбор!</h2>
        </div>
        <div className="section__subheader wysiwyg-string">Мы бесплатно&nbsp;поможем подобрать авто под ваш бюджет и характеристики!</div>
        <div className="cards-05-carousel">
          <div className="cards-05-carousel__list-container">
            <div className="cards-05-carousel__list cards-05-list flexible-list_mobile-columns_1 page_section_15__list">
              <Swiper
              modules={[Pagination]}
                speed={1000}
                loop={false}
                autoplay={{
                  delay: 7000,
                }}
                slidesPerView={1.3}
                spaceBetween={10}
                pagination={{
                  el: '.page_section_15_swiper_pagination',
                  type: 'bullets',
                  clickable: true
                }}
                breakpoints={{
                  576: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                }}
              >
                {data.map((item) => {
                  return (
                    <SwiperSlide key={item.name}>
                      <div style={{ padding: 0 }} className="cards-05-item cards-05-list__item flexible-list__item">
                        <a
                          className="cards-05-item__inner"
                          href="#poshlina"
                          style={{
                            backgroundImage: `url(${item.img})`,
                          }}
                        >
                          <div className="cards-05-item__content">
                            <div className="cards-05-item__title">
                              <h3>{item.name}</h3>
                            </div>
                            <div className="cards-05-item__sub wysiwyg-string">
                              <u>{item.price}</u>
                            </div>
                          </div>
                        </a>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
          <div className="page_section_15_swiper_pagination" />
        </div>
      </div>
    </div>
  );
};
export { Cars };
