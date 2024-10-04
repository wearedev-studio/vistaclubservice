import { modalQuestionManagerUpdate } from "@/pullstate";
import { CustomBroker } from "@/types/customsBrokersSections";

interface ComponentProps {
  customBroker: CustomBroker;
}

const CustomsBroker = ({ customBroker }: ComponentProps) => {
  return (
    <div className="page_section_22 promo-05 section section_container-width_1200">
      <div className="section__background-image-container">
        {/* TODO: добавить другое изображение */}
        {/* <div className="section__background-image" style={{ backgroundImage: "url(./images/006/040/093/6040093/1920xnoinc/kupit-avtomobil-iz-yaponii.jpg)" }} lazy-background=""></div> */}
      </div>
      <div className="promo-05__inner section__content">
        <div className="promo-05-content">
          <div className="promo-05-content__title wysiwyg-string" dangerouslySetInnerHTML={{ __html: `${customBroker.title.html}` }}></div>
          <div className="promo-05-content__text wysiwyg-string" dangerouslySetInnerHTML={{ __html: `${customBroker.guarantees.html}` }} />
          <div className="promo-05-content__btns-container">
            <a href="https://wa.me/79142735005" target="_blank" rel="noopener noreferrer" className="promo-05-content__btn-1 button button_style_1 button_visual-css button_has-shadow-hover">
              <div className="button__inner">
                <span className="button__text">Задать вопрос менеджеру</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export { CustomsBroker };
