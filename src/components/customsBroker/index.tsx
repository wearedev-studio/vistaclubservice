import { modalQuestionManagerUpdate } from "@/pullstate";
import { CustomBrokerSection } from "@/types/customBrokerSection";

interface ComponentProps {
  customBrokerSectionData: CustomBrokerSection;
}

const CustomsBroker = ({ customBrokerSectionData }: ComponentProps) => {
  return (
    <div className="page_section_22 promo-05 section section_container-width_1200">
      <div className="section__background-image-container">
        {/* TODO: добавить другое изображение */}
        {/* <div className="section__background-image" style={{ backgroundImage: "url(./images/006/040/093/6040093/1920xnoinc/kupit-avtomobil-iz-yaponii.jpg)" }} lazy-background=""></div> */}
      </div>
      <div className="promo-05__inner section__content">
        <div className="promo-05-content">
          <div className="promo-05-content__title wysiwyg-string">
            <div>
             <h2>{customBrokerSectionData.title}</h2>
            </div>
          </div>
           <div dangerouslySetInnerHTML={{ __html: `${customBrokerSectionData.guarantees.html}` }} className="promo-05-content__title wysiwyg-string"></div>
          <div className="promo-05-content__btns-container">
            <button onClick={() => modalQuestionManagerUpdate(true)} className="promo-05-content__btn-1 button button_style_1 button_visual-css button_has-shadow-hover">
              <div className="button__inner">
                <span className="button__text">Задать вопрос менеджеру</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export { CustomsBroker };
