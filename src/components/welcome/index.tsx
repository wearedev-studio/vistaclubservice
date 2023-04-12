import { modalCheckPriceUpdate, modalQuestionManagerUpdate } from "@/pullstate";
import { WelcomeSection } from "@/types/welcomeSections";

interface ComponentProps {
  welcomeSectionData: WelcomeSection;
}

const Welcome = ({ welcomeSectionData }: ComponentProps) => (
  <div className="page_section_9 promo-05 section section_container-width_1200">
    <div className="section__background-image-container">
      <div
        className="section__background-image"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(./images/008/photo_2023-03-28_16-01-53.jpg)",
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
    <div className="section__background-mask" />
    <div className="promo-05__inner section__content">
      <div className="promo-05-content">
        <div dangerouslySetInnerHTML={{ __html: `${welcomeSectionData.title.html}` }} className="promo-05-content__title wysiwyg-string"></div>
        <div dangerouslySetInnerHTML={{ __html: `${welcomeSectionData.features.html}` }} className="promo-05-content__text wysiwyg-string"></div>
        <div className="promo-05-content__btns-container">
          <button onClick={() => modalCheckPriceUpdate(true)} className="promo-05-content__btn-1 button button_style_1 button_visual-css button_has-shadow-hover">
            <div className="button__inner">
              <span className="button__text">Узнать стоимость</span>
            </div>
          </button>
          <button onClick={() => modalQuestionManagerUpdate(true)} className="promo-05-content__btn-2 button button_style_2 button_visual-css button_has-shadow-hover">
            <div className="button__inner">
              <span className="button__text">Задать вопрос менеджеру</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export { Welcome };
