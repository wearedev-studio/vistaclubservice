// Import Engine
import { modalCheckPriceAutoUpdate, modalCheckPriceAutoTitleUpdate } from "@/pullstate";
// Import Additional Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Types
import { AnyCarChoiceSection } from "@/types/anyCarChoiceSection";

// Interface For Page Props
interface ComponentProps {
  anyCarChoiceSectionData: AnyCarChoiceSection;
}

enum CarType {
  AUTO = "auto",
  CONSTRUCTOR = "constructor",
  GRUZOVIK = "gruzovik",
  SPEZ = "spez",
}

// Create Function Component For Cars
const Cars = ({ anyCarChoiceSectionData }: ComponentProps) => {
  const handler = (type: string) => {
    modalCheckPriceAutoUpdate(true);
    if (type === CarType.AUTO) {
      modalCheckPriceAutoTitleUpdate("Получите оценку стоимости автомобиля под полную пошлину из Японии!");
    }
    if (type === CarType.CONSTRUCTOR) {
      modalCheckPriceAutoTitleUpdate("Получите оценку стоимости распила или конструктора из Японии!");
    }
    if (type === CarType.GRUZOVIK) {
      modalCheckPriceAutoTitleUpdate("Получите оценку стоимости грузовика из Японии!");
    }
    if (type === CarType.SPEZ) {
      modalCheckPriceAutoTitleUpdate("Получите оценку стоимости спецтехники из Японии!");
    }
  };

  return (
    <div className="auto-cards cards-05 page_section_15 section section_container-width_1200">
      <div className="cards-05__inner section__content">
        <div className="section__header wysiwyg-string">
          <h2>{anyCarChoiceSectionData.title}</h2>
        </div>
        <div className="section__subheader wysiwyg-string">{anyCarChoiceSectionData.description}</div>
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
                {anyCarChoiceSectionData.cars.map((item) => {
                  let type = CarType.AUTO;
                  if (item.title.toLowerCase().includes("авто под полную")) type = CarType.AUTO;
                  if (item.title.toLowerCase().includes("конструкторы")) type = CarType.CONSTRUCTOR;
                  if (item.title.toLowerCase().includes("грузовик")) type = CarType.GRUZOVIK;
                  if (item.title.toLowerCase().includes("спецтехника")) type = CarType.SPEZ;
                  return (
                    <SwiperSlide key={item.title}>
                      <div onClick={() => handler(type)} style={{ padding: 0 }} className="cards-05-item cards-05-list__item flexible-list__item">
                        <div
                          className="cards-05-item__inner"
                          style={{
                            backgroundImage: `url(${item.image.url})`,
                          }}
                        ></div>
                        <div className="auto-cards__content">
                          <div className="cards-05-item__title">
                            <h3>{item.title}</h3>
                          </div>
                          <div className="cards-05-item__sub wysiwyg-string">
                            <u>{item.description}</u>
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

// Export Functional Components
export { Cars };
