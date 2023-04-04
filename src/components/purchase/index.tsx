import { modalQuestionManagerUpdate } from "@/pullstate";
import { CarInfo } from "./carInfo";
import imagePlaceholder from "../../../public/images/placeholder.png";
import { PurchasesCustomer } from "@/types/purchasesCustomerSections";

interface ComponentProps {
  purchasesCustomers: PurchasesCustomer;
}

const Purchase: React.FC<ComponentProps> = ({ purchasesCustomers }) => {
  return (
    <>
      <div className="purchases-customer cards-06 page_section_45 section section_container-width_1200">
        <div className="cards-06__inner section__content">
          <div className="section__header section__header_align_center wysiwyg-string">
            <h2>{purchasesCustomers.title}</h2>
          </div>
          <div className="section__subheader section__subheader_align_center wysiwyg-string">{purchasesCustomers.subtitle}</div>
          <div
            className="cards-06-list flexible-list flexible-list_columns_4 flexible-list_justify-content_center flexible-list_mobile-columns_1"
            same-height-elements='{itemsSelector: ".cards-06-item", elementSelector: ".cards-06-item__title_with-align"}'
          >
            {purchasesCustomers.purchases.map((item) => {
              return <CarInfo key={item.id} imgUrl={!item.image ? imagePlaceholder.src : item.image.url} title={item.title} content={item.content.html} />;
            })}
          </div>
        </div>
      </div>
      <div className="animated-section button-02 page_section_48 section section_container-width_1200">
        <div className="button-02__inner section__content">
          <div className="button-02__content button-02__content_center">
            <button onClick={() => modalQuestionManagerUpdate(true)} className="button-02__item button-02__item_1 button button_style_1 button_visual-css button_has-shadow-hover">
              <div className="button__inner">
                <span className="button__text">Задать вопрос менеджеру</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export { Purchase };
