import { WhyWeSection } from "@/types/whyWeSection";

interface ComponentProps {
  whyWeSectionData: WhyWeSection;
}

const Reason = ({ whyWeSectionData }: ComponentProps) => {
  return (
    <div id="about" className="page-section">
      <div className="animated-section page_section_19 promo-04 section section_container-width_1200">
        <div className="promo-04__inner section__content">
          <div className="section__header wysiwyg-string">
            <h2>{whyWeSectionData.title}</h2>
          </div>

          <div className="flexible-list flexible-list_columns_4 flexible-list_mobile-columns_1 promo-04-list promo-04__list">
            {whyWeSectionData.features.map((item) => {
              return (
                <div key={item.id} className="promo-04-item promo-04-list__item flexible-list__item">
                  <div className="promo-04-item__icon-wrapper" style={{ width: "80px" }}>
                    <div className="promo-04-item__icon-container">
                      <img className="promo-04-item__icon" width={item.image.width} height={item.image.height} alt={`Иконка для преимущества ${item.title}`} src={item.image.url} />
                    </div>
                  </div>
                  <div className="promo-04-item__title wysiwyg-string">
                    <div>{item.title}</div>
                  </div>
                  <div className="promo-04-item__text wysiwyg-string">{item.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export { Reason };
