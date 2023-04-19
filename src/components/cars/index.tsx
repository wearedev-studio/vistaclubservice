// Import Engine
import { modalCheckPriceAutoUpdate, modalCheckPriceAutoTitleUpdate } from "@/pullstate";
// Import Additional Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import imagePlaceholder from "@/public/images/placeholder.png";

// Import Types
import { AnyCarChoiceSection, Car } from "@/types/anyCarChoiceSection";

// Interface For Page Props
interface ComponentProps {
  anyCarChoiceSectionData: AnyCarChoiceSection;
}

// Create Function Component For Cars
const Cars = ({ anyCarChoiceSectionData }: ComponentProps) => {
  
  const handler = (item: Car) => {
    modalCheckPriceAutoTitleUpdate(item.modalTitle);
    modalCheckPriceAutoUpdate(true);
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
                  return (
                    <SwiperSlide key={item.title}>
                      <div onClick={() => handler(item)} style={{ padding: 0 }} className="cards-05-item cards-05-list__item flexible-list__item">
                        <div
                          className="cards-05-item__inner"
                          style={{
                            backgroundImage: `url(${item.image?.url || imagePlaceholder.src})`,
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
