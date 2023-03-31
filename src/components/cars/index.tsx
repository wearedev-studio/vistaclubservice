import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { modalCheckPricePoshlinaUpdate } from "@/pullstate";

interface CarProps {
  name: string;
  // img: string;
  price: string;
  url: string;
}
const Cars = () => {
  const handler = () => modalCheckPricePoshlinaUpdate(true);
  const data: CarProps[] = [
    {
      name: "Авто под полную пошлину",
      price: "от 500 000 руб.",
      url: "./images/006/040/889/6040889/610x610crop/getauto1_mini.jpg",
    },
    {
      name: "Конструкторы и Распилы",
      price: "от 250 000 руб.",
      url: "./images/006/040/890/6040890/610x610crop/getauto2_mini.jpg",
    },
    {
      name: "Грузовики",
      price: "от 700 000 руб.",
      url: "./images/006/040/891/6040891/610x610crop/getauto3_mini.jpg",
    },
    {
      name: "Спецтехника",
      price: "от 400 000 руб.",
      url: "./images/006/040/892/6040892/610x610crop/getauto4_mini.jpg",
    },
  ];
  return (
    <div className="auto-cards cards-05 page_section_15 section section_container-width_1200">
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
                  el: ".page_section_15_swiper_pagination",
                  type: "bullets",
                  clickable: true,
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
                        <div
                          className="cards-05-item__inner"
                          style={{
                            backgroundImage: `url(${item.url})`,
                          }}
                        ></div>
                        <div className="auto-cards__content">
                          <div className="cards-05-item__title">
                            <h3>{item.name}</h3>
                          </div>
                          <div className="cards-05-item__sub wysiwyg-string">
                            <u>{item.price}</u>
                          </div>
                        </div>
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
